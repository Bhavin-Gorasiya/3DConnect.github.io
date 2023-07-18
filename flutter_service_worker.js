'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "501491b007f1f8d6985093b3f18792d5",
"index.html": "82df197073bd311f50a2eda3c026769f",
"/": "82df197073bd311f50a2eda3c026769f",
"main.dart.js": "1dcb20848ae73222e4211ad436d0fa65",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "67a8fd763a2a93842996db59865cabd5",
"assets/AssetManifest.json": "fa6a2e2b0fa6c11aafd4e1f736e57219",
"assets/NOTICES": "909820c577438876fcfaa07faedacef3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/packages/flutter_google_places/assets/google_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places/assets/google_black.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "e632c3c9ceba544edda0cb6cd1f4bed7",
"assets/fonts/MaterialIcons-Regular.otf": "0c3664c2c04716e80d6d2e2e26df976c",
"assets/assets/icon_profile.png": "cc5b7e7a3af2dac5c9dd5f9b17946c1c",
"assets/assets/placeholder2.jpeg": "24dd65b479a03d943df36e8dae4b03d2",
"assets/assets/wallet.png": "980113329cbccb23c3f77208258bafa8",
"assets/assets/sale.jpg": "37e252f9e69c033569e07818c6bf5baf",
"assets/assets/login.png": "8a6ecbfa44d44743edd092adb1d84c12",
"assets/assets/pin.png": "923420d24e9df74c0aae1ded0605b45d",
"assets/assets/shield.png": "60c87d448b5f854350a94abfccd0c166",
"assets/assets/icon_fav.png": "ec5409b4ee50fc38a12efed2f48f2838",
"assets/assets/subscribe.png": "4c74fc69bc8e23be6c9dd5bfbb2f86ad",
"assets/assets/instagram.png": "a5272a61e585e05b583391dfb0faec7b",
"assets/assets/piggy-bank.png": "96a776f3809f7f4a41d52093522f9a9a",
"assets/assets/address.png": "bc52ed657704ed430224758b9f5ee944",
"assets/assets/sabjiwaala.jpeg": "25ddc87a74e13cbcf566b166d3319390",
"assets/assets/logout.png": "ce0fc5f969f90945e01b1989339af9bc",
"assets/assets/loginImg.png": "37f09eebbc7e794ebebfbe9888943b44",
"assets/assets/background.png": "88f5aacbe70421c1a095c4cb2025b7b9",
"assets/assets/social/app.png": "c413f8e22e9230172f8264586dc99eb1",
"assets/assets/social/instagram.png": "a5272a61e585e05b583391dfb0faec7b",
"assets/assets/social/twitter.png": "fa696cfc52610ef6df08a0c2895ecc18",
"assets/assets/social/linkedin.png": "1c76894aab8c8c744b45b2a435f78430",
"assets/assets/social/playstore.png": "4868a56c6f73cdc1023fbe427702d169",
"assets/assets/social/facebook.png": "e0a0ea8fbdeef1d59c45409ffca496c6",
"assets/assets/menu.png": "99df574cc708bd4d1b21d454080a0f3c",
"assets/assets/logo.png": "2326ef9db384b4aee6dedfeb36915e45",
"assets/assets/scanner.png": "added4902aef31ba866378bcc90c2bee",
"assets/assets/linkedin.png": "1c76894aab8c8c744b45b2a435f78430",
"assets/assets/icon_home.png": "6a9173623eb990a76e13bee5170846a3",
"assets/assets/icon_marker.png": "d36c1a63a20ce0abfdbb22f23482c358",
"assets/assets/sort.png": "1fa518ef0cc3394389f12284ecb0d4e7",
"assets/assets/icon_list.png": "ee1d2d804d213275f4b85d712ad1a0f6",
"assets/assets/success.png": "0bc11f56ac8b90cb1aea3a2b7871e14e",
"assets/assets/exit.png": "381e689b16c616852d5f9d64b040d32c",
"assets/assets/userAvatar.png": "0b3522e7f7f57051757df343fff6854e",
"assets/assets/about-us.png": "04fb05c40677474f3050daf9d73ffbfc",
"assets/assets/cs.png": "1552c5450938d03dace2a3d2187915e8",
"assets/assets/truck.png": "4a3074df9afd41fec0fe823509069daa",
"assets/assets/facebook.png": "e0a0ea8fbdeef1d59c45409ffca496c6",
"assets/assets/thella.png": "3e5ebb5568fdcdba1a7660733856bda8",
"assets/assets/icon_cart.png": "8b58d5d8b66aabece09d6b95b0587398",
"assets/assets/chat.png": "ce32b7f3b79b15852986dadd9b3c9555",
"assets/assets/refresh-button.png": "0ffd12bee8f43c5417684f8f9093d12d",
"assets/assets/bag.png": "83ad3fdd8a9aa0a5c1f13e397ce798dc",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
