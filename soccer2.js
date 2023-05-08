const goleadores = document.getElementById('Goleadores');
const asistencias = document.getElementById('Asistencias');
const yellow = document.getElementById('Yellow');
const red = document.getElementById('Red');
const teams = document.getElementById('Teams');

goleadores.addEventListener('click', () => {
    console.log('haz click en goleadores');
    async function goalsPlayers() {
        const response = await fetch("https://v3.football.api-sports.io/players/topscorers?season=2018&league=61",
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
    function showPlayers(players) {
        //Primero borramos el contenido anterior del elemento main con main.innerHTML = ""
        main.innerHTML = ""

        let contador = 0


        // Luego recorremos la lista de jugadores con players.forEach() 
        players.forEach((element) => {



            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }
            // y para cada jugador creamosun nuevo elemento div con document.createElement("div"). A este 
            // elemento le asignamos la clase "container" con content.className = "container"
            let content = document.createElement("div")
            content.className = "container";
            content.innerHTML =
                ` <h3>${element.player.name} <img class="logo" src="${element.statistics[0].team.logo}"></h3>
                  <h4>${element.player.nationality}</h4>
                  <h5>${element.player.birth.date}</h5>
            <img src="${element.player.photo}" alt="${element.player.name}">
                  <h3>Goles ${element.statistics[0].goals.total}⚽  🏟️${element.statistics[0].games.appearences}</h3>
                  <h2>${element.statistics[0].league.name}<img class="logo" src=${element.statistics[0].league.flag}>
                  <h2>${element.statistics[0].league.country}<img class="logo" src=${element.statistics[0].league.logo}> `

            main.appendChild(content)

            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }

            if (contador === 1) {
                contador = 0
                console.log(contador)
            } else {
                contador++
            }
        });
    }

    // Finalmente, llamamos a la función getPlayerData() para obtener los jugadores y mostrarlos en la página.
    goalsPlayers()


});

asistencias.addEventListener('click', () => {
    console.log('haz click en asistencias')
    async function asistplayer() {
        const response = await fetch("https://v3.football.api-sports.io/players/topassists?season=2020&league=61",
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
        showPlayersasist(selectedPlayers)
    }
    function showPlayersasist(players) {
        //Primero borramos el contenido anterior del elemento main con main.innerHTML = ""
        main.innerHTML = ""

        let contador = 0


        // Luego recorremos la lista de jugadores con players.forEach() 
        players.forEach((element) => {



            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }
            // y para cada jugador creamosun nuevo elemento div con document.createElement("div"). A este 
            // elemento le asignamos la clase "container" con content.className = "container"
            let content = document.createElement("div")
            content.className = "container";
            content.innerHTML =
                `   <h3>${element.player.name} <img class="logo" src="${element.statistics[0].team.logo}"></h3>
                <h4>${element.player.nationality} Nacionalidad</h4>
                <h5>${element.player.birth.date}</h5>
                <img src="${element.player.photo}" alt="${element.player.name}">
                <h3>Asistencias ${element.statistics[0].goals.assists}👟  🏟️${element.statistics[0].games.appearences}</h3>
                <h2>${element.statistics[0].league.name}<img class="logo" src=${element.statistics[0].league.flag}>
                <h2>${element.statistics[0].league.country}<img class="logo" src=${element.statistics[0].league.logo}>  `

            main.appendChild(content)

            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                            <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }

            if (contador === 1) {
                contador = 0
                console.log(contador)
            } else {
                contador++
            }
        });
    }
    asistplayer()
    // Finalmente, llamamos a la función getPlayerData() para obtener los jugadores y mostrarlos en la página.

})

