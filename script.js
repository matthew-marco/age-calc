const yearinput = document.querySelector(".year input");
const monthinput = document.querySelector(".month input");
const dayinput = document.querySelector(".day input");
const yearvalue = document.querySelector(".years span");
const monthvalue = document.querySelector(".months span");
const dayvalue = document.querySelector(".days span");
const button = document.querySelector(".line img");
const date = new Date();
let yearvalid = false;
let monthvalid = false;
let dayvalid = false;
button.addEventListener("click", () => {
  if (yearinput.value === "") {
    yearinput.parentElement.classList.remove("empty");
    yearinput.parentElement.classList.remove("error");
    yearinput.parentElement.classList.add("empty");
    yearvalid = false;
  } else if (yearinput.value > date.getFullYear()) {
    yearinput.parentElement.classList.remove("empty");
    yearinput.parentElement.classList.remove("error");
    yearinput.parentElement.classList.add("error");
    yearvalid = false;
  } else {
    yearvalid = true;
    yearinput.parentElement.classList.remove("empty");
    yearinput.parentElement.classList.remove("error");
  }

  if (monthinput.value === "") {
    monthinput.parentElement.classList.remove("empty");
    monthinput.parentElement.classList.remove("error");
    monthinput.parentElement.classList.add("empty");
    monthvalid = false;
  } else if (monthinput.value > 12) {
    monthinput.parentElement.classList.remove("empty");
    monthinput.parentElement.classList.remove("error");
    monthinput.parentElement.classList.add("error");
    monthvalid = false;
  } else {
    monthvalid = true;
    monthinput.parentElement.classList.remove("empty");
    monthinput.parentElement.classList.remove("error");
  }

  if (dayinput.value === "") {
    dayinput.parentElement.classList.remove("empty");
    dayinput.parentElement.classList.remove("error");
    dayinput.parentElement.classList.add("empty");
    dayvalid = false;
  } else if (dayinput.value > 31) {
    dayinput.parentElement.classList.remove("empty");
    dayinput.parentElement.classList.remove("error");
    dayinput.parentElement.classList.add("error");
    dayvalid = false;
  } else {
    dayvalid = true;
    dayinput.parentElement.classList.remove("empty");
    dayinput.parentElement.classList.remove("error");
  }
  if (yearvalid === true && monthvalid === true && dayvalid === true) {
    let ageDate = new Date(
      `${yearinput.value}/${monthinput.value}/${dayinput.value}`
    );
    const agediff = date - ageDate;
    const age = new Date(agediff);
    yearvalue.innerHTML = Math.floor(agediff / 31536000000);
    monthvalue.innerHTML = age.getUTCMonth();
    dayvalue.innerHTML = age.getUTCDate() - age.getUTCDay();
  }
});
