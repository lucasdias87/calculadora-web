function displaynum(n1) {
    Calculator.text1.value = Calculator.text1.value + n1; 
  }


  function temaClaro() {
    document.body.style.backgroundImage = "url('img/br.avif')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw 100vh';
  }
  
  function temaEscuro() {
    document.body.style.backgroundImage = "url('img/dark.avif')";
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundSize = '100vw 100vh';
  }