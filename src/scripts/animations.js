// Detecta cuando el elemento entra en pantalla
const elementos = document.querySelectorAll('.fade-in-element');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Solo se anima una vez
        }
    });
}, { threshold: 0.2 }); // 20% visible para activarse

elementos.forEach(el => observer.observe(el));








// animacion en subTitulo home
const h1 = document.getElementById("hero-occupation-title");
const NOMBRE = ["Desarrollador Front-End"];
let A = [];
let I = 0;
const pausa = 1000;
const velocidad = 100;

const agregandoLetras = () => {
    const agregar = setInterval(() => {
        A.push(NOMBRE[0][I]);
        I++;
        h1.textContent = A.join('');


        if (A.join('') == NOMBRE) {
            clearInterval(agregar)

            setTimeout(() => {
                quitandoLetras()
            }, pausa)
            console.log("se detuvo")
        }
    }, velocidad)
};


const quitandoLetras = () => {
    const quitar = setInterval(() => {
        A.pop();
        I--;
        h1.textContent = A.join('');

        if (A.length == 0) {
            clearInterval(quitar);

            setTimeout(() => {
                agregandoLetras();
            }, pausa)
            console.log("listo")
        }
    }, velocidad)
};

setTimeout(()=> {
    agregandoLetras()
},500)