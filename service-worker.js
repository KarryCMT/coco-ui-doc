/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2731062c2dc9e385da4d597515249806"
  },
  {
    "url": "assets/css/0.styles.42ae1803.css",
    "revision": "93ebb93fefeb576f36683110e44472bd"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1c12c878.js",
    "revision": "7c6b85f5e6eea99872a1bb735d73d9a4"
  },
  {
    "url": "assets/js/11.47dadee8.js",
    "revision": "50b251b25412879de2b3d6a3cb2f62bd"
  },
  {
    "url": "assets/js/12.4ed642e2.js",
    "revision": "e4cfd3f87b5850e031f0ef1e350badeb"
  },
  {
    "url": "assets/js/13.b3a739f7.js",
    "revision": "3631405f1db0dd667d00f6a99cddd28e"
  },
  {
    "url": "assets/js/14.43cf371e.js",
    "revision": "7ec9daa14e0b95b0445c1be3ee38a53c"
  },
  {
    "url": "assets/js/15.0dd78cae.js",
    "revision": "9ac294e3ded960d81fe535588156af0b"
  },
  {
    "url": "assets/js/16.b83198b1.js",
    "revision": "c9e020f76ad6aa4502cb4bdfa7d615ea"
  },
  {
    "url": "assets/js/17.ea2e85b1.js",
    "revision": "f1db30989a7816192628cfec2b53ef0a"
  },
  {
    "url": "assets/js/18.50daf0ee.js",
    "revision": "56d4826bb4f9a5126ae61d564fe468a9"
  },
  {
    "url": "assets/js/19.d1b8fcb4.js",
    "revision": "81253a5059e57ebeb25c6d01a5f413e8"
  },
  {
    "url": "assets/js/2.3cfbb165.js",
    "revision": "169d5f012c58072454f3716a863be5f2"
  },
  {
    "url": "assets/js/20.3f35b4c1.js",
    "revision": "6f464eb941ecddeb3d5b8164249e683b"
  },
  {
    "url": "assets/js/21.3a5015d9.js",
    "revision": "5a85d662374b22819048a05a00f9c40d"
  },
  {
    "url": "assets/js/22.2bb0e151.js",
    "revision": "c5ee5f3f465325de6c7d2b01748ad6b0"
  },
  {
    "url": "assets/js/23.db9df8a6.js",
    "revision": "e306e652ab1e25e06531fe1e26f88a98"
  },
  {
    "url": "assets/js/24.c1fadc99.js",
    "revision": "5b64a33bb4d8aaed8248cbfd19becaad"
  },
  {
    "url": "assets/js/25.059275f8.js",
    "revision": "1fbe72b2e8925195c3950f442ec54793"
  },
  {
    "url": "assets/js/26.8d2efd06.js",
    "revision": "757711f30c9071767e46a86c6abef8cc"
  },
  {
    "url": "assets/js/27.4d89ef9a.js",
    "revision": "a04ea81fb2f87c004c74864260751a65"
  },
  {
    "url": "assets/js/28.8b27021e.js",
    "revision": "5f9acc230f833bb5c81c1871bd71a147"
  },
  {
    "url": "assets/js/29.defb946c.js",
    "revision": "54c23905ace693a7f6dd7ff72c8d62f3"
  },
  {
    "url": "assets/js/3.3542dd2c.js",
    "revision": "79195a3368ec1e417ed44829c2f713eb"
  },
  {
    "url": "assets/js/30.0bfbc272.js",
    "revision": "095edc37a14f0cf10ea4858c819d6f98"
  },
  {
    "url": "assets/js/31.230bac53.js",
    "revision": "a3507910b6447a25b7486d1c73e55801"
  },
  {
    "url": "assets/js/32.5035717d.js",
    "revision": "ff5965321c3c26d051dde572738113bb"
  },
  {
    "url": "assets/js/33.0748f8f0.js",
    "revision": "75e97917e126c5b5ceb21d91447708ba"
  },
  {
    "url": "assets/js/34.8070fe6a.js",
    "revision": "e27ad0df2fc2dce3b4159f230cd5cf60"
  },
  {
    "url": "assets/js/35.7d496577.js",
    "revision": "0d5d25fd3191f95b241b39a4ec1e2a3f"
  },
  {
    "url": "assets/js/36.133530d3.js",
    "revision": "7af528481d53b1bb6316f72ce4f5d94e"
  },
  {
    "url": "assets/js/37.2d1c7015.js",
    "revision": "3c5691f631dec6cfacd1711194294a71"
  },
  {
    "url": "assets/js/38.de62b0d1.js",
    "revision": "759ff2d8d49ae1651fa979a812499459"
  },
  {
    "url": "assets/js/39.f3b1ec23.js",
    "revision": "58f315f75cff2105c2fdc00eea1a7259"
  },
  {
    "url": "assets/js/4.2acdbfe0.js",
    "revision": "d6e4a71dd49ca48b29f00be355169df8"
  },
  {
    "url": "assets/js/40.605214d9.js",
    "revision": "ad9f1dd9c772130605322804dd4c8d9d"
  },
  {
    "url": "assets/js/41.c4a1bb0a.js",
    "revision": "41f8e6466c3b6a8e1b0a74d48d0e2be8"
  },
  {
    "url": "assets/js/42.580c540b.js",
    "revision": "cfad32d9284cd966b0ce27191989a1cf"
  },
  {
    "url": "assets/js/43.f380a1ed.js",
    "revision": "1e5500f50d0625d058ffa3cfdc0afa17"
  },
  {
    "url": "assets/js/44.d2b073e1.js",
    "revision": "9c29e701556183c9dbab6abc858b14d9"
  },
  {
    "url": "assets/js/45.00394efb.js",
    "revision": "871769cc8eff4fac5e41efc725309a80"
  },
  {
    "url": "assets/js/46.45ca5ac5.js",
    "revision": "c219639db6a2e24636531d6eb05e164d"
  },
  {
    "url": "assets/js/47.6e1e85e0.js",
    "revision": "5e14bce7fa2bc364f9414c0c9329a939"
  },
  {
    "url": "assets/js/48.9fab9927.js",
    "revision": "cc30b9fc32c4333f73ecb2fec1ae78f8"
  },
  {
    "url": "assets/js/49.04a7210a.js",
    "revision": "32fe46c7d176f60b075f2127c0414911"
  },
  {
    "url": "assets/js/5.3c3a170d.js",
    "revision": "c75deb6074617231f38de57dc5d9e2d9"
  },
  {
    "url": "assets/js/50.adff27be.js",
    "revision": "d82006c893a24f81e6bdf70be66d91d5"
  },
  {
    "url": "assets/js/51.0784db1d.js",
    "revision": "3aaa7e3431b43aa16b6625feb6ff6cd3"
  },
  {
    "url": "assets/js/52.222b3e49.js",
    "revision": "52c09b1d83a2b1e05b71eaa3ab412cea"
  },
  {
    "url": "assets/js/53.1d6fc191.js",
    "revision": "ef99117ae43a6ebb3a4f6871706f38b4"
  },
  {
    "url": "assets/js/54.191a5008.js",
    "revision": "263d6d6f0b83ee92d0757cd27c552375"
  },
  {
    "url": "assets/js/55.58cefe80.js",
    "revision": "9385d78e08333c8d45ab104f9e2acce5"
  },
  {
    "url": "assets/js/56.c8779921.js",
    "revision": "bc596aa39e779208f06e925b995a75a1"
  },
  {
    "url": "assets/js/57.97b21075.js",
    "revision": "b73f7e5f70912ea580e05336cc498445"
  },
  {
    "url": "assets/js/58.45201d7e.js",
    "revision": "9a4be84f693357933de3c980271b981e"
  },
  {
    "url": "assets/js/59.b758b564.js",
    "revision": "d251a7b58f80d51df9b19e4ab6c7e2ab"
  },
  {
    "url": "assets/js/6.8ef9d52e.js",
    "revision": "777316f63af787d61324337bbe3a7eec"
  },
  {
    "url": "assets/js/60.f12f2aae.js",
    "revision": "1d099f32e4deb0d7914379621a851ce5"
  },
  {
    "url": "assets/js/61.b2e74c02.js",
    "revision": "d5422ecf1c78231dea625b0a029fe4e7"
  },
  {
    "url": "assets/js/62.77a889c2.js",
    "revision": "1ba2f56d7af4e3fbedd14d159ce11332"
  },
  {
    "url": "assets/js/63.dad0b40a.js",
    "revision": "5142ae596b36e85c81bac9aa30cd4bcf"
  },
  {
    "url": "assets/js/64.b87db10c.js",
    "revision": "fcaf197ed49ce647df72bd6510983ae2"
  },
  {
    "url": "assets/js/65.0193314b.js",
    "revision": "1aacbd557341990d3ab0fb66843bca94"
  },
  {
    "url": "assets/js/66.748ce808.js",
    "revision": "222c6e5d8623f9fe42a40c66e0c859fe"
  },
  {
    "url": "assets/js/67.3a874b79.js",
    "revision": "5753394b8a17d03ffef74e0473d39639"
  },
  {
    "url": "assets/js/68.56cdcc96.js",
    "revision": "07e541b370fa8dcec1a1a592d865b442"
  },
  {
    "url": "assets/js/69.ff82a11d.js",
    "revision": "41e93849eaf0b3c55859a0ed97bfe554"
  },
  {
    "url": "assets/js/7.9cf72b0f.js",
    "revision": "f351a6a75d2493221693ef3d85d3f784"
  },
  {
    "url": "assets/js/70.a1681da5.js",
    "revision": "b5a43b2c9302eaf0dc0f0557d62a6894"
  },
  {
    "url": "assets/js/71.91b635e5.js",
    "revision": "2a3344b339422abd9a15d77ceeb0efca"
  },
  {
    "url": "assets/js/72.cacbd234.js",
    "revision": "a1e1f1a302360c2a1f4ce13e2cbb38b7"
  },
  {
    "url": "assets/js/73.63a7a0cb.js",
    "revision": "b358ad55d5e27a56efdd536ad3992dbe"
  },
  {
    "url": "assets/js/74.31d390d7.js",
    "revision": "2b1a539654294415c119cdd3c71e4261"
  },
  {
    "url": "assets/js/75.cc0c50aa.js",
    "revision": "57fe867f4dbb23030b32999e4fbdc066"
  },
  {
    "url": "assets/js/76.0e078e76.js",
    "revision": "6a69410dff0f69bc78400f75c6ef2c1c"
  },
  {
    "url": "assets/js/77.c2d9fe86.js",
    "revision": "a397bae8e0382a54f7900e7251cf2f3e"
  },
  {
    "url": "assets/js/78.555be305.js",
    "revision": "02e6100f9a45017b56305316d9238534"
  },
  {
    "url": "assets/js/79.27fd5771.js",
    "revision": "fe75f286c3f80483f2ef746ad8055407"
  },
  {
    "url": "assets/js/8.0e8421d1.js",
    "revision": "fd5bb2dd975a2773f078c07bd210be0d"
  },
  {
    "url": "assets/js/80.4f3f1ba1.js",
    "revision": "aebf3070a6f17479b309923b2d064e69"
  },
  {
    "url": "assets/js/81.40d90c78.js",
    "revision": "216d77bca4ac4b056cc90a139c2a7d87"
  },
  {
    "url": "assets/js/82.5aed4be3.js",
    "revision": "c71129ac7c59d624fda64ed4574b23cd"
  },
  {
    "url": "assets/js/83.da6099c2.js",
    "revision": "37d8120150f5251875307cee2382c7a7"
  },
  {
    "url": "assets/js/9.5b2135d6.js",
    "revision": "72f1ccc646e7d546297c0375d7bd04a3"
  },
  {
    "url": "assets/js/app.5aaefff4.js",
    "revision": "129eb7282fb068d2258fcfac947a6c65"
  },
  {
    "url": "cli/index.html",
    "revision": "9b739760f24da5ce7f31c1e73952904e"
  },
  {
    "url": "cli/introduce.html",
    "revision": "075899a331f821389b90b07790f52a73"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "9f32c5d4727f7964cbe44a82560ec9ea"
  },
  {
    "url": "component/basic/button.html",
    "revision": "c0873870db9f81da848e9ccf6e800d67"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "8b973d70a329c7163d7c1f661ae5864e"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "9f2de0827ff0d793e88447d0ac1d75ae"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "5fd264519f85e6bbea4cd75b0c75c977"
  },
  {
    "url": "component/form/form.html",
    "revision": "1a6a14c40879385a0d8d03aa7910ad3d"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "a16b83a6975cba8f37e86c33a551d629"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "352f67248c4ef44aa678a8205a9b1503"
  },
  {
    "url": "component/form/input.html",
    "revision": "fc1de35bb63969eceb85b91c3c164889"
  },
  {
    "url": "component/form/radio.html",
    "revision": "decde9d684b3f419a4d2e5831031086f"
  },
  {
    "url": "component/form/rate.html",
    "revision": "44f207693e17733d32b99a6ddfd27f87"
  },
  {
    "url": "component/form/rules.html",
    "revision": "f8a17aaac75dfd03c26d3e50ea036a92"
  },
  {
    "url": "component/form/switch.html",
    "revision": "c0d849d8545af43e71246c6544bd09c1"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "c767989abd09540b25f3f2f8d15adb1e"
  },
  {
    "url": "component/layout/album.html",
    "revision": "f0ecc96904ce897cf8f0e58e70a5c2df"
  },
  {
    "url": "component/layout/card.html",
    "revision": "75372029462987e3859dec0f71f746a4"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "1c4944154bb7939de39034ddc9066b7b"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "8fb1f5da28edfab3f50a3d5fe33f89ef"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "5abc370c070ddeed30385f5cf76b1abd"
  },
  {
    "url": "component/layout/list.html",
    "revision": "d19c29fa519241a864ff358905a127e3"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "7071e2dd34115485db7b17cbaec82cbf"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "6803e77bc4bee6874a759da4a1a495c3"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "cc9b6b04e9e686d40790facb790fdf59"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "b31a09c6d4999ed7d7cc47f965d1efc2"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "feebaf9a670bd40ee9b0af7fe79b2262"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "fb1c6164e495a0549cad164fe5f821c1"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "869be49cac40aa94bd2583fbeb51657d"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "1c1b51fd66434fb568c691c9f05463f3"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "d3ebdabc3448e2942a7008997ab38f03"
  },
  {
    "url": "component/response/message.html",
    "revision": "3d6f78b86e1d141978f0c2a28bc3859e"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "501db193acea3f228bdcd53820dff3dd"
  },
  {
    "url": "component/response/toast.html",
    "revision": "048ed4b099514e5aed3308cb3e038407"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "6f1924562f571f8f1c7de4bbec68866a"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "ddae4995b71ea1824eedebea8dc0412f"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "57a166622a25857c9ce6f407eeacca8d"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "ef519c6a884ea032b5e009c895d0a4f4"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "275316979aa667b6bc3c356f6c2943f4"
  },
  {
    "url": "component/view/badge.html",
    "revision": "129a70b8e395747a50ae96d82914a0bd"
  },
  {
    "url": "component/view/circle.html",
    "revision": "b960870edc05321a3ede28ec9076c1c7"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "cb3b21430257f5027651ed4a2f0ece77"
  },
  {
    "url": "component/view/loading.html",
    "revision": "777d4ded997870bbf0c910faca2f7d98"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "406e56c64ba209a940f8baaf98f5d8b5"
  },
  {
    "url": "component/view/mask.html",
    "revision": "cbb7f4d903bb9155e35e779d10de3077"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "450d46b1dfde1990375fd70cd0bf4600"
  },
  {
    "url": "component/view/popover.html",
    "revision": "f000a284054cbab632c1bea160a60677"
  },
  {
    "url": "component/view/popup.html",
    "revision": "eb50ee965b2000aafebfaad6e8a24ab0"
  },
  {
    "url": "component/view/progress.html",
    "revision": "bf295492c3a72a6ce62e6be665c9413b"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "f141a568117600dd838404976ef9de89"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "9e12e4d713f9998f2cfa5579152d340c"
  },
  {
    "url": "component/view/steps.html",
    "revision": "b9b6a2c571d4923cca99d10b0de9b083"
  },
  {
    "url": "component/view/tag.html",
    "revision": "8ec97739fa8e3c029ed4672bcf060ed5"
  },
  {
    "url": "filter/array.html",
    "revision": "d1f0b6204c3c0b859cba7b29e9319b81"
  },
  {
    "url": "filter/classnames.html",
    "revision": "3208f21006126d4111880256faa80e00"
  },
  {
    "url": "filter/index.html",
    "revision": "768e4b02946ffa67404f64969c7a07aa"
  },
  {
    "url": "filter/is.html",
    "revision": "b603cae5a5278e2477193bd1933b0ff9"
  },
  {
    "url": "filter/string.html",
    "revision": "b830f266d765bead8dffd41f0555f8ca"
  },
  {
    "url": "function/index.html",
    "revision": "67ccdc0129f58ed8d238885c60ed12cb"
  },
  {
    "url": "function/promisic.html",
    "revision": "ba99edae29448cc58b12ad532c123407"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "3e87bb7005acf19369be2652fc45355a"
  },
  {
    "url": "images/left-logo.png",
    "revision": "be71de6f165fe518a61b636b0f8afb85"
  },
  {
    "url": "images/mini-program-code.jpg",
    "revision": "342f44d97b4878d1319cd1e0158b5966"
  },
  {
    "url": "index.html",
    "revision": "78f297e5891d984551e53fb915c73e9d"
  },
  {
    "url": "js/highlight.js",
    "revision": "1e6d77c2d9fb5a775f3b813536393a6b"
  },
  {
    "url": "screenshots/album/image1.jpeg",
    "revision": "19f6f691061a258a899fc036bc02d075"
  },
  {
    "url": "screenshots/album/image2.jpeg",
    "revision": "99f9a5b92b79fafe14d92966725fe619"
  },
  {
    "url": "screenshots/album/image3.jpeg",
    "revision": "36fba818bcc1be28ebec5ac8aca49fd7"
  },
  {
    "url": "screenshots/arc-popup/1.png",
    "revision": "405c9ae4e51a604ad45cade1732a8a98"
  },
  {
    "url": "screenshots/arc-popup/2.png",
    "revision": "d95a2a37ecf77b2fd9a1c41ce67c969c"
  },
  {
    "url": "screenshots/arc-popup/3.png",
    "revision": "0ff5e5b2f0d9573eed6cfc069efb3ab7"
  },
  {
    "url": "screenshots/arc-popup/4.png",
    "revision": "52107a32f463159369142a18e8198fc9"
  },
  {
    "url": "screenshots/arc-popup/5.png",
    "revision": "47b0b345d6dfc541028c85808124d68c"
  },
  {
    "url": "screenshots/arc-popup/6.png",
    "revision": "712955124766189ea46f016e6efe08e0"
  },
  {
    "url": "screenshots/arc-popup/7.png",
    "revision": "51f32dd0e673e87ae9e830a1cd78f03d"
  },
  {
    "url": "screenshots/arc-popup/8.png",
    "revision": "c9fb1bb9088a9026b5700ecb62cb700a"
  },
  {
    "url": "screenshots/avatar/1.png",
    "revision": "2c0cafd1211287ab9ad2dc0e04cd7f99"
  },
  {
    "url": "screenshots/avatar/2.png",
    "revision": "3dad3a7d8992b49f8b21338773da42ba"
  },
  {
    "url": "screenshots/avatar/3.png",
    "revision": "b5cab5019dfaa780dabe12e87c979ddc"
  },
  {
    "url": "screenshots/avatar/4.png",
    "revision": "d54656eb56414851bd0d09da889f83d1"
  },
  {
    "url": "screenshots/avatar/5.png",
    "revision": "4d4f3215a442a2d1a276771fca1fc69f"
  },
  {
    "url": "screenshots/avatar/6.png",
    "revision": "afc45c11c78d2e07d59e902b4d8b61ba"
  },
  {
    "url": "screenshots/badge/1.png",
    "revision": "382eacc9661e24ffaad91939f57cde9f"
  },
  {
    "url": "screenshots/badge/2.png",
    "revision": "3c52f536bc29175e2b57676b8f98a6c0"
  },
  {
    "url": "screenshots/button/1.png",
    "revision": "04eaa7a455836b9430d804a16d3eee33"
  },
  {
    "url": "screenshots/button/2.png",
    "revision": "6ef32a7f621b314bdaeb9610545e13ae"
  },
  {
    "url": "screenshots/button/3.png",
    "revision": "df03ce12fdc7af5a6a86134ee5b50ca9"
  },
  {
    "url": "screenshots/button/4.png",
    "revision": "933ee45201d677d002336104209d88a1"
  },
  {
    "url": "screenshots/button/5.png",
    "revision": "6f9b7502529f5bb45ef965d645df7417"
  },
  {
    "url": "screenshots/button/6.png",
    "revision": "8a9ae66badf043c19c65be586c25dd0f"
  },
  {
    "url": "screenshots/button/7.png",
    "revision": "3fc37ec8b29052422188dabf12eaf4c7"
  },
  {
    "url": "screenshots/button/8.png",
    "revision": "5a276ae9965b4aba775335569d849487"
  },
  {
    "url": "screenshots/button/9.png",
    "revision": "a689818ec6804642acc3fca922c64bc0"
  },
  {
    "url": "screenshots/card/image1.png",
    "revision": "9038f35882d7d32d6d01be1ea4e78ad0"
  },
  {
    "url": "screenshots/card/image2.png",
    "revision": "5e2180190feb2620401b89208ee96bf9"
  },
  {
    "url": "screenshots/card/image3.png",
    "revision": "28d052078963621eb3028c5fd2d9ab49"
  },
  {
    "url": "screenshots/card/image4.png",
    "revision": "4d54b843d8afe0a13b378c3980016ab7"
  },
  {
    "url": "screenshots/card/image5.png",
    "revision": "d9bff0d60400d58ec7dd65d54f1f1875"
  },
  {
    "url": "screenshots/card/image6.png",
    "revision": "ea4c215f75d37c4f778a87f7904dc6e6"
  },
  {
    "url": "screenshots/collapse/collapse-accordion-case.gif",
    "revision": "cae6ea99b1621b3963c17d41b106009b"
  },
  {
    "url": "screenshots/collapse/collapse-base-case.gif",
    "revision": "25cea2f4f7420c86dbcfa6413fe457e7"
  },
  {
    "url": "screenshots/collapse/collapse-custom-title.jpg",
    "revision": "f838cd121205e7dd0de234295988dff0"
  },
  {
    "url": "screenshots/countdown/1.png",
    "revision": "56b9f07c4c067533df5f62a00290b261"
  },
  {
    "url": "screenshots/countdown/2.png",
    "revision": "cbe591d5b150e34c3fd50563147777b6"
  },
  {
    "url": "screenshots/countdown/3.png",
    "revision": "dfa0b9ae542f16505fee13b3c1d43a0c"
  },
  {
    "url": "screenshots/countdown/4.png",
    "revision": "abeba1477b06369ecd5fd18e6aa9cc7e"
  },
  {
    "url": "screenshots/counter/1.png",
    "revision": "b24cf41f0c1e5ce6dcc573b9145de950"
  },
  {
    "url": "screenshots/counter/2.png",
    "revision": "dd29c0887125743b5468d48bfe69a0da"
  },
  {
    "url": "screenshots/counter/3.png",
    "revision": "37e60af5a9f7a3695a2138e84fffadff"
  },
  {
    "url": "screenshots/dialog/1.jpg",
    "revision": "6572fa1cfa109e72ab3a8906f678df9c"
  },
  {
    "url": "screenshots/dialog/2.jpg",
    "revision": "5932716687961abb5f3be86b75cb830a"
  },
  {
    "url": "screenshots/dialog/3.jpg",
    "revision": "8e2041cb6f243f3afda1f89acfa90fba"
  },
  {
    "url": "screenshots/dialog/4.jpg",
    "revision": "25558ac69932a24b7f65ef6d09101fa8"
  },
  {
    "url": "screenshots/form/image1.png",
    "revision": "44a3064244f9d074bca6aa1418b31f69"
  },
  {
    "url": "screenshots/form/image2.png",
    "revision": "38bdb959ec1f3dcd0c4582e9ec8b51e4"
  },
  {
    "url": "screenshots/form/image3.png",
    "revision": "96baefbb9da403db28fefc2cd93aea48"
  },
  {
    "url": "screenshots/form/image4.png",
    "revision": "da791b8b64d43f135e43e6f080a88593"
  },
  {
    "url": "screenshots/form/image5.png",
    "revision": "5a34228c0c5da647ae1b3eb8710666fb"
  },
  {
    "url": "screenshots/grid/image1.png",
    "revision": "e941daec641c2f8d82b0088f240573bd"
  },
  {
    "url": "screenshots/grid/image2.png",
    "revision": "4ae1b85b23bef8c5f34c70cafd016b24"
  },
  {
    "url": "screenshots/grid/image3.png",
    "revision": "57aa7f4b42042e276c2ec24872a46860"
  },
  {
    "url": "screenshots/icon/1.png",
    "revision": "b7f962fa4c87846021de25a2c27bbc32"
  },
  {
    "url": "screenshots/icon/2.png",
    "revision": "a57a4705e0979809d09ca3eb4bd58140"
  },
  {
    "url": "screenshots/icon/3.png",
    "revision": "d7832e3cd2058fc6d7a22dc45cae18ba"
  },
  {
    "url": "screenshots/icon/4.png",
    "revision": "a14b67c8e44543c37f7f8a6a98a7c059"
  },
  {
    "url": "screenshots/icon/5.jpg",
    "revision": "627539057c04ad8affa62da598386454"
  },
  {
    "url": "screenshots/image-clipper/demo1.png",
    "revision": "762f1d414a219c659161f286bca3ea2b"
  },
  {
    "url": "screenshots/image-clipper/demo2.png",
    "revision": "f668764d9d48885a83c4a20639c28284"
  },
  {
    "url": "screenshots/image-clipper/demo3.png",
    "revision": "1aefaf1063e00bf5a421d450d7dbd8b0"
  },
  {
    "url": "screenshots/image-clipper/image-clipper.png",
    "revision": "a26e8b394cc0980bacf416d3ad81aa3d"
  },
  {
    "url": "screenshots/image-picker/image1.jpg",
    "revision": "1ee878ccba4cf94f2977a245df751c39"
  },
  {
    "url": "screenshots/image-picker/image2.jpg",
    "revision": "dd131b063942ff48ac097993d6fe386f"
  },
  {
    "url": "screenshots/image-picker/image3.jpg",
    "revision": "9bdebc64a7a8b6cde2368521bca6d6de"
  },
  {
    "url": "screenshots/index-list/basic-concept.png",
    "revision": "c8b873e144c0c32d1d323fdd268cbc32"
  },
  {
    "url": "screenshots/input/image1.png",
    "revision": "870691aa8b2bb57fbbf7566ff80bcdad"
  },
  {
    "url": "screenshots/input/image2.png",
    "revision": "40c70942f28efdce1dcb59b392f8a9b9"
  },
  {
    "url": "screenshots/input/image3.png",
    "revision": "2e176a30b685b9c4d2154fc34a93bc98"
  },
  {
    "url": "screenshots/input/image4.png",
    "revision": "0ad86871d3ff6bbaa37417cf54b21b3b"
  },
  {
    "url": "screenshots/input/image5.png",
    "revision": "1d7d2810345766e71f9b9383d5168eaa"
  },
  {
    "url": "screenshots/input/image6.png",
    "revision": "eb23b7be70b3aed76cb1c498546a380d"
  },
  {
    "url": "screenshots/input/image7.png",
    "revision": "1c9e38f6b6b29d794031f313d9ac6046"
  },
  {
    "url": "screenshots/input/image8.png",
    "revision": "5c4f7473111a08378c85d11603beafa5"
  },
  {
    "url": "screenshots/list/image1.png",
    "revision": "a402a6ede7d1e2a8cf308a52bf968a1b"
  },
  {
    "url": "screenshots/list/image2.png",
    "revision": "b7d838fbe2ab0cbd43fc63a91c453c13"
  },
  {
    "url": "screenshots/list/image3.png",
    "revision": "4247db589635ed821f884e67e5036856"
  },
  {
    "url": "screenshots/list/image4.png",
    "revision": "5b7757a829504c6dadf8ec12d5257619"
  },
  {
    "url": "screenshots/list/image5.png",
    "revision": "7686716486829caa2e0db5f71c0058dd"
  },
  {
    "url": "screenshots/load-more/1.jpg",
    "revision": "f794f1cdf85ae32a5d2a540538069c8a"
  },
  {
    "url": "screenshots/load-more/2.jpg",
    "revision": "ca2d6095b6eeb2522345bea6d99f1ada"
  },
  {
    "url": "screenshots/load-more/3.jpg",
    "revision": "7511ff95db81ac5ad3f23d7a97097806"
  },
  {
    "url": "screenshots/loading/1.png",
    "revision": "3b8bf98f51e204bfb12bd70cf26122b8"
  },
  {
    "url": "screenshots/loading/2.png",
    "revision": "8c55211cd15ef01fbfd37628bf299c85"
  },
  {
    "url": "screenshots/loading/3.png",
    "revision": "07e3d209dfd0e32e0422f64be278f0b1"
  },
  {
    "url": "screenshots/loading/4.png",
    "revision": "c3cae680b5eb5dd8efea6217197a18e6"
  },
  {
    "url": "screenshots/loading/5.jpg",
    "revision": "3037f10e2c0bbc34c065fcbfd567c103"
  },
  {
    "url": "screenshots/mask/1.jpg",
    "revision": "f9898f32283322679966e97dc8b4f669"
  },
  {
    "url": "screenshots/mask/2.jpg",
    "revision": "efafc595490a84a2d80f31b3271a0e2b"
  },
  {
    "url": "screenshots/mask/3.jpg",
    "revision": "581d8d14968fcaa5d955e11ff0f62e20"
  },
  {
    "url": "screenshots/message/1.png",
    "revision": "8f8545faa3cf9eb9e6e2da4eed277044"
  },
  {
    "url": "screenshots/message/2.png",
    "revision": "ad7fc0b208e304153c6136d8a17d48ce"
  },
  {
    "url": "screenshots/navigation-bar/1.png",
    "revision": "69904aabd58733fd878033e8b1979ca6"
  },
  {
    "url": "screenshots/notice-bar/1.png",
    "revision": "cca3a638ba6ac1faffceb6fa00cac8ed"
  },
  {
    "url": "screenshots/notice-bar/2.png",
    "revision": "e14b1d587345f51881a155e4aebc59fe"
  },
  {
    "url": "screenshots/notice-bar/3.png",
    "revision": "598ed25d464962ccdf595ea281360467"
  },
  {
    "url": "screenshots/popup/1.png",
    "revision": "749a94b8c3574f7655e993df6e150a07"
  },
  {
    "url": "screenshots/popup/2.png",
    "revision": "bcedbcbcbf9f93b06b4e0ce234a66437"
  },
  {
    "url": "screenshots/popup/3.png",
    "revision": "11cd699b8e2aa7385e023b43244eafa8"
  },
  {
    "url": "screenshots/price/1.jpg",
    "revision": "fd1f3998e89f39a6b9c0e5076880f314"
  },
  {
    "url": "screenshots/price/2.png",
    "revision": "7f390b583254fccf6750b351d3924dd8"
  },
  {
    "url": "screenshots/price/3.jpg",
    "revision": "fd1f3998e89f39a6b9c0e5076880f314"
  },
  {
    "url": "screenshots/progress/1.png",
    "revision": "6d2259b74e8eb8f34ee21b2dbe80af40"
  },
  {
    "url": "screenshots/progress/2.png",
    "revision": "ecc833029b735a5238ad0c6b48503cec"
  },
  {
    "url": "screenshots/progress/3.png",
    "revision": "6d2259b74e8eb8f34ee21b2dbe80af40"
  },
  {
    "url": "screenshots/progress/4.png",
    "revision": "97c87cfbc0a4e4f6c34a782fdc0d6510"
  },
  {
    "url": "screenshots/progress/5.png",
    "revision": "aa9bfe72341c6cec55820caa8cd394aa"
  },
  {
    "url": "screenshots/progress/6.png",
    "revision": "ed8d0345373fa5608c009110dab0b65a"
  },
  {
    "url": "screenshots/progress/7.png",
    "revision": "015e2842c05205c572e766a994e79a5a"
  },
  {
    "url": "screenshots/progress/8.png",
    "revision": "68988cf6580dbfc6302a6df8fa529d3f"
  },
  {
    "url": "screenshots/rate/image1.png",
    "revision": "1687398c1907c9f943ef25c8f2b7f76b"
  },
  {
    "url": "screenshots/rate/image2.png",
    "revision": "9a1c248d46556f41a15fd13f8b29cf88"
  },
  {
    "url": "screenshots/rate/image3.png",
    "revision": "5768c6890573c1ad77641d8001f78751"
  },
  {
    "url": "screenshots/rate/image4.png",
    "revision": "7bb88793b50dc4b94bf5d8240e11a82b"
  },
  {
    "url": "screenshots/rate/image5.png",
    "revision": "6d356bb1c73c65dfee75c878d12f6832"
  },
  {
    "url": "screenshots/rate/image6.png",
    "revision": "f586cb01e109e03bfa2ac1d374b999e1"
  },
  {
    "url": "screenshots/rate/image7.png",
    "revision": "b297428070e3d03cc1363a4492fc20b1"
  },
  {
    "url": "screenshots/rate/image8.png",
    "revision": "6ab78b75b4d360c0c102828030b957a7"
  },
  {
    "url": "screenshots/readme/lin-ui小程序.jpg",
    "revision": "342f44d97b4878d1319cd1e0158b5966"
  },
  {
    "url": "screenshots/readme/qq新群.png",
    "revision": "9641ad94ec8d57741bbbde74e02a8b98"
  },
  {
    "url": "screenshots/readme/公众号.jpg",
    "revision": "6ba5747f774f4b6e2d4d7f6acdba7814"
  },
  {
    "url": "screenshots/readme/风袖.jpg",
    "revision": "f89e474cf0c196a2e57e8032e04f7712"
  },
  {
    "url": "screenshots/search-bar/1.png",
    "revision": "55cabb17a1e78a69d6bc6a7bd93f97cb"
  },
  {
    "url": "screenshots/search-bar/2.jpg",
    "revision": "13b481302e4242271d84b388346b5f30"
  },
  {
    "url": "screenshots/search-bar/3.png",
    "revision": "fbe2e984d332891b83fb6f9973197aa2"
  },
  {
    "url": "screenshots/search-bar/4.png",
    "revision": "3d707c0ad0e13bc788cd2765166f0914"
  },
  {
    "url": "screenshots/segment/1.jpeg",
    "revision": "2e7fae31e45535ce52870f71bf895833"
  },
  {
    "url": "screenshots/segment/2.jpeg",
    "revision": "ca96f3384530c04ddadde6bc54515784"
  },
  {
    "url": "screenshots/segment/3.jpeg",
    "revision": "1fc6d1ca1574d780771fa8434f59da46"
  },
  {
    "url": "screenshots/segment/bottom.png",
    "revision": "86646c3fbe692e2f0b37d86ecd93ae3b"
  },
  {
    "url": "screenshots/segment/left.png",
    "revision": "fa17f505a11b26c6c5115b80a95c2d9a"
  },
  {
    "url": "screenshots/segment/right.png",
    "revision": "b9f9ee4bb2a5d62779c35313a6e849dc"
  },
  {
    "url": "screenshots/segment/top.png",
    "revision": "8b6fbcf1f66a5dda4fd3b7a810d9522c"
  },
  {
    "url": "screenshots/skeleton/1.png",
    "revision": "9144ff1be4f82a7651538ec103a67efb"
  },
  {
    "url": "screenshots/skeleton/2.png",
    "revision": "074d2aaf552135f54ec036f7fc82fad9"
  },
  {
    "url": "screenshots/skeleton/3.png",
    "revision": "4e62d2e854da02e3baa543dda0472bbf"
  },
  {
    "url": "screenshots/slide-view/1.jpg",
    "revision": "d9dd583009dd17f533077671968980a5"
  },
  {
    "url": "screenshots/slide-view/2.jpg",
    "revision": "e6bf1a4be3d5a9b0a94541265abbf368"
  },
  {
    "url": "screenshots/slide-view/3.jpg",
    "revision": "4c235a726374f8757334e58ec1c587e8"
  },
  {
    "url": "screenshots/start/YUdIR2E3ME5weEVCVEZMbkRGRHZaRWdTWE9UMzd1Y3ZkN2dHUjBHY2xSS1daZjl0QTkvOVVBPT0.png",
    "revision": "3f83002233ab8eb79ffc2a2cbc972b90"
  },
  {
    "url": "screenshots/start/YUdIR2E3ME5weEZEa3ErKzdJRGVNckFIWUZrS0ZKeWNOUnpxSXh5MlRKQU9Jakh6WnRXenVRPT0.png",
    "revision": "64d624eeecb518fe603a58288ca5c432"
  },
  {
    "url": "screenshots/steps/1.png",
    "revision": "17c1adf64e24b60328ec429829f7552e"
  },
  {
    "url": "screenshots/steps/2.png",
    "revision": "8eb5012326fe5f49a959530efcb30f8c"
  },
  {
    "url": "screenshots/steps/3.png",
    "revision": "a71794e0ed7530a84f0fd0ec83bdd9ba"
  },
  {
    "url": "screenshots/steps/4.png",
    "revision": "dfee8779eff00cd07f83425961437643"
  },
  {
    "url": "screenshots/steps/5.png",
    "revision": "cac8353d139e740f26b6c57f10df831b"
  },
  {
    "url": "screenshots/steps/6.png",
    "revision": "046bb24bfc19608830d768be31adb914"
  },
  {
    "url": "screenshots/steps/7.png",
    "revision": "9f332c4caa74ad38683a7e2196671382"
  },
  {
    "url": "screenshots/steps/8.png",
    "revision": "06a68f3bb78f859cb82c1c623a3bc98f"
  },
  {
    "url": "screenshots/tab-bar/1.png",
    "revision": "f0e1b88581d0eb52ea6ad64b49d70e07"
  },
  {
    "url": "screenshots/tab-bar/2.png",
    "revision": "7a14484c49e928122238be0f479db582"
  },
  {
    "url": "screenshots/tabs/1.png",
    "revision": "e001f57c9a4c76dcab5fe1008a818237"
  },
  {
    "url": "screenshots/tag/1.png",
    "revision": "9cd12ba33f503df7af99ab226c033ac3"
  },
  {
    "url": "screenshots/tag/2.png",
    "revision": "77b5499687383ac3838ab7b58a10a1ed"
  },
  {
    "url": "screenshots/tag/3.png",
    "revision": "d320cb1caa8b85d693cb6fcf22f7d577"
  },
  {
    "url": "screenshots/tag/4.png",
    "revision": "c06fa905e65ad9bee5501b06ed88f1d9"
  },
  {
    "url": "screenshots/tag/5.png",
    "revision": "3b8f0bfdca2ab3a66cf6298826ba93e9"
  },
  {
    "url": "screenshots/toast/1.jpg",
    "revision": "71dabb958cbb88a1ef67741918d6b81e"
  },
  {
    "url": "screenshots/toast/2.png",
    "revision": "16fd327bb1fb49c8a2f6cdd8c452a010"
  },
  {
    "url": "screenshots/toast/3.png",
    "revision": "64649752994baa28d4802af5ecad8c86"
  },
  {
    "url": "screenshots/toast/4.jpg",
    "revision": "0b2030a996cc9e2e689d6cb99aa4f49d"
  },
  {
    "url": "screenshots/toast/5.jpg",
    "revision": "ae9a593548e38c36be6a146d65c4a58b"
  },
  {
    "url": "start/class.html",
    "revision": "f864e50af38eb8801ba56d763e63219a"
  },
  {
    "url": "start/component.html",
    "revision": "d5b25d511ec9ac1e08a05d69127de466"
  },
  {
    "url": "start/contribute.html",
    "revision": "cc3e4e382105d42ca19493bf42623bc4"
  },
  {
    "url": "start/event.html",
    "revision": "a2b17a6758a2564bb2ff6ac40a5f2f7b"
  },
  {
    "url": "start/index.html",
    "revision": "c96a09a4cb8af02e8069ba87836e3023"
  },
  {
    "url": "start/open-function.html",
    "revision": "0e31b24e1db1899a0e50ecf058d57c1e"
  },
  {
    "url": "start/QA.html",
    "revision": "195ed807ffb1fd659d7b434f6a38686d"
  },
  {
    "url": "start/using.html",
    "revision": "45cc2f5efc1b33f9c0633618e1a7694d"
  },
  {
    "url": "start/wx.html",
    "revision": "624d9ab9bca7fecd04f0f0bae33f46b5"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
