function openModal(valor){

  const modal = document.getElementById("white-box");

  modal.style.display = "block";
  product(valor)
  console.log(valor);
  
}

function closeModal(valor){

  const modal = document.getElementById("white-box");
  modal.style.display = "none";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  console.log("closed");
}

function loadJSON(callback) {   

var xobj = new XMLHttpRequest();
xobj.overrideMimeType("application/json");
xobj.open('GET', '../../../assets/potions.json', true);
xobj.onreadystatechange = function () {
  if (xobj.readyState == 4 && xobj.status == "200") {
    callback(xobj.responseText);
    }
};
xobj.send(null);  
}
function product(produto){
loadJSON(function(err) {
  var obj = JSON.parse(err);
    
  var product = obj.potions[produto];
  var combo = product.ingredients;

  console.log(product.ingredients);
    
  var i;
  var img = document.getElementById("product-box");
  var nome = document.getElementById("nome");
  var effect = document.getElementById("effect");
  var igredients = document.getElementById("igredients");
  igredients.innerHTML = "";
  var price = document.getElementById("price");
    

  img.src = 'img/products/'+ product.image;
  nome.innerHTML = product.name;
  effect.innerHTML = product.effect;
    for (i = 0; i < combo.length; i++) { 
        igredients.innerHTML += product.ingredients[i]+"<br/>";
    }
    price.innerHTML = "$"+ product.price;
  });
  }