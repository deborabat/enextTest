function loadJSON(callback) {   

  var xobj = new XMLHttpRequest();
  xobj.overrideMimeType("application/json");
  xobj.open('GET', 'potions.json', true);
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

//Ativa caixa de Produto

function lbox(valor){
  var x = document.getElementById("lbox");
  var y = document.getElementById("bg");
  if (x.className === "lbox") {
      x.className += "Ativo";
      y.className += "on";
  } else {
      x.className = "lbox";
      y.className = "bg";
  }
  if(valor != null){
      console.log(valor);
      product(valor);
  }
}
