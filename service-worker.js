/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["README.md","6094836527d24837c36eb12fd5f7331b"],["assets/images/icon128x128.png","d08a239ab0fd1630bc9e95c50df7a047"],["assets/images/icon256x256.png","bae056dce21de9e5be3ef814ed24a1db"],["bower_components/sw-toolbox/README.md","5f5a86d815d6fc79143f5a5acee045b7"],["bower_components/sw-toolbox/bower.json","cba610bb467d1b424fa3939b7de39f35"],["bower_components/sw-toolbox/companion.js","6c891a25790dfafb6041bca5dfefdc77"],["bower_components/sw-toolbox/docs/_config.yml","88553455501de3e0c4ef721c69a30d84"],["bower_components/sw-toolbox/docs/_data/releases.yml","6af94fdebebe6daf4278c9a6cdd1b080"],["bower_components/sw-toolbox/docs/api.md","d4cc0d4ad9103a3699ce10132d41f0d8"],["bower_components/sw-toolbox/docs/index.md","ff11787b0a94a8d195d28506b63694fb"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/footer.html","48f539ff1d678853a4143210b9569863"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/nav-drawer-docs-entry.html","78b4821effb67051cebfaa6fc6d52c9b"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/nav-drawer.html","4c2e19b929658ace9590d364e9ef411d"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/components/site-header.html","13bd86a83a2737407f51bf8445a1c37d"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/html-head.html","92f0f6ebf96b1d75175fa5612b72264b"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/github.svg","5ea22595cef766cd30e84b3c73b6c419"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/gplus.svg","a022db90375c67305dd15cc855c9bde5"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/menu.svg","c800523f49b47cdc4ce9b41f50f6020c"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/svgs/twitter.svg","f66041486fb3f744830e4f4dfa41b034"],["bower_components/sw-toolbox/docs/jekyll-theme/_includes/variables.html","66fc16fe2e071c8d8b72448a9c26ff59"],["bower_components/sw-toolbox/docs/jekyll-theme/_layouts/default.html","0d3aab880863e9960f39c23dd56da202"],["bower_components/sw-toolbox/docs/jekyll-theme/_layouts/index.html","d36804e24965be7a8f3e1eed42ee402c"],["bower_components/sw-toolbox/docs/jekyll-theme/_layouts/jsdoc.html","8d1ded30ff15c8704bef16041f9a57ef"],["bower_components/sw-toolbox/docs/jekyll-theme/scripts/detabinator.js","44e7ca845d14746327b217288f951d19"],["bower_components/sw-toolbox/docs/jekyll-theme/scripts/side-nav.js","bb51068d8339bbd892f666754a761d73"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/code-styles.css","25e1b5bc38fb3899846413f8f76dd310"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/footer.css","5e8e4bd1f4226890332acfbdeacf00c8"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/nav-drawer.css","4553fcd5b80ec21fd91fb7ed01e2df83"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/page-header.css","afec54bdf61e616ef2b31e05c154ad2c"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/components/site-header.css","dba3a98c44340cb54f75f588dec9f40a"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/jsdoc/details.css","dd04cccffdcc03bd98d6755ebd5163a9"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/jsdoc/method.css","1ff93d0bc4829eb40f1d7d3b4f4bd69c"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/main.css","04b9b44380e0efcf3ee6b806a9d5598a"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/variables/colors.css","d41d8cd98f00b204e9800998ecf8427e"],["bower_components/sw-toolbox/docs/jekyll-theme/styles/variables/dimens.css","d41d8cd98f00b204e9800998ecf8427e"],["bower_components/sw-toolbox/docs/jekyll-theme/third_party/prism/prism.css","23ca92e8748135ef3dded216ceae75b4"],["bower_components/sw-toolbox/docs/jekyll-theme/third_party/prism/prism.js","0d3ebc24f22d19c14fb640c14fb2e7e8"],["bower_components/sw-toolbox/docs/recipes.md","328423c31a43b45a67194b4643f8ec0d"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/app.js","5f9e7c91e670cf6da8d948c37760b563"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/index.html","43abc383ff1fb9c924fde08abb88dd35"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/service-worker.js","3da117c4cec15dd69369a0e4ceb2cec7"],["bower_components/sw-toolbox/docs/recipes/cache-expiration-options/styles.css","b997097ccff1ae49dfc13c7da007d678"],["bower_components/sw-toolbox/docs/usage.md","1863792241270e510ac5371275862503"],["bower_components/sw-toolbox/package.json","36942fa544597769a547bca8aef11904"],["bower_components/sw-toolbox/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["bower_components/sw-toolbox/sw-toolbox.js.map","b9543543a6486c3d727acd16549da2f6"],["fonts/Roboto-Black.ttf","893fe14628bd7ac498d550e96367e1be"],["fonts/Roboto-Regular.ttf","ac3f799d5bbaf5196fab15ab8de8431c"],["index.html","2cd64ec9c745431491e07d3a47c22b05"],["manifest.json","48eaa656b0ecc55cda7dd05b45a3ec45"],["node_modules/array-find-index/index.js","a19a7b6671943fe3f99fecdb60ac106d"],["node_modules/array-find-index/package.json","36eeac1b2c07c527a013b9b6e573dc82"],["node_modules/array-find-index/readme.md","fb54891bdc5f1c6bd39789a218aadcfc"],["node_modules/balanced-match/LICENSE.md","7fa99ddc3424107350ca6e9a24552085"],["node_modules/balanced-match/README.md","2b81a22fa44f4237c9a42b1cbb260159"],["node_modules/balanced-match/index.js","77122288ffceba0a2f5079eb6b1b31bf"],["node_modules/balanced-match/package.json","16aa74db5b1c96b07c783e253d0d017c"],["node_modules/brace-expansion/README.md","1edd1c31a0eba1f6df0576b366191a07"],["node_modules/brace-expansion/index.js","ce45252e95549a88db7c1df129c91271"],["node_modules/brace-expansion/package.json","19a58dc4945e223e46a7253a87fce0e0"],["node_modules/builtin-modules/builtin-modules.json","04f011c9b31017ab5fde0e39fe575364"],["node_modules/builtin-modules/index.js","fd9d9306e79e22e86c5a198c63eceab8"],["node_modules/builtin-modules/package.json","76b0ea00568b48a9a84c47df8e502d1d"],["node_modules/builtin-modules/readme.md","982c991e830c4b263f77fb2c90503e07"],["node_modules/builtin-modules/static.js","ad704575c4e629f5cdb57f65de0686d6"],["node_modules/camelcase-keys/index.js","c558ce41088691f6c3a4f79625809061"],["node_modules/camelcase-keys/package.json","a3b65c8f3843a6525703f19d84eb7400"],["node_modules/camelcase-keys/readme.md","47508c9695c6d00d7f9f4fcffa09366d"],["node_modules/camelcase/index.js","760ce1ead8f37c3ffc9f948288be5944"],["node_modules/camelcase/package.json","1c0335007a22b78c8157929e6fc0686e"],["node_modules/camelcase/readme.md","720828d016c10e1a1eb88f2734a86bf8"],["node_modules/concat-map/README.markdown","3de808d1c878e1d12f12c8d849710db2"],["node_modules/concat-map/example/map.js","42b2341e75e2e29012793c31222c2783"],["node_modules/concat-map/index.js","8ef754ba23fdd37b3e8a1c52739ace80"],["node_modules/concat-map/package.json","cb271addfdb0ea8ce5e9d0a2d7a7db94"],["node_modules/concat-map/test/map.js","a8e1d80e4629945216de220e4b580cf5"],["node_modules/currently-unhandled/browser.js","f85cd6f6159c1a744096dd98d0a8692c"],["node_modules/currently-unhandled/core.js","2e6014188dde097d5dc79ece92235eda"],["node_modules/currently-unhandled/index.js","2f869c32daa8065f4ebe6f9c2cf69f87"],["node_modules/currently-unhandled/package.json","a01cb758fc4710ba16e8c0241535a165"],["node_modules/currently-unhandled/readme.md","20db8e3cc5aaf49c3ee1892b3137950b"],["node_modules/decamelize/index.js","983084e6146528df1707b0aa3ff6cd9a"],["node_modules/decamelize/package.json","09b6a48d24945c1da8ba52108aee1267"],["node_modules/decamelize/readme.md","71b1684a019e2f3d5cc76429939db237"],["node_modules/dom-urls/README.md","f9bf68aac4f4920939e16768f6cfa11c"],["node_modules/dom-urls/index.js","43629b92a6fe6b72e85a1e4c3ca5391e"],["node_modules/dom-urls/package.json","482724c6eaba233063602cfc197cf0be"],["node_modules/error-ex/README.md","fb8ffd816db556d2ea5ee059ba89b298"],["node_modules/error-ex/index.js","c8793e6e7eaf7fd28458bceced653874"],["node_modules/error-ex/package.json","bea4ff0cfc93fc6a962efd298a54e56e"],["node_modules/es6-promise/CHANGELOG.md","517e0eba2af1c437e0f5ca3dc020db0b"],["node_modules/es6-promise/README.md","81912cf7c36639cab07d40340b446004"],["node_modules/es6-promise/auto.js","b516758151252729f6a24303df6c1a77"],["node_modules/es6-promise/dist/es6-promise.auto.js","fb700cdc0e6d818be7d9d261f5d460de"],["node_modules/es6-promise/dist/es6-promise.auto.map","42e2b28e7bd505ccfaa6129b1a369ed2"],["node_modules/es6-promise/dist/es6-promise.auto.min.js","96289721931c46bf44f3fdbcb1c44913"],["node_modules/es6-promise/dist/es6-promise.auto.min.map","98c88c135c30250405aa0f3799b5ba1b"],["node_modules/es6-promise/dist/es6-promise.js","56820ffed6126ad5ba018f1d57b4b44a"],["node_modules/es6-promise/dist/es6-promise.map","80733c714331aa281e93e33276accb50"],["node_modules/es6-promise/dist/es6-promise.min.js","efb0a9884377bc4baf3fc2940904e990"],["node_modules/es6-promise/dist/es6-promise.min.map","123e2c4e2b3765e7f6616a1acf7b6bf5"],["node_modules/es6-promise/es6-promise.d.ts","f795c4063c2cb67403b0f61df39d708c"],["node_modules/es6-promise/lib/es6-promise.js","9feb6700624e50ecbddb13d1e502a0b1"],["node_modules/es6-promise/lib/es6-promise/-internal.js","d62fa42517894319768fb27ee8432574"],["node_modules/es6-promise/lib/es6-promise/asap.js","3648cba7270eb69bcadb89cde931967b"],["node_modules/es6-promise/lib/es6-promise/enumerator.js","f6c7a93c2eb05cade8d5e9a1eea4e4b5"],["node_modules/es6-promise/lib/es6-promise/polyfill.js","f44f337caeed8a78be0ac4f1a59a44fa"],["node_modules/es6-promise/lib/es6-promise/promise.js","a205582bf15fc3c35152f3dd2e2a66f7"],["node_modules/es6-promise/lib/es6-promise/promise/all.js","3b322588b808ef29090698e5d47d7d05"],["node_modules/es6-promise/lib/es6-promise/promise/race.js","f3134eff4fad30ef5396989302920704"],["node_modules/es6-promise/lib/es6-promise/promise/reject.js","4926bda3b87c32f9608a3c145ff636d2"],["node_modules/es6-promise/lib/es6-promise/promise/resolve.js","bcdb088cd3b029540ae383e793fe4934"],["node_modules/es6-promise/lib/es6-promise/then.js","6bce50765808193773ab54791f030b45"],["node_modules/es6-promise/lib/es6-promise/utils.js","76b4a609fcb2f90e1d02826b713f90b2"],["node_modules/es6-promise/package.json","769d2f913a8ef4ab4492db69ed6508bb"],["node_modules/find-up/index.js","273b843d5994136674f491d7a2c5ecfe"],["node_modules/find-up/package.json","65333c223a73c97609ce30e0e5794092"],["node_modules/find-up/readme.md","74183eb5676ad6df10dd4c5597ccdf14"],["node_modules/fs.realpath/README.md","b0e79f63ca0f7b8904b2b0e01b8aa1ed"],["node_modules/fs.realpath/index.js","81443ae283d9031000862ce501c9f964"],["node_modules/fs.realpath/old.js","8c3d2bd3edf5d8918b7cbf3c93b3ba32"],["node_modules/fs.realpath/package.json","cf56b713aa93ec9d979b22ba48e2fb10"],["node_modules/get-stdin/index.js","c82d99b0454e15c5319dc5b1e37527e3"],["node_modules/get-stdin/package.json","ffadd20a163ac81bbe85cac06be2262f"],["node_modules/get-stdin/readme.md","66e9c35acf0e22691b69f94f59f99edb"],["node_modules/glob/README.md","ebb6bd70ed9742c82792656adb349111"],["node_modules/glob/changelog.md","00f1acff927a7059ab085d87c72bbf43"],["node_modules/glob/common.js","0041795c4700b9e1c1cd76729517f08b"],["node_modules/glob/glob.js","c89733e498a13b6b3b4b29d82467efab"],["node_modules/glob/package.json","a36e76c9d47313d665a5d0ae49a1b7df"],["node_modules/glob/sync.js","c29ff74e143a933770c75a66998fbeeb"],["node_modules/graceful-fs/README.md","5ef783d2adc5dc85a9e3934ec8c59d5c"],["node_modules/graceful-fs/fs.js","7fb9340b36e141a4944b13d205af3d1d"],["node_modules/graceful-fs/graceful-fs.js","0af3af2b5945a7073883fb5273f25893"],["node_modules/graceful-fs/legacy-streams.js","620fc152dc9bfa087f9901703b1e2616"],["node_modules/graceful-fs/package.json","b80bad4f116be2ed26d1cd0e7c6fbb2c"],["node_modules/graceful-fs/polyfills.js","af45c9957edb1ef798122235655af168"],["node_modules/hosted-git-info/README.md","44af9a7e62b127371c5acd64223f7f05"],["node_modules/hosted-git-info/git-host-info.js","94a1b4d3e4fdb2d28a730ffa14fb4ea2"],["node_modules/hosted-git-info/git-host.js","3477abfc5efc4c09e620ccc263ee76d7"],["node_modules/hosted-git-info/index.js","533a64a4ec75fb6be250efeec56b1d15"],["node_modules/hosted-git-info/package.json","6cbb5e6781b8a6cbe28408bb8c281ecb"],["node_modules/indent-string/index.js","b3a3b06e58214f950cb0d0fe34533da8"],["node_modules/indent-string/package.json","3e0dc9fc1041dd3930d80132c077f6ad"],["node_modules/indent-string/readme.md","cc2ed38405f80830212136a10f78375c"],["node_modules/inflight/README.md","0a30dbf89df03dc7c954f830946f66d8"],["node_modules/inflight/inflight.js","42bbc3622abfefca5862fd0d12441a15"],["node_modules/inflight/package.json","15965feae2452aa0da5ed9154ee703af"],["node_modules/inherits/README.md","de7eab94959b05c9765cad499ab092db"],["node_modules/inherits/inherits.js","09b210610125b162700734fb93dc892c"],["node_modules/inherits/inherits_browser.js","7c26fc24b695f2afbc284bbd5f64d6a4"],["node_modules/inherits/package.json","a972d44b3fea17b4c4bdd91c39888549"],["node_modules/is-arrayish/README.md","29707858a2c6eb8e14e3ca822ce48fb6"],["node_modules/is-arrayish/index.js","37d2f8bf6f5eaa32af9695936e137f8c"],["node_modules/is-arrayish/package.json","e5ade9b0c1d4480398775092c7d63ac7"],["node_modules/is-builtin-module/index.js","f63b2dd34de1163806fe7a045fdb393a"],["node_modules/is-builtin-module/package.json","af752a75b51ebab22056d88aad132c73"],["node_modules/is-builtin-module/readme.md","bfba03a99873da652de79e6705436800"],["node_modules/is-finite/index.js","14531067f0794e449029d9268fbc0d5b"],["node_modules/is-finite/package.json","23092d33c67b73f9d333f6b25ce66c4c"],["node_modules/is-finite/readme.md","99ae663cd22713c1977eda2a7f68278e"],["node_modules/is-utf8/README.md","d23a180a7623cd8e4c28a4bd204ca9a6"],["node_modules/is-utf8/is-utf8.js","d6bf49d9e457e9f115559194aca1e975"],["node_modules/is-utf8/package.json","90891a524d8153fdacc31e3af21d0777"],["node_modules/isarray/README.md","d2f2d4e0c886ba00c26b830c666554f7"],["node_modules/isarray/build/build.js","d3005169d2c46521802b587ddc12bfb0"],["node_modules/isarray/component.json","32fed65eac22c95ae43ddfd1729b9bf3"],["node_modules/isarray/index.js","e8460ef833145a9652fba1bb4c47ede7"],["node_modules/isarray/package.json","fd845ee8772f47d98db8dd40b7c722ee"],["node_modules/load-json-file/index.js","b5b58c5d7d67c11d10cad6af497bcbc1"],["node_modules/load-json-file/package.json","87625a8b69c2deb4a72825c4fc89b6d5"],["node_modules/load-json-file/readme.md","89694e455d0e132738a6a69d68424910"],["node_modules/lodash._reinterpolate/LICENSE.txt","ad20573d95563085adde70ee845966ea"],["node_modules/lodash._reinterpolate/README.md","f0b313c16f8ec10dc782d827be010ff3"],["node_modules/lodash._reinterpolate/index.js","d109289b492310fb94da2cae11126800"],["node_modules/lodash._reinterpolate/package.json","61d01550ff107a11987642ae66d33ee6"],["node_modules/lodash.defaults/README.md","56372a9407630abf28197a8335985853"],["node_modules/lodash.defaults/index.js","bc5e8d4b69b077619971c2d8a3bdf315"],["node_modules/lodash.defaults/package.json","91a71421389c9f09f736eae57bb3f47a"],["node_modules/lodash.template/README.md","e7c1a0587338ba0f8e8707ec3846bb70"],["node_modules/lodash.template/index.js","b1bda935446a88b2e10bf404e5167409"],["node_modules/lodash.template/package.json","ca38e7dbcc2307a0ec2d93fb62fd7cfd"],["node_modules/lodash.templatesettings/README.md","499943b66e8c7c707ddc79f8c0974be1"],["node_modules/lodash.templatesettings/index.js","6fc032aa4de90faaf8ae19020eb0bed5"],["node_modules/lodash.templatesettings/package.json","2eeea2bd1ce934bf8f63a2fab00a42ae"],["node_modules/loud-rejection/api.js","fb03c580c6296df18b39350e22f0bd97"],["node_modules/loud-rejection/index.js","3288863ed82f117ea85d432a09974ce0"],["node_modules/loud-rejection/package.json","ef5522ef385cf19c4e9c572557d3f6ea"],["node_modules/loud-rejection/readme.md","80d2f05fe951b3c139e1ed00cb7578a3"],["node_modules/loud-rejection/register.js","7308489c82a9faa09f4534df9098004c"],["node_modules/map-obj/index.js","2dbf2e519cb8026186d624ca503ca6e3"],["node_modules/map-obj/package.json","21b2256e1034e9ad7095b51ecf388240"],["node_modules/map-obj/readme.md","cb8ea918916d2c1c65a605a36775cac8"],["node_modules/meow/index.js","7d6747a9bc20191e44606431fe4658e2"],["node_modules/meow/package.json","684f49aa28458fbc0d76ffdb017076b5"],["node_modules/meow/readme.md","4f1ff998325cd8bd7d371ebc7ed25c0f"],["node_modules/minimatch/README.md","69c8fd8e7fc4051b61c6343c0357be2b"],["node_modules/minimatch/minimatch.js","9e22ccffac9538b210d6bc9e120e8f15"],["node_modules/minimatch/package.json","6a04f14a6d76000a1e13edbd5e9b2244"],["node_modules/minimist/example/parse.js","559dd0b28e67e4da65c434476bc2c885"],["node_modules/minimist/index.js","c36f5714c734dba3d1cb40e836c1374b"],["node_modules/minimist/package.json","4eabb5166f40946ec4849107401819fb"],["node_modules/minimist/readme.markdown","c7b62ca1fbb8d8185e59da3d6e5ab397"],["node_modules/minimist/test/all_bool.js","0996869b339f45a72669d8638df020d3"],["node_modules/minimist/test/bool.js","e42588336909394bd2c0a02d8346a694"],["node_modules/minimist/test/dash.js","3912e17dca100d50c1bab4c7982d56dc"],["node_modules/minimist/test/default_bool.js","d97a3688462e13a7399204b153426be8"],["node_modules/minimist/test/dotted.js","16f59760e45e2cf7f835320635d59ce1"],["node_modules/minimist/test/kv_short.js","74c72f03ca3283bacd95ce6019fcd1e8"],["node_modules/minimist/test/long.js","652e865e69ae41e78d9ad95f8557f0a2"],["node_modules/minimist/test/num.js","3c6b959c2a952ca471797e28723fa8c5"],["node_modules/minimist/test/parse.js","466b0207dd29b19eefe9aff973472fb5"],["node_modules/minimist/test/parse_modified.js","d04f05190e5720bb1fb47be8f09f96d8"],["node_modules/minimist/test/short.js","a964fe2c657d6e71d1c3a2c8bc5ce79c"],["node_modules/minimist/test/stop_early.js","20dfd44d3acf4d24e21fa04c24841580"],["node_modules/minimist/test/unknown.js","68487dbf5d4323c19185167877da8736"],["node_modules/minimist/test/whitespace.js","caa1c589b42a96804176247191ccb980"],["node_modules/mkdirp/bin/cmd.js","9ef5fb33a1a94773afb7dc52b0dfbb5d"],["node_modules/mkdirp/bin/usage.txt","29298f0efcb0c0454a851886b91e00e2"],["node_modules/mkdirp/examples/pow.js","7440de96a1a111e53e3da08f0d8bb8eb"],["node_modules/mkdirp/index.js","7941341b14e76ae88be8dbad2202798e"],["node_modules/mkdirp/node_modules/minimist/example/parse.js","559dd0b28e67e4da65c434476bc2c885"],["node_modules/mkdirp/node_modules/minimist/index.js","822fc8889c4bc1e1906b9e51560e7978"],["node_modules/mkdirp/node_modules/minimist/package.json","e510b441df49c797fc9f2e7515accf48"],["node_modules/mkdirp/node_modules/minimist/readme.markdown","651854ca82c2fd452b10b7874d9b4ebc"],["node_modules/mkdirp/node_modules/minimist/test/dash.js","190934d8330fccc8c5aa07a3e43f028d"],["node_modules/mkdirp/node_modules/minimist/test/default_bool.js","c3598075b51486aa545526d13b454c66"],["node_modules/mkdirp/node_modules/minimist/test/dotted.js","e03ea33b7cfbb7799a90b5b7a799d253"],["node_modules/mkdirp/node_modules/minimist/test/long.js","652e865e69ae41e78d9ad95f8557f0a2"],["node_modules/mkdirp/node_modules/minimist/test/parse.js","02125d8ef8b795946d6e238b880d0814"],["node_modules/mkdirp/node_modules/minimist/test/parse_modified.js","076418970e9e56b926ded3e24aee7a01"],["node_modules/mkdirp/node_modules/minimist/test/short.js","a964fe2c657d6e71d1c3a2c8bc5ce79c"],["node_modules/mkdirp/node_modules/minimist/test/whitespace.js","caa1c589b42a96804176247191ccb980"],["node_modules/mkdirp/package.json","378a5b51c219839901b19e5adbe21453"],["node_modules/mkdirp/readme.markdown","fb5087d2309c829567a18b77d43fbea5"],["node_modules/mkdirp/test/chmod.js","0dc717d70d0a5c203d4445b254828170"],["node_modules/mkdirp/test/clobber.js","b58e37e5922e9d03cd4b4e383ec8acd2"],["node_modules/mkdirp/test/mkdirp.js","568448d36da55ea890923d483f082fbc"],["node_modules/mkdirp/test/opts_fs.js","012858e2d9fd5ad9bad79d0b780f3a46"],["node_modules/mkdirp/test/opts_fs_sync.js","0811db9973a3fe26d9fe2b6f550ae374"],["node_modules/mkdirp/test/perm.js","40f49b41cbcae7105729d7f892e229a8"],["node_modules/mkdirp/test/perm_sync.js","63faf9288fc73b378510149a3a2120a4"],["node_modules/mkdirp/test/race.js","ea03e8320bfdf179a4d589e73f3ac302"],["node_modules/mkdirp/test/rel.js","ee4926533441d5574469ed8afc9b2d21"],["node_modules/mkdirp/test/return.js","ac2c9466636f391c17c6994ea8a51338"],["node_modules/mkdirp/test/return_sync.js","9ab72a21fa3e974dd6e50ab25c0f697e"],["node_modules/mkdirp/test/root.js","1d8aad344388793f4ba1a2b68fc1e130"],["node_modules/mkdirp/test/sync.js","0ce9d0bf0203775fd4073b4d436920b5"],["node_modules/mkdirp/test/umask.js","ce0030869a33d36268e36e27e6f04e2e"],["node_modules/mkdirp/test/umask_sync.js","aaf976f897e44397d06242d36f3821e3"],["node_modules/normalize-package-data/README.md","cdf0a950329f7ae3fcc3ba0efec0f098"],["node_modules/normalize-package-data/lib/extract_description.js","5c523c4ab369586f32d49c6caed99c2e"],["node_modules/normalize-package-data/lib/fixer.js","b59ea4f818b5b4dc62257c156c981001"],["node_modules/normalize-package-data/lib/make_warning.js","448817fd0d70614e6be40eb232b06dd6"],["node_modules/normalize-package-data/lib/normalize.js","78fb1c2dede4cdbf02e1d556888dcb51"],["node_modules/normalize-package-data/lib/safe_format.js","8f218e62ad9fb2a04a5335115be6a71a"],["node_modules/normalize-package-data/lib/typos.json","af6cf28090587437ca9d1c1c01f9d7d1"],["node_modules/normalize-package-data/lib/warning_messages.json","69c18ec227b06690f1f7175432a0d8ac"],["node_modules/normalize-package-data/package.json","534e4e92828c8a39a4de928c1a498c73"],["node_modules/normalize-package-data/test/basic.js","28664366e8e1702baa2d8d5e736830e4"],["node_modules/normalize-package-data/test/consistency.js","b9a450c1034e94333f0bda840baa5325"],["node_modules/normalize-package-data/test/dependencies.js","516d24d665c2fb13a48d942ca3e6d5c7"],["node_modules/normalize-package-data/test/fixtures/async.json","f8d023428cee1d03b2e39b283632cea4"],["node_modules/normalize-package-data/test/fixtures/badscripts.json","2be72d62751a2cbdba111fad230940f3"],["node_modules/normalize-package-data/test/fixtures/bcrypt.json","12112e4c7b44c8445509e909c60eeb2f"],["node_modules/normalize-package-data/test/fixtures/coffee-script.json","4667ed509dc5f5f385b849b82b29cf07"],["node_modules/normalize-package-data/test/fixtures/http-server.json","b74afbb1595358e066a3bb322ce45eda"],["node_modules/normalize-package-data/test/fixtures/movefile.json","5245d735e6989d064a720f3d9fddab30"],["node_modules/normalize-package-data/test/fixtures/no-description.json","ac92332bee4c54c7807e7c4200b96ddd"],["node_modules/normalize-package-data/test/fixtures/node-module_exist.json","7397d4a26b6ea2ef4b34b71edda0b239"],["node_modules/normalize-package-data/test/fixtures/npm.json","fc301f87b13abe00a449927e3994dfbe"],["node_modules/normalize-package-data/test/fixtures/read-package-json.json","8d3be008bd3990eed1f840223754b743"],["node_modules/normalize-package-data/test/fixtures/request.json","0512994c1b3ecc1a3934d17858de57fd"],["node_modules/normalize-package-data/test/fixtures/underscore.json","e8ebeab34abca626b89e6e8bc3c88a42"],["node_modules/normalize-package-data/test/github-urls.js","80fa9a578808c091f88e584e4b1066c0"],["node_modules/normalize-package-data/test/mixedcase-names.js","60fada32fdf10aec3dc0782d0bb93269"],["node_modules/normalize-package-data/test/normalize.js","348849484d5d0cb95f6c2663c66ddada"],["node_modules/normalize-package-data/test/normalize.js~","96a4e59725b4fc5212971edfb46efa3f"],["node_modules/normalize-package-data/test/scoped.js","7829ff7a776757607c8de71d3819aec1"],["node_modules/normalize-package-data/test/scripts.js","fef72520f90cd614481fc4d21dea85d7"],["node_modules/normalize-package-data/test/strict.js","b627a19fccfdfaa1e2ad7d4df43a3afc"],["node_modules/normalize-package-data/test/typo.js","54eaaa1bf1c6a213bdc2462faebfb31a"],["node_modules/number-is-nan/index.js","8d047de69c33e1bebc91b6b113124f4b"],["node_modules/number-is-nan/package.json","aaae10c75fad493a02da098f321c2932"],["node_modules/number-is-nan/readme.md","b5ae3f0dbb89c50a084aa9812777f712"],["node_modules/object-assign/index.js","6bd515c7d8bfbfe3e347fbbe413837bc"],["node_modules/object-assign/package.json","43a563b9a202237790507e15c55dde43"],["node_modules/object-assign/readme.md","336ebde6910963ba7b242d9f35778b49"],["node_modules/once/README.md","58f1e04252b1477aacd25268d88d5d50"],["node_modules/once/once.js","d1d6962324348ad89bf780a233952c61"],["node_modules/once/package.json","ed510ea215134a0b64be9e99bd447686"],["node_modules/parse-json/index.js","dd63e2a84ff455d36be56cbeafd79c70"],["node_modules/parse-json/package.json","8a50986858c4b07725c558c6938f2a96"],["node_modules/parse-json/readme.md","a31d173dd9a021737afdc955aeab49d7"],["node_modules/parse-json/vendor/parse.js","567dcd8a04b7e0506a7a945285a711df"],["node_modules/parse-json/vendor/unicode.js","fe199b3c69703e7b7468b8cd01b68052"],["node_modules/path-exists/index.js","22728ba7b6566e930e7c96d80c8a7d9a"],["node_modules/path-exists/package.json","7db33dc461ffde4e412b5964d13facbb"],["node_modules/path-exists/readme.md","d62c92c69e0de8cacf22661c70e88354"],["node_modules/path-is-absolute/index.js","135a9dc74dc76b698c2abeaaa165f889"],["node_modules/path-is-absolute/package.json","eb2a614b521f60fddd054b4af701beba"],["node_modules/path-is-absolute/readme.md","77dcaf91010aea98f54e727c5c34a297"],["node_modules/path-to-regexp/History.md","3a5e4a10d63d6ab976612d3697ea295f"],["node_modules/path-to-regexp/Readme.md","611b080406aa74cb00020b81a6c780fa"],["node_modules/path-to-regexp/index.d.ts","d8f620aa061671976f54d03d930314bf"],["node_modules/path-to-regexp/index.js","07e02f8b037e4653c60d978136a54670"],["node_modules/path-to-regexp/package.json","34404466bea1f8cbbf11084c15f7b356"],["node_modules/path-type/index.js","476274d39c1908aa028e5e12797cd010"],["node_modules/path-type/package.json","401672ac488fedb77cfa742af585b46a"],["node_modules/path-type/readme.md","96c45a09c84a290eafca38434057ef2c"],["node_modules/pify/index.js","d3aa656ec8bdc1a98d648d1ceebb9267"],["node_modules/pify/package.json","b21ca4c9bda48664d8a68828aa062f14"],["node_modules/pify/readme.md","f9471563ef6dd27f1d4df6b6aa28a21b"],["node_modules/pinkie-promise/index.js","6ad58f1f9e09b5d24f1c002f0c591030"],["node_modules/pinkie-promise/package.json","96f0e114bf292467aaa5d9d890cedd07"],["node_modules/pinkie-promise/readme.md","f42f5e165147cb487eee1d73bd9fca4e"],["node_modules/pinkie/index.js","ea130eba60f416a698c21d01b2ee5067"],["node_modules/pinkie/package.json","d8451970575f3e349c69af6758528bdc"],["node_modules/pinkie/readme.md","46b3ebc6617f8f45e28cb3bb4b2b1646"],["node_modules/pretty-bytes/index.js","e2c01160f0767eb2f6b919e26084e583"],["node_modules/pretty-bytes/package.json","7df0b4d7439700aa9435f2fbacdcc5f7"],["node_modules/pretty-bytes/readme.md","549f0f3c650339d2741f2e0b52fc80f5"],["node_modules/read-pkg-up/index.js","22fe3248b00dc24bd50d9e9bd2aa881f"],["node_modules/read-pkg-up/package.json","8834a629b7946b20536e7295ee789a3b"],["node_modules/read-pkg-up/readme.md","73be48cd22894fd48790cdbf61496a1e"],["node_modules/read-pkg/index.js","6c4d8c6fdb256d7d4cdd4c8fa4586853"],["node_modules/read-pkg/package.json","fd18f0b6f6670255e835f662bbda1476"],["node_modules/read-pkg/readme.md","95dc25f6abd054344df752eae84aace5"],["node_modules/redent/index.js","652b88d0e4684ccc2c9412e222112f32"],["node_modules/redent/package.json","d037b0187e2b10b57f5b4070eaedb1c8"],["node_modules/redent/readme.md","3f05080d4138c3c2fdb7e17247afb01c"],["node_modules/repeating/index.js","e8c65ca553cf8d0a82c3da44a6cd377c"],["node_modules/repeating/package.json","93daeefbac9fde93a3220736665927ef"],["node_modules/repeating/readme.md","93b7505400853eb3a9766942be74f559"],["node_modules/semver/README.md","cf0b09331f7ec2191c380f09e0ffc957"],["node_modules/semver/package.json","11928c78d1ba80760ca06f97084d2bc1"],["node_modules/semver/range.bnf","b54e62147bf496590215391ac37153a3"],["node_modules/semver/semver.js","a5a96794f4b1221ecbd06bb54318e9d5"],["node_modules/serviceworker-cache-polyfill/README.md","1bbf2a7bf3775222176bdd534865152d"],["node_modules/serviceworker-cache-polyfill/index.js","3e07c94b20c469bfb10856ebe3abf9e4"],["node_modules/serviceworker-cache-polyfill/package.json","34e78f39d82befd432c40d51282d0f9a"],["node_modules/signal-exit/CHANGELOG.md","92c08b8901d62b4d61042f05f25bce11"],["node_modules/signal-exit/LICENSE.txt","e29e20260a1c78dba16a233048565cde"],["node_modules/signal-exit/README.md","7ce1c2bb98642b68f14b4cd04ee712c4"],["node_modules/signal-exit/index.js","a2b431d1c9a84363966d8c76143b87ba"],["node_modules/signal-exit/package.json","97b600e123f95a1991de07dc38872595"],["node_modules/signal-exit/signals.js","088797b13dce89e566484933fe8538b7"],["node_modules/spdx-correct/README.md","efd757bb0993fc9c9dc91ea802823ce1"],["node_modules/spdx-correct/index.js","655a50d011bc7f6b8139e8560bf47e0b"],["node_modules/spdx-correct/package.json","f4404fcca6a0e662e76caf024026bea0"],["node_modules/spdx-expression-parse/README.md","2c996b4d6cb281e19134d89a58fb5e11"],["node_modules/spdx-expression-parse/index.js","0ed57f742c6d7264cf06eee4f7c71e3c"],["node_modules/spdx-expression-parse/package.json","3406e3d9dfb47f38ec4d258bad753303"],["node_modules/spdx-expression-parse/parser.js","ec18bac614dd3a947a7dd05027b108fe"],["node_modules/spdx-license-ids/README.md","7bc6c8967a46878864030be2ed07f32c"],["node_modules/spdx-license-ids/package.json","53b5c3db674b15e87b2fe2cba91e6822"],["node_modules/spdx-license-ids/spdx-license-ids.json","34af712b0ca5a258cf12f8d705366856"],["node_modules/strip-bom/index.js","1310cd8a86ac52095ca8d47104385e94"],["node_modules/strip-bom/package.json","740805a47183304b68b39250c7ab5e85"],["node_modules/strip-bom/readme.md","5028bec06ab579956688a189d0771904"],["node_modules/strip-indent/cli.js","d31478d4f45669ff6d825580ba43d641"],["node_modules/strip-indent/index.js","8999280439e398ef1c50e4a108d115c2"],["node_modules/strip-indent/package.json","6382797a63c86771bee592b4dabb5706"],["node_modules/strip-indent/readme.md","ea4eb6df64580359682740ece6ed95c4"],["node_modules/sw-precache/README.md","22f5a82790a40d82eb30dc922e0b65f7"],["node_modules/sw-precache/cli.js","e6862163a4b5730b49641fbf0419503f"],["node_modules/sw-precache/lib/functions.js","dfcda9eae1109f065dda3c44742ce7e0"],["node_modules/sw-precache/lib/sw-precache.js","fa073dd4e62f0520c4bf552da54eb488"],["node_modules/sw-precache/package.json","7e9416fa38126d9cd97d9072b4358331"],["node_modules/sw-precache/service-worker.tmpl","cccccd0da95c0afca5eb790c17a3dd41"],["node_modules/sw-toolbox/README.md","5f5a86d815d6fc79143f5a5acee045b7"],["node_modules/sw-toolbox/companion.js","6c891a25790dfafb6041bca5dfefdc77"],["node_modules/sw-toolbox/lib/helpers.js","ed2ec55f258a57a885e87e989aceb742"],["node_modules/sw-toolbox/lib/idb-cache-expiration.js","04f87dddabf177b5777858d3bf93d519"],["node_modules/sw-toolbox/lib/listeners.js","96239c6ebbb63eb48afe209b47045995"],["node_modules/sw-toolbox/lib/options.js","1596f89daa97e175201ede34194e6e2d"],["node_modules/sw-toolbox/lib/route.js","28eb00fa3f0629f29a57cbadadb5b62e"],["node_modules/sw-toolbox/lib/router.js","bb5d878875b767dee0247e36dcabbd55"],["node_modules/sw-toolbox/lib/strategies/cacheFirst.js","77278127db427b393f0b82fe67d3a9aa"],["node_modules/sw-toolbox/lib/strategies/cacheOnly.js","0fb06fe914535d38e8f00c29ac13ba00"],["node_modules/sw-toolbox/lib/strategies/fastest.js","ee5f548d4b0a6740d0f58841147f289b"],["node_modules/sw-toolbox/lib/strategies/index.js","ae726b3e8a480ff20080d9525a87d4af"],["node_modules/sw-toolbox/lib/strategies/networkFirst.js","24d47c964e3d92ac1394e837921f64e2"],["node_modules/sw-toolbox/lib/strategies/networkOnly.js","d3981eb3d4f75bc428b567a39646d54d"],["node_modules/sw-toolbox/lib/sw-toolbox.js","d7ce34e1f90a0506bb11acd591b29b2d"],["node_modules/sw-toolbox/package.json","54db6bfa1d47ee8d42f29117ca9cca5d"],["node_modules/sw-toolbox/sw-toolbox.js","e7e54a466864d42dcccc8c3f80a91d1f"],["node_modules/sw-toolbox/sw-toolbox.js.map","b9543543a6486c3d727acd16549da2f6"],["node_modules/trim-newlines/index.js","668e166c032aae23e0bc43cd81340c6d"],["node_modules/trim-newlines/package.json","5ed7c758247411ddfeeecc09c62e13e7"],["node_modules/trim-newlines/readme.md","02deadce9e4a8c281e94996caeefcbcf"],["node_modules/urijs/CHANGELOG.md","b9fbdbc6abd4113c1908c0d9b0b68b24"],["node_modules/urijs/LICENSE.txt","208faacdc29d1dbd0fdbe20fbfcf7949"],["node_modules/urijs/README.md","82c96cbde7b695922d409129e2555f51"],["node_modules/urijs/package.json","4e7c8277dc68377e6f46cee66ea706ad"],["node_modules/urijs/src/IPv6.js","a2d26a6d32cf338820fd223428b69b4c"],["node_modules/urijs/src/SecondLevelDomains.js","13fd9cc9cdae6d9c2f18236974f69b07"],["node_modules/urijs/src/URI.fragmentQuery.js","16e0e40673fd76af3228c5d5f86dfc73"],["node_modules/urijs/src/URI.fragmentURI.js","faf82073d0133c69cba0f4d6ea8f4f33"],["node_modules/urijs/src/URI.js","f39b7ee8f08a8339dc7c2247f8219d0b"],["node_modules/urijs/src/URI.min.js","733ad2486125f15415ba5aaf5e86ddf1"],["node_modules/urijs/src/URITemplate.js","ad40ceef6bae453a43b7cc19d4e72f4f"],["node_modules/urijs/src/jquery.URI.js","598dc4b9f0da0310e0a927380be74e1c"],["node_modules/urijs/src/jquery.URI.min.js","d4b1a4042ffd5fa52e2f3c74ca33734a"],["node_modules/urijs/src/punycode.js","3d05e1a0418c33aca6852f201a13ae88"],["node_modules/validate-npm-package-license/README.md","ba9681f6c3438dbc91ba1d8a47c2cbd6"],["node_modules/validate-npm-package-license/index.js","32796556252ac851bbfc133b01179b00"],["node_modules/validate-npm-package-license/package.json","2e1f1ccdc494e84925768263225e6f93"],["node_modules/wrappy/README.md","55b4b44807d7edaf6084e42a5ae078d6"],["node_modules/wrappy/package.json","7e6c3acb27f58589cb1c69caee88fae8"],["node_modules/wrappy/wrappy.js","04a65e1669dc90fa11c900693c1974b1"],["package.json","642f4eb9890c4a2ea3063c7263814a0f"],["pic.jpg","69222276c4647a51dce948b38000517c"],["style.css","4e7de8d1fe2abb0365995c7ba8c80b7c"]];
var cacheName = 'sw-precache-v2-sw-precache-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







