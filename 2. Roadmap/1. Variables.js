const buttA = document.querySelector("#button_A");
const headingA = document.querySelector("#heading_A");

const buttName = document.getElementById("buttName");
const pName = document.getElementById("pName");
const yourName = document.getElementById("yourName");
const imgAna = document.getElementById("imgAna");

let count = 1;

buttA.onclick = () => {
    buttA.textContent = "Try again!";
    headingA.textContent = `${count} clicks so far`;
    count += 1;
};

buttName.addEventListener("click", () => {
    pName.textContent = `Your name is: ${yourName.value}`;
    if (imgAna.style.display === "none") {
        imgAna.style.display = "block";
    } else {
        imgAna.style.display = "none";
    }
});