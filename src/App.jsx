
import gambar from './assets/Foto-anggi.jpg';
import './Card.css';

function App() {
  return (
    <div className="greeting-container">
      <div className="greeting-card">
        <h1>HAPPY EID AL-ADHA!!</h1>
        <img src={gambar} alt="gambar" className="greeting-image" />
        <p className="description">
        Di hari yang penuh berkah ini, mari kita renungkan makna pengorbanan dan ketulusan. Selamat Idul Adha, mohon maaf lahir dan batin!!
      </p>
      </div>
    </div>
  );
}

export default App;
