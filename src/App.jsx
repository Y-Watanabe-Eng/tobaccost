import './style.css'
import {Header} from './components/Header';
import {Main} from './components/Main';
import {Footer} from './components/Footer';

export const App = () => {
  return (
    <div className="tobaccost-bg">
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}

