import './App.css';
import travelData from './data';
import { MainComponent } from './Components/MainComponent';
import { HeaderComponent } from './Components/HeaderComponent';

function App() {
  return (
    <>
      <div>
        <HeaderComponent text='TRAVEL BLOG' />
      </div>
      <main>
        {travelData.map((place) => (
          <MainComponent key={place.id} {...place} />
        ))}
      </main>
    </>
  );
}

export default App;
