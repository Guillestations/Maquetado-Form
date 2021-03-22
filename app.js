const signInBtn = document.getElementById("iniciar");
const signUpBtn = document.getElementById("crear");
const fistForm = document.getElementById("form-1");
const secondForm = document.getElementById("form-2");
const container = document.querySelector(".container");

signInBtn.addEventListener("click", () => {
	container.classList.remove("panel-active");
});

signUpBtn.addEventListener("click", () => {
	container.classList.add("panel-active");
});

fistForm.addEventListener("submit", (e) => e.preventDefault());
secondForm.addEventListener("submit", (e) => e.preventDefault());