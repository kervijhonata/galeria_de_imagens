const imagens = document.querySelectorAll(".galeria .galeria-imagem");
const painel = document.querySelector(".modal");
const imagemDoPainel = document.querySelector(".modal .modal-image");
const btnMoves = document.querySelectorAll(".image-action");

painel.addEventListener('click', close, {capture:false});
painel.style.visibility = "hidden";
window.addEventListener('keyup', move); // Iterar a galeria com botões

let x = 0;
for(imagem of imagens){
    imagem.setAttribute('data-reference', x);
    imagem.addEventListener('click', open, {capture:false});
    x++
}

let ref = 0;
function open(evt) {
    if(imagens.length > 0){
        evt.stopPropagation();
        let sourceURL = evt.target.getAttribute('src');
        imagemDoPainel.setAttribute('src', sourceURL);
        painel.style.visibility = "visible";
        imagemDoPainel.dataset.reference = evt.target.dataset.reference;
        ref = evt.target.dataset.reference;
        console.log(`OPEN: ref >> ${ref}, imagemDoPainel.ref >> ${imagemDoPainel.dataset.reference}`)
    }else{
        console.log("There is no images selected")
    }
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
    // console.log(e.type, e.key)
    if(painel.style.visibility == "visible"){
        if(e.type == "click"){
            var direction = e.target.key || e.target.classList[0]; //Captura a direção da tecla ou do botão
            direction == "next" ? ++ref :--ref; //Itera a referência
            if(e.target.key) console.log()
        }
        else if(e.type == "keyup"){
            var direction = e.key;
            direction == "ArrowLeft" ? --ref : "";
            direction == "ArrowRight" ? ++ref : "";
        }
        if(ref >= 0 && ref <= imagens.length-1){
            imagemDoPainel.setAttribute('src', imagens[ref].src)
        } else {
            ref < 0 ? ref = imagens.length-1 : ""; // console.log("ref < 0: setted "+ref)
            ref > imagens.length-1 ? ref = 0 : ""; // console.log("ref is bigger than imagen length: setted "+ref)
        }
        imagemDoPainel.setAttribute('src', imagens[ref].src)
    }else{
        console.log("Modal:Painel is hidden, can't move images");
    }

    imagemDoPainel.setAttribute('src', imagens[ref].src)
}

// Função de Arrasto

let iterator = 0; 
window.addEventListener("touchmove", (e)=>{
    console.log(iterator++, e)
});