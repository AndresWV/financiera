function Contacto(){
    return(
        <div className="row">
            <div className="col">
                <section className="getintouch">
                    <div className="container modern-form">
                        <div className="text-center">
                            <h4 style={{color: "#212529",fontSize: "45px"}}>CONTACTANOS</h4>
                        </div>
                        <hr className="modern-form__hr" />
                        <div className="modern-form__form-container">
                            <form>
                                <div className="row">
                                    <div className="col col-contact">
                                        <div className="modern-form__form-group--padding-r form-group mb-3"><input className="form-control input input-tr" type="text" placeholder="First Name" />
                                            <div className="line-box">
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col col-contact">
                                        <div className="modern-form__form-group--padding-l form-group mb-3"><input className="form-control input input-tr" type="text" placeholder="Email" />
                                            <div className="line-box">
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="modern-form__form-group--padding-t form-group mb-3"><textarea className="form-control input modern-form__form-control--textarea" placeholder="Message"></textarea>
                                            <div className="line-box">
                                                <div className="line"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col text-center"><button className="btn btn-primary submit-now" type="submit">ENVIAR</button></div>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Contacto