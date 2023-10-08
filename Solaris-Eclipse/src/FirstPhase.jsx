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
        const astroChat = document.querySelector('.AstroChat');
        popUp.style = "content-visibility: hidden;"
        astroChat.style = "content-visibility: visible;"
        mensagem = `Hello, astronaut <b>${username}</b>! In today's space mission,
        we will learn a bit about a phenomenon that occurs occasionally and can be seen from Earth called an <b>Eclipse</b>` 
        document.querySelector(".messagemarea").innerHTML = mensagem
    }
    
    return(
        <>
            <div>
            <div className='PopUp'>
                <input type="text" id="username" placeholder="> Type your Name"/>
                <img id='Foguete' src="Foguete.png" alt="Foguete" onClick={saveUsername}/>
            </div>
            <div className='AstroChat'>
                <img src="Astronaut.png" alt="Astronaut" id='astronautinha'/>
                <div className='TextBoxArea'>
                    <p className='messagemarea'></p>
                </div>
            </div>
            </div>
        </>
    )
}

export default FirstPhase