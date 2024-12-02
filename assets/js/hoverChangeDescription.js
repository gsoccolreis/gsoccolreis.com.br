
// Já lido

export function hoverChangeDescription(nameCard, text) {
  var changeDescription = document.querySelector(".changeDescription");

  // Seleciona todos os elementos correspondentes ao seletor
  const elements = document.querySelectorAll(nameCard);

  // Verifica se existem elementos encontrados
  if (elements.length > 0) {
    elements.forEach((element) => {
      element.addEventListener("mouseover", () => {
        changeDescription.innerHTML = text;
      });

      element.addEventListener("mouseout", () => {
        changeDescription.innerHTML = `Para ler o card, passe o cursor do mouse acima`;
      });
    });
  } else {
    console.warn(`Nenhum elemento encontrado para o seletor: ${nameCard}`);
  }
}
