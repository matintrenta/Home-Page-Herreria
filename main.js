
const item = document.getElementsByClassName('gallery-item')

trabajos = document.getElementsByName('trabajos')
slider = document.getElementsByClassName('slider')
backWindow = document.getElementsByClassName('gallery-window-cont')
bigWindow = document.getElementsByClassName('gallery-window')



numeroItem= 0
posx= 0



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

    album = e.path[0].innerText
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

function openGallery(imgName){

    //se agregan las clases
    window.scrollTo(0, trabajos[0].offsetTop)
    bigWindow[0].classList.add('active')
    document.children[0].classList.add('not-scroll')
    backWindow[0].classList.add('active')


    //y se abre la imagen pulsada
    bigWindow[0].src= './imagenes/'+ imgName.toLowerCase() +'.jpg'
}

function closeGallery(){

    //se remueven las clases
    bigWindow[0].classList.remove('active')
    document.children[0].classList.remove('not-scroll')
    backWindow[0].classList.remove('active')
}

function move(){    
    posx+= 25
    if(posx==75){posx= 0}
    slider[0].style.transform= 'translateX(-' + posx + '%)'    
    console.log('imagen ' + posx/25)
}


//window.setInterval(move, 4000)
// comentado para mejorar rendimiento durante las pruebas
