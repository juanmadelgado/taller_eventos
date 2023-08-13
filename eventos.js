document.addEventListener('DOMContentLoaded', function(){
    

    function Saludar() {
      alert('Hola, soy el div');
    }
    
    const container = document.querySelector("div");
    container.addEventListener("click", Saludar);
        


})

