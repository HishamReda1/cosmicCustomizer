import Canvas from './canvas';
import Customizer from './pages/Customizer';
import Home from './pages/Home';
import StarsCanvas from './pages/Stars';

function App() {
  return <>
    <main className="app transition-all ease-in relative z-0 bg-black ">
   
      <Home /> 
    
   <Canvas /> 
     <Customizer /> <StarsCanvas/>
     </main>
    </>
   
  
}

export default App
