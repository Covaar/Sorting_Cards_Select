/* eslint-disable */
// import "bootstrap";
import "./style.css";

window.onload = () => {
  let numero = null;
  let numtrasns = null;
  let pinta = null;
  // let prevIcon = null;
  let cartas = [];
  // PINTA
  let GenerateRandomType = () => {
    let Types = ["diamond", "spade", "heart", "club"];
    let indexTypes = Math.floor(Math.random() * Types.length);
    return Types[indexTypes];
  };
  // NUMERO
  let GenerateRandomNumber = () => {
    let Numbers = Math.floor(Math.random() * 13) + 1;
    return Numbers;
  };
  function cambiarValor(valor) {
    switch (valor) {
      case 1:
        return "A";
      case 2:
        return "2";
      case 3:
        return "3";
      case 4:
        return "4";
      case 5:
        return "5";
      case 6:
        return "6";
      case 7:
        return "7";
      case 8:
        return "8";
      case 9:
        return "9";
      case 10:
        return "10";
      case 11:
        return "J";
      case 12:
        return "Q";
      case 13:
        return "K";
      default:
        return valor;
    }
  }
  let button = document.getElementById("draw");
  button.addEventListener("click", function() {
    let inputNumber = document.getElementById("inputNumber").value; //preguntar por name-id diferencias

    for (let i = 0; i < inputNumber; i++) {
      numero = GenerateRandomNumber();
      pinta = GenerateRandomType();
      numtrasns = cambiarValor(numero);
      cartas.push({ number: numero, type: pinta });
      let newElement = document.createElement("div");
      newElement.classList.add("card");
      newElement.classList.add(pinta);
      newElement.textContent = cambiarValor(numero);
      document.querySelector(".draw").appendChild(newElement);
    }
  });

  console.log(cartas);

  let SelectSortCard = document.getElementById("selection");
  SelectSortCard.addEventListener("click", function() {
    let min = 0;

    let size = cartas.length;
    for (let i = 0; i < size; i++) {
      let min = i;
      for (let j = min; j < size; j++) {
        if (cartas[min].number > cartas[j].number) {
          let temp = cartas[min];
          cartas[min] = cartas[j];
          cartas[j] = temp;
        }
      }
      let newrow = document.createElement("div");
      newrow.classList.add("fila");
      for (let n = 0; n < cartas.length; n++) {
        let icon = cambiarValor(cartas[n].number);
        let newElement = document.createElement("div");
        newElement.classList.add("card");
        newElement.classList.add(cartas[n].type);
        newElement.textContent = icon;
        newrow.appendChild(newElement);
      }
      document.querySelector(".selection").appendChild(newrow);
    }
    console.log(cartas);
  });
};
