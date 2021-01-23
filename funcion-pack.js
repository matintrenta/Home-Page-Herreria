var trabajos = document.getElementsByName('works')
var slider = document.getElementsByClassName('slider')
var backWindow = document.getElementsByClassName('picture-viewer')
var bigWindow = document.getElementsByClassName('picture')
var posx = 0
var images = ['escaleras', 'parrillas', 'estanterias', 'montacargas', 'portones', 'tinglados']
var stackImg = 0



function openGallery(imgName){

    //se agregan las clases
    window.scrollTo(0, trabajos[0].offsetTop)
    bigWindow[0].classList.add('active')
    document.children[0].classList.add('--not-scroll')
    backWindow[0].classList.add('active')

    //y se abre la imagen pulsada
    //imgName = imgName.toLowerCase()
    bigWindow[0].src= './imagenes/'+ imgName +'.jpg'
    stackImg = findImg(imgName)
}

function closeGallery(){

    //se remueven las clases
    bigWindow[0].classList.remove('active')
    document.children[0].classList.remove('--not-scroll')
    backWindow[0].classList.remove('active')
}

function move(){
    posx+= 25
    if(posx == 75){posx= 0}
    slider[0].style.transform= 'translateX(-' + posx + '%)'    
    console.log('imagen ' + posx/25)
}

function findImg(string){
    
    for (var n= 0; n< images.length; n+= 1){
        
        if (string == images[n]){
            console.log(n)
            return n
        }
        //else n+= 1
    }
    //console.log(n)
}

function nextImg(){
    stackImg+= 1

    if (stackImg>= images.length){
        stackImg= 0
    } else if (stackImg< 0){
        stackImg= images.length -1
    }
    console.log(stackImg)
    console.log(images[stackImg])
}

function prevImg(){
    stackImg-= 1

    if (stackImg>= images.length){
        stackImg= 0
    } else if (stackImg< 0){
        stackImg= images.length -1
    }
    console.log(stackImg)
}

export { openGallery, closeGallery, move, prevImg, nextImg};