// Função para esconder ou mostrar elementos do menu
export const HideMenu = (hideClass: string, mainButtonClass: string): void => {
  // Obtém todos os elementos com a classe hideClass
  const elementsToHide = document.getElementsByClassName(hideClass);
  // Obtém todos os elementos com a classe mainButtonClass
  const elementsToChangeWidth =
    document.getElementsByClassName(mainButtonClass);

  // Converte a coleção de elementos para um array e itera sobre cada elemento
  Array.from(elementsToHide).forEach((element, index) => {
    const htmlElement = element as HTMLElement;
    const changeWidthElement = elementsToChangeWidth[index] as
      | HTMLElement
      | undefined;

    // Verifica se o elemento está visível
    if (htmlElement.style.display !== "none") {
      // Esconde o elemento
      htmlElement.style.display = "none";
      // Adiciona a classe para mudar a largura do botão principal, se existir
      if (changeWidthElement) {
        changeWidthElement.classList.add("side-menu-width");
      }
    } else {
      // Mostra o elemento
      htmlElement.style.display = "block";
      // Remove a classe que muda a largura do botão principal, se existir
      if (changeWidthElement) {
        changeWidthElement.classList.remove("side-menu-width");
      }
    }
  });
};
