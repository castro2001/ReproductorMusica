let atras=document.getElementById('atras')
let pause=document.getElementById('pause')
 let siguiente=document.getElementById('siguiente')
 let play=document.getElementById('play')
 let title=document.getElementById('TitleMusica')
let audio=document.getElementById('audio')
let canciones=[
    'music/Canserbero_Stupid_ Love_Story.mp3',
    'music/Dorothy_Rest_In_Peace.mp3',
    'music/Canserbero_Ley_del_Hielo.mp3',
    'music/Fit_For_Rivals_Novocain.mp3',
    'music/Canserbero_-_Es_pico_Vdeo_Oficial.mp3',
    'music/Icon_For_Hire_Get_Well.mp3',
    'music/Quise_Droow.mp3'
]

let logo=document.getElementById('logo')
let arrImg=[
'https://i.ytimg.com/an_webp/Q4YXeZPUFxc/mqdefault_6s.webp?du=3000&sqp=COG745wG&rs=AOn4CLAoDgw918_fem67cHHJKCMUqgO_Hg',
'https://i.ytimg.com/an_webp/cg2P3MH5WYs/mqdefault_6s.webp?du=3000&sqp=CMe645wG&rs=AOn4CLA-612TQlf4QaeFvL6XSeDEv1s2rQ',
'https://i.ytimg.com/an_webp/tQ43q3RKlOE/mqdefault_6s.webp?du=3000&sqp=COGk45wG&rs=AOn4CLAA0BhWITRpgrptALXmlv6tHQErZw',
'https://i.ytimg.com/an_webp/XfgW-jMK5_M/mqdefault_6s.webp?du=3000&sqp=CKGN45wG&rs=AOn4CLBg8-D_Vwm5UdZUVkRyxc_iw_gKNg',
'https://i.ytimg.com/an_webp/FEbBEAzqqtg/mqdefault_6s.webp?du=3000&sqp=CIC745wG&rs=AOn4CLCWdDQSXdXm7BTD1RKofoQ6mazUOg',
'https://i.ytimg.com/an_webp/iS8sqgBgzG8/mqdefault_6s.webp?du=3000&sqp=CKeg45wG&rs=AOn4CLBsCvZeXatF3mEFuNWGFIdorOnPag',
'https://i.ytimg.com/an_webp/PI4lCKCLlUU/mqdefault_6s.webp?du=3000&sqp=CKTB45wG&rs=AOn4CLCKw7sJmkaCt2pa47Mh0vLW_i55qw'
]

let contimg=0

let letras= [
    'Canserbero Stupid Love Story',
    'Dorothy - Rest In Peace (Official Music Video)',
    'Canserbero - Ley de Hielo',
    'Fit For Rivals - Novocain',
    'Canserbero - Epico',
    ' Icon For Hire - Get Well',
    'Drow - Quise'

]


logo.setAttribute("src",arrImg[contimg])
let parlante=document.getElementById('parlante')
let BarraProgreso=document.getElementById('BarraPogre')
let music=audio
let contador=0
title.textContent=canciones[contador]
music.setAttribute("src",canciones[0])

function playMusic(){ 
    logo.setAttribute('src',arrImg[contimg])
    music.src=canciones[contador]
    music.play()
    title.textContent=letras[contador]
}

function bar1() {{
    let bar=document.querySelectorAll('.largo, .mediano')

for(let i of bar)
{
    i.classList.add('bar1')
}
}   
}

function eliminarBar() {{
let bar=document.querySelectorAll('.largo, .mediano')
for(let i of bar)
{i.classList.remove('bar1')}
}}

play.addEventListener('click',()=>{
music.play()
  pause.style.display='inline-block'
  play.style.display='none'
    bar1()
  parlante.classList.add('bibrar')
})
pause.addEventListener('click',()=>{
    music.pause()
    eliminarBar()
    pause.style.display='none'
    play.style.display='inline-block'
    parlante.classList.remove('bibrar')
})
music.addEventListener('timeupdate',()=>{
    let position=music.currentTime / music.duration
    BarraProgreso.style.width=position * 100 + '%'
})
siguiente.addEventListener('click',()=>{
    contador++
    contimg++
    if(contador>canciones.length-1 || contimg>arrImg.length-1){
        contador=0
        contimg=0
    }
    playMusic()
})
atras.addEventListener('click',()=>{
    contador--
    contimg--
    if(contador<0 || contimg<0){
        contador=canciones.length-1
        contimg=arrImg.length-1
    }
    playMusic()
})

