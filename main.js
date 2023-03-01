const clickhere = document.querySelector(".arrowone");
const props = document.querySelector(".apropos");
const secondSquare = document.querySelector(".secondsquare");

//the left part of the section "a propos"

clickhere.addEventListener("mouseover", showHiddenDiv);
clickhere.addEventListener("mouseout", hideHiddenDiv);

function showHiddenDiv() {
  secondSquare.classList.add("show");
  secondSquare.addEventListener("transitionend", removeShowClass);
}

function hideHiddenDiv() {
  secondSquare.classList.remove("show");
  secondSquare.addEventListener("transitionend", removeShowClass);
}

function removeShowClass() {
  secondSquare.classList.remove("show");
}

//the organigrame
const right = document.querySelector(".right");

const showOrgChartBtn = document.getElementById("show-org-chart");
const orgChartContainer = document.querySelector(".org-chart-container");
const orgChartRow2 = document.querySelector(".org-chart-row2");
const directeur = document.querySelector(".directeur");
const plus = document.querySelector(".plus");

showOrgChartBtn.addEventListener("click", function () {
  showOrgChartBtn.style.display = "none";
  const myDiv = document.createElement("div");

  myDiv.classList.add("directeur");
  myDiv.textContent = "Directeur";
  right.appendChild(myDiv);
  orgChartContainer.style.display = "flex";
});

const firstarrow = document.querySelectorAll(".arrow")[0];

const secondarrow = document.querySelectorAll(".arrow")[1];

orgChartRow2.style.display = "none";

firstarrow.addEventListener("click", function () {
  orgChartRow2.style.display = "flex";
});

secondarrow.addEventListener("click", function () {
  const chantier = document.createElement("div");

  chantier.classList.add("chantier");

  chantier.textContent = "chantiers";

  right.appendChild(chantier);
});
