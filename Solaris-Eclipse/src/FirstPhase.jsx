import { useEffect } from 'react'
import './FirstPhase.css'

function FirstPhase(){
    var username, mensagem;
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

    function saveUsername() {
        username = document.getElementById('username').value;
        const popUp = document.querySelector('.PopUp');
        const eclipse = document.getElementById('SolarEclipse');
        const astroChat = document.querySelector('.AstroChat');
        popUp.style = "content-visibility: hidden;"
        eclipse.style = "content-visibility: visible;"
        astroChat.style = "content-visibility: visible;"
        mensagem = `Hello, astronaut <b>${username}</b>! In today's space mission,
        we will learn a bit about a phenomenon that occurs occasionally and can be seen from Earth called an <b>Eclipse</b>` 
        document.querySelector(".messagemarea").innerHTML = mensagem

    }

    const redirect = () => {
        const tela = document.querySelector("body")
        const main = document.querySelector("div.mainFirstPhase")
        var contagem = 10;
        setInterval(function(){
          tela.style.filter = `brightness(${0.1 * contagem})`
          contagem--;
        }, 100)
      
        setTimeout(function(){
         main.innerHTML = ""
        }, 1000)
      
        setTimeout(function(){
          window.location.href = "/Solar-Eclipse"
         }, 1500)
      }
    
    return(
        <div className='mainFirstPhase'>
            <div>
            <div className='PopUp'>
                <input type="text" id="username" placeholder="> Type your Name"/>
                <img id='Foguete' src="Foguete.png" alt="Foguete" onClick={saveUsername}/>
            </div>
            <img id='SolarEclipse' src="EclipseSolar.png" alt="Eclipse Solar" />
            <div className='AstroChat'>
                <img src="Astronaut.png" alt="Astronaut" id='astronautinha'/>
                <div className='TextBoxArea'>
                    <p className='messagemarea'></p>
                    <img src="Seta.png" alt="Seta" className='seta' onClick={(e) => redirect(e)}/>
                </div>
            </div>
            </div>
        </div>
    )
}

export default FirstPhase