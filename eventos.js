document.addEventListener('DOMContentLoaded', function(){
    

    function Saludar() {
      alert('Hola, soy el div');
    }
    
    const container = document.querySelector("div");
    container.addEventListener("click", Saludar);
        
    
const btn = document.querySelector('button');

  btn.addEventListener('click', (event) => {
    event.stopPropagation();
  })

})

