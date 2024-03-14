const container2 = document.querySelector(".container2");
const generatorTablePlayer = function () {
  for (let i = 1; i < 25; i++) {
    const div2 = document.createElement("div"); //creo div
    div2.innerText = i; //agiungo numero da 1 a 24
    div2.className = "cell2";
    container2.appendChild(div2); //aggiunto div player js al div html
  }
};
generatorTablePlayer();

const div2 = document.querySelectorAll(".cell2"); //richiamo il div fuori

const container = document.querySelector(".container"); //classe container div in html

const generatorTable = function () {
  for (let i = 1; i < 77; i++) {
    const div = document.createElement("div"); //creo div
    div.innerText = i; //agiungo numero da 1 a 76
    div.className = "cell";
    container.appendChild(div); //aggiunto div js al div html
  }
};
generatorTable();
//bottone
const button = document.createElement("button"); //creo bottone
button.innerText = "ESTRAI NUMERO"; //aggiunto testo
container.appendChild(button); //aggiunto al container html
const div = document.querySelectorAll(".cell");
//click

button.onclick = function () {
  const randomNumber = Math.ceil(Math.random() * 76); //numero casuale da 1 a 76
  for (let i = 0; i < 76; i++) {
    if (parseInt(div[i].innerText) == randomNumber) {
      //numero contenuto dentrodiv = del numero random
      div[i].classList.add("red") ; //cambio classe al div
    }


    // else if (div2[i].innerText == randomNumber) {
    //   div2[i].className = "cell2 red";
    // }
  }
console.log(randomNumber)
  for (let i = 0; i < 24; i++) {
    if (parseInt(div2[i].innerText)  === randomNumber){
      //numero contenuto dentrodiv = del numero random
    
      div2[i].classList.add("red") ; //cambio classe al div
    }
  }
};

