import './App.css';
import './App.css';
import  Type  from './component/Type'
import Words from './component/Words';
import { generate } from './component/Words';


function App() {
  const words = generate();
  return (
    <div className="bg-slate-900 relative w-full h-screen mx-auto">

          <Type />
      
    
    </div>
  );
}

export default App;
