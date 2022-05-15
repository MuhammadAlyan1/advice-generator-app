const adviceNumber = document.querySelector("#adviceNumber");
const adviceContents = document.querySelector("#adviceContents");
const adviceBtn = document.querySelector("#changeAdvice");

document.addEventListener("DOMContentLoaded", () => {
  adviceBtn.click();
});

adviceBtn.addEventListener("click", getAdvice);

// fetching advice
async function getAdvice() {
  let advice = await fetch("https://api.adviceslip.com/advice");
  advice = await advice.json();
  adviceNumber.innerText = `advice #${advice.slip.id}`;
  adviceContents.innerText = `${advice.slip.advice}`;
}
