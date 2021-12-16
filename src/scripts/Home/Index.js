window.onloadstart = getPotions()

const openModal = (valor) => {

  const modal = document.getElementById("white-box");
  modal.style.display = "block";
  getPotions(valor)
    
}

const closeModal= () => {

  const modal = document.getElementById("white-box");
  modal.style.display = "none";

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  }

async function getPotions(valor){
  const response = await fetch('http://localhost:3000/potions', 
    { method: 'GET',
    })
  
  const obj = await response.json();
  const product  = obj[valor];
  
  setListPotions(obj)
}

const setPotions = (product) => {
 
  const combo = product.ingredients;

  const img = document.getElementById("product-box");
  const nome = document.getElementById("nome");
  const effect = document.getElementById("effect");
  const ingredients = document.getElementById("igredients");
  ingredients.innerHTML = "";
  const price = document.getElementById("price");

  img.src = '../../../assets/productos/'+ product.image;
  nome.innerHTML = product.name;
  effect.innerHTML = product.effect;
  for (let i = 0; i < combo.length; i++) { 
    ingredients.innerHTML += product.ingredients[i]+"<br/>"
  }
  price.innerHTML = "$"+ product.price;
  
}

const setListPotions = (obj) => {
  
  let products = document.getElementById("products")

  for (let j = 1; j < 7; j++) { 
    console.log(obj[j.toString()])

    let figure = document.createElement('figure');
    let a = document.createElement('a');
    let img = document.createElement('img');
    let figCaption = document.createElement('figcaption');

    figure.appendChild(a);
    figure.appendChild(figCaption);
    a.appendChild(img);
    
    a.href = '#';
    img.idLightBox = `light${obj[j.toString()]}`
    img.addEventListener('click', () => {
      openModal(obj[j.toString()]);
    });


    img.src = `../../../assets/productos/${obj[j.toString()].image}`;

    img.className ='produto-img';
    figCaption.innerHTML = `${obj[j.toString()].name} <br> <span>$ ${obj[j.toString()].price}</span>`;
    products.appendChild(figure);
   
  }
  
}