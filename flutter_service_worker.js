'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "2d5d89f9269704e04894ed328c32b168",
"/": "2d5d89f9269704e04894ed328c32b168",
"main.dart.js": "b25158ae453b4aa76583d4defceb2505",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "c113cf501bc43dd6e4c89061e1d7dee6",
"assets/LICENSE": "b84405811ac4d8f391dff64fb0374d9a",
"assets/AssetManifest.json": "c0b0d12769cc7fee7d6a98c099bf2e0a",
"assets/FontManifest.json": "81ad6b360f1d7d452cc9bcdfa7285ca5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/images/card.png": "a8ff4993eb35a5a418b0d7639791fc9f",
"assets/assets/images/relationship_fear.png": "0c5836d669e04efe563f289c33884608",
"assets/assets/images/work.png": "6dd6b106abd606e16fdc8233ee212a47",
"assets/assets/images/homework.png": "e175d071055c4777159b09f14aa2ab7a",
"assets/assets/images/forum.png": "1bc94d5f43ea88e5ec7747bd4d38c42c",
"assets/assets/images/hamburger.svg": "c29a97c36f4ffa7caa510e3ba11d28e3",
"assets/assets/images/book.png": "5e03d3b2d728e7dd963eecfc89f76334",
"assets/assets/images/nav_menu.png": "34205824ad65b8a48b50c93ff52845cf",
"assets/assets/images/mail.png": "b7bd4652e383f51caba2b892a80cd2d1",
"assets/assets/images/profile_image.jpg": "b951fe0a890b85f1d03a79c8d5279474",
"assets/assets/images/work%2520(1).png": "7c38492d5879d0d47e072f4c7d57b27d",
"assets/assets/images/discount.png": "2ec096714e10737ff45ee706ee82e2c1",
"assets/assets/images/person%2520(1).png": "9ddc8dae35b943fbdc980c3d0142f659",
"assets/assets/images/question%2520(1).png": "3d1a8f2eb252e3fd23d6105aa9971873",
"assets/assets/images/question.png": "d7e727c18a355dad49c94390c65359f5",
"assets/assets/images/my_sessions.png": "fded261283f9867f242f9495b3633207",
"assets/assets/images/review.png": "dd1ccd67098772240d3a3451c98a5beb",
"assets/assets/images/slider_1.png": "7cb100b21d1619e976d1fd0eb1a80502",
"assets/assets/images/contact%2520(1).png": "aae1caef865aaeec055fcf9a883b0533",
"assets/assets/images/services.png": "6d5ab94fe3e29310b282876bf237623b",
"assets/assets/images/chat_bubble.png": "d14585f3c0e33f87093d0b8b70054111",
"assets/assets/images/community.png": "1d82d102daccef75fcc0516a3431b8b7",
"assets/assets/images/slider_2.png": "0e38ae4df027252f2112615370f9042e",
"assets/assets/images/life.png": "a76d088632e6fc1ade30cdb9c83fe321",
"assets/assets/images/add_user.svg": "da6e8694bf29e0567cbf6014297e33d3",
"assets/assets/images/slider_3.png": "9330ba44fc44168c2a0853b1e442af4b",
"assets/assets/images/book_colored.png": "e1b24f8f0fb133e6fba0be9bbc18c2a1",
"assets/assets/images/ozi_logo.png": "7e0e7a482f5d49444087af2ec73c537d",
"assets/assets/images/person.png": "8c2864ffae87e78128159925b63686bd",
"assets/assets/images/behappy.png": "3cfc2fde849fdedf8a8b01fa324d435f",
"assets/assets/images/like.png": "3d359779bae49511da4c4bf3f2568e74",
"assets/assets/images/connect.png": "fc1e771d0ae586a5ca2aa85174a63fcb",
"assets/assets/images/contact.png": "80da029c0fd5df05ca71f8ddf7c88c30",
"assets/assets/images/computer%2520(1).png": "1d4615d968e64883e283107ad49b5792",
"assets/assets/images/review%2520(1).png": "021bc123effcad6b86d78812f9d73338",
"assets/assets/images/fear.png": "f773c333be47fa4137ecc31690ec1563",
"assets/assets/images/logicon_logo.png": "34582bf5b480d96509c6532dd2e023d5",
"assets/assets/images/logo.png": "35885556f21fa192403e7fe87258a825",
"assets/assets/images/analyst.png": "ad0d975c1412c301802161f4813f0ac9",
"assets/assets/images/job.svg": "b5579a039bd0cc08e1770d067f510bbe",
"assets/assets/images/profile.png": "cbe9107428847fc29d53fbb778cebae4",
"assets/assets/images/phone.png": "51a1b481b5e9efc5ce2370df111ee7e9",
"assets/assets/images/discuss.png": "ea49789adb26a0f8f243afaf9722038e",
"assets/assets/images/computer.png": "7ad6a226e1f765fe7cbfb65c1409551f",
"assets/assets/images/phone.svg": "578398cee8105e54986283266ceee98a",
"assets/assets/images/innowi_logo.png": "6dcd5c7cb1017fd5a0a37303b086a498",
"assets/assets/images/cardwithleaves.svg": "147f06d378a93ced0f6b532ad77ea693",
"assets/assets/images/edit.png": "483a586c8c95bdcab6b52c0d34a9798a",
"assets/assets/images/be_open.png": "f3d918cd52887b58f8c35c6e67ad4513",
"assets/assets/images/phone%2520(1).png": "e41df086da6f69e11fe980138ae6ee16",
"assets/assets/images/business.svg": "5ded8e0e94fff27d4cfff7b91913a5af",
"assets/assets/images/chat.png": "a076c20faea466ee64a09bddec4ed15b",
"assets/assets/images/solution.png": "45fb75ca4c1fd34f2abbf2661ce46fa8",
"assets/assets/images/man.svg": "0c88b3e649ee4d9fbc9a37334c3dd347",
"assets/assets/works/newsbucket/newsBucket_3.png": "532eade8080bd36876127b1bc9239f30",
"assets/assets/works/newsbucket/newsBucket_2.png": "b17f7bbbc2c822b420f2e7aaf5c8cd93",
"assets/assets/works/newsbucket/newsBucket_1.png": "7b72cced7a3be0d2de087799abd6043e",
"assets/assets/works/newsbucket/news_logo.png": "c6c82c99dbec1da53101c7cb5401fcd7",
"assets/assets/works/speedometer/speedometer.png": "7fdc53738132c2546b8e40519630d749",
"assets/assets/works/speedometer/speedometer_1.png": "1521a507aebd6d9af1cab76c8ef6f912",
"assets/assets/works/speedometer/speedometer_2.png": "51c66390b7b0957c5d10751d719e36ea",
"assets/assets/works/speedometer/speedometer_3.png": "cb6d8983ebfe01a3c80639d676a2076c",
"assets/assets/works/notificationreader_logo.png": "ca50719c5d38d80b48a1636ad5757f54",
"assets/assets/works/pulse/s6.jpg": "c798fa29cce86f5d5fca3d5e183064c3",
"assets/assets/works/pulse/s5.jpg": "2d6d5667660e88bb05a9a46bbe3f6f45",
"assets/assets/works/pulse/s4.png": "38148bb768ed3939f136207e5e5ef1a8",
"assets/assets/works/pulse/s1.png": "6bc73a1b0d3d07a1cfd7a8120e23ebae",
"assets/assets/works/pulse/s3.png": "6d74d82083424916246df68cc005b5d1",
"assets/assets/works/pulse/s2.png": "45616ce2d820c665d7b8b115942b2a7e",
"assets/assets/works/pulse/logo.png": "972cf16aba43634fe86b615d0a048431",
"assets/assets/works/eme/emelogo.png": "e6b4db75f5bddcbe738fcdb16d76c052",
"assets/assets/works/eme/emergencme_2.png": "638f1c93a79b79125539761946b3dec0",
"assets/assets/works/eme/emergencme_3.png": "fd9dc9c57a934de1d1701330efe89831",
"assets/assets/works/eme/emergencme_1.png": "debbf2bfe0ecf811c631833ef3241445",
"assets/assets/works/writer/PAINT.jpg": "4d93d09920dfe8b3c0c353adefc49ec5",
"assets/assets/works/writer/NOTES.jpg": "4fa81681074e84555062bc69714f2006",
"assets/assets/works/writer/DIARY.jpg": "02bf62972f864233419dfc632bd2653f",
"assets/assets/works/writer/LOGO.jpg": "a0304d6db49838e377df6ea3b35c5113",
"assets/assets/works/writer/TODOLIST.jpg": "1a8f82905d65373f0bfc435de954005b",
"assets/assets/works/chandle/logo.png": "f3c859108a673582cd68f7b4b4695367",
"assets/assets/works/chandle/Screenshot_4.png": "fa637619f191f14f7e5dfc65741a164b",
"assets/assets/works/chandle/Screenshot_1.png": "98193ff2f33a19872857256d7ced0bf7",
"assets/assets/works/chandle/Screenshot_3.png": "ea5b7481d649bc15d60d8dc914591827",
"assets/assets/works/chandle/Screenshot_2.png": "3bb2c19d119b0b56ea05753917fdbc38",
"assets/assets/works/knowyourself/know_yourself_1.png": "74ea3c4f28dcf8c7c3325a17cf02e344",
"assets/assets/works/knowyourself/know_yourself_2.png": "ff64b8000281c6c2e8be9bbe51bf4f30",
"assets/assets/works/knowyourself/know_yourself_3.png": "f34faf4f206443e7cd38ccc0c566e9f2",
"assets/assets/works/knowyourself/ky_logo.png": "4efe1d379878cb6f3cd0b524a2dae1de",
"assets/assets/icons/github.png": "a2927770f6412f78846669b83f02a413",
"assets/assets/icons/upwork.png": "194ccc1eca42bcabffc7eafdd1eaafbf",
"assets/assets/icons/skype.png": "1d31b14eb454564ea6c78465b206c4d7",
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
