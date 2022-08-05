const imagens = document.querySelectorAll(".galeria .galeria-imagem");
const painel = document.querySelector(".galeria .modal");
const imagemDoPainel = document.querySelector(".galeria .modal .modal-image");
const btnMoves = document.querySelectorAll(".image-action");

painel.addEventListener('click', close, {capture:false});
painel.style.visibility = "hidden";

let x = 0;
for(imagem of imagens){
    imagem.setAttribute('data-reference', x);
    imagem.addEventListener('click', open, {capture:false});
    x++
}

let ref = 0;
function open(evt) {
    evt.stopPropagation();
    let sourceURL = evt.target.getAttribute('src');
    imagemDoPainel.setAttribute('src', sourceURL);
    painel.style.visibility = "visible";
    imagemDoPainel.dataset.reference = evt.target.dataset.reference;
    ref = evt.target.dataset.reference;
    console.log(`OPEN: ref >> ${ref}, imagemDoPainel.ref >> ${imagemDoPainel.dataset.reference}`)
}

function close(e) {
    if(e.target.classList == "modal"){
        painel.style.visibility = "hidden";
    }
}

for(btn of btnMoves){
    btn.addEventListener('click', move);
}

function move(e) {
    var direction = e.target.classList[0]; //Captura a direção do botão
    direction == "next" ? ++ref : --ref; //Itera a referência
    if(ref >= 0 && ref <= imagens.length-1){
        imagemDoPainel.setAttribute('src', imagens[ref].src)
    } else {
        ref < 0 ? ref = imagens.length-1 : ""; // console.log("ref < 0: setted "+ref)
        ref > imagens.length-1 ? ref = 0 : ""; // console.log("ref is bigger than imagen length: setted "+ref)
    }
    imagemDoPainel.setAttribute('src', imagens[ref].src)
}