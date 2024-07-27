const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "LIGHT",
    price: 59.27,
    colors: [
      {
        code: "#FFE0BD",
        img: "./img/FARE2.png",
      },
      {
        code: "#FFCC99",
        img: "./img/foundation shade 1.png",
      },
      {
        code: "F5DEB3",
        img: "./img/FARE3.png",
      },
    ],
  },
  {
    id: 2,
    title: "MEDIUM",
    price: 59.27,
    colors: [
      {
        code: "tan",
        img: "./img/medium1.png",
      },
      {
        code: "#D1A377",
        img: "./img/medium2.png",
      },
      {
        code:"#C68642",
        img:"./img/medium3.png"
      }
    ],
  },
  {
    id: 3,
    title: "Dark",
    price: 59.27,
    colors: [
      {
        code: "#C68642",
        img: "./img/DEEP1.png",
      },
      {
        code: "#A0522D",
        img: "./img/DEEP2.png",
      },
      {
        code: "#8D5524",
        img: "./img/DEEP3.png",
      },
    ],
  },
 
];
let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
