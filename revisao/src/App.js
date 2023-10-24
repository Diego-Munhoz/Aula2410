import './App.css';
import Imagem from './img/alanzoka.jpg';
import Imagem2 from './img/alanvesgo.jpg'
import ProfileImage from './components/ProfilelImage';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <div className="App">
      <h1>Alanzoka</h1>
      <div className='corpo'>
      <ProfileImage
        titulo="Imagem do Alan"
        imagem={Imagem}
        alt="Scarlaite di or"
      />
      <ProductCard
        titulo="Alanzoka Vesgo"
        imagem={Imagem2}
        alt="Alan Vesgo"
        preco="R$ 100,00"
        descricao="Alanzoka Vesgo"
        caracteristica="Ele está vesgo"
      />


      </div>
    </div>
  );
}

export default App;
