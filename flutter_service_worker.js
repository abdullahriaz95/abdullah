'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2d5d89f9269704e04894ed328c32b168",
"/": "2d5d89f9269704e04894ed328c32b168",
"main.dart.js": "494a7b49d79661b9218c4a30be8e4d67",
"favicon.png": "965d5a85e7385f94b08c5ecb2b8c4b57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c113cf501bc43dd6e4c89061e1d7dee6",
"assets/LICENSE": "b84405811ac4d8f391dff64fb0374d9a",
"assets/AssetManifest.json": "a24d7a16a0e52a011373cdb7198abbec",
"assets/FontManifest.json": "81ad6b360f1d7d452cc9bcdfa7285ca5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/profile_image.jpg": "b951fe0a890b85f1d03a79c8d5279474",
"assets/assets/images/ozi_logo.png": "4da7ca3a555aa13fde9b2a70027baa6d",
"assets/assets/images/logicon_logo.png": "45e541fe515a3c4d9a7782458ed1683e",
"assets/assets/images/innowi_logo.png": "6dcd5c7cb1017fd5a0a37303b086a498",
"assets/assets/works/newsbucket/newsBucket_3.png": "b3507500aa1e80f8a4a56db297b12531",
"assets/assets/works/newsbucket/newsBucket_2.png": "67e0b6ed9a9fcedace8aa765b92d6caa",
"assets/assets/works/newsbucket/newsBucket_1.png": "9a73ebee822c03b1b18b585da4611e38",
"assets/assets/works/newsbucket/news_logo.png": "c64c30251f39ebb62d7d9627c33633a3",
"assets/assets/works/speedometer/speedometer.png": "b1425746d2b0aefeb4a5aab3d2d058a2",
"assets/assets/works/speedometer/speedometer_1.png": "b532e4e93d5834d063ab71439b8a5d5b",
"assets/assets/works/speedometer/speedometer_2.png": "f5e89c06a250e4ae81739719a72e4668",
"assets/assets/works/speedometer/speedometer_3.png": "f065aee1de70bdfaa9a84ac37e288322",
"assets/assets/works/notificationreader_logo.png": "3c235d5c0d11d35c566b8b30e8c89830",
"assets/assets/works/pulse/s6.jpg": "36520ace5d0db4a779c22199e8cc3a2c",
"assets/assets/works/pulse/s5.jpg": "a07dffb88b8763404b9025b7be7e4941",
"assets/assets/works/pulse/s4.png": "e95b32c7d1e5249e1d1ad1e1544aa28f",
"assets/assets/works/pulse/s1.png": "fc8165dd4629acd7107fca9a90cc6023",
"assets/assets/works/pulse/s3.png": "541294dab7a43d5fa0188b2801095e80",
"assets/assets/works/pulse/s2.png": "8f94328ec57d086b8f18ab8a02e0f126",
"assets/assets/works/pulse/logo.png": "684b715b443587cc7b9329fd569d3e56",
"assets/assets/works/eme/emelogo.png": "16384af563155d1aea2fedc885804ca5",
"assets/assets/works/eme/emergencme_2.png": "7444ee43422d9c352a3963e04966cc2b",
"assets/assets/works/eme/emergencme_3.png": "12505d6f4db1e922dfcf5212b706d8d2",
"assets/assets/works/eme/emergencme_1.png": "ccdb75765ee376dc43a538b1d213c876",
"assets/assets/works/writer/PAINT.jpg": "c9601806dcace4805cb99adda225e69e",
"assets/assets/works/writer/NOTES.jpg": "474e814b5f9e6bc481afe8ae48435326",
"assets/assets/works/writer/DIARY.jpg": "12196504014ecb212819dfc62fb028e8",
"assets/assets/works/writer/LOGO.jpg": "59247dc701061cc38afcef28be5703e1",
"assets/assets/works/writer/TODOLIST.jpg": "c1d7c823b0a99614c7a995543e00e853",
"assets/assets/works/chandle/logo.png": "d08afa6e01fa3982dfc4153960b97731",
"assets/assets/works/chandle/Screenshot_4.png": "55fd8bee0b00c48f1fc4c2d3ae5408f2",
"assets/assets/works/chandle/Screenshot_1.png": "01fb85544adbe8bbd576658e23b73d10",
"assets/assets/works/chandle/Screenshot_3.png": "2a937c80b80f6d0d0deff2e6e216621c",
"assets/assets/works/chandle/Screenshot_2.png": "b4e3d9de22af3eaf03d9e42fa6e2cb9c",
"assets/assets/works/knowyourself/know_yourself_1.png": "74ea3c4f28dcf8c7c3325a17cf02e344",
"assets/assets/works/knowyourself/know_yourself_2.png": "ff64b8000281c6c2e8be9bbe51bf4f30",
"assets/assets/works/knowyourself/know_yourself_3.png": "f34faf4f206443e7cd38ccc0c566e9f2",
"assets/assets/works/knowyourself/ky_logo.png": "4efe1d379878cb6f3cd0b524a2dae1de",
"assets/assets/icons/github.png": "a2927770f6412f78846669b83f02a413",
"assets/assets/icons/upwork.png": "194ccc1eca42bcabffc7eafdd1eaafbf",
"assets/assets/icons/skype.png": "1878e43708974e932431c9429d831677",
"assets/assets/icons/linkdin.png": "1f913fa8308525ab1e49d9c92eeede0b",
"assets/assets/fonts/TitilliumWeb-Bold.ttf": "08d37409a924ae95fff8df77747b0c42",
"assets/assets/fonts/OpenSans-SemiBold.ttf": "ba5cde21eeea0d57ab7efefc99596cce",
"assets/assets/fonts/Montserrat-Medium.ttf": "c8b6e083af3f94009801989c3739425e",
"assets/assets/fonts/Rubik-Bold.ttf": "9a6fb6f5cd3aa4ab1adaaab1f693f266",
"assets/assets/fonts/TitilliumWeb-Regular.ttf": "ed1d014bf2b8b72f27d6af65c69f710a",
"assets/assets/fonts/Montserrat-Bold.ttf": "ade91f473255991f410f61857696434b",
"assets/assets/fonts/TitilliumWeb-SemiBold.ttf": "ce96d75e97d58b7396e1431557bb02a0",
"assets/assets/fonts/Rubik-Light.ttf": "7a06846baf7fd2cfb18c7ab4d663c8ca",
"assets/assets/fonts/BalooBhai2-Bold.ttf": "b50a10f5a521e56ae4a3895db5472b6d",
"assets/assets/fonts/Rubik-Medium.ttf": "c87313aa86b7caa31a9a0accaa584970",
"assets/assets/fonts/Montserrat-SemiBold.ttf": "c641dbee1d75892e4d88bdc31560c91b",
"assets/assets/fonts/Montserrat-ExtraBold.ttf": "19ba7aa52a78c3896558ac1c0a5fb4c7",
"assets/assets/fonts/OpenSans-Bold.ttf": "1025a6e0fb0fa86f17f57cc82a6b9756",
"assets/assets/fonts/BalooBhai2-Regular.ttf": "7c94be72174267b3aac61b9ab4df2af7",
"assets/assets/fonts/Poppins-Regular.ttf": "41e8dead03fb979ecc23b8dfb0fef627",
"assets/assets/fonts/BalooBhai2-Medium.ttf": "bb0624d6d0877c109a9c5cd5f43f5f9f",
"assets/assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/Poppins-Bold.ttf": "c23534acbeddbaadfd0ab2d2bbfdfc84",
"assets/assets/fonts/OpenSans-Regular.ttf": "3ed9575dcc488c3e3a5bd66620bdf5a4",
"assets/assets/fonts/Rubik-Regular.ttf": "b3d0902b533ff4c4f1698a2f96ddabab",
"assets/assets/fonts/TitilliumWeb-Light.ttf": "edc21ba4e5eb0d77c371a8f0851ed72f",
"assets/assets/fonts/Poppins-SemiBold.ttf": "342ba3d8ac29ac8c38d7cef8efbf2dc9",
"assets/assets/fonts/BalooBhai2-ExtraBold.ttf": "772da176fa6fc532fb743e0ebea96a39",
"assets/assets/fonts/BalooBhai2-SemiBold.ttf": "1e874a64aa7129203f56f4292207937d"
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
