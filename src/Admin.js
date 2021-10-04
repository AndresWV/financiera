
import { IoMdSpeedometer } from "react-icons/io";
function Admin(){
    return(
        <div id="layoutSidenav">
        <div id="layoutSidenav_nav" style={{height: "100VH"}}>
            <div id="sidenavAccordion" className="sb-sidenav accordion sb-sidenav-dark">
                <div className="sb-sidenav-menu" style={{height: "100%"}}>
                    <div className="nav"><img style={{marginLeft: "25%",marginTop: "28%",marginBottom: "50%"}} />
                        <div style={{marginBottom: "5%"}}>
                           <a className="nav-link active" href="#" style={{marginBottom: "5%"}}>
                                <div className="sb-nav-link-icon"><IoMdSpeedometer className="fa fa-dashboard" /></div><span>CLASES</span>
                            </a>
                        </div></div>
                        <div style={{marginBottom: "5%"}}>
                            <a className="nav-link collapsed" href="#" aria-expanded="false" aria-controls="collapseLayouts" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" style={{marginBottom: "5%"}}>
                                <div className="sb-nav-link-icon"></div><span>PROFESIONALES</span>
                                <div className="sb-sidenav-collapse-arrow"><IoMdSpeedometer className="fa fa-angle-down" /></div>
                            </a>
                            <div id="collapseLayouts" className="collapse" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                                <div className="sb-sidenav-menu-nested nav"><a className="nav-link" href="#">Menu Accordion</a><a className="nav-link" href="#">Menu Accordion</a></div>
                            </div>
                        </div>
                        <div>
                            <a className="nav-link collapsed" href="#" aria-expanded="false" aria-controls="collapse2" data-bs-toggle="collapse" data-bs-target="#collapse2">
                                <div className="sb-nav-link-icon"><IoMdSpeedometer className="fa fa-dashboard" /></div><span></span>PLANES<div className="sb-sidenav-collapse-arrow"></div>
                            </a>
                            <div id="collapse2" className="collapse" aria-labelledby="heading2" data-bs-parent="#sidenavAccordion">
                                <div id="sidenavAccordionPages" className="sb-sidenav-menu-nested nav accordion"><a className="nav-link collapsed" href="#" aria-expanded="false" aria-controls="pagesCollapseAuth" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth"><span>Menu Item</span>
                                        <div className="sb-sidenav-collapse-arrow"></div>
                                    </a>
                                    <div id="pagesCollapseAuth" className="collapse" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                                        <div className="sb-sidenav-menu-nested nav"><a className="nav-link" href="#">Menu Item</a><a className="nav-link" href="#">Menu Item</a><a className="nav-link" href="#">Menu Item</a></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sb-sidenav-footer">
                    <div className="small"><span>Logged as : David Aprilio</span></div>
                </div>
            </div>
            <script src="./js/theme.js"></script>
        </div>
    )
}
export default Admin;