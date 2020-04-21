'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"assets/LICENSE": "0000d255865246c9b55862d96ffd3089",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/BalooBhai2-Medium.ttf": "bb0624d6d0877c109a9c5cd5f43f5f9f",
"assets/assets/fonts/BalooBhai2-Regular.ttf": "7c94be72174267b3aac61b9ab4df2af7",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/BalooBhai2-ExtraBold.ttf": "772da176fa6fc532fb743e0ebea96a39",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/BalooBhai2-SemiBold.ttf": "1e874a64aa7129203f56f4292207937d",
"assets/assets/fonts/BalooBhai2-Bold.ttf": "b50a10f5a521e56ae4a3895db5472b6d",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/images/slider_3.png": "9330ba44fc44168c2a0853b1e442af4b",
"assets/assets/images/add_user.svg": "da6e8694bf29e0567cbf6014297e33d3",
"assets/assets/images/cardwithleaves.svg": "147f06d378a93ced0f6b532ad77ea693",
"assets/assets/images/behappy.png": "3cfc2fde849fdedf8a8b01fa324d435f",
"assets/assets/images/community.png": "1d82d102daccef75fcc0516a3431b8b7",
"assets/assets/images/card.png": "a8ff4993eb35a5a418b0d7639791fc9f",
"assets/assets/images/solution.png": "45fb75ca4c1fd34f2abbf2661ce46fa8",
"assets/assets/images/nav_menu.png": "34205824ad65b8a48b50c93ff52845cf",
"assets/assets/images/logo.png": "35885556f21fa192403e7fe87258a825",
"assets/assets/images/forum.png": "1bc94d5f43ea88e5ec7747bd4d38c42c",
"assets/assets/images/my_sessions.png": "fded261283f9867f242f9495b3633207",
"assets/assets/images/life.png": "a76d088632e6fc1ade30cdb9c83fe321",
"assets/assets/images/discount.png": "2ec096714e10737ff45ee706ee82e2c1",
"assets/assets/images/chat.png": "a076c20faea466ee64a09bddec4ed15b",
"assets/assets/images/be_open.png": "f3d918cd52887b58f8c35c6e67ad4513",
"assets/assets/images/business.svg": "5ded8e0e94fff27d4cfff7b91913a5af",
"assets/assets/images/services.png": "6d5ab94fe3e29310b282876bf237623b",
"assets/assets/images/man.svg": "0c88b3e649ee4d9fbc9a37334c3dd347",
"assets/assets/images/fear.png": "f773c333be47fa4137ecc31690ec1563",
"assets/assets/images/slider_2.png": "0e38ae4df027252f2112615370f9042e",
"assets/assets/images/chat_bubble.png": "d14585f3c0e33f87093d0b8b70054111",
"assets/assets/images/slider_1.png": "7cb100b21d1619e976d1fd0eb1a80502",
"assets/assets/images/relationship_fear.png": "0c5836d669e04efe563f289c33884608",
"assets/assets/images/discuss.png": "ea49789adb26a0f8f243afaf9722038e",
"assets/assets/images/mail.png": "b7bd4652e383f51caba2b892a80cd2d1",
"assets/assets/images/analyst.png": "ad0d975c1412c301802161f4813f0ac9",
"assets/assets/images/hamburger.svg": "c29a97c36f4ffa7caa510e3ba11d28e3",
"assets/assets/images/homework.png": "e175d071055c4777159b09f14aa2ab7a",
"assets/assets/images/job.svg": "b5579a039bd0cc08e1770d067f510bbe",
"assets/assets/images/connect.png": "fc1e771d0ae586a5ca2aa85174a63fcb",
"assets/assets/images/edit.png": "483a586c8c95bdcab6b52c0d34a9798a",
"assets/assets/images/profile.png": "cbe9107428847fc29d53fbb778cebae4",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/FontManifest.json": "d5c848dcc28eeaedc2ae52693e95302f",
"assets/AssetManifest.json": "153100175b7653f654b9965f82318294",
"index.html": "2d5d89f9269704e04894ed328c32b168",
"/": "2d5d89f9269704e04894ed328c32b168",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"main.dart.js": "b56ab4bd99f480e7343a67e332c34385",
"manifest.json": "c113cf501bc43dd6e4c89061e1d7dee6"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
