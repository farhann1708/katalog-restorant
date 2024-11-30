import "regenerator-runtime";
import CacheHelper from "./utils/cache-helper";

const { assets } = global.serviceWorkerOption;

self.addEventListener("install", (event) => {
  event.waitUntil(CacheHelper.cachingAppShell([...assets, "./"]));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(CacheHelper.deleteOldCache());
});

self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  // Caching specific requests to restaurant API images
  if (requestUrl.origin === "https://restaurant-api.dicoding.dev") {
    event.respondWith(CacheHelper.cacheExternalImage(event.request));
  } else {
    event.respondWith(CacheHelper.revalidateCache(event.request));
  }
});
