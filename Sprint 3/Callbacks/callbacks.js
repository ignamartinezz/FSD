// function primero(){

//     console.log("primero");
// }

// function segundo(){

//     console.log("Segundo");
// }

// primero();
// segundo();

// EJERCICIO 1

const a = [23, 45, 32];

const b = [12, 67, 75];

const encontrarGanador = function (a, b, Augusto) {
	function Augusto() {}

	let primerParticipante = 0;

	let segundoParticipante = 0;

	for (let i = 0; i < a.length(); i++) {
		if (a[i] > b[i]) {
			primerParticipante++;
		} else if (a[i] < b[i]) {
			segundoParticipante++;
		}
	}

	if (primerParticipante > segundoParticipante) {
		return "primer";
	} else {
		return "segundo";
	}
};

// primera etapa

encontrarGanador(a, b, (primerParticipante, segundoParticipante) => {
	if (primerParticipante > segundoParticipante) {
		console.log("[+] Gano el Primero!");
	} else {
		console.log("[+] Gano el Segundo!");
	}
});
