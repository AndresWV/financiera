import Foot from './Footer';
import Conocenos from './Conocenos';
import Planes from './Planes';
import Contacto from './Contacto';
import Login from './Login';
import Header from './Header'
import Admin from './Admin';
import Registro from './Registro';
import Slider from './Slider';
function Home(){
    return(
        <div>
            <Header />
            <Slider />
            <Conocenos />
            <Planes />
            <Contacto />
            <Foot />
        </div>
    );
}
export default Home;