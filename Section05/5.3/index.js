document.querySelector(".fa-burger").addEventListener("click", () => {
  document.querySelector("nav > ul").classList.toggle("hidden--mobile");
});

document.querySelector(".fa-bomb").addEventListener("click", () => {
  document.querySelector("content").classList.toggle("responsive");
});
