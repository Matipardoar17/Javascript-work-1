 

const precioInicial = document.querySelector(".precio-inicial");
const cantidad = document.querySelector(".cantidad")
const totalapagar = document.querySelector(".valor-total")
const más = document.querySelector("#más")
const menos = document.querySelector("#menos")

más.addEventListener("click", () => {
  cantidad.innerHTML++
  totalapagar.innerHTML = cantidad.innerHTML * precioInicial.innerHTML
})

menos.addEventListener("click", () =>{
   cantidad.innerHTML--
   totalapagar.innerHTML = cantidad.innerHTML * precioInicial.innerHTML
})


