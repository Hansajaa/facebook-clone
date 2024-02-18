import Title from './components/Title'
import Login from './components/Login.jsx'
import './App.css'

function App() {

  return (
    
    <div className="container d-flex">
      <div className="row">
        <div className="col-6">
          <Title></Title>
        </div>
        <div className="col-6">
          <Login/>
        </div>
      </div>
    </div>
    
  )
}

export default App
