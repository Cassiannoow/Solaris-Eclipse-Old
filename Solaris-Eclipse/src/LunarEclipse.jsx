import './LunarEclipse.css'
import { useEffect } from 'react'

function LunarEclipse(){
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
            const mensagem = `<b>LUNAR ECLIPSES</b> occur at the full moon phase. When Earth is positioned precisely between the Moon and Sun, 
            Earth's shadow falls upon the surface of the Moon, 
            dimming it and sometimes turning the lunar surface a striking red over the course of a few hours. Each lunar eclipse is visible from half of Earth.` 
            document.querySelector(".messagemarea").innerHTML = mensagem
           }, 200)
    })
    const redirect = () => {
        const tela = document.querySelector("body")
        const main = document.querySelector("div.mainLunarEclipse")
        var contagem = 10;
        setInterval(function(){
          tela.style.filter = `brightness(${0.1 * contagem})`
          contagem--;
        }, 100)
      
        setTimeout(function(){
         main.innerHTML = ""
        }, 1000)
      
        setTimeout(function(){
          window.location.href = "/Map"
         }, 1500)
      }
    return(
        <div className='mainLunarEclipse'>
            <div className='Eclipse'>
                <img id='sun'style={{width: 400}} src="sun.png" alt="Sun" />
                <img id='SunforMid' src="Luz.png" alt="Feixe De Luz" />
                <img id='MidForEarth' src="Luz.png" alt="Feixe De Luz" />
                <img id='earth' style={{marginTop: 14, width: 300}}src="earth.png" alt="Earth" />
                <img id='EarthForMoon'src="BlackLuz.png" alt="Black Light" />
                <img id='moon'style={{width: 150}} src="moon.png" alt="Moon"/>
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

export default LunarEclipse