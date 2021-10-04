import { Navbar, Nav, Button } from 'react-bootstrap'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function header() {
    function handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }
    return (
        <center>
            <nav className="navbar navbar-light navbar-expand-md navigation-clean-button" style={{ background: '#023047' }}>
                <div className="container"><a className="navbar-brand" href="#" style={{ color: '#FFFFFF', margin:'0% 2% 0% auto' }}>ORDENA-T</a><button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1"><span className="visually-hidden">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
                    <ul className="navbar-nav me-auto">
                        <li className="nav-item"><Link className="nav-link active" href="#inicio" to={'/'} style={{ color: '#FFFFFF' }}>INICIO</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="#" style={{ color: '#FFFFFF' }} to={'/'}>QUIENES SOMOS</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="#" style={{ color: '#FFFFFF' }} to={'/'}>PLANES</Link></li>
                        <li className="nav-item"><Link className="nav-link" href="#" style={{ color: '#FFFFFF' }} to={'/'}>CONTACTANOS</Link></li>
                    </ul>
                    <Button id="buttonLog" className="login2" href="#" style={{color: '#FFFFFF'}} onClick={ handleSubmit}>IDENTIFICARSE</Button>
                    <Button className="btn btn-light action-button" role="button" href="#" style={{color: '#FFFFFF', background: '#E2725B'}}>REGISTRARSE</Button>
                </div>
            </nav>
        </center>
    );
}
export default header