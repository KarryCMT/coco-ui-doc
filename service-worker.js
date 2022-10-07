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
    "revision": "d32911884fcf35be60efc13eb5ad35ff"
  },
  {
    "url": "assets/css/0.styles.1afa462c.css",
    "revision": "1dab0e1049615ddaa79b96082ced405d"
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
    "url": "assets/js/39.71a23cf8.js",
    "revision": "c229f04b9094fd3a129b083c1e1dce6c"
  },
  {
    "url": "assets/js/4.2acdbfe0.js",
    "revision": "d6e4a71dd49ca48b29f00be355169df8"
  },
  {
    "url": "assets/js/40.bbd86e8f.js",
    "revision": "f3d33fa852bf9e9703f23c7b0339164b"
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
    "url": "assets/js/app.c2aa9efb.js",
    "revision": "9b92d10d64d9961481cafcab75ec0d1a"
  },
  {
    "url": "cli/index.html",
    "revision": "b96c9fcd0e9aea8a6dd20738303b9398"
  },
  {
    "url": "cli/introduce.html",
    "revision": "2794ecd6ed5046be230ee0d46546dc91"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "9d8c60a812cda5beabda47ac088941bf"
  },
  {
    "url": "component/basic/button.html",
    "revision": "443a36fd587997a67b8d42b02cd86c61"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "fec97bcc86ef321244b2deac8530e27c"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "b0da8ab5a6b0c09f2393867d1a9cd3f1"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "8d9913e060fa9b2e1614c0903aba038e"
  },
  {
    "url": "component/form/form.html",
    "revision": "869758222c48d444726a15a13462d5a3"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "478b0deb27ad1ff68b6c9686b3cd3834"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "6db64ae665845691cce201d8e8b31e49"
  },
  {
    "url": "component/form/input.html",
    "revision": "a49687366ccb84e2837f7248fa7a919a"
  },
  {
    "url": "component/form/radio.html",
    "revision": "e44c2e1292ec482289c89da56f58bf2f"
  },
  {
    "url": "component/form/rate.html",
    "revision": "43a70d49b06d5c7cff299b582401c0b6"
  },
  {
    "url": "component/form/rules.html",
    "revision": "86ce96104174ae900e20a68694e7f171"
  },
  {
    "url": "component/form/switch.html",
    "revision": "33b58e5761f5d2967957b3d504371af7"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "3c8b8af02c4318c210d38bf65dfcd007"
  },
  {
    "url": "component/layout/album.html",
    "revision": "d4bf800b0b0cd5a304f956e27a000bd0"
  },
  {
    "url": "component/layout/card.html",
    "revision": "0db2dab476e908c542e3099a0e2d00ec"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "7a30b05cfe20bb523f35d8c6243a3269"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "ebf96b347b45b8d03d9b8a05b3706760"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "d3b78fd379aed9d8cab48840d70bc332"
  },
  {
    "url": "component/layout/list.html",
    "revision": "88e42153980f49ea61715946291d32ff"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "69abe32e92e8bb9744cced6ba27226ab"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "bd00600ff4d504bd5f2259f4dfef76ee"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "f41e0a668555e3a88403df7803db4226"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "3ac29ceaeab46e901051b38ae80300f8"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "a474e87b1475b61d438eaf9927dea06c"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "7014417cf383492ce242b6f11fbdcfb8"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "8d270d576d213c68ed654c99b8c80cd5"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "165fbad2fc2b2c42310c580ecb0993dd"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "1641fe97ebc9b8e11d435ae0f1dddef0"
  },
  {
    "url": "component/response/message.html",
    "revision": "a10ea33f95b2dfc1ebf3add6bfc81203"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "be4bc1a6ed338ddbe7ea5605bc655651"
  },
  {
    "url": "component/response/toast.html",
    "revision": "3fd402733d064af694cffb62100c5f32"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "25c71d74770c0797ec00291517832979"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "c7bfd9e00153fea8d949f59ec23e5cd2"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "c8b9ca1a3babc55a302bbf8802f4dc3e"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "0f9059d70e8db3f6c20ce271f7e6764b"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "ea7e8c2aef2b573820523cd5355622ef"
  },
  {
    "url": "component/view/badge.html",
    "revision": "88ef595356b6dd59f8f4821958694b98"
  },
  {
    "url": "component/view/circle.html",
    "revision": "cbf4bbd95fc24904bee7877f8aae604e"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "60e909523c1bd058d29f62a803685bbd"
  },
  {
    "url": "component/view/loading.html",
    "revision": "8ea73d1a9ae435c03e3ec070a0113188"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "3c027b4318926e8c1e64bd3164d37f69"
  },
  {
    "url": "component/view/mask.html",
    "revision": "77bc3f49cd35295a7d94ebba406fae61"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "5558e945440c6b89f5f5a8e688957f74"
  },
  {
    "url": "component/view/popover.html",
    "revision": "5b913450ee2ef93217d86fc0d960ff94"
  },
  {
    "url": "component/view/popup.html",
    "revision": "58632f5e7e20e8a2f1847df149e954f5"
  },
  {
    "url": "component/view/progress.html",
    "revision": "7507579780018a6501261058cb0f89bf"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "b335cbba13d45f25ff770aaa8602f48b"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "b48176d207c1105232a7f0a6bbd75ed6"
  },
  {
    "url": "component/view/steps.html",
    "revision": "c4fb6e1f309fe39c092ee23a9d2d9df5"
  },
  {
    "url": "component/view/tag.html",
    "revision": "f631a03c612b60c59d51c8c619146176"
  },
  {
    "url": "filter/array.html",
    "revision": "393b2e226f6690b3fb1639591fceaa8b"
  },
  {
    "url": "filter/classnames.html",
    "revision": "e53474845625169829e7ad9cea05330b"
  },
  {
    "url": "filter/index.html",
    "revision": "0d2be135c9ac5533f44926584cdf5cf6"
  },
  {
    "url": "filter/is.html",
    "revision": "17401ff482f92ad58f1678598738b0cf"
  },
  {
    "url": "filter/string.html",
    "revision": "6d2aa79c72cc4d302a28b77cc2e81dca"
  },
  {
    "url": "function/index.html",
    "revision": "a35af9d13644cf17a3cb6c70a5b54e60"
  },
  {
    "url": "function/promisic.html",
    "revision": "50b7df9a2c68295c45198efe67069947"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "597e68933bc3bbb2027ee1124748a52a"
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
    "revision": "74953a5ea9f29c3842ecc9accdf2f119"
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
    "revision": "89bee93ecff7dcae51c6fd993b7eb5da"
  },
  {
    "url": "start/component.html",
    "revision": "0cb24ca903fe33e205f85839dee64891"
  },
  {
    "url": "start/contribute.html",
    "revision": "3b39134fe1eba0a36f03f63e4e8f79ad"
  },
  {
    "url": "start/event.html",
    "revision": "377f6b94ceeaf3709143aea7f344fcba"
  },
  {
    "url": "start/index.html",
    "revision": "cb317897597a3e49b70f7ecf6b42aa02"
  },
  {
    "url": "start/open-function.html",
    "revision": "63867e2e45e1d35b0754c540440251a6"
  },
  {
    "url": "start/QA.html",
    "revision": "6dce80aed54b132f44e8b39602f2ab84"
  },
  {
    "url": "start/using.html",
    "revision": "2c142eea6058199eb1a3a3b925478c05"
  },
  {
    "url": "start/wx.html",
    "revision": "f4ed1a915704554b2c4f299371907be5"
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
