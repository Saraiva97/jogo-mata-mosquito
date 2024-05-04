var altura=0;
var largura=0;

var vidas=1

var tempo=10

var cronometro=setInterval(function(){
    tempo -=1 
    // funçao caso cronometro chegar a zero
    if(tempo < 0){

        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href='vitoria.html'

    }
    else{
    // colocando cronometro

    document.getElementById("cronometro").innerHTML=tempo

    }
     },1000)

    

function ajustaTamanhoPalcoJgo(){

altura=window.innerHeight
largura=window.innerWidth
console.log(largura,altura)
}

ajustaTamanhoPalcoJgo()

    function PosicaoRandomica(){
    // removendo o mosquito 
    if(document.getElementById('mosquito')) {   
        document.getElementById('mosquito').remove()

    // alterando vidas caso na clicado
    if(vidas >3){

    // direcionando para outra pagina
        window.location.href="fim_de_jogo.html"

    }else{

    document.getElementById('v'+ vidas).src="imagens/coracao_vazio.png"
    
    vidas++
    }
}
    // gerando posição aleatoria
    var posicaoX =Math.floor(Math.random()*largura-90 ) 
    var posicaoY =Math.floor( Math.random()*altura-90) 

    //corrigir erro de aparecer em locais fora do espeço determinado
/*
    if(posicaoX<0){
        posicaoX= 0 +50
    }

    if(posicaoY<0){
        posicaoY=0 +50
    }
 */
    posicaoX=posicaoX<0?0:posicaoX
    posicaoY=posicaoY<0?0:posicaoY


   // console.log(posicaoX,posicaoY)

    //criar elemento html

    var mosquito=document.createElement('img')
    mosquito.src='imagens/mosquito.png'
     
    //mosquito.className="mosquito1"

    mosquito.className=tamanhoAleatorio()+ " " +ladoAleatorio()
    
    //adicionando coordenadas para a imagem

    mosquito.style.left=posicaoX+"px"
    mosquito.style.top=posicaoY +"px"
    mosquito.style.position="absolute"
    mosquito.id='mosquito'

    //removendo mosquito com click

    mosquito.onclick=function(){
        this.remove()
    }



    document.body.appendChild(mosquito)

    console.log(tamanhoAleatorio())

}

// adicionando diferentes classes aos mosquitos e atribuindo a {mosquito.className}


function tamanhoAleatorio(){
    var classe =Math.floor(Math.random()*3)

    switch(classe){

        case 0: return 'mosquito1'

        case 1: return 'mosquito2'
        
        case 2: return 'mosquito3'
    }

}

/*

// testando tamanho aleatorio de outra forma

function teste (){

    if(tamanhoAleatorio()==0){
        PosicaoRandomica.mosquito.className = "mosquito1"
    }

    if(tamanhoAleatorio()==1){
        PosicaoRandomica.mosquito.className = "mosquito2"
    }
    if(tamanhoAleatorio()==2){
        PosicaoRandomica.mosquito.className = "mosquito3"
    }
}*/

function ladoAleatorio(){

    var classe=Math.floor(Math.random()*2)
    switch(classe){
        case 0: return "lado1"
        case 1: return "lado2"
    }
}

console.log(ladoAleatorio())