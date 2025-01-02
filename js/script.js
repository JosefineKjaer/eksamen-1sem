const containers = document.querySelectorAll(".image-container");

containers.forEach((container) => {
  const overlay = container.querySelector(".overlay");

  // Tilføj 'show'-klassen ved mouseover
  container.addEventListener("mouseover", () => {
    overlay.classList.add("show");
  });

  // Fjern 'show'-klassen ved mouseout
  container.addEventListener("mouseout", () => {
    overlay.classList.remove("show");
  });
});
