let parents = document.getElementById("parents");
let input = document.getElementById("inp");
let button = document.getElementById("btn");

let products = [
  {
    Image: "baby10.png",
    name: "Mars rug",
    Number: "100 coins",
    stock: "24 dona mavjud",
  },

  {
    Image: "baby22.png",
    name: "Keyboard stick",
    Number: "49 coins",
    stock: "11 dona mavjud",
  },

  {
    Image: "baby23.png",
    name: "smartwatch",
    Number: "899 coins",
    stock: "4 dona mavjud",
  },
  {
    Image: "baby24.png",
    name: "Wireless keyboard",
    Number: "350 coins",
    stock: "0 dona mavjud",
  },
  {
    Image: "baby25.png",
    name: "Mouse",
    Number: "350 coins",
    stock: "24 dona mavjud",
  },
  {
    Image: "baby26.png",
    name: "airpods",
    Number: "499 coins",
    stock: "11 dona mavjud",
  },
  {
    Image: "baby27.png",
    name: "Powerbank",
    Number: "899 coins",
    stock: "5 dona mavjud",
  },
  {
    Image: "baby28.png",
    name: "Usb flash drive",
    Number: "299 coins",
    stock: "24 dona mavjud",
  },
  {
    Image: "baby29.png",
    name: "Smartphone",
    Number: "3699 coins",
    stock: "24 dona mavjud",
  },
  {
    Image: "baby30.png",
    name: "Playstation",
    Number: "9999 coins",
    stock: " Oldindan zakaz qilish mumkin",
  },
  {
    Image: "baby31.png",
    name: "Yandex station",
    Number: "1990 coins",
    stock: "4 dona mavjud",
  },
  {
    Image: "baby32.png",
    name: "Planshet Samsung",
    Number: "4990 coins",
    stock: "24 dona mavjud",
  },
];

let renderData = function (data) {
  parents.innerHTML = ""; // Clear previous content
  data.map((item) => {
    let div = document.createElement("div");
    div.classList.add("product-card");
    div.innerHTML = `
     <img src=${item.Image} alt="" class="product-image" />
        <h3 class="product-title">${item.name}</h3>
        <p class="product-price">
          <img
            src="5cf9c21bc3eb624ef16ce376c54662039fb80c8d.png"
            alt="Coin icon"
            class="coin-icon"
          />
          ${item.Number} 
        </p>
        <p class="product-stock">${item.stock}</p>
    `;
    parents.appendChild(div);
  });
};

renderData(products);

button.addEventListener("click", function () {
  let newData = products.filter((item) => {
    return item.name === input.value;
  });

  renderData(newData);
});
