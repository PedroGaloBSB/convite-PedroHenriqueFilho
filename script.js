document.addEventListener("DOMContentLoaded", () => {
  const nome = document.querySelector(".nome");
  nome.style.opacity = 0;
  setTimeout(() => {
    nome.style.transition = "2s";
    nome.style.opacity = 1;
  }, 500);
});
