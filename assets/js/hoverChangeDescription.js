
// Já lido

export function hoverChangeDescription(nameCard, text) {
  const changeDescription = document.querySelector(".changeDescription");
  const elements = document.querySelectorAll(nameCard);

  // Função auxiliar para verificar se o dispositivo é touchscreen
  const isTouchDevice = () => 'ontouchstart' in window || navigator.maxTouchPoints > 0;

  if (elements.length > 0) {
    elements.forEach((element) => {
      if (isTouchDevice()) {
        // Comportamento para dispositivos touchscreen (mobile)
        element.addEventListener("click", () => {
          if (changeDescription.innerHTML === text) {
            changeDescription.innerHTML = "Para ler o card, clique acima";
          } else {
            changeDescription.innerHTML = text;
          }
        });
      } else {
        // Comportamento para desktops
        element.addEventListener("mouseover", () => {
          changeDescription.innerHTML = text;
        });

        element.addEventListener("mouseout", () => {
          changeDescription.innerHTML = "Para ler o card, passe o cursor do mouse acima";
        });
      }
    });
  } else {
    console.warn(`Nenhum elemento encontrado para o seletor: ${nameCard}`);
  }
}

