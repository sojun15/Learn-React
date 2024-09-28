import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import image15 from './assets/bkh.png';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <h2>I am learning react with bootstrap.</h2>
        <button type="button" class="btn btn-primary">Primary</button>
        <button type="button" class="btn btn-secondary">Secondary</button>
        <button type="button" class="btn btn-success">Success</button>
        <button type="button" class="btn btn-danger">Danger</button>
        <button type="button" class="btn btn-warning">Warning</button>
        <button type="button" class="btn btn-info">Info</button>
        <button type="button" class="btn btn-light">Light</button>
        <button type="button" class="btn btn-dark">Dark</button>

        <button type="button" class="btn btn-link">Link</button>
      </div>
      <div>
      
      <div className="card" style={{ width: '15rem' }}>
        <img src={image15} className="card-img-top" alt="loading" />
        <div className="card-body">
          <h5 className="card-title">Bikash</h5>
          <p className="card-text">
            Bikash is an online banking system.
          </p>
          <a href="#" className="btn btn-primary">
            Click Here
          </a>
        </div>
      </div>
    </div>
      
    </>
  )
}

export default App
