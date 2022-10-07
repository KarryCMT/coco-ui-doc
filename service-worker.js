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
    "revision": "24e7e1fe0ccbceb13923f690fea15c04"
  },
  {
    "url": "assets/css/0.styles.b9db1e34.css",
    "revision": "302bbca983ad7f13fd4f9b77afa15c4b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2788776d.js",
    "revision": "bc832cd8c61e6dcb0bf9a678682e9243"
  },
  {
    "url": "assets/js/11.57e3ffff.js",
    "revision": "d0d84c92074ad0031145ae6042324c05"
  },
  {
    "url": "assets/js/12.b046fd7c.js",
    "revision": "83cf55251d22b3df8d646cbd4ff55056"
  },
  {
    "url": "assets/js/13.e5f26613.js",
    "revision": "ccc82a5aba6f0f8ff3aa3df250b02473"
  },
  {
    "url": "assets/js/14.7041f51c.js",
    "revision": "1173ebd7d62d776677d9b9f2d9f49c51"
  },
  {
    "url": "assets/js/15.015ae1b1.js",
    "revision": "f67ba672607d26943900c14ee9759602"
  },
  {
    "url": "assets/js/16.9fc55212.js",
    "revision": "91e8207c490b0e1536a74c8354a27ea8"
  },
  {
    "url": "assets/js/17.898e6727.js",
    "revision": "21e90207fa95b026e3a553f9227a8dac"
  },
  {
    "url": "assets/js/18.051b4975.js",
    "revision": "57483f68721dac61387e74b48752ba56"
  },
  {
    "url": "assets/js/19.f0c2d62b.js",
    "revision": "b442003b5886d4dde6b890d8cc9b2949"
  },
  {
    "url": "assets/js/2.7cdbe9aa.js",
    "revision": "25a7aa3d1887704ada155695c0d70553"
  },
  {
    "url": "assets/js/20.4634f722.js",
    "revision": "2caceb6258ea475be9ebee98fd668e6e"
  },
  {
    "url": "assets/js/21.1b0799b5.js",
    "revision": "5111d712ea1b92aa760500750c077c11"
  },
  {
    "url": "assets/js/22.f8468083.js",
    "revision": "46331f9940d12a6929acc4e2b9e4d679"
  },
  {
    "url": "assets/js/23.c01c877e.js",
    "revision": "ab502b24c210af1f9a0eb10bc1508742"
  },
  {
    "url": "assets/js/24.bf75b7c4.js",
    "revision": "fee3f26914d81bcc32a4bace5287d1d7"
  },
  {
    "url": "assets/js/25.8ab146e3.js",
    "revision": "37c20c1d1186661ca8c7e205144bb85f"
  },
  {
    "url": "assets/js/26.852a6901.js",
    "revision": "25d3dda48bcf2bdfe3d3bacdeb181fdf"
  },
  {
    "url": "assets/js/27.48e1cbe9.js",
    "revision": "c4ef442ae8a2f7dde9bfb2677f6fe241"
  },
  {
    "url": "assets/js/28.c987f832.js",
    "revision": "901ec0c940c47d95dc96eab8e314b6cc"
  },
  {
    "url": "assets/js/29.773f432b.js",
    "revision": "8d0a650b59c24ffd1ff50b57b6f7f5e4"
  },
  {
    "url": "assets/js/3.43e67a98.js",
    "revision": "61f307afd0ce7bb32b09910abf81d4b7"
  },
  {
    "url": "assets/js/30.4bef629d.js",
    "revision": "8125e9cc8443c8de3b02be8a51d63ed4"
  },
  {
    "url": "assets/js/31.19ca6820.js",
    "revision": "16e876a1ad4fb868561f61a4c29b57fd"
  },
  {
    "url": "assets/js/32.991723ec.js",
    "revision": "9f3b303b0f21c3c666e65d982d4fe773"
  },
  {
    "url": "assets/js/33.ddc366ab.js",
    "revision": "b69eb0ba79dda91c7cbe24d4d5cc496e"
  },
  {
    "url": "assets/js/34.5b361f2d.js",
    "revision": "778129ce8e832fe3cc0633ae7300a6cd"
  },
  {
    "url": "assets/js/35.9a382338.js",
    "revision": "7b285791ff166dd1623b429b649b9f92"
  },
  {
    "url": "assets/js/36.8884a443.js",
    "revision": "4f868fac46b3c06d31a71b4cfda9954d"
  },
  {
    "url": "assets/js/37.bd67884e.js",
    "revision": "f4cc392d16c22eb732045f4ad30cd869"
  },
  {
    "url": "assets/js/38.a485348b.js",
    "revision": "ee94b40bd2e51ab45ceb546d4caf859e"
  },
  {
    "url": "assets/js/39.2d00a415.js",
    "revision": "037904c85d1d45566177237ade295daa"
  },
  {
    "url": "assets/js/4.3a2abd55.js",
    "revision": "f091b588e8923aeb1e80a1c25c6a9712"
  },
  {
    "url": "assets/js/40.13f8f6b7.js",
    "revision": "72dffc17873a58d4df01b6d93a79d763"
  },
  {
    "url": "assets/js/41.6c2196b8.js",
    "revision": "6490c3fffd0782544877f563958bcfe3"
  },
  {
    "url": "assets/js/42.4d2b9307.js",
    "revision": "8e648dece4b56bf201a48a5482b6c2a9"
  },
  {
    "url": "assets/js/43.637fa1eb.js",
    "revision": "e229d8c984342d6c6d888e4815fa3918"
  },
  {
    "url": "assets/js/44.375ff632.js",
    "revision": "b763696d63d3d92fb03883e57065ae89"
  },
  {
    "url": "assets/js/45.1fd93c3d.js",
    "revision": "4b2577de4556097d20e76e8d7a6f7c04"
  },
  {
    "url": "assets/js/46.2ae254d3.js",
    "revision": "ad62adc7d1c448034a72e4dcb9ca6594"
  },
  {
    "url": "assets/js/47.5c70b895.js",
    "revision": "b2e1dd1da863ef4eb77228c86518fb9a"
  },
  {
    "url": "assets/js/48.ab0f5d4f.js",
    "revision": "728540a5498cbee1636411cf5b810a76"
  },
  {
    "url": "assets/js/49.891fb22b.js",
    "revision": "0f5f5e42f4a4c1d826d3e9ed9698a8d2"
  },
  {
    "url": "assets/js/5.bb64fdf1.js",
    "revision": "77bc600ffb2cbb822937b24e7b40671a"
  },
  {
    "url": "assets/js/50.c578d8e3.js",
    "revision": "6ed0a027c2b2904e20a687251a66e8a8"
  },
  {
    "url": "assets/js/51.4f39775b.js",
    "revision": "17103d325cd2f18534a2ad49da636c54"
  },
  {
    "url": "assets/js/52.312f556e.js",
    "revision": "a85f59ddacc9b7320d1a9425252105c9"
  },
  {
    "url": "assets/js/53.984db6b0.js",
    "revision": "373cd18e1c3bcba823b6f42e501006e5"
  },
  {
    "url": "assets/js/54.9f332eff.js",
    "revision": "50f6e6ca648760fc1861b6d7ea75a2e1"
  },
  {
    "url": "assets/js/55.87028f1b.js",
    "revision": "388f024e7ba5f9e8b0ede18f68290e48"
  },
  {
    "url": "assets/js/56.643ef5cb.js",
    "revision": "b03b6ce13ceaa9d2a7a17306a9d4d707"
  },
  {
    "url": "assets/js/57.0d02bf2a.js",
    "revision": "fbe06099ec90935bd0774822f849c525"
  },
  {
    "url": "assets/js/58.d1e0b0ae.js",
    "revision": "90c210dca2b37d6d8c0d9df9aad98af8"
  },
  {
    "url": "assets/js/59.9f6a25e9.js",
    "revision": "a291c04ed662a88aaffc8a4702bb857b"
  },
  {
    "url": "assets/js/6.b36f9542.js",
    "revision": "b74eef43faf02bb4a015f0737d1f7677"
  },
  {
    "url": "assets/js/60.a1902eac.js",
    "revision": "5f9a94771eb39a014408fa2bbd81495d"
  },
  {
    "url": "assets/js/61.18bd75ee.js",
    "revision": "08a6148e044205fd737de4a1179439c4"
  },
  {
    "url": "assets/js/62.a173ae26.js",
    "revision": "d9a5136293676d6babebaa52f6d781c6"
  },
  {
    "url": "assets/js/63.bfb9ec1c.js",
    "revision": "941985daa3ab373ef85f212b5ed2fd66"
  },
  {
    "url": "assets/js/64.3bc1c662.js",
    "revision": "7008d8c107ede2b528be8fb2c9573f24"
  },
  {
    "url": "assets/js/65.dbd31705.js",
    "revision": "3416e865505b0f1b431c059d7cb3770b"
  },
  {
    "url": "assets/js/66.fa1925e6.js",
    "revision": "9ae89ee3278881301d53983effb893d3"
  },
  {
    "url": "assets/js/67.1407c2e8.js",
    "revision": "4c06e1128c2c361f22a826d2af13d39c"
  },
  {
    "url": "assets/js/68.b1bbf788.js",
    "revision": "fe80203a2df59c738ddc5dac0723b6a3"
  },
  {
    "url": "assets/js/69.dde0b153.js",
    "revision": "ccd828776eabaad1e022fda04380d13f"
  },
  {
    "url": "assets/js/7.2d8c6aad.js",
    "revision": "38570773febbc07297aa840efa905637"
  },
  {
    "url": "assets/js/70.ebba6813.js",
    "revision": "4f3d39e5bd0584e41aa7860476564a42"
  },
  {
    "url": "assets/js/71.99047eae.js",
    "revision": "b0a4b9e2bc5808bd3cb49c18dd8344de"
  },
  {
    "url": "assets/js/72.a12bbf24.js",
    "revision": "60ef46b36d41406aecd4abfd83852b65"
  },
  {
    "url": "assets/js/73.b5326289.js",
    "revision": "d02412e416c6cf387ce9efed04761262"
  },
  {
    "url": "assets/js/74.11b2ba94.js",
    "revision": "2405e7f9b59547d123d378dc367b6ded"
  },
  {
    "url": "assets/js/75.bedb1c10.js",
    "revision": "6c8be9e227596d0e087178d03d8ce650"
  },
  {
    "url": "assets/js/76.a51a4aa8.js",
    "revision": "31de8d132645317faf1cf44a09cbc4bd"
  },
  {
    "url": "assets/js/77.7ab44e58.js",
    "revision": "6354ef5218af8fc9670c4cb0ed272b46"
  },
  {
    "url": "assets/js/78.7d1ea390.js",
    "revision": "f4cfa3d3753b4a5263d20e35143b6818"
  },
  {
    "url": "assets/js/79.f4ef1dec.js",
    "revision": "b904ae25a4fb5a29282583b9a2926c50"
  },
  {
    "url": "assets/js/8.402e3d98.js",
    "revision": "3b8d7c2503a9af153563213628b2c985"
  },
  {
    "url": "assets/js/80.09b65273.js",
    "revision": "7cbb9aea3bfe0032cc2b244d12251b9a"
  },
  {
    "url": "assets/js/81.d1a528ea.js",
    "revision": "2be1b0845067c1255e193ba82b352950"
  },
  {
    "url": "assets/js/82.43d5700e.js",
    "revision": "edc38416950dda0b4914d5151c60a89d"
  },
  {
    "url": "assets/js/83.aed308c8.js",
    "revision": "a5112c6fe2ae7def5c56d1ac38008d77"
  },
  {
    "url": "assets/js/84.55a1422b.js",
    "revision": "69753b15e51bf63766ef6f1133e14734"
  },
  {
    "url": "assets/js/9.42f77084.js",
    "revision": "874acf26cef8eb81e4150d2977c27881"
  },
  {
    "url": "assets/js/app.a50b656c.js",
    "revision": "5b83279550b632f9b568daba788da5b9"
  },
  {
    "url": "cli/index.html",
    "revision": "c421cfe832562aff89f4bd2d58d26f97"
  },
  {
    "url": "cli/introduce.html",
    "revision": "edfeb5565465357b15db5c5cf66c92e1"
  },
  {
    "url": "component/animation/transition.html",
    "revision": "46ef8a40ffd91efc6df89deb3bd94375"
  },
  {
    "url": "component/basic/button.html",
    "revision": "d14b667ee042893eb1c0bd9b5839d0ba"
  },
  {
    "url": "component/basic/icon.html",
    "revision": "7c2dab811da12c9480087b7ff3cd460f"
  },
  {
    "url": "component/form/calendar.html",
    "revision": "4d8dfe9f19c928d8a5c573929a83319f"
  },
  {
    "url": "component/form/checkbox.html",
    "revision": "b1aa33a730593949f1e70df3210381ff"
  },
  {
    "url": "component/form/form.html",
    "revision": "7ce03393b2a867116ca1c86acaaa7f01"
  },
  {
    "url": "component/form/image-clipper.html",
    "revision": "255ce3dd1a3af3ad635664872f8b691a"
  },
  {
    "url": "component/form/image-picker.html",
    "revision": "8b9007a1c18bfe5e8f9d9615e26752c6"
  },
  {
    "url": "component/form/input.html",
    "revision": "950d5aa07eeae86f67b82f576c9676ba"
  },
  {
    "url": "component/form/radio.html",
    "revision": "7680cc34f63b9636163275093c8d574c"
  },
  {
    "url": "component/form/rate.html",
    "revision": "d9ac7552b21fff0bf54938742738b77a"
  },
  {
    "url": "component/form/rules.html",
    "revision": "4a2c09d717039ab4b692474c70356857"
  },
  {
    "url": "component/form/switch.html",
    "revision": "1835a795dca923606c3221426818c7c2"
  },
  {
    "url": "component/form/textarea.html",
    "revision": "c6decd60bb60ba0875b8ad676d545421"
  },
  {
    "url": "component/layout/album.html",
    "revision": "c019826da656ab42385a0dcd3040dfa9"
  },
  {
    "url": "component/layout/card.html",
    "revision": "c3472a531588606300a5def5ba6f9f01"
  },
  {
    "url": "component/layout/collapse.html",
    "revision": "e038ebc78749464d3efaba6d684a1e6f"
  },
  {
    "url": "component/layout/grid.html",
    "revision": "a45d87f16a06a1123cd491755237236a"
  },
  {
    "url": "component/layout/index-list.html",
    "revision": "2016ed4094f6e10069017a84ee6ef5d6"
  },
  {
    "url": "component/layout/list.html",
    "revision": "7b8792584323965ed0a2ecf8cf713825"
  },
  {
    "url": "component/layout/sticky.html",
    "revision": "e07e8fa9c22b0df0a15358816b070786"
  },
  {
    "url": "component/layout/water-flow.html",
    "revision": "587e1526a602b13eef4d65392cbe5f2e"
  },
  {
    "url": "component/nav/capsule-bar.html",
    "revision": "8d6ffd47f7310496fc05a15c8351492e"
  },
  {
    "url": "component/nav/combined-tabs.html",
    "revision": "c9b1ec5475f8ff5720cd48619adec2b5"
  },
  {
    "url": "component/nav/segment.html",
    "revision": "032aa90462979b956b23b7998693f68e"
  },
  {
    "url": "component/nav/tab-bar.html",
    "revision": "aa87e2ecb2670e806e8e46aede054e21"
  },
  {
    "url": "component/nav/tabs.html",
    "revision": "fac0f096e33b659b8c535d132222da02"
  },
  {
    "url": "component/response/action-sheet.html",
    "revision": "ccf6b7b5ec9691f6631f4f03c71a0209"
  },
  {
    "url": "component/response/dialog.html",
    "revision": "3572712f6981ddff77be0307e50b6971"
  },
  {
    "url": "component/response/message.html",
    "revision": "16c9e201f801c63520ab26fc2b1310e5"
  },
  {
    "url": "component/response/slide-view.html",
    "revision": "8debbe65333188a99eef32dbdca98b8b"
  },
  {
    "url": "component/response/toast.html",
    "revision": "8e1c53f22d0e0392f889921f2d56460d"
  },
  {
    "url": "component/shopping/counter.html",
    "revision": "495ba43f9b19e65e8d15376017b02d53"
  },
  {
    "url": "component/shopping/price.html",
    "revision": "a98c7861d3ae52a03e88547d35b3d24b"
  },
  {
    "url": "component/shopping/search.html",
    "revision": "46d1fdfd9ffd9b9b280946fb427c8279"
  },
  {
    "url": "component/view/arc-popup.html",
    "revision": "c2a80f3732f04bd18fe46e53b71bebfd"
  },
  {
    "url": "component/view/avatar.html",
    "revision": "2e9aab192df251d4e23977ce1b37cef8"
  },
  {
    "url": "component/view/badge.html",
    "revision": "068dd4ab2528268b6ecbca98e8e9642e"
  },
  {
    "url": "component/view/circle.html",
    "revision": "c1ed26c471ea49c2012474f7001640e4"
  },
  {
    "url": "component/view/countdown.html",
    "revision": "48bf0c66bf4726e92bd2a681d7f8800d"
  },
  {
    "url": "component/view/loading.html",
    "revision": "4b5089f783ccc282aa70d73d1e39d49a"
  },
  {
    "url": "component/view/loadmore.html",
    "revision": "9330b51f9abc16549f9dca1172bc628c"
  },
  {
    "url": "component/view/mask.html",
    "revision": "018eea301c4445ae9bdd7ce21b9e96df"
  },
  {
    "url": "component/view/notice-bar.html",
    "revision": "66f3179d3c8a2622687578d3256514e2"
  },
  {
    "url": "component/view/popover.html",
    "revision": "955da6098ba2cbdcb0d7616b811c51a2"
  },
  {
    "url": "component/view/popup.html",
    "revision": "ba557dbd8b08009540b3333534874157"
  },
  {
    "url": "component/view/progress.html",
    "revision": "f95b2d078bfe9ada14c755a47c15fa3f"
  },
  {
    "url": "component/view/skeleton.html",
    "revision": "b67ea052e508074a88f3f4632496c396"
  },
  {
    "url": "component/view/status-show.html",
    "revision": "1d3c448e5f3a4880fe4440663f201a29"
  },
  {
    "url": "component/view/steps.html",
    "revision": "8d2f87967ad9ce1ddc7afe2154655e55"
  },
  {
    "url": "component/view/tag.html",
    "revision": "3fa2ac41a0ecc6e7cf8c3b1e05fae0e5"
  },
  {
    "url": "filter/array.html",
    "revision": "9c652f5fbee382951f8050410d8a1f34"
  },
  {
    "url": "filter/classnames.html",
    "revision": "bc705fccdd2bd8e2170b1fb51625804b"
  },
  {
    "url": "filter/index.html",
    "revision": "360a1e8b3a1fece30dd70a10cb0bd1c0"
  },
  {
    "url": "filter/is.html",
    "revision": "bb0985016b0520aab025172a3d23d950"
  },
  {
    "url": "filter/string.html",
    "revision": "5d0ca878e362a36a405842e11084c489"
  },
  {
    "url": "function/index.html",
    "revision": "18e5cbaa3232a7177bd65190da18284a"
  },
  {
    "url": "function/promisic.html",
    "revision": "800a9ad4dec1c36b61f73bfd469c6a2f"
  },
  {
    "url": "function/px2rpx.html",
    "revision": "6a31985e11d61e802b8ab037dbdc957c"
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
    "url": "imooc/index.html",
    "revision": "fec7bb991be5d9299bc5d5266a4e3dd4"
  },
  {
    "url": "index.html",
    "revision": "a87c20501db0ed41a91553b4d8fd5772"
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
    "revision": "ef1de861751641868972ccead06b1192"
  },
  {
    "url": "start/component.html",
    "revision": "6d1107012bbb9cb35da8a10f1efaca9f"
  },
  {
    "url": "start/contribute.html",
    "revision": "d82cad9dc6d25ceb218b6598ff93b304"
  },
  {
    "url": "start/event.html",
    "revision": "2abf81d5bc9c7007381d5bcf1e024bf5"
  },
  {
    "url": "start/index.html",
    "revision": "6576788624b5b1c52208b9728b3539dd"
  },
  {
    "url": "start/open-function.html",
    "revision": "46dd7c6035cb0ba1992ceff1f2b35039"
  },
  {
    "url": "start/QA.html",
    "revision": "434a72dd784f39f61a6b562650f70736"
  },
  {
    "url": "start/using.html",
    "revision": "c71d4d3adc2efaea28717791f2a01490"
  },
  {
    "url": "start/wx.html",
    "revision": "d1b4ce64b0c3fc10c08de34bde72e6e6"
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
