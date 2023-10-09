import './Eclipse.css'
import { useEffect } from 'react'

function Eclipse(){
    const redirect = () => {
        const tela = document.querySelector("body")
        const main = document.querySelector("div.mainSolarEclipse")
        var contagem = 10;
        setInterval(function(){
          tela.style.filter = `brightness(${0.1 * contagem})`
          contagem--;
        }, 100)
      
        setTimeout(function(){
         main.innerHTML = ""
        }, 1000)
      
        setTimeout(function(){
          window.location.href = "/Lunar-Eclipse"
         }, 1500)
      }
    var tela = document.querySelector("body")
    tela.style.filter = 'brightness(0)'
    useEffect(()=>{
        var contagem = 0;
        tela.style.backgroundImage = "url('NewFundo.png')"
        setInterval(function(){
        if(contagem < 10){
            contagem++;
            tela.style.filter = `brightness(${0.1 * contagem})`
        }
        }, 100)

        setTimeout(function(){
            const astroChat = document.querySelector('.AstroChat');
            astroChat.style = "content-visibility: visible; height: 300px;"
            const mensagem = `An <b>eclipse</b> is an awe-inspiring celestial event that drastically changes the appearance of the 
            two biggest objects we see in our sky: our Sun and Moon.</br>
            A <b>SOLAR ECLIPSE</b> happens when the Moon passes between the Sun and Earth, 
            casting a shadow on Earth that either fully or partially blocks the Sun's light in some areas.` 
            document.querySelector(".messagemarea").innerHTML = mensagem
           }, 200)
    })
    return(
        <div className='mainSolarEclipse'>
            <div className='Eclipse'>
                <img id='sun' src="sun.png" alt="Sun" />
                <img id='LuzSolforMid' src="Luz.png" alt="Feixe De Luz" />
                <img id='MidForMoon' src="Luz.png" alt="Feixe De Luz" />
                <img id='moon' src="moon.png" alt="Moon" />
                <img id='MoonForEarth'src="BlackLuz.png" alt="Black Light" />
                <img id='earth'src="earth.png" alt="Earth" />
            </div>
            <div className='AstroChat'>
                <img src="Astronaut.png" alt="Astronaut" id='astronautinha' style={{width: 250}}/>
                <div className='TextBoxArea'>
                    <p className='messagemarea' style={{fontSize: 18}}></p>
                    <img src="Seta.png" alt="Seta" className='seta' onClick={(e) => redirect(e)}/>
                </div>
            </div>
        </div>
    )

}

export default Eclipse