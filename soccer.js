//Primero, definimos las constantes apiKey y host, que son necesarias para hacer la solicitud a la API.
const apiKey = "358e5616b394f07f78a1a07539cc66ee";
const host = "https://v3.football.api-sports.io";

//Luego, definimos la constante main para acceder al elemento HTML donde queremos mostrar los jugadores.
const main = document.getElementById("main")
//Esta variable proviene del HTML y es para dar funcion al boton
const mover = document.getElementById("mover")

//Después, definimos la función getPlayerData(playerId). Esta función hace una solicitud a la API de los 
//goleadores de una liga en particular. En este caso, estamos obteniendo los goleadores de la temporada 2018
//de la Liga de Francia. 
async function getPlayerData(playerId) {
    const response = await fetch("https:v3.football.api-sports.io/players/topscorers?season=2018&league=61",
        {
            "headers": {
                "x-rapidapi-host": host,
                "x-rapidapi-key": apiKey,
            },
        }
    );
    //La respuesta de la solicitud se convierte en un objeto JSON que se guarda en la constante data.
    const data = await response.json();
    console.log(data);

    //Luego, llamamos a la función selectRandomPlayers(players, count) y le pasamos los datos de los 
    //jugadores (guardados en data.response) y el número de jugadores que queremos mostrar 
    //(en este caso, 3). Los jugadores seleccionados se guardan en la constante selectedPlayers.
    const selectedPlayers = selectRandomPlayers(data.response, 3)
    // Finalmente, llamamos a la función showPlayers(players) y le pasamos los jugadores seleccionados. 
    showPlayers(selectedPlayers)
}
//La función selectRandomPlayers() utiliza el método sort() para ordenar 
//los jugadores de manera aleatoria y el método slice() para seleccionar solo los primeros 
//count jugadores de la lista aleatoria. 
function selectRandomPlayers(players, count) {
    const shuffled = players.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

// async function movePlayers() {
//     const response = await fetch("https://v3.football.api-sports.io/players/topassists?season=2020&league=61",
//         {
//             "headers": {
//                 "x-rapidapi-host": host,
//                 "x-rapidapi-key": apiKey,
//             },
//         }
//     );
//     //La respuesta de la solicitud se convierte en un objeto JSON que se guarda en la constante data.
//     const data = await response.json();
//     console.log(data);

//     //Luego, llamamos a la función selectRandomPlayers(players, count) y le pasamos los datos de los 
//     //jugadores (guardados en data.response) y el número de jugadores que queremos mostrar 
//     //(en este caso, 3). Los jugadores seleccionados se guardan en la constante selectedPlayers.
//     const selectedPlayers = selectRandomPlayers(data.response, 3)
//     // Finalmente, llamamos a la función showPlayers(players) y le pasamos los jugadores seleccionados. 
//     showPlayers(selectedPlayers)
// }

mover.addEventListener('click', movePlayers);

//La función showPlayers() utiliza un forEach() para recorrer la lista de jugadores seleccionados. 
//Para cada jugador, crea un nuevo elemento HTML que muestra el nombre del jugador, su foto, 
//el número de goles y partidos que ha jugado, y algunos otros detalles. Luego, el elemento HTML 
//se agrega al elemento principal (main) para que se muestre en la página.
// function showPlayers(players) {
//     //Primero borramos el contenido anterior del elemento main con main.innerHTML = ""
//     main.innerHTML = ""

//     let contador = 0


//     // Luego recorremos la lista de jugadores con players.forEach() 
//     players.forEach((element) => {



//         if (contador % 2 != 0) {
//             let contador01 = document.createElement("div")
//             contador01.className = "versus";
//             contador01.innerHTML = `
//             <span>🆚</span>`
//             console.log('entra')
//             console.log(contador)
//             main.appendChild(contador01)
//         }
//         // y para cada jugador creamosun nuevo elemento div con document.createElement("div"). A este 
//         // elemento le asignamos la clase "container" con content.className = "container"
//         let content = document.createElement("div")
//         content.className = "container";
//         content.innerHTML =
//             ` <h3>${element.player.name}<img class="logo" src="${element.statistics[0].team.logo}"></h3>
//               <h4>${element.player.nationality}</h4>
//               <h5>${element.player.birth.date}</h5>
//         <img src="${element.player.photo}" alt="${element.player.name}">
//               <h3>Goles ${element.statistics[0].goals.total}⚽  🏟️${element.statistics[0].games.appearences}</h3>
//               <h2>${element.statistics[0].league.name}<img class="logo" src=${element.statistics[0].league.flag}>
//               <h2>${element.statistics[0].league.country}<img class="logo" src=${element.statistics[0].league.logo}> `

//         main.appendChild(content)

//         if (contador % 2 != 0) {
//             let contador01 = document.createElement("div")
//             contador01.className = "versus";
//             contador01.innerHTML = `
//             <span>🆚</span>`
//             console.log('entra')
//             console.log(contador)
//             main.appendChild(contador01)
//         }

//         if (contador === 1) {
//             contador = 0
//             console.log(contador)
//         } else {
//             contador++
//         }
//     });
// }

// Finalmente, llamamos a la función getPlayerData() para obtener los jugadores y mostrarlos en la página.
getPlayerData()

