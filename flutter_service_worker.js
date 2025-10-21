'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "036c20d429846e8382d564f067ee9b5e",
"version.json": "710dcacf3f6c2cf85f0f8511d1908840",
"index.html": "4d7cdcc13c485b2aa8999f496c6fb0c8",
"/": "4d7cdcc13c485b2aa8999f496c6fb0c8",
"main.dart.js": "2f77ba07862ee1d670a595a871c5feec",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"favicon.png": "d51131a77458ceaca65bcb0e7b2ebbee",
"icons/Icon-192.png": "063c12f97390035fd28eefc4f6377ebb",
"icons/Icon-512%20copy.png": "e1724edc7fa8e38e20a91c290bd08d9a",
"icons/Icon-maskable-192.png": "063c12f97390035fd28eefc4f6377ebb",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "e1724edc7fa8e38e20a91c290bd08d9a",
"manifest.json": "abdc1d27d7703dafb172ff29eb0286f3",
".git/config": "7a6476549d850fbe387af72944e8e615",
".git/objects/95/8dca5c713e532d6d0c0b74869b6ff6c023e10f": "d328e8cca9aafe93b5453a27532b1443",
".git/objects/95/f84b0f1a899663fcbf0ef9415688d3ae7fc8fd": "eaa8f8b038075ecbe394b25991a13943",
".git/objects/0c/dc4860d65fa5acfc792391af9e32faba6e7845": "4645fe439f8ecfb4737d4460ec94cf21",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/68/b4befe476a24e6c72a802c4afb3c98cd0184ad": "e7af57e7596c6a5f3d33e4edcfdfd57e",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/6a/de4ed09123ef036033a0aecca2a5599227344b": "3b49fb5def43f7414fb281507f5cf7b4",
".git/objects/0b/2f8294a6d8cd196d33c41bbcd60047aa0657e1": "89648ce5f8d27641c72df4a0bc163836",
".git/objects/33/99a04ce8322fd417edb46974e5b04a3b8482a2": "c8d959687160398bcd4aa88f0373bee8",
".git/objects/da/0d5aa44a8c93eda469f7a99ed8feac32d5b19d": "25d25e93b491abda0b2b909e7485f4d1",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/1aaa3fed4edbd79c54c176b1330bdc286900d2": "9598dfeaa2b79b884449acf78253ec9c",
".git/objects/d8/8128adaad90d2fd7cdabe7b36eaaaed0d3a25b": "3d15963af0d77c1cd40702fb7c18fa93",
".git/objects/d8/d844af3d0e5ad8739cc0c55cf1aa5c1b2c9724": "092f0f72da0940d9b89a40921f5c7fd5",
".git/objects/ab/cd1041c8de362aba9106cf213affdbbb6862e7": "52d5b826f58081346ce9ccb5501fe1ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/objects/fb/8bbcd7c7fd138043436a7d89f8eb6fe83d1c52": "af4272d155b54d329ada995a3af3dff8",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/7c/73c977d9a6ea0fc46ae9c1a204ad875c44a452": "2c4a5534bb250482a42138c99aedd324",
".git/objects/73/ba503e3aa08f45249fcbccf076993644866249": "8295c5d91b05bb43803cf3098ed23a4c",
".git/objects/28/e0ab4763e73a50caea1ba930459d3ec46d01a8": "47ced6f5adab3fa1cd5abc135fbfb237",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/2f/6479b1fbae40ff9e7286b383b275e9d6706efe": "06716155b7927a9b92a8c55839a63891",
".git/objects/9a/74f335451357adf303e96712a5de1a3570782d": "0341dc8cfb573f1b4357dccb805a0a17",
".git/objects/3a/bf18c41c58c933308c244a875bf383856e103e": "30790d31a35e3622fd7b3849c9bf1894",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/90/36db4232e691954514750d8778c603d1aec016": "48cba045b71b6cddddd761c6300b77db",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/a1/8008e03589914f914c8597f3c45694eae6fec7": "6de65f61faee52ceb3d6c11e559ec050",
".git/objects/c4/ba7ddab9f7746390b02099a399bb29c4c1bcab": "e7ccc4c4563fd3aa68767c1f41c0da79",
".git/objects/c4/2b0eafb6ba019a5a8db2114d197f0de89ac793": "1bbcf4efd4fa75df11fdeb6a4c305990",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/e8/3c624d2b4f120c9f7f8ef11b0797f195b37e7b": "f2e3069a29252f73f8eff1e257c00fe3",
".git/objects/fa/a981f020c90c175372cf1b8c8a0b5355184003": "e96a283ad1b3daa0ce0567b21e1068fe",
".git/objects/c2/8c604ce2fc3c623d94b204cff45d7f1eb3cd24": "8d224be91750071cb3bc986b4195303f",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/f8/40a19246984dedc1a2e55754260124b982a3bc": "e2d28e96c0ab3e54e00d7da665808759",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/40/d1766ca642f881d03679a32e233b9150029912": "97e2db582a83167366cc35e356902076",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c03a621d51bb03878c9d19b419d142f1",
".git/logs/refs/heads/main": "7738b4b0ba09595e2c14ddc1d628b824",
".git/logs/refs/remotes/origin/main": "e9cf96a35606840fe25da16a0d3067ac",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f8c4b67c70c058123b0fab4490a57844",
".git/refs/remotes/origin/main": "f8c4b67c70c058123b0fab4490a57844",
".git/index": "85fbbdd08ddef0e094beda3907afe030",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "420587a24abfaa4a31a10b61ee2439e5",
"assets/NOTICES": "001eca04c46ace1de5a720288923000e",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/AssetManifest.bin.json": "6e03a404982b755b87719fb1a23f96ed",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1cb1b331eef0f613ca6456a62bcf5bda",
"assets/fonts/MaterialIcons-Regular.otf": "d54bae5788dd45d8ad345e0ac2eeca7e",
"assets/assets/clean1.json": "26cd52347fea28431bf23192af71223a",
"assets/assets/clean4.json": "06e54bbcea4964af4dcb3d7df96ac0e5",
"assets/assets/clean3.json": "9061c8f3dacbf21ed4b026d63c613d47",
"assets/assets/clean2.json": "32981e2b74766329e727da2021431729",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
