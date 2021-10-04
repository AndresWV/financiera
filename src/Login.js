import logo from './img/logo.png';
import {IoNavigateCircleSharp} from "react-icons/io5";
function Login() {
    return (
        <div className="gradiente">
            <section className="login-clean levantar" style={{backgroundColor: "transparent",fontFamily: "Poppins" , height: "100vh"}}>
                <form method="post" action="login.html">
                    <h2 className="visually-hidden">Login Form</h2>
                    <div className="illustration"><IoNavigateCircleSharp className="icon" style={{color: "#E2725B",borderColor: "#E2725B"}} /></div><a className="forgot" href="register.html">¿No tienes cuenta? ¡Regístrate aquí!</a>
                    <div className="form-group mb-3"><input className="form-control" type="email" name="email" placeholder="Correo" /></div>
                    <div className="form-group mb-3"><input className="form-control" type="password" name="password" placeholder="Contraseña" /></div>
                    <div className="form-group mb-3"><button className="btn btn-primary d-block w-100" type="submit" style={{background: "#E2725B"}}>Iniciar sesión</button></div><a className="forgot" href="#">¿Olvidaste tu correo o contraseña?</a>
                </form>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}
export default Login