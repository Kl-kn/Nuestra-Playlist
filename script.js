// Lista de canciones con las rutas locales de los archivos MP3 y las portadas
const canciones = [
    { nombre: "Sparks", url: "Coldplay - Sparks.mp3", portada: "Sparks.jpeg" },
    { nombre: "Yellow", url: "Coldplay - Yellow.mp3", portada: "Sparks.jpeg" },
    { nombre: "Die With A Smile", url: "01 Die with a Smile.mp3", portada: "Die With A Smile.jpeg" },
    { nombre: "Quiero Perderme Contigo", url: "y2mate.com - José José  Quiero Perderme Contigo Cover Audio.mp3", portada: "Quiero Perderme Contigo.jpg" },
    { nombre: "Delirio", url: "Luis Miguel - Delirio.mp3", portada: "Segundo Romance.jpeg" },
    { nombre: "La Gloria Eres Tu", url: "Luis Miguel - La Gloria Eres Tú (Video Con Letra).mp3", portada: "Romances.jpeg" }
];

// Seleccionamos el contenedor de la lista
const playlistContainer = document.getElementById('playlist');

// Función para crear la lista de canciones
function cargarCanciones() {
    canciones.forEach((cancion, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="portada" style="background-image: url('${cancion.portada}');"></div>
            ${cancion.nombre}
            <audio>
                <source src="${cancion.url}" type="audio/mp3">
                Tu navegador no soporta el elemento de audio.
            </audio>
        `;
        playlistContainer.appendChild(li);
    });
}

// Llamamos a la función para cargar las canciones cuando se carga la página
cargarCanciones();

// Control para reproducir solo una canción a la vez
let audioReproduciendo = null;

document.querySelectorAll('audio').forEach((audio, index) => {
    // Cuando se inicia la reproducción de una canción
    audio.addEventListener('play', function () {
        // Detener la canción anterior si está reproduciéndose
        if (audioReproduciendo && audioReproduciendo !== this) {
            audioReproduciendo.pause();
            audioReproduciendo.currentTime = 0;
        }
        audioReproduciendo = this;
    });

    // Cuando la canción termina, reproducir la siguiente
    audio.addEventListener('ended', function () {
        // Reproducir la siguiente canción si no es la última
        if (index + 1 < canciones.length) {
            const siguienteAudio = document.querySelectorAll('audio')[index + 1];
            siguienteAudio.play();
        }
    });
});
