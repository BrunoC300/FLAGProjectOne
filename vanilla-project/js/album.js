let albuns = [];
let albumId = 1;

const onSubmit = (event) => {
  event.preventDefault();
  removeAlbum(albumId);
  /*const nomeSelector = document.querySelector(".nomeAlbum");
  const img = document.querySelector(".imagemAlbum");
  const imgURL = img.value.slice(12);
  const nome = nomeSelector.value;

  nomeSelector.value = "";
  img.value = "";

  postAlbum(nome, imgURL);*/
};

const postAlbum = (nome, img) => {
  //Procurar albuns
  albuns = JSON.parse(localStorage.getItem("albuns") || "[]");

  // Modifying
  let album = {
    albumId: albumId,
    nome: nome,
    url: img,
  };
  albuns.push(album);
  // Saving
  localStorage.setItem("albuns", JSON.stringify(albuns));
  new Album(albumId, nome, img);

  albumId++;
};

const removeAlbum = (id) => {
  //localStorage.removeItem(//ID DO Album//);//

  albuns = JSON.parse(localStorage.getItem("albuns") || "[]");

  const novoAlbuns = albuns.filter((album) => album.albumId !== id);
};

document.querySelector(".album__form").addEventListener("submit", onSubmit);
