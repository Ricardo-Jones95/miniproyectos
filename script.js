const imagenes = [
        "imagenes/20201107_234059.jpg",
        "imagenes/20220311_180245.jpg",
        "imagenes/IMG-20210907-WA0005.jpg",
        "imagenes/IMG_0058.JPG",
        "imagenes/IMG_0278.JPG",
        "imagenes/IMG_0540.JPG",
        "imagenes/IMG_0542.JPG",
        "imagenes/IMG_2020.JPG",
        "imagenes/photo_2024-04-29_02-47-07.jpg",
        "imagenes/photo_2024-04-29_02-47-17.jpg",
        "imagenes/IMG-20210907-WA0008.jpg",
        "imagenes/photo_2024-04-29_03-12-43.jpg",
        "imagenes/photo_2024-04-29_03-13-37.jpg",
        "imagenes/photo_2024-04-29_03-13-35.jpg",
        "imagenes/photo_2024-04-29_03-12-51.jpg",
        "imagenes/photo_2024-04-29_03-13-33.jpg",
        "imagenes/photo_2024-04-29_02-47-14.jpg",
        "imagenes/photo_2024-04-29_03-13-30.jpg",
        "imagenes/photo_2024-04-29_03-13-17.jpg",
        "imagenes/photo_2024-04-29_03-13-28.jpg",
        "imagenes/photo_2024-04-29_02-47-15.jpg",
        "imagenes/photo_2024-04-29_03-13-26.jpg",
        "imagenes/photo_2024-04-29_03-12-48.jpg",
        "imagenes/IMG-20210907-WA0006.jpg",
        "imagenes/photo_2024-04-29_03-13-01.jpg",
        "imagenes/photo_2024-04-29_03-13-24.jpg",
        "imagenes/photo_2024-04-29_03-13-22.jpg",
        "imagenes/20201024_230448.jpg",
        "imagenes/photo_2024-04-29_03-13-19.jpg",
        "imagenes/photo_2024-04-29_03-13-15.jpg",
        "imagenes/photo_2024-04-29_03-13-12.jpg",
        "imagenes/photo_2024-04-29_03-13-08.jpg",
        "imagenes/photo_2024-04-29_03-13-05.jpg",
        "imagenes/photo_2024-04-29_03-13-03.jpg",
        "imagenes/photo_2024-04-29_03-12-58.jpg",
        "imagenes/photo_2024-04-29_03-12-54.jpg",
        "imagenes/photo_2024-04-29_03-12-46.jpg",
        "imagenes/photo_2024-04-29_03-13-10.jpg",
    ];

const img = document.querySelector("img");
const ME = document.querySelector("h2");
let imgSiguiente = "";
let indice = -1;

function boton() {
        indice = (indice + 1) % imagenes.length;
        const imagenActual = imagenes[indice]
    
    img.src = imagenActual 
    
    //const imagenAleatoria = Math.floor(Math.random() * imagenes.length);
        //img.src = imagenes[imagenAleatoria];
        const quitarBoton = document.querySelector("button");
        quitarBoton.onclick = "n";
        quitarBoton.innerHTML = "";
        const estilo = document.querySelector("link");
        estilo.href = "style.css"
        ME.innerHTML = "Hermosa <br> Me encantas..!"
        img.style.animation = 'none';
        img.offsetHeight;
        img.style.animation = 'blurAnimacion 3s ease-in'
}



