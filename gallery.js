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
} // 10 Linhas


    // // if(ref <= 0 || ref > imagens.length){
    // //     ref = 1;
    // //     imagemDoPainel.setAttribute("src", imagens[ref-1].src);
    // // }
    // if(ref > 0 && ref <= imagens.length){
    //     console.log('ref OK')
    //     if(direction == "next"){
    //         // ref > 0 ? ref += 1 : ref = 1;
    //         ref += 1;
    //         imagemDoPainel.dataset.reference = ref;
    //     }else if(direction == "prev"){
    //         // ref > 0 ? ref -= 1 : ref = 1;
    //         ref < 1 ? ref = imagens.length : ref -= 1;
    //         imagemDoPainel.dataset.reference = ref;
    //     }

    //     if(imagens[ref-1]){
    //         imagemDoPainel.setAttribute("src", imagens[ref-1].src)
    //     }else{
    //         imagemDoPainel.setAttribute("src", imagens[0].src)
    //     }
    //     console.log(`imagem ${imagens[ref-1].dataset.reference}: \n
    //     src >> ${imagens[ref-1].src} \n
    //     data-reference >> ${imagens[ref-1].dataset.reference} \n
    //     current ref >> ${ref} \n
    //     index >> [ref-1] == ${ref-1} \n
    //     `);
    // }else{
    //     console.log("ref vai pro ultimo")
    //     ref = imagens.length;
    //     imagemDoPainel.setAttribute("src", imagens[ref-1].src)
    // }
    // // console.log(`MOVE: ref >> ${ref}, imagemDoPainel.ref >> ${imagemDoPainel.dataset.reference}`) // 32 Linhas




/*
function move(e){ // WITH DEBUG LOGS
var direction = e.target.classList[0];
    direction == "next" ? ++ref : --ref;

    if(ref >= 0 && ref <= imagens.length-1){
        console.log("execute case 01 >> ref: "+ref)

        imagemDoPainel.setAttribute('src', imagens[ref].src)

        console.log(direction, ref)

    }else {
        console.log("execute case 02 >> ref: "+ref)
        if(ref < 0){
            ref = imagens.length-1
            console.log("ref < 0: setted "+ref)
            imagemDoPainel.setAttribute('src', imagens[ref].src)
        }
        else if(ref > imagens.length-1){
            ref = 0
            console.log("ref is bigger than imagen length: setted "+ref)
            imagemDoPainel.setAttribute('src', imagens[ref].src)
        }
    } // 23 Linhas

}
*/