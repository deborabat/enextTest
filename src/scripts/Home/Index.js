function openModal(valor){

  const modal = document.getElementById("white-box");
  modal.style.display = "block";
  getPotions(valor)
    
}

function closeModal(){

  const modal = document.getElementById("white-box");
  modal.style.display = "none";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }

async function getPotions(produto){
  const response = await fetch('http://localhost:3000/potions', 
    {   method: 'GET',
    })
 
  const obj =  await response.json();
  const product = obj[produto];
  const combo = product.ingredients;

  const img = document.getElementById("product-box");
  const nome = document.getElementById("nome");
  const effect = document.getElementById("effect");
  const igredients = document.getElementById("igredients");
  igredients.innerHTML = "";
  const price = document.getElementById("price");

  img.src = '../../../assets/productos/'+ product.image;
  nome.innerHTML = product.name;
  effect.innerHTML = product.effect;
  for (let i = 0; i < combo.length; i++) { 
    igredients.innerHTML += product.ingredients[i]+"<br/>"
  }
  price.innerHTML = "$"+ product.price;
  
}