import { Album } from "./work";
console.log("JASJDASJDJS");
let albumId = 1;
const onSubmit = (event) => {
  event.preventDefault();
  const nome = document.querySelector(".nomeAlbum");
  const img = document.querySelector(".imagemAlbum");
  const imgURL = img.value.slice(12);

  nome.value = "";
  img.value = "";

  postAlbum(nome, imgURL);
};

const postAlbum = (nome, img) => {
  new Album(albumId, nome, img);

  albumId++;
};

document.querySelector(".album__form").addEventListener("submit", onSubmit);
