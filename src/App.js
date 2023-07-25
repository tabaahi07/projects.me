import logo from './logo.svg';
import './App.css';
import Desktop from './Desktop/Components/Desktop';
import Mobile from './Mobile/Components/Mobile';
import { useWindowSize } from './Resize';

function App() {

  const windowSize = useWindowSize()

  return (
    <div className="App">
      {
        windowSize[0] < 620 ?  
        <Mobile> </Mobile>
        :
        <Desktop />
      }
    </div>
  );
}

export default App;
