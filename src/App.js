import './App.css';
import Counter from './components/Counter';

function App() {
  return (
    
    <>
    
      <div  className='container align-items-center justify-content-center  h-100  mt-5 '>
        <div className=' d-flex align-items-center justify-content-center flex-column p-5 rounded mx-auto' style={{backgroundColor:"white"}}>
          <h1 className='text-dark'><b>Counter Application</b> <i>using</i> <span className='text-success'><b>REACT</b></span></h1>
          <Counter/>
         
  
        </div>
      
      </div>
    </>
  );
}

export default App;
