import './App.css'
import Login from './components/Login.jsx'
import Title from './components/Title'

function App() {

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <Title></Title>
        </div>
        <div className="col-6">
          <Login></Login>
        </div>
      </div>
    </div>
    
  )
}

export default App
