function playSound() {
    var sonido = document.getElementById('sonidoHover');
    sonido.currentTime = 0; // Reinicia la reproducción para permitir el sonido en hover repetido
    sonido.play();
  }

  function playClickSound() {
    var sonidoClick = document.getElementById('sonidoClick');
    sonidoClick.currentTime = 0;
    sonidoClick.play();
  }