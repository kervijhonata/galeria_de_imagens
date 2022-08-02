import patchworker from "./modules/patchworker.js";
import ruler from "./modules/ruler.js";

const patcher = patchworker();
patcher.watch();

const pat = patchworker();

// console.log(pat.list); objeto list não está publico;

pat.dict = {
    'Marca 01':"Honda",
    'Marca 02':"Tesla",
    'Marca 03':"Mercedes",
    'Marca 04':"Wolkswagen",
    "Marca 05":"Fiat",
    "Marca 06":"Audi",
    "Marca 07":"Mitsushibi",
    "Marca 08":"Jaguar",
    'teste':"TESTE",
    "Honda":"Carro Ruim",
    "booom":"já explodiu!",
    "TESTE":"booom",
    "Tesla":"Muito caro!",
}

let btn = document.querySelector(".btnChanges")
if(btn){
    btn.addEventListener('click', function translate(){
        pat.watch('.mark', pat.dict);
    });
}

// let ruller01 = ruler();
// ruller01.watch();