import './App.css';
import Navbar from './components/Navbar/Navbar'; 
import Home from './components/Home';
import { FlexSection } from './components/Menu/style';
import { ImageWithText } from './components/Menu/Menu';
import { ReservaComponent } from './components/Reservas/Reservas';
import {MinhaGaleriaDeFotos} from './components/Fotos/Fotos.tsx';
import { Rating } from './components/Avaliações/Avaliacao.tsx';
import { Rodape } from './components/Rodapé/Rodape.tsx';

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    <FlexSection>
        <ImageWithText
          img={'https://www.dairyqueen.com/dA/d0d6bb0e30/hamburger.png'}
          title="Hambúrguer Kids"
          text="Para as crianças."
        />

        <ImageWithText
          img={'https://i.pinimg.com/originals/a0/16/87/a016878919bbd44e858b57dc176e7379.png'}
          title="Hamburguer VIP"
          text="Só para quem é VIP!"
        />

        <ImageWithText
          img={'https://www.restaurantejangada.com.br/wp-content/themes/jangada/assets/img/salmao-crosta-top-view.png'}
          title="Novidade"
          text="Peixe com Maracujá"
        />

        <ImageWithText
          img={'https://conchamar.pt/wp-content/uploads/2021/01/inicio-prato-04.png'}
          title="Lagosta"
          text="Lagosta VIP!"
        />

        <ImageWithText
          img={'https://mardivinopescados.com.br/wp-content/uploads/2021/03/prato-risoto-camarao.png'}
          title="Camarão Refogado"
          text="Camarão Norueguês Fresco"
        />

        <ImageWithText
          img={'https://saborimperialrestaurante.com.br/wp-content/uploads/2018/12/slide1.png'}
          title="Peixe + Acompanhamento"
          text="Peixe e Salada Grega"
        />
      </FlexSection>

      <ReservaComponent></ReservaComponent>

      <MinhaGaleriaDeFotos></MinhaGaleriaDeFotos>

      <Rating></Rating>

      <div>
      <Rodape />
    </div>

    </>
  )
}

export default App
