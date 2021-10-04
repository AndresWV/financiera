import { BsGraphUp } from "react-icons/bs";
import { BsClockFill} from "react-icons/bs";
import { BsChatFill} from "react-icons/bs";
import { BsPeopleFill} from "react-icons/bs";
import { BsPuzzleFill} from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserTie } from "react-icons/fa";
import { FaBook } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaRegPaperPlane } from "react-icons/fa";
function Conocenos(){
    return(
        <center>
        <div className="row" style={{margin: "5% 0% 0% 0%"}}>
                <div className="col-md-12">
                    <section className="features-clean" style={{margin: "0%",margin: "0% 0% 5% 0%",padding: "0%"}}>
                        <div className="container">
                            <div>
                                <h2 className="text-center" style={{margin: "0%",padding: "0%",margin: "0% 0% 3% 0%"}}>CONOCENOS</h2>
                                <div className="row features" style={{margin: "0% 0% 3%"}}>
                                    <div className="col-sm-6 col-lg-4 item"><BsGraphUp className="icon"/>
                                        <h3 className="name">Servicios</h3>
                                        <p className="description" style={{textAlign: "justify"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 item"><BsClockFill className="icon"/>
                                        <h3 className="name">Siempre disponibles</h3>
                                        <p className="description" style={{textAlign: "justify"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 item"><BsChatFill className="icon" />
                                        <h3 className="name">Testimonios</h3>
                                        <p className="description" style={{textAlign: "justify"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 item"><BsPeopleFill className="icon" />
                                        <h3 className="name">Nuestro misión</h3>
                                        <p className="description" style={{textAlign: "justify"}}>Queremos ser la mejor empresa de capacitación en finanzas personales de Chile, entregando nuestro conocimiento y experiencia a que nuestros clientes.<br /></p>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 item"><BsPuzzleFill className="icon" />
                                        <h3 className="name">Cualquiera puede aprender<br /></h3>
                                        <p className="description" style={{textAlign: "justify"}}>No es necesario ser un ingeniero o un técnico en finanzas para aprender a manejar tus finanzas personales o lograr un manejo correcto de ingresos y gastos personales y los de tu hogar.<br /></p>
                                    </div>
                                    <div className="col-sm-6 col-lg-4 item"><FaPhoneAlt className="icon" />
                                        <h3 className="name">Contigo siempre</h3>
                                        <p className="description" style={{textAlign: "justify"}}>Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida. Aliquam varius finibus est.</p>
                                    </div>
                                </div>
                                <section className="features-blue">
                                    <div className="container">
                                    <div className ="intro">
                                    <h2 className ="text-center"><br /><strong>¿Quiénes somos?</strong><br /></h2>
                                    </div>
                                    <div className ="row features" style={{marginBottom: "3%"}}>
                                    <div className ="col-sm-6 col-md-4 item" style={{margin: "0% 0% 0% 15%"}}><FaUserTie className="icon"/>
                                    <h3 className ="name">Nuestros Especialistas</h3>
                                    <p className ="description" style={{textAlign: "justify", color: "var(--bs-gray-100)"}}>Reunimos a un grupo selecto de ex ejecutivos de cuentas, con mas de 20 años de experiencia cada uno en distintos Bancos y Cooperativas de Chile.</p>
                                    </div>
                                    <div className ="col-sm-6 col-md-4 item" style={{margin: "0% 0% 3% 5%"}} ><FaBook className="icon" />
                                    <h3 className ="name">¿Que te ofrecemos?</h3>
                                    <p className ="description" style={{textAlign: "justify",color: "var(--bs-gray-100)"}}>Nos unimos para entregar en servicio de capacitación en finanzas personales a todos quienes quieran mejorar su situación financiera sin tener que ir a un Banco a pedir un producto.</p>
                                    </div>
                                    <div className ="col-sm-6 col-md-4 item" style={{margin: "0% 0% 0% 15%"}}><FaUniversity className="icon" />
                                    <h3 className ="name">100% independientes</h3>
                                    <p className ="description" style={{textAlign: "justify", color: "var(--bs-gray-100)"}}>No tenemos relación, ni estamos asociados con ninguna institución financiera de Chile, no te recomendaremos ninguna ni tenemos preferencias por ninguna.</p>
                                    </div>
                                    <div className ="col-sm-6 col-md-4 item" style={{margin: "0% 0% 0% 5%"}}><FaRegPaperPlane className="icon" />
                                    <h3 className ="name">Fast</h3>
                                    <p className="description" style={{textAlign: "justify",color: "var(--bs-gray-100)"}}>Solo queremos que TU comprendas como manejar tus ingresos y tus gastos, tener un endeudamiento saludable y que sientas que tu deuda realmente baja cuando pagas.</p>
                                    </div>
                                    </div>
                                    </div>
                                </section>
                            </div>
                            <div className="intro" style={{width: "100%", margin: "3% 32% 3%"}}></div>
                        </div>
                    </section>
                </div>
            </div>
            </center>
    )
}
export default Conocenos