yellow.addEventListener('click', () => {
    console.log('haz click en pases')
    async function yellowplayer() {
        const response = await fetch("https://v3.football.api-sports.io/players/topyellowcards?season=2020&league=61",
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
        showPlayeryellow(selectedPlayers)
    }
    function showPlayeryellow(players) {
        //Primero borramos el contenido anterior del elemento main con main.innerHTML = ""
        main.innerHTML = ""

        let contador = 0


        // Luego recorremos la lista de jugadores con players.forEach() 
        players.forEach((element) => {



            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                            <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }
            // y para cada jugador creamosun nuevo elemento div con document.createElement("div"). A este 
            // elemento le asignamos la clase "container" con content.className = "container"
            let content = document.createElement("div")
            content.className = "container";
            content.innerHTML =
                `   <h3>${element.player.name} <img class="logo" src="${element.statistics[0].team.logo}"></h3>
                <h4>${element.player.nationality} Nacionalidad</h4>
                <h5>${element.player.birth.date}</h5>
                <img src="${element.player.photo}" alt="${element.player.name}">
                <h3>Tarjeta ${element.statistics[0].cards.yellow}🟨 🏟️${element.statistics[0].games.appearences}</h3>
                <h2>${element.statistics[0].league.name}<img class="logo" src=${element.statistics[0].league.flag}>
                <h2>${element.statistics[0].league.country}<img class="logo" src=${element.statistics[0].league.logo}>  `

            main.appendChild(content)

            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                                <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }

            if (contador === 1) {
                contador = 0
                console.log(contador)
            } else {
                contador++
            }
        });
    }
    yellowplayer()
})
red.addEventListener('click', () => {
    console.log('haz click en pases')
    async function redplayer() {
        const response = await fetch("https://v3.football.api-sports.io/players/topredcards?season=2020&league=61",
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
        showPlayerred(selectedPlayers)
    }
    function showPlayerred(players) {
        //Primero borramos el contenido anterior del elemento main con main.innerHTML = ""
        main.innerHTML = ""

        let contador = 0


        // Luego recorremos la lista de jugadores con players.forEach() 
        players.forEach((element) => {



            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                                <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }
            // y para cada jugador creamosun nuevo elemento div con document.createElement("div"). A este 
            // elemento le asignamos la clase "container" con content.className = "container"
            let content = document.createElement("div")
            content.className = "container";
            content.innerHTML =
                `   <h3>${element.player.name} <img class="logo" src="${element.statistics[0].team.logo}"></h3>
                <h4>${element.player.nationality} Nacionalidad</h4>
                <h5>${element.player.birth.date}</h5>
                <img src="${element.player.photo}" alt="${element.player.name}">
                <h3>Tarjetas ${element.statistics[0].cards.red}🟥   🏟️${element.statistics[0].games.appearences}</h3>
                <h2>${element.statistics[0].league.name}<img class="logo" src=${element.statistics[0].league.flag}>
                <h2>${element.statistics[0].league.country}<img class="logo" src=${element.statistics[0].league.logo}>  `


            main.appendChild(content)

            if (contador % 2 != 0) {
                let contador01 = document.createElement("div")
                contador01.className = "versus";
                contador01.innerHTML = `
                                    <span>🆚</span>`
                console.log('entra')
                console.log(contador)
                main.appendChild(contador01)
            }

            if (contador === 1) {
                contador = 0
                console.log(contador)
            } else {
                contador++
            }
        });
    }
    redplayer()
})
teams.addEventListener('click', () => {
    console.log('haz click en pases')
    async function teamplayer() {
        const response = await fetch("https://v3.football.api-sports.io/players/topredcards?season=2020&league=61",
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
        console.log(data.response[0].players)
        // const selectedPlayers = selectRandomPlayers(data.response[0].players, 3)
        // Finalmente, llamamos a la función showPlayers(players) y le pasamos los jugadores seleccionados. 
        // console.log(selectedPlayers)
        showPlayerteam (data.response[0].players)
    }
    function showPlayerteam(players) {
        console.log(players)
        //Primero borramos el contenido anterior del elemento main con main.innerHTML = ""
        main.innerHTML = ""

        // Luego recorremos la lista de jugadores con players.forEach() 

        players.forEach((element) => {
            console.log(element)

            // y para cada jugador creamosun nuevo elemento div con document.createElement("div"). A este 
            // elemento le asignamos la clase "container" con content.className = "container"
            let content = document.createElement("div")
            content.className = "container";
            content.innerHTML =
                `   <h3>${element.name} <img class="logo" src="${element.age}"></h3>`
                // <h4>${element.player.nationality} Nacionalidad</h4>
                // <h5>${element.player.date}</h5>
                // <img src="${element.player.photo}" alt="${element.player.name}">
                // <h2>${element.statistics[0].league.name}<img class="logo" src=${element.statistics[0].league.flag}>
                // <h2>${element.statistics[0].league.country}<img class="logo" src=${element.statistics[0].league.logo}>  

            main.appendChild(content)

        });
    }
    teamplayer()
})