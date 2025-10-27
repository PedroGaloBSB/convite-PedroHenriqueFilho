document.addEventListener("DOMContentLoaded", () => {
  // Animação de fade-in para o título principal
  const title = document.querySelector(".title-bungee");
  if (title) {
    title.style.opacity = 0;
    setTimeout(() => {
      title.style.transition = "opacity 2s ease-in-out";
      title.style.opacity = 1;
    }, 500);
  }

  // --- LÓGICA DO CRONÔMETRO DE CONTAGEM REGRESSIVA ---

  // 1. Defina a data e hora final da contagem.
  // IMPORTANTE: O formato do mês é em inglês. "Nov" = Novembro.
  const countDownDate = new Date("Nov 1, 2025 17:00:00").getTime();

  // 2. Atualiza o cronômetro a cada 1 segundo
  const interval = setInterval(() => {
    // Pega a data e hora de agora
    const now = new Date().getTime();

    // Calcula a distância entre a data final e a data atual
    const distance = countDownDate - now;

    // 3. Calcula os dias, horas, minutos e segundos restantes
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // 4. Mostra o resultado nos elementos HTML corretos, com 2 dígitos
    document.getElementById("days").innerText = String(days).padStart(2, '0');
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');

    // 5. Quando a contagem terminar, exibe uma mensagem de festa
    if (distance < 0) {
      clearInterval(interval);
      document.getElementById("countdown").innerHTML = '<p class="col-span-4 text-2xl font-bold text-yellow-400">A MISSÃO COMEÇOU! NOS VEMOS NA FESTA!</p>';
    }
  }, 1000);
});
