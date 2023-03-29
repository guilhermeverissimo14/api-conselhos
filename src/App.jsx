import { useState } from 'react'
import './App.css'
import Footer from './componentes/footer/index.jsx'
import Header from './componentes/header/index.jsx'

function App() {
  const [advice, setAdvice] = useState('')
  const [valid, setValid] = useState(false)

  function findAdvice() {
    fetch("https://api.adviceslip.com/advice")
      .then(response => response.json())
      .then((data) => {
        setAdvice(data.slip['advice'])
        if (advice.length > 0) setValid(true);
      })
  }
  return (
    <div >
      <Header />
      <div className='container'>
        <button className='btn' onClick={findAdvice}> Gerar conselhos</button>
        <input
          type='text'
          className='input'
          readOnly
          value={valid ? advice : ""}
        />
      </div>
      <Footer />
    </div>
  )
}

export default App
