slider = document.getElementsByClassName('slider')

posx= 0

console.log(slider)



function move(){
    
    posx+= 25

    if(posx==75){posx= 0}

    slider[0].style.transform= 'translateX(-' + posx + '%)'
    
    console.log('imagen ' + posx/25)

}


window.setInterval(move, 4000)


console.log(slider)
