import  { openGallery, closeGallery, move, prevImg, nextImg} from './funcion-pack.js'

const   item = document.getElementsByClassName('gallery-item')
var     backWindow = document.getElementsByClassName('picture-viewer')
var     bigWindow = document.getElementsByClassName('picture')
var     leftArr = document.getElementById('arrow--left')
var     rightArr = document.getElementById('arrow--right')



var numeroItem = 0
var images = ['escaleras', 'parrillas', 'estanterias', 'montacargas', 'portones', 'tinglados']
var stackImg = 0



for(numeroItem; numeroItem< item.length; numeroItem+=1){
    
    item[numeroItem].addEventListener('click', (e) => {

    //console.log(e.path)// is not defined
    var path = e.composedPath()
    var album = path[1].innerText.toLowerCase(); console.log(path);
    openGallery(album)//
    });
}

backWindow[0].addEventListener('click', (e)=>{

    var path = e.composedPath()

    if(path[0].className == "picture-viewer active"){
        closeGallery()
    }
    else{
        return
    }
})

leftArr.addEventListener('click', ()=>{
    prevImg()//cambia la variable stackImg al valor anterior    
    bigWindow[0].src= './imagenes/'+ images[stackImg] +'.jpg'
})

rightArr.addEventListener('click', ()=>{
    nextImg()//cambia la variable stackImg al valor anterior    
    bigWindow[0].src= './imagenes/'+ images[stackImg] +'.jpg'
})


window.setInterval(move, 4000) //funcionalidad del slider