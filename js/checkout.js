// HAMBURGER MENU

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
  })
  
  document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
  })



// CHECKOUT PAGE JAVASCRIPT

var textInURL = window.location.search;
var parametersInURL = new URLSearchParams(textInURL);
var id = parametersInURL.get('id');

var client = contentful.createClient({
    space: 'jvviswqqb7hz',
    accessToken: 'yG0dUybGiGGB6uJd-JW481j7WyZ6-8-aRIiMPKjbvH8',
  });

  var productImage = document.getElementById('product-image');

  var product = document.getElementById('all-book-details');
  client.getEntry(id).then(function (entry) {
    console.log(entry);

    var bookImage = document.createElement('img');
    bookImage.classList.add('product-image');

   if (entry.fields.bookImage){
       bookImage.src = entry.fields.bookImage.fields.file.url;
   }

    var name = document.createElement('p');
    name.innerHTML = entry.fields.authorName;
    
    var bookTitle = document.createElement('p');
    bookTitle.innerHTML = entry.fields.bookTitle;

    var price = document.createElement('p');
    price.classList.add('price');
    price.innerHTML = entry.fields.price;

    var format = document.createElement('p');
    format.classList.add('format');
    format.innerHTML = entry.fields.bookFormat;

    productImage.appendChild(bookImage);
    product.appendChild(bookTitle);
    product.appendChild(name);
    product.appendChild(format);
    product.appendChild(price);
  });
