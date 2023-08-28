import Funghi from './pizzas/funghi.jpg'

function App() {
  
  return (
    <>
     <div>
      <h1>Hello React</h1>
      <Pizza/>
     </div>
  
    </>
  )
}

function Pizza(){
  return(
    <>
    <img src={Funghi} alt="Funghi" />
    <p>Funghi Pizza</p>
    </>
  )
}




export default App
