let parr1, parr2, parr3, parr4;

parr1 = document.getElementById("parrafo");
parr2 = document.getElementsByTagName("p");
parr3 = document.querySelector(".parra");
parr4 = document.querySelectorAll(".pa");

document.write(parr1);
document.write("\n" + parr2 + parr2[0] + "\n" + parr3 + "\n" + parr4);