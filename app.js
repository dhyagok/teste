JS:// Obtém a referência para a imagem
var img1 = document.getElementById("ligar");

// Cria um novo objeto de áudio e define a fonte do arquivo MP3
var audio1 = new Audio();
audio1.src = "ligar.mp3";

// Adiciona um ouvinte de eventos de clique à imagem
img1.addEventListener("click", function() {
    // Verifica se o áudio está tocando
    if (audio1.paused) {
      // Inicia a reprodução do áudio
      audio1.play();
    } else {
      // Pausa a reprodução do áudio
      audio1.pause();
    }
  });