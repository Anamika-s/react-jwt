let CACHE_NAME ="cachecontents"

var urlCache =
[
  "/static/js/bundle.js",
  // "http://localhost:5022/api/student",
    "/manifest.json",
   "/favicon.ico",
  "/logo192.png",
  "/student",
  "/home",
  "/"
]

// install service worker
this.addEventListener('install', (event)=>
{
  console.log("install")
  event.waitUntil(
    caches.open(CACHE_NAME)
    .then((cache)=>
    {
      return cache.addAll(urlCache)
    })
  )
})

// Fetch cache data

this.addEventListener('fetch', (event)=>
{
   if(!navigator.onLine)
   {
     console.log("Offline")
     event.respondWith(
       caches.match(event.request)
       .then((response)=>
       {
         if(response){
         return response;
       }
       let url = event.request.clone()
       fetch(url) 
      })
)
}
})

this.addEventListener('activate', (event)=>
  {
    console.log("install")
    event.waitUntil(
      caches.keys().then(function(cacheNames)
      {
        return Promise.all(
          cacheNames.filter(function(cacheNames)
        {

        }).map(function(cacheNames)
      {
        return caches.delete(cacheNames);
      })
        )
      })
    )
        
})

