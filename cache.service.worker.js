var CACHE_NAME = 'timidity-cache-v1';
var urlsToCache = [
  'https://timidity.oss-cn-hongkong.aliyuncs.com/bundle.js',
  'https://timidity.oss-cn-hongkong.aliyuncs.com/libtimidity.wasm',
  'https://timidity.oss-cn-hongkong.aliyuncs.com/Tone_000/007_Clavinet.pat',
  'https://timidity.oss-cn-hongkong.aliyuncs.com/Tone_000/000_Acoustic_Grand_Piano.pat',
  'https://timidity-shanghai.oss-accelerate.aliyuncs.com/bundle.js',
  'https://timidity-shanghai.oss-accelerate.aliyuncs.com/libtimidity.wasm',
  'https://timidity-shanghai.oss-accelerate.aliyuncs.com/Tone_000/007_Clavinet.pat',
  'https://timidity-shanghai.oss-accelerate.aliyuncs.com/Tone_000/000_Acoustic_Grand_Piano.pat'
];
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});