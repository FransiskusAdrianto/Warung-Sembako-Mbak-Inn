document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Beras",
        img: "1.jpg",
        price: 14000,
      },
      {
        id: 2,
        name: "Telur",
        img: "2.jpg",
        price: 26000,
      },
      {
        id: 2,
        name: "Gas",
        img: "3.jpg",
        price: 22000,
      },
    ],
  }));
});
