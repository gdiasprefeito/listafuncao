function converterParaSegundos(minutos, segundos) {

    return (minutos * 60) + segundos;
}


function calcularTempoPlaylist(playlist) {

    let totalSegundos = 0;

    for (let i = 0; i < playlist.length; i++) {

        totalSegundos += converterParaSegundos(
            playlist[i].minutos,
            playlist[i].segundos
        );
    }

    return totalSegundos;
}


// Exemplo:
let playlist = [
    {
        titulo: "Música 1",
        minutos: 3,
        segundos: 30
    },

    {
        titulo: "Música 2",
        minutos: 4,
        segundos: 15
    },

    {
        titulo: "Música 3",
        minutos: 2,
        segundos: 45
    }
];