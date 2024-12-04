document.addEventListener("DOMContentLoaded", function () {
  const n = 26;
  const targetElementIndex = (n % 10) + 1;

  const allElements = document.querySelectorAll("p, li, h2, h3");

  const firstTargetElement = allElements[targetElementIndex - 1];
  firstTargetElement.id = "target-element";

  const secondTargetElement = allElements[targetElementIndex];
  secondTargetElement.classList.add("next-element");

  firstTargetElement.addEventListener("click", function () {
    this.classList.toggle("changed-background");
  });

  secondTargetElement.addEventListener("click", function () {
    this.classList.toggle("alternative-background");
  });

  const imgLink = document.querySelector('a[href*="mistoboyarka"]');

  const buttonContainer = document.createElement("div");
  buttonContainer.className = "button-container";

  const originalImage = document.querySelector("img");
  const originalWidth = originalImage.clientWidth;
  const originalHeight = originalImage.clientHeight;
  let currentScale = 1;

  const buttons = [
    { text: "Додати", action: addImage },
    { text: "Збільшити", action: increaseSize },
    { text: "Зменшити", action: decreaseSize },
    { text: "Видалити", action: deleteImage },
  ];

  buttons.forEach((button) => {
    const btn = document.createElement("button");
    btn.textContent = button.text;
    btn.addEventListener("click", button.action);
    buttonContainer.appendChild(btn);
  });

  imgLink.parentNode.insertBefore(buttonContainer, imgLink.nextSibling);

  function getCurrentImage() {
    return document.querySelector("img");
  }

  function addImage() {
    if (!getCurrentImage()) {
      imgLink.innerHTML = `<img src="./img/boyarka.jpg" alt="Місто Боярка" style="width: ${
        originalWidth * currentScale
      }px">`;
    }
  }

  function increaseSize() {
    const img = getCurrentImage();
    if (img && currentScale < 2) {
      currentScale += 0.2;
      img.style.width = originalWidth * currentScale + "px";
    }
  }

  function decreaseSize() {
    const img = getCurrentImage();
    if (img && currentScale > 0.4) {
      currentScale -= 0.2;
      img.style.width = originalWidth * currentScale + "px";
    }
  }

  function deleteImage() {
    const img = getCurrentImage();
    if (img) {
      img.remove();
    }
  }
});
