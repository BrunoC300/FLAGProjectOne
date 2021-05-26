import { Album } from "./work";

let albuns = JSON.parse(localStorage.getItem("albuns") || "[]");

window.addEventListener("load", (event) => {
  console.log("A carregar:");
  albuns.forEach(function (album) {
    new Album(album.albumId, album.nome, album.url);
    console.log(album);
  });
});

function clearStorage() {
  storage.clear();
}
