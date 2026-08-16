/* =====================================================
   CAUDAL SERVICIOS
   ANIMACIONES DE AGUA Y FUEGO
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const body = document.body;

    /* ==========================================
       CREAR PARTÍCULAS
    ========================================== */

    const cantidadFuego = 14;
    const cantidadAgua = 14;


    /* ==========================================
       FUEGO
    ========================================== */

    for (let i = 0; i < cantidadFuego; i++) {

        const particula = document.createElement("div");

        particula.classList.add("particula-fuego");

        particula.style.left =
            Math.random() * 100 + "%";

        particula.style.animationDuration =
            (4 + Math.random() * 5) + "s";

        particula.style.animationDelay =
            Math.random() * 5 + "s";

        particula.style.transform =
            `scale(${0.5 + Math.random()})`;

        body.appendChild(particula);
    }


    /* ==========================================
       AGUA
    ========================================== */

    for (let i = 0; i < cantidadAgua; i++) {

        const particula = document.createElement("div");

        particula.classList.add("particula-agua");

        particula.style.left =
            Math.random() * 100 + "%";

        particula.style.animationDuration =
            (5 + Math.random() * 6) + "s";

        particula.style.animationDelay =
            Math.random() * 6 + "s";

        body.appendChild(particula);
    }


    /* ==========================================
       MOVIMIENTO CON SCROLL
    ========================================== */

    let ultimoScroll = 0;

    window.addEventListener("scroll", () => {

        const scrollActual = window.scrollY;

        const diferencia =
            scrollActual - ultimoScroll;

        const fuego =
            document.querySelectorAll(".particula-fuego");

        const agua =
            document.querySelectorAll(".particula-agua");


        fuego.forEach((elemento, index) => {

            const movimiento =
                Math.sin(index) * 2 +
                diferencia * 0.35;

            elemento.style.transform =
                `translateY(${movimiento}px)`;
        });


        agua.forEach((elemento, index) => {

            const movimiento =
                Math.cos(index) * 2 +
                diferencia * 0.20;

            elemento.style.transform =
                `translateY(${movimiento}px)`;
        });


        ultimoScroll = scrollActual;
    });


    /* ==========================================
       EFECTO DE APARICIÓN
    ========================================== */

    const elementos =
        document.querySelectorAll(
            ".servicio, .matriculado-seccion, .nosotros"
        );


    const observador =
        new IntersectionObserver(
            (entradas) => {

                entradas.forEach((entrada) => {

                    if (entrada.isIntersecting) {

                        entrada.target.classList.add(
                            "visible"
                        );

                    }

                });

            },
            {
                threshold: 0.15
            }
        );


    elementos.forEach((elemento) => {

        elemento.classList.add("aparecer");

        observador.observe(elemento);

    });

});