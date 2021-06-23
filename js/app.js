/* Desplazamiento del Formulario*/
const iniciarBtn = document.getElementById('iniciar');
const crearBtn = document.getElementById('crear');
const crearForm = document.getElementById('form-1');
const iniciarForm = document.getElementById('form-2');
const container = document.querySelector('.container');
const user = document.getElementById('usuarioNew');
const userEmail = document.getElementById('emailNew');
const userPassword = document.getElementById('passwordNew');


iniciarBtn.addEventListener("click", () => {
	container.classList.remove("panel-active");
});

crearBtn.addEventListener("click", () => {
	container.classList.add("panel-active");
});

crearForm.addEventListener("submit", (e) => {
	e.preventDefault();
	crearForm.reset();
});
iniciarForm.addEventListener("submit", (e) => e.preventDefault());


/**Validacion de Formulario */
// user.addEventListener('blur', function(){
// 	if(user.value == "" ){
// 		user.className = "input form-control is-invalid";	
// 	}else{
// 		user.className = "input form-control is-valid";
// 	}
// });

function users(input) {
	if (input.value == "") {
		console.log(input.value)
		input.className = "input form-control is-invalid";
	} else {
		input.className = "input form-control is-valid";
		console.log(input.value)
	}
}
// userPassword.addEventListener('blur', function () {
// 	if (userPassword.value == "") {
// 		userPassword.className = "input form-control is-invalid";
// 	} else {
// 		userPassword.className = "input form-control is-valid";
// 	}
// })

function password(input){
	if (input.value != "") {
		console.log("tiene texto")
		input.className = "input form-control is-valid";
		
	} else {
		//input.className = "input form-control is-invalid";
		console.log("NO tiene texto")
	}
}

function email(input) {
	let expresion = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
	if (input.value != "" && expresion.test(input.value)) {
		input.className = "input form-control is-valid";

	} else {
		input.className = "input form-control is-invalid";

	}
}

