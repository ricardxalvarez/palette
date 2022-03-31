import React, {useState} from 'react'
import Values from 'values.js'
import SingleColor from './SingleColor'

function App() {
    const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  let temp = new Values('#62da8f').all(20)
  const [list, setList] = useState(temp.slice(1, temp.length - 1))
  const handleSubmit = (e)=>{
    e.preventDefault()
    try {
      let temp = new Values(color).all(20)
    setList(temp.slice(1, temp.length - 1))
  }
  catch(error) {
    setError(true)
    console.log(error);
  }
  }
  return (
    <>
    <section className="container">
    <div className="header">
    <h3>Color Generator</h3>
    <form>
      <input className={`${error ? 'error':null}`} type="text" value={color} onChange={(e)=> setColor(e.target.value)} placeholder='#62da8f'/>
      <button className="btn" type='submit' onClick={handleSubmit}>submit</button>
    </form>
    </div>
  </section>
  <section className="colors">
    {
      list.map((color,index)=>{
        return <SingleColor key={index} {...color} hexC index={index} hexColor={color.hex}></SingleColor>
      })
    }
  </section>
    </>
  );
}

export default App;
