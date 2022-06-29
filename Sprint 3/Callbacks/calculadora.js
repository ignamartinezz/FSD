function calculadora(num1, num2, funcion) {
	return funcion(num1, num2);
}

let resultado = calculadora(2, 3, (num1, num2) => {
	return num1 + num2;
});

// console.log(resultado);

const pelis = [
	{
		id: 1,
		titulo: "The Lord of the Rings: The Return of the King",
		director: "Peter Jackson",
		genero: "Aventura",
		anio: 2003,
		duracionEnMinutos: 401,
		ganoOscar: true,
		calificacionIMDB: 8.9,
	},

	{
		id: 2,
		titulo: "Doctor Strange",
		director: "Scott Derrickson",
		genero: "Accion",
		anio: 2016,
		duracionEnMinutos: 115,
		ganoOscar: true,
		calificacionIMDB: 7.5,
	},

	{
		id: 3,
		titulo: "The Last Lovecraft: Relic of Cthulhu",
		director: "Henry Saine",
		genero: "Horror",
		anio: 2009,
		duracionEnMinutos: 78,
		ganoOscar: false,
		calificacionIMDB: 5.6,
	},

	{
		id: 4,
		titulo: "The Avengers: Age of Ultron",
		director: "Joss Whedon",
		genero: "Accion",
		anio: 2015,
		duracionEnMinutos: 141,
		ganoOscar: false,
		calificacionIMDB: 7.3,
	},
];

const filmoteca={
    peliculas:pelis,
    buscarId: function(id){
        this.peliculas.filter((pelicula)=>{
            if(pelicula.id==id){
                return true;
            }else{
                return false;
            }
        })
    }


}

filmoteca.buscarId()
