List<Map<String, dynamic>> isolateFilter(Map<String, dynamic> args) {
  final List data = args['data'] as List;
  final String rawQ = (args['query'] as String).trim();
  final String q = rawQ; // keep original for escaping
  final int max = args['max'] is int ? args['max'] as int : 100;
  final bool copy = args['copy'] as bool? ?? false;

  final int n = data.length;
  if (q.isEmpty) {
    final int take = max < n ? max : n;
    final List<Map<String, dynamic>> out = <Map<String, dynamic>>[];
    for (int i = 0; i < take; i++) {
      out.add(data[i] as Map<String, dynamic>);
    }
    return out;
  }

  // Precompile an escaped, case-insensitive regex once.
  final RegExp rx = RegExp(RegExp.escape(q), caseSensitive: false);

  // Parallel arrays for matched maps and the lowercased names (only for matches).
  final List<Map<String, dynamic>> matched = <Map<String, dynamic>>[];
  final List<String> keys = <String>[];

  for (int i = 0; i < n; i++) {
    final dynamic raw = data[i];
    final Map<String, dynamic> e = raw as Map<String, dynamic>;

    // Read fields once
    final dynamic phoneObj = e['phone'];
    final dynamic nameObj = e['maskedName'];

    final String phone = phoneObj != null ? phoneObj.toString() : '';
    // Avoid lowercasing phone/name here; use regex to test case-insensitively.
    if (rx.hasMatch(phone)) {
      matched.add(e);
      // store lowercase name for stable case-insensitive sort key (compute once)
      keys.add(nameObj != null ? nameObj.toString().toLowerCase() : '');
      if (matched.length >= max) break;
      continue;
    }

    final String name = nameObj != null ? nameObj.toString() : '';
    if (rx.hasMatch(name)) {
      matched.add(e);
      keys.add(name.toLowerCase());
      if (matched.length >= max) break;
    }
  }

  final int m = matched.length;
  if (m <= 1) {
    // either empty or single element — just return (optionally copy)
    if (!copy) return matched;
    final List<Map<String, dynamic>> outC = <Map<String, dynamic>>[];
    for (final e in matched) outC.add(Map<String, dynamic>.from(e));
    return outC;
  }

  // Create index array and sort indices by keys to avoid allocating paired objects.
  final List<int> idx = List<int>.generate(m, (i) => i);
  idx.sort((a, b) => keys[a].compareTo(keys[b]));

  final List<Map<String, dynamic>> out = <Map<String, dynamic>>[];
  out.length = 0;
  for (final i in idx) {
    if (copy) {
      out.add(Map<String, dynamic>.from(matched[i]));
    } else {
      out.add(matched[i]);
    }
    if (out.length >= max) break; // defensive
  }

  return out;
}
