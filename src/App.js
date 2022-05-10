import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemCount from './components/ItemCount';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer></ItemListContainer>
      <ItemCount></ItemCount>
    </div>
  );
}

export default App;
