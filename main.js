
const item = document.getElementsByClassName('gallery-item')

trabajos = document.getElementsByName('trabajos')
slider = document.getElementsByClassName('slider')
backWindow = document.getElementsByClassName('gallery-window-cont')
bigWindow = document.getElementsByClassName('gallery-window')
leftArr = document.getElementById('arrow-left')
rightArr = document.getElementById('arrow-right')



numeroItem = 0
posx = 0
images = ['escaleras', 'parrillas', 'estanterias', 'montacargas', 'portones', 'tinglados']
stackImg = 0


// console.log(item[2].childElementCount)
// console.log(bigWindow)
// console.log(bigWindow[0].children[0].src)
// console.log(trabajos[0].offsetTop)
// console.log(window)

/*

document.addEventListener('scroll', ()=>{
    console.log(window.scrollTo(0, trabajos[0].offsetTop))
})
*/

for(numeroItem; numeroItem< item.length; numeroItem+=1){
    
    item[numeroItem].addEventListener('click', (e) => {

    console.log(e.path[1].innerText)
    album = e.path[1].innerText
    openGallery(album)
});
}

backWindow[0].addEventListener('click', (e)=>{

    if(e.path[0].className == "gallery-window-cont active"){
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

function openGallery(imgName){

    //se agregan las clases
    window.scrollTo(0, trabajos[0].offsetTop)
    bigWindow[0].classList.add('active')
    document.children[0].classList.add('not-scroll')
    backWindow[0].classList.add('active')


    //y se abre la imagen pulsada
    bigWindow[0].src= './imagenes/'+ imgName.toLowerCase() +'.jpg'
    stackImg = findImg(imgName)
}

function closeGallery(){

    //se remueven las clases
    bigWindow[0].classList.remove('active')
    document.children[0].classList.remove('not-scroll')
    backWindow[0].classList.remove('active')
}

function move(){    
    posx+= 25
    if(posx == 75){posx= 0}
    slider[0].style.transform= 'translateX(-' + posx + '%)'    
    console.log('imagen ' + posx/25)
}

function findImg(string){
    
    for (let n= 0; n< images.length; n+= 1){
        
        if (string == images[n]){
            console.log(n)
            return n
        }
        else n+= 1
    }
    console.log(n)
}

function nextImg(){
    stackImg+= 1

    if (stackImg>= images.length){
        stackImg= 0
    } else if (stackImg< 0){
        stackImg= images.length -1
    }
    console.log(stackImg)
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

//window.setInterval(move, 4000) 