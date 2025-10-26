import 'dart:convert';

import 'package:bank_data/filter.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'dart:async';
import 'package:flutter/foundation.dart';
import 'dart:html' as html;

void main() {
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return const MaterialApp(home: HomePage());
  }
}

class HomePage extends StatefulWidget {
  const HomePage({super.key});

  @override
  State<HomePage> createState() => _HomePageState();
}

class _HomePageState extends State<HomePage> {
  List data = [];
  List searchData = [];
  bool loading = true;
  Timer? _debounce;
  int max = 50;

  @override
  void initState() {
    super.initState();
    load();
  }

  @override
  void dispose() {
    _debounce?.cancel();
    super.dispose();
  }

  load() async {
    final assets = [
      'assets/clean1.json',
      'assets/clean2.json',
      'assets/clean3.json',
      'assets/clean4.json',
    ];
    final strings = await Future.wait(
      assets.map((p) => rootBundle.loadString(p)),
    );

    final parsedLists = await Future.wait(
      strings.map((s) => compute(jsonDecode, s)),
    );

    data = parsedLists.expand((e) => e).toList();

    // var value1 = await rootBundle.loadString('assets/clean1.json');
    // var value2 = await rootBundle.loadString('assets/clean2.json');
    // var value3 = await rootBundle.loadString('assets/clean3.json');
    // var value4 = await rootBundle.loadString('assets/clean4.json');
    // data = await jsonDecode(value1);
    // data.addAll(await jsonDecode(value2));
    // data.addAll(await jsonDecode(value3));
    // data.addAll(await jsonDecode(value4));
    setState(() {
      loading = false;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.black,
      body: SafeArea(
        child: Column(
          children: [
            Expanded(
              child: ListView.builder(
                padding: EdgeInsets.all(18),
                itemCount: searchData.length,
                itemBuilder: (c, i) {
                  return Column(
                    children: [
                      Text(
                        '$i',
                        style: TextStyle(
                          color: Colors.grey,
                          fontSize: 10,
                          height: 0.5,
                        ),
                      ),
                      Row(
                        mainAxisSize: MainAxisSize.min,
                        children: [
                          Text(
                            searchData[i]['phone'],
                            style: TextStyle(color: Colors.white),
                          ),
                          IconButton(
                            onPressed: () {
                              html.window.open(
                                'https://wa.me/${searchData[i]['phone']}',
                                '_blank',
                                'noopener,noreferrer',
                              );
                            },
                            icon: Image.network(
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/512px-WhatsApp.svg.png?20220228223904',
                              height: 30,
                              width: 30,
                            ),
                          ),
                          IconButton(
                            onPressed: () {
                              html.window.open(
                                'https://t.me/+${searchData[i]['phone']}',
                                '_blank',
                                'noopener,noreferrer',
                              );
                            },
                            icon: Image.network(
                              'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png',
                              height: 30,
                              width: 30,
                            ),
                          ),
                          IconButton(
                            onPressed: () {
                              Clipboard.setData(
                                ClipboardData(text: searchData[i]['phone']),
                              );
                            },
                            icon: Icon(Icons.copy, color: Colors.white),
                          ),
                        ],
                      ),
                      Text(
                        searchData[i]['maskedName'],
                        style: TextStyle(color: Colors.white),
                      ),
                      Divider(color: Colors.white),
                    ],
                  );
                },
              ),
            ),
            if (loading)
              Center(child: CircularProgressIndicator(color: Colors.white)),
            Padding(
              padding: const EdgeInsets.all(18.0),
              child: Row(
                children: [
                  Expanded(
                    child: TextField(
                      style: TextStyle(color: Colors.white),
                      decoration: InputDecoration(
                        hintText: 'Номер или имя',
                        hintStyle: TextStyle(color: Colors.grey),
                      ),
                      onChanged: _onSearchChanged,
                    ),
                  ),
                  Column(
                    mainAxisSize: MainAxisSize.min,
                    children: [
                      Text(
                        'Найдено ${addCommas(searchData.length)}',
                        style: TextStyle(color: Colors.white),
                      ),
                      DropdownButton(
                        dropdownColor: Colors.black,
                        value: max,
                        items: [
                          DropdownMenuItem(
                            value: 10,
                            child: Text(
                              '10',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                          DropdownMenuItem(
                            value: 50,
                            child: Text(
                              '50',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                          DropdownMenuItem(
                            value: 100,
                            child: Text(
                              '100',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                          DropdownMenuItem(
                            value: 200,
                            child: Text(
                              '200',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                          DropdownMenuItem(
                            value: 300,
                            child: Text(
                              '300',
                              style: TextStyle(color: Colors.white),
                            ),
                          ),
                        ],
                        onChanged: (v) {
                          if (max == v) return;
                          setState(() {
                            max = v ?? 50;
                          });
                        },
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }

  void _onSearchChanged(String v) {
    _debounce?.cancel();
    _debounce = Timer(const Duration(milliseconds: 400), () {
      _performSearch(v);
    });
  }

  Future<void> _performSearch(String v) async {
    final results = await compute(isolateFilter, {
      'data': data,
      'query': v,
      'max': max,
    });

    setState(() {
      searchData = results;
    });
  }

  String addCommas(num value) {
    final parts = value.toString().split('.');
    final integer = parts[0];
    final regex = RegExp(r'(\d{1,3})(?=(\d{3})+(?!\d))');
    final formatted = integer.replaceAllMapped(regex, (m) => '${m[1]},');
    return parts.length > 1 ? '$formatted.${parts[1]}' : formatted;
  }
}
