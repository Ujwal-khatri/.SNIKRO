const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll(".menuItem")

const products = [
    {
      id: 1,
      title: "Air Force",
      price: "9,092",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: "11,393",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: "8,334",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: "9,863",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: "7,569",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];

  let choosenProduct=products[0]
  
  const crrentProductImg = document.querySelector(".productImg");
  const crrentProductTitle = document.querySelector(".productTitle");
  const crrentProductPrice = document.querySelector(".productPrice");
  const crrentProductColors = document.querySelectorAll(".color");
  const crrentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //change the current slide
     wrapper.style.transform=`translateX(${-100*index}vw)`;

     //change the choosen product
     choosenProduct=products[index]

     //change texts of currentProduct
     crrentProductTitle.textContent = choosenProduct.title;
     crrentProductPrice.textContent ="₹"+choosenProduct.price;
     crrentProductImg.src = choosenProduct.colors[0].img;
     //assing new colors
     crrentProductColors.forEach((color,index)=>{
      color.style.backgroundColor = choosenProduct.colors[index].code;
     })
    });
});

crrentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        crrentProductImg.src = choosenProduct.colors[index].img
    })
})

crrentProductSizes.forEach((size,index)=>{
  size.addEventListener("click",()=>{
    crrentProductSizes.forEach(size=>{
      size.style.backgroundColor= "orange";
    })
    size.style.backgroundColor= "black";
  })
})

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click",()=>{
  payment.style.display="flex"
})

close.addEventListener("click",()=>{
  payment.style.display="none"
})