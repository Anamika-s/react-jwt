export default function serviceworker()
{
  let swUrl = `${process.env.PUBLIC_URL}/sw.js`

  if('serviceWorker' in navigator)
  {
        window.addEventListener('load', function()
        {
          navigator.serviceWorker.register(swUrl).then(function(register)
          {
            console.log("Service worker is registered successfully ", register.scope)
          }, function(error)
          {
            console.log("Failed")
          }).catch(function(error)
          {
            console.log(error)
          })

        })
  }
  else 
  {
    console.log("Service Worker is not supported for this browser");
  }
}