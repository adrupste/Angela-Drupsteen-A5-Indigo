// HAMBURGER MENU

document.getElementById("menu-toggle").addEventListener("click", function() {
    document.getElementById("menu").classList.toggle("active");
  })
  
  document.getElementById("close-menu").addEventListener("click", function() {
    document.getElementById("menu").classList.remove("active");
  })



// MYSTERY PAGE JAVASCRIPT

var client = contentful.createClient({
    space: 'jvviswqqb7hz',
    accessToken: 'yG0dUybGiGGB6uJd-JW481j7WyZ6-8-aRIiMPKjbvH8',
  });

  var productsDiv = document.getElementById('products');

client.getEntries({content_type:'a3IndigoWebsite', limit:9}).then(function (entries) {

    entries.items.forEach(function (entry) {

        var productDiv = document.createElement('div');
        productDiv.classList.add('product');

        //IMAGES:
        var bookImage = document.createElement('img');
         bookImage.classList.add('product-image');
  
        if (entry.fields.bookImage){
            bookImage.src = entry.fields.bookImage.fields.file.url;
        }

        var linkToDetails = document.createElement('a');
        linkToDetails.href = 'checkout.html?id=' + entry.sys.id; 
        linkToDetails.appendChild(bookImage);

        var bookTitle = document.createElement('h4');
        bookTitle.classList.add('product-name');
        bookTitle.innerHTML = entry.fields.bookTitle;

        var author = document.createElement('p');
        author.classList.add('author-name');
        author.innerHTML = entry.fields.authorName;

        var price = document.createElement('p');
        price.classList.add('price');
        price.innerHTML = entry.fields.price;

        var format = document.createElement('p');
        format.classList.add('format');
        format.innerHTML = entry.fields.bookFormat;

        
        productDiv.appendChild(linkToDetails);
        productDiv.appendChild(bookTitle);
        productDiv.appendChild(author);
        productDiv.appendChild(price);
        productDiv.appendChild(format);
        productsDiv.appendChild(productDiv);


    });
  });
