function toggleTexto(zona) {

    const texto = zona.querySelector(".texto");
    const estaVisible = texto.style.display === "block";

   
    document.querySelectorAll(".texto").forEach(t => {
        t.style.display = "none";
    });

    if (!estaVisible) {
        texto.style.display = "block";
    }
}