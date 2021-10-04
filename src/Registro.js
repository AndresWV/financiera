function Registro() {
    return (
        <div className="gradiente" >
            <section className="register-photo levantar" style={{backgroundColor: "transparent",fontFamily: "Poppins"}}>
                <div className="form-container" style={{width: "100%", height: "100%", marginRight:"auto"}}>
                    <div className="image-holder imgRegistro"></div>
                    <form method="post" action="afterRegister.html">
                        <h2 className="text-center"><strong>Crea una cuenta</strong>.</h2>
                        <div className="form-group mb-3"><input className="form-control" type="text" name="nombre" placeholder="Nombre" /></div>
                        <div className="form-group mb-3"><input className="form-control" type="text" name="apellidos" placeholder="Apellidos" /></div>
                        <div className="form-group mb-3"><input className="form-control" type="email" name="email" placeholder="Correo" /></div>
                        <div className="form-group mb-3"><input className="form-control" type="tel" name="telefono" placeholder="Teléfono" /></div>
                        <div className="form-group mb-3"><input className="form-control" type="password" name="password" placeholder="Contraseña" /></div>
                        <div className="form-group mb-3"><input className="form-control" type="password" name="password-repeat" placeholder="Repetir contraseña" /></div>
                        <div className="form-group mb-3" style={{margin: "20px 0px 0px 0px"}}>
                            <div className="form-check"><label className="form-check-label"><input className="form-check-input" type="checkbox" />Estoy de acuerdo con los términos y condiciones.</label></div>
                        </div>
                        <div className="form-group mb-3" style={{margin: "0px 0px 0px 0px"}}><button className="btn btn-primary d-block w-100" type="submit" style={{color: "#ffffff",padding: "11px",background: "#E2725B",margin: "10px 0px 0px 0px"}}>Crear cuenta</button></div><a className="already" href="login.html">¿Ya tienes una cuenta? Inicia sesión aquí</a>
                    </form>
                </div>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>
        </div>
    )
}
export default Registro