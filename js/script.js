console.log("Hello Friends!");

let przycisk = document.querySelector(".przycisk");
let naglowek = document.querySelector(".naglowek");

przycisk.addEventListener("click", () => {
    naglowek.remove();
});

console.log(przycisk);