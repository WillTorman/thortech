import { useState } from 'react'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>
          Thortech LLC
        </h2>
      </div>
      <div>
        <img src="/images/white-logo.png" alt='Thortech Logo' />
      </div>
      <h1>All Your Website Needs</h1>
      <div className='socials'>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="#" target="_blank">
          <FontAwesomeIcon icon={faSquareFacebook} />
        </a>
        <a href="https://www.youtube.com/@Thortech117" target="_blank">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
      </div>
      <footer>
        <hr></hr>
        <a href='#'>Hire Me</a>
        <a href='#'>Contact Me</a>
      </footer>
    </>
  )
}

export default App
