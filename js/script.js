// HAMBURGER MENU

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
  })
  
  document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
  })

// CONTENTFUL - gallery sliders

var client = contentful.createClient({
    space: 'jvviswqqb7hz',
    accessToken: 'yG0dUybGiGGB6uJd-JW481j7WyZ6-8-aRIiMPKjbvH8',
  });


  var galleryContent = document.getElementById("gallery-content");
  client.getEntries({content_type:'a3IndigoWebsite'}).then(function (entries) {
    entries.items.forEach(function (entry) {
      if (entry.fields.categorySimple == "Best Seller") {
        var img = document.createElement("img");
        img.src = entry.fields.bookImage.fields.file.url;
        galleryContent.appendChild(img);
      }
    });
}); 

var galleryContent2 = document.getElementById("gallery-content-2");
client.getEntries({content_type:'a3IndigoWebsite', limit:8}).then(function (entries) {
  entries.items.forEach(function (entry) {
    if (entry.fields.categorySimple == "Mystery") {
      var img = document.createElement("img");
      img.src = entry.fields.bookImage.fields.file.url;
      galleryContent2.appendChild(img);
    }
  });
}); 