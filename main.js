slider = document.getElementsByClassName('slider')
const item = document.getElementsByClassName('gallery-item')
bigWindow = document.getElementsByClassName('big-window')
backWindow = document.getElementsByClassName('back-window')



numeroItem= 0
posx= 0



//console.log(item[2].childElementCount)
// console.log(bigWindow)
// console.log(bigWindow[0].children[0].src)
//console.log()
// console.log(window)

for(numeroItem; numeroItem< item.length; numeroItem+=1){
    //console.log(numeroItem)

    item[numeroItem].addEventListener('click', (e) => {
    album = e.path[0].innerText
    console.log('abrir el album de ' + album)
    openGallery()
});
}

backWindow[0].addEventListener('click', (e)=>{
    
    console.log(e.path[0].className)
    if(e.path[0].className == "back-window active"){
        closeGallery()
    }
    else{
        return
    }
})

function openGallery(){
    bigWindow[0].classList.add('active')
    document.children[0].classList.add('not-scroll')
    backWindow[0].classList.add('active')
    console.log(bigWindow[0].children[0].src)
}

function closeGallery(){
    bigWindow[0].classList.remove('active')
    document.children[0].classList.remove('not-scroll')
    backWindow[0].classList.remove('active')
    console.log(bigWindow[0].children[0].src)
}

function move(){
    
    posx+= 25

    if(posx==75){posx= 0}

    slider[0].style.transform= 'translateX(-' + posx + '%)'
    
    console.log('imagen ' + posx/25)

}


//window.setInterval(move, 4000)
// comentado para mejorar rendimiento durante las pruebas
