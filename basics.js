
let randomNmb = Math.floor(Math.random() * 100)
let gætAntal = 0;
console.log(randomNmb)
const correct = document.querySelector("#button2");
const gætKnap = document.querySelector("#button");
const resetKnap = document.querySelector("#reset")
const display = document.querySelector("#display")
const button = document.querySelector("#button");
const input = document.querySelector("#text");
const gætantalDisplay = document.querySelector("#guessCount");

gætKnap.addEventListener("click", () => {
  gætAntal++;
  gætantalDisplay.innerHTML = gætAntal;
const inputNummer = Number(input.value, 10)

  if( inputNummer === randomNmb ){
    display.textContent = "Korrekt! Nummeret var: " + randomNmb + " Det gjorde du på: " + gætAntal + " gæt";
    display.classList.add("spinner");
    document.querySelector("body").classList.add("color-changing");
    resetKnap.style.display = "block";
    gætKnap.style.display = "none";
    resetKnap.addEventListener("click", () => {
      window.location.reload();
    })
  } else if(inputNummer > randomNmb) {
    display.textContent = "Lavere!"
  } else if (inputNummer < randomNmb){
    display.textContent = "Højere!"
  } else if (inputNummer > 100){
    display.textContent = "!!Mellem 0 OG 100!!"
  }
});









// function randomNmb(){
// for (let i = 0; i < 1; i++) {
//     document.getElementById("display").innerText = Math.floor(
//       Math.random() * 100
//     )}
// }