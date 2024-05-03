'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "439189839e49dfdde565ca770ef557a6",
"manifest.json": "5d0e386a52edc4d207d4d5c3b9a6e53f",
"splash/img/dark-2x.png": "af04137277b5f9ce25a343fe2bd1968f",
"splash/img/dark-1x.png": "2a418c8105ede92b414972137ce4494f",
"splash/img/dark-3x.png": "f6971422737ef1a45d93315564feb8ab",
"splash/img/light-2x.png": "af04137277b5f9ce25a343fe2bd1968f",
"splash/img/light-3x.png": "f6971422737ef1a45d93315564feb8ab",
"splash/img/dark-4x.png": "9ba0f26c34a13dbaae6b98336af043e7",
"splash/img/light-1x.png": "2a418c8105ede92b414972137ce4494f",
"splash/img/light-4x.png": "9ba0f26c34a13dbaae6b98336af043e7",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"assets/packages/localization/test/assets/lang/en_US.json": "18804652fbce3b62aacb6cce6f572f3c",
"assets/packages/localization/test/assets/lang/pt_BR.json": "f999b93065fe17d355d1ac5dcc1ff830",
"assets/packages/localization/test/assets/lang2/en_US.json": "b389499c34b7ee2ec98c62fe49e08fa0",
"assets/packages/localization/test/assets/lang2/pt_BR.json": "08e9b784a138126822761beec7614524",
"assets/packages/iconsax_flutter/fonts/FlutterIconsax.ttf": "83c878235f9c448928034fe5bcba1c8a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/assets/png/default_avatar.png": "1154cb83510cf85a0e5e8da92315d836",
"assets/assets/banner.png": "dd4b02bf490d0ab7d193431eba438581",
"assets/assets/banner_background.png": "0d20995e1d9db751367b91f8a72684cc",
"assets/assets/launcher.png": "aa73b30754d501d8e56ecaeab3cd98f7",
"assets/assets/sticker/cat_hug.webp": "5ddd38adffa49c7c14e1d464f12f7b93",
"assets/assets/sticker/person_hmm.webp": "270cad574da7bd5b0495bb8c7700e3cb",
"assets/assets/sticker/dog_angry.webp": "f7caea8abdee0a45754048ae37eb43fd",
"assets/assets/sticker/dog_whoa.webp": "370f22046aa12314909b6589ec6ff859",
"assets/assets/sticker/cat_haha.webp": "6d08e356cd881ade5287403c3dcfced4",
"assets/assets/sticker/person_relax.png": "1979324f3e894ef89b3be3c6bbde18ff",
"assets/assets/sticker/dog_i_miss_you.webp": "6b868cef1fd5b29ef0735e257ec4fa86",
"assets/assets/sticker/cat_mucsic.webp": "009f7c4503b11c87d8f19d763cb4b3d5",
"assets/assets/sticker/dog_dash.webp": "13fee3494ad0db6fb97f0fb0e1dacbcd",
"assets/assets/sticker/cat_with_heart.webp": "e0dfb4204c81d6e6f583744e69ca3428",
"assets/assets/sticker/cat_good_night.webp": "9a7fc0da5173ebd6b2c25c567ca3ce60",
"assets/assets/sticker/cat.webp": "7b4adf41773e8618f6512f1ad59bd621",
"assets/assets/sticker/dog_hello.webp": "43ec429b8d6baceea35f8836ad5e8af8",
"assets/assets/sticker/cat_with_box.webp": "2c3f489be76cf3eb7b6f5ce40b11d4b5",
"assets/assets/rive/bear.riv": "6a4a1058bcfbe0820df6d23c15c2990f",
"assets/FontManifest.json": "7df10702a8c60a62e6694f43081d46e7",
"assets/AssetManifest.json": "0f7b60ffc1bd2df6469852bedd84d698",
"assets/AssetManifest.bin": "a1fa0821aee2e8e2ac494ef7236e1106",
"assets/AssetManifest.bin.json": "68ac4863a3c766b7b363b721647d4adc",
"assets/fonts/MaterialIcons-Regular.otf": "4ab1a1f327e35ceb1f4d94a894e8a6a4",
"assets/NOTICES": "da4c4be3fb722683d676563848d01780",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"main.dart.js": "4b81b2341c7373f9abb4af60b007e1b2",
"index.html": "2fb4e42cf96ed999a4888202facd5074",
"/": "2fb4e42cf96ed999a4888202facd5074",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"favicon.png": "74c1d65461a77a8c31f7b0c72a4f9cfd",
"icons/Icon-maskable-192.png": "a335f4addfb9c7592b3937617566e059",
"icons/Icon-192.png": "a335f4addfb9c7592b3937617566e059",
"icons/Icon-512.png": "400be9e5dd09ec7fece30915c41a98b0",
"icons/Icon-maskable-512.png": "400be9e5dd09ec7fece30915c41a98b0"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
