export class Album {
  constructor(id, name, img) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.create();
  }
  // return html content
  getHTML(imgUrl) {
    return `<img
    src="/${imgUrl}"
    alt=""
  />
  <div class="action">
    <a href="#">Launch</a>
    <button class="button edit"><i class="far fa-edit"></i></i></button>
    <button class="button delete"><i class="far fa-trash-alt"></i></button>`;
  }

  create() {
    const divContainer = document.querySelector(".portfolio");
    const divItem = document.createElement("div");
    divItem.classList.add("item");
    divItem.innerHTML = this.getHTML(this.img);

    divContainer.appendChild(divItem);
    const containerParent = document.querySelector(".album-shoots");
    containerParent.appendChild(divContainer);
    console.log(
      `ITEM Criado com: id:${this.id} / nome:${this.name} / url:${this.img}`
    );
  }
}
