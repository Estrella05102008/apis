
fetch('data.json') 
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el JSON');
        }
        return response.json(); 
    })
    .then(pokemones => {
        //console.log(pokemones); // Muestra el contenido del JSON en la consola

        //1. mostrar los nombres de los pokemon
        //mostrarNombres(pokemones);

        //2. Pokemones con ataque mayor a 120
        //pokemonesAtaqueMayorA120(pokemones)

        //3. Pokemones con defensa menor a 100
        //pokemonesDefensaMenorA100(pokemones)

        4. pokemones de tipo electrico (o fuego, volador, planta, agua, veneno, hielo... pueden elegir)
        //pokemonesTipoElectrico(pokemones)

        //5. pokemones que tengan minimo 2 tipos
        //minimo2tipos(pokemones)

        //6. pokemones ordenados segun (nombre, ataque o defensa) en orden (asc o desc)
        //ordenar(pokemones)

    })
    .catch(error => {
        console.error('Hubo un problema con la solicitud:', error);
    });

//mostrar los nombres de los pokemon
function mostrarNombres(pokemones) {
    //Escribe tu codigo aqui
}
    console.log("Nombres de los pokemones");
    pokemones.forEach(pokemon => console.log(pokemon.nombre))

function pokemonesAtaqueMayorA120(pokemones) {
    //Escribe tu codigo aqui
}   console.log("Pokemones ataque mayor a 120");
    const pokemonesAtaqueMayorA120 = pokemones.filter(pokemones => pokemones.AtaqueMayorA > 120);

function pokemonesDefensaMenorA100(pokemones) {
    //Escribe tu codigo aqui
}

function pokemonesTipoElectrico(pokemones) {
    //Escribe tu codigo aqui
    console.log("Pokemones tipo eléctrico");
    const electricos = pokemones => pokemon.tipos
}

function minimo2tipos(pokemones) {
    //Escribe tu codigo aqui
}

function ordenar(pokemones) {
    //escribe tu codigo aqui
}







