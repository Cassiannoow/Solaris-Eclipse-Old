import './Map.css'
import { useEffect } from 'react'

function Map(){
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
    })

    const map = () => {
        document.querySelector("div.MapFirstGroup").innerHTML = ""
        document.getElementById("MapLL").style = "content-visibility: visible;"
    }

    return(
        <div className='MapPhase'>
            <div className='MapFirstGroup'>
                <div className='MapChat'>
                    <p>
                        In our upcoming phase, we'll unveil an informative map <br /> 
                        displaying key locations for observing eclipses. This map <br />
                        will serve as a valuable resource for eclipse enthusiasts, <br />
                        providing essential details about where these celestial events can be view. 
                    </p>
                    <img src="Astronaut.png" alt="Astronaut" id='astronautinha' style={{width: 250}}/>
                </div>
                <img id='earthtomap' src="earth.png" alt="eart" onClick={(e) => map(e)} />
            </div>
            <div id='MapLL'>
                <img id='worldmap' src="WorldMap.png" alt="World Map" />
                <a href="https://github.com/Cassiannoow/Solaris-Eclipse">GITHUB CODE</a>
            </div>
        </div>
    )
}

export default Map