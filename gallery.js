let imagens = document.querySelectorAll(".galeria .galeria-imagem");
let painel = document.querySelector(".galeria .floating-painel");
var imagemDoPainel = document.querySelector(".galeria .floating-painel .floating-painel-image");
painel.addEventListener('click', close);
close()

let x = 0;
for(imagem of imagens){
    imagem.setAttribute('data-reference', x);
    imagem.addEventListener('click', zoomIn);
    x++
}

function zoomIn(evt) {
    let sourceURL = evt.target.getAttribute('src');
    imagemDoPainel.setAttribute('src', sourceURL);
    painel.style.visibility = "visible";
}

function close() {
    painel.style.visibility = "hidden";
}