import './App.css';
import './index.css'
import React, { useState } from 'react'

function App() {

  const [weight, setWeight] = useState('0')
  const [height, setHeight] = useState('0')
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  let calcBmi = (event) => {
    event.preventDefault()

    if (weight ==='0'  || height === '0') {
      alert('Please enter valid weight and height')
    } else {
      let bmiValue = (weight / (height * height)) 
      setBmi(bmiValue.toFixed(1))


      if (bmiValue < 18.5) {
        setMessage('You are underweight')
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage('You are healthy')
      } else {
        setMessage('You are overweight')
      }
    }
  }



  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>Body Mass Index</h2>
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight</label>
            <input placeholder="Enter your weight" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>

          <div>
            <label>Height</label>
            <input placeholder="Enter your height" value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is {bmi}</h3>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default App;



