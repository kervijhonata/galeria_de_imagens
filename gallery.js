let imagens = document.querySelectorAll(".galeria .galeria-imagem");
let painel = document.querySelector(".galeria .floating-painel");
painel.addEventListener('click', close, {capture:false});
var imagemDoPainel = document.querySelector(".galeria .floating-painel .floating-painel-image");
let btnClose = document.querySelector(".btnClose");
painel.style.visibility = "hidden";

let x = 0;
for(imagem of imagens){
    imagem.setAttribute('data-reference', x);
    imagem.addEventListener('click', open, {capture:false});
    x++
}

function open(evt) {
    evt.stopPropagation();
    let sourceURL = evt.target.getAttribute('src');
    imagemDoPainel.setAttribute('src', sourceURL);
    painel.style.visibility = "visible";
    imagemDoPainel.removeEventListener('click',close)
}

function close(e) {
    if(e.target.classList == "floating-painel"){
        painel.style.visibility = "hidden";
    }
}