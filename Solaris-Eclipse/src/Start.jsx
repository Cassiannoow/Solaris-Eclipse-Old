import './Start.css'

const play = () => {
  console.log("Tela Escurece")
  const tela = document.querySelector("body")
  const main = document.querySelector("div.main")
  var contagem = 10;
  setInterval(function(){
    tela.style.filter = `brightness(${0.1 * contagem})`
    contagem--;
  }, 100)

  setTimeout(function(){
   main.innerHTML = ""
  }, 1000)

  setTimeout(function(){
    window.location.href = "/FirstPhase"
   }, 1500)
}


function Start() {
  document.querySelector("body").style.backgroundImage = "url('IrM.gif')";
  return (
    <>
      <div className='main'>
        <div className='Logo'>
          <h1>Solaris</h1>
          <img className='Eclipse-Image' src="Eclipse.png" alt="Eclipse" />
          <h1>Eclipse</h1>
        </div>
        <div className='ButtonDiv' onClick={e => play(e)}>
          <h2>PLAY</h2>
        </div>
      </div>
    </>
  )
}

export default Start
