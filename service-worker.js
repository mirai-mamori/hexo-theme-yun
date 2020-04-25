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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

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
    "revision": "76530067d43c34567d3aaf05f806681f"
  },
  {
    "url": "about.html",
    "revision": "ea561ed913ba75a3ddf6d96ac55cb691"
  },
  {
    "url": "assets/css/0.styles.44f7e77d.css",
    "revision": "17863ffb47abf34be8086829038be229"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.fffd0b5d.js",
    "revision": "ed935520b1705a4d4e6937d2575285e5"
  },
  {
    "url": "assets/js/11.c2eda31d.js",
    "revision": "595163f1af7d970f1a22c3e137513bd3"
  },
  {
    "url": "assets/js/12.91f7cbee.js",
    "revision": "e3b854ba1f62b836d206ee0f3e017edf"
  },
  {
    "url": "assets/js/13.d1079d49.js",
    "revision": "17f092de192995da24ae938869f03697"
  },
  {
    "url": "assets/js/14.d4de0c1b.js",
    "revision": "c19d8f65b26cc933770db884d87aca85"
  },
  {
    "url": "assets/js/15.00d7ef23.js",
    "revision": "33617ace758c8593f35354c3a756da25"
  },
  {
    "url": "assets/js/16.dd68896b.js",
    "revision": "673ca71b9e39bebaa1860a34e8fa05c5"
  },
  {
    "url": "assets/js/17.2c01cbb8.js",
    "revision": "ba0a9f2bb0f05d9414e56b689e3e11a9"
  },
  {
    "url": "assets/js/18.04c9f8fc.js",
    "revision": "703b027403f61946770b9b8e8fd90583"
  },
  {
    "url": "assets/js/19.4b274277.js",
    "revision": "bb4f77f0e2c7592507cfa9ae113e273f"
  },
  {
    "url": "assets/js/2.40c85654.js",
    "revision": "341999e518f9cb42abdad44120764fda"
  },
  {
    "url": "assets/js/20.32fbf246.js",
    "revision": "e07f4b38ac0ec703ca02f5666faeef77"
  },
  {
    "url": "assets/js/21.9a182b6d.js",
    "revision": "1b74a05fa2fe948b58c0db02005b04d0"
  },
  {
    "url": "assets/js/22.eee8c4c7.js",
    "revision": "43e06a501edada4ca6df74d2a2d52768"
  },
  {
    "url": "assets/js/23.6c93781e.js",
    "revision": "868a5faaa736007b4d396c4b3baf69fb"
  },
  {
    "url": "assets/js/24.d457ae38.js",
    "revision": "84afb798b876ef6c8eadd623790815e4"
  },
  {
    "url": "assets/js/25.afd76974.js",
    "revision": "1a8146fcc11b50d0a3440d394062b424"
  },
  {
    "url": "assets/js/26.07a7496c.js",
    "revision": "566c1bb6f6d2b7af717275d15dbb72ab"
  },
  {
    "url": "assets/js/27.34f1e69a.js",
    "revision": "0ccba0eae0d175c40c81e2a427352b85"
  },
  {
    "url": "assets/js/28.6df1800c.js",
    "revision": "7faafa84e277853b075f8a0cd8b12970"
  },
  {
    "url": "assets/js/29.4f312b23.js",
    "revision": "95c9a995463d861c62f3e92c370edeb5"
  },
  {
    "url": "assets/js/3.5d889f77.js",
    "revision": "8b08f679eb1cd8efbb0c546201b919e2"
  },
  {
    "url": "assets/js/4.338c6fd2.js",
    "revision": "0b4014143777262ee1a69abcf6874c7a"
  },
  {
    "url": "assets/js/5.bfd87b6e.js",
    "revision": "497a75bb51c716ddbecd6bf42da283d9"
  },
  {
    "url": "assets/js/6.097d8ca6.js",
    "revision": "f2651ec0cabb3cc10533c541f7c29bae"
  },
  {
    "url": "assets/js/7.ae567e69.js",
    "revision": "06cfd95681724fc49ce98fa2867f224f"
  },
  {
    "url": "assets/js/8.bb46c606.js",
    "revision": "226558d154465ad046212fa47c4dbb81"
  },
  {
    "url": "assets/js/9.b2eac3b9.js",
    "revision": "b45530ac26d17b170096622fa550efac"
  },
  {
    "url": "assets/js/app.8c08edd9.js",
    "revision": "e26b4b68aa2f3e2ed0e0f55bfce6d903"
  },
  {
    "url": "demo.html",
    "revision": "d9797cdb823e1c095a8bb86f9f04f2e4"
  },
  {
    "url": "en/about.html",
    "revision": "cd2dd3aa5202963a380002666c2b3154"
  },
  {
    "url": "en/guide/additional-package-support.html",
    "revision": "5ddd86a959217cd8c4916b7c40a529ea"
  },
  {
    "url": "en/guide/config.html",
    "revision": "ac20fd3459b9a550dee4749743b96cdd"
  },
  {
    "url": "en/guide/faq.html",
    "revision": "d519703ca89e49eafc4753ba0c92d60c"
  },
  {
    "url": "en/guide/icon.html",
    "revision": "6848e1aacb4757779eff93457d9fb36c"
  },
  {
    "url": "en/guide/index.html",
    "revision": "3028e0bab8d642b0dc131cc60f00ec64"
  },
  {
    "url": "en/guide/page.html",
    "revision": "920df8f14093b2634ee33f0da07fca94"
  },
  {
    "url": "en/guide/third-party-support.html",
    "revision": "e9f02bf39c63f77f2d3fc2fc29d7e196"
  },
  {
    "url": "en/guide/Todo.html",
    "revision": "435a31d49f33b3afb13f501088fc17af"
  },
  {
    "url": "en/index.html",
    "revision": "52f8ebc56bd2a362436a7670e25ff1a9"
  },
  {
    "url": "guide/additional-package-support.html",
    "revision": "86e49f597597264648c47450e5f7069a"
  },
  {
    "url": "guide/config.html",
    "revision": "f7d077949a7969e4187086c3ef054455"
  },
  {
    "url": "guide/faq.html",
    "revision": "34c54452b9e6309d0ecd6f808874e30c"
  },
  {
    "url": "guide/icon.html",
    "revision": "c96c00815c20cf55db5a5133c394190d"
  },
  {
    "url": "guide/index.html",
    "revision": "21b2b3bb53aab3f0febec29522648abf"
  },
  {
    "url": "guide/page.html",
    "revision": "e510092d694beb0def5c61be6e573f2a"
  },
  {
    "url": "guide/third-party-support.html",
    "revision": "263f289dc1284c9aebf0b8d14b0abf96"
  },
  {
    "url": "guide/Todo.html",
    "revision": "3cc7acb6a363f222dc923cfcdb6b8e5f"
  },
  {
    "url": "index.html",
    "revision": "651447b33abfe1b553c931d303a2c46e"
  },
  {
    "url": "logo.gif",
    "revision": "36e0231044c40383b466997c8f13b6d7"
  },
  {
    "url": "sponsor.html",
    "revision": "35fb1f95dcee733a14e2050853f1e4ab"
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
