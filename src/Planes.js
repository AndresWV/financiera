import img1 from './img/pexels-fauxels-3183197.jpg';
import img2 from './img/pexels-christina-morillo-1181676.jpg';
import img3 from './img/pexels-fauxels-3184325.jpg';
import { FaArrowAltCircleRight } from "react-icons/fa";
function Planes(){
    return(
        <div className="row">
            <div className="col" style={{margin: "0% 0% 5% 0%"}}>
                <section className="article-list">
                    <div className="container">
                        <div className="intro">
                            <h2 className="text-center" style={{margin: "0px 0px 1%", padding: "3% 0% 0% 0%"}}>PLANES DE ASESORÍA</h2>
                            <p className="text-center"><br /><strong>Tus talentos y habilidades irán mejorando con el tiempo, pero para eso has de empezar (Martin Luther King)</strong><br /><br /></p>
                        </div>
                        <div className="row articles">
                            <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src={img1} /></a>
                                <h3 className="name">Plan 1</h3>
                                <p className="description" style={{textAlign: "justify"}}>Duración:&nbsp;1 clase online personalizada de 30 min.&nbsp;</p>
                                <p className="description" style={{textAlign: "justify"}}>Contenido:&nbsp;Diagnostico del estado de las finanzas del cliente, explicación de los conceptos básicos, comprensión de la situación del cliente, tareas para el cliente, construccion de planillas excel/papel para Autogestión.</p>
                                <p className="description" style={{textAlign: "center"}}>Costo: $35.000</p><a className="action" href="#"><FaArrowAltCircleRight /></a>
                            </div>
                            <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src={img2} /></a>
                                <h3 className="name">Plan 2</h3>
                                <p className="description" style={{textAlign: "justify"}}>Duración: 2 clases online personalizada de 20 min c/u.&nbsp;</p>
                                <p className="description" style={{textAlign: "justify"}}>Contenido:&nbsp;Diagnostico del estado de las finanzas del cliente, explicación de los conceptos básicos, comprensión de la situación que enfrenta cliente, tareas para el cliente. Las clases con 15 días de diferencia.</p>
                                <p className="description" style={{textAlign: "center"}}>Costo: $60.000</p><a className="action" href="#"><FaArrowAltCircleRight /></a>
                            </div>
                            <div className="col-sm-6 col-md-4 item"><a href="#"><img className="img-fluid" src={img3} /></a>
                                <h3 className="name">Plan 3</h3>
                                <p className="description" style={{textAlign: "justify"}}>Duración: 3 clases online personalizadas de 20 min c/u.</p>
                                <p className="description" style={{textAlign: "justify"}}>Contenido:&nbsp;Diagnostico del estado de las finanzas del cliente, explicación de los conceptos básicos, comprensión de la situación del cliente, tareas para el cliente.&nbsp;Las clases con 15 días de diferencia.<br /></p>
                                <p className="description" style={{textAlign: "center"}}>Costo: $60.000<br /></p><a className="action" href="#"><FaArrowAltCircleRight /></a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
export default Planes