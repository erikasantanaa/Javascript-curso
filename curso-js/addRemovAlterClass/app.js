// const paragrafo = document.querySelector("p");

// console.log(paragrafo);

// console.log(paragrafo.classList);
// paragrafo.classList.remove("error"); 
// paragrafo.classList.add("success");  

const paragrafos = document.querySelectorAll("p");

paragrafos.forEach((paragrafo) => {
  // console.log(paragrafo.textContent);
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