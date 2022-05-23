const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((paragrafo) => {

  if (paragrafo.textContent.includes("error")) {
    paragrafo.classList.add("error");
  }

  if (paragrafo.textContent.includes("success")) {
    paragrafo.classList.add("success");
  }
});

const title = document.querySelector("h1");

title.classList.toggle("test"); //add
title.classList.toggle("test"); //removida