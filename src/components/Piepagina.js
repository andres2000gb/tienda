import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '../App.css';
import {AiOutlinePhone} from  "react-icons/ai"
import {AiOutlineMail} from "react-icons/ai"
import {AiOutlineInstagram} from "react-icons/ai"
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
function Piepagina() {
    return (
        <MDBFooter className="font-small pt-4 piepagina" style={{backgroundColor:"#343a40",marginTop:"0px !important"}}>
            <MDBContainer fluid className="text-center text-md-left">
                <MDBRow style={{marginBottom:"4vh"}}>
                    <MDBCol md="6">
                        <h5 className="title" style={{fontWeight:"bold"}}>Sobre nosotros</h5>
                        <p className="text-justify" style={{fontSize:"small"}}>
                            Lo primero de todo, bienvenido a nuestro espacio y le aseguraremos un trato agradable
                            para que su proyecto tenga un máximo éxito.<br/>
                            Somos una empresa de <span style={{fontWeight:"bold"}}>Zaragoza</span> impulsada por jóvenes, trabajamos con las tecnologías más
                            punteras en el entorno de desarrollo actual. Nos encargamos del diseño y además del mantenimiento
                            de las mismas, tal es así que si usted no dispone de una plataforma nos encargamos nosotros de ello
                            y la supervisión de su correcto funcionamiento.
                        </p>

                        <h5 className="title" style={{fontWeight:"bold"}}>Datos de contacto</h5>
                        <ul>
                            <li className="list-unstyled">
                                <label style={{marginTop:"3vh",marginBottom:"1vh",fontWeight:"bold"}}><AiOutlinePhone size="30"/>&nbsp;&nbsp;683 458 965</label> 
                            </li>
                            <li className="list-unstyled">  
                                <label style={{marginTop:"1vh",marginBottom:"1vh",fontWeight:"bold"}}><AiOutlineMail size="30"/>&nbsp;&nbsp;Contacto@gmail.com</label>
                            </li>
                            <li className="list-unstyled">  
                                <label style={{marginTop:"1vh",marginBottom:"1vh",fontWeight:"bold"}}><AiOutlineInstagram size="30"/>&nbsp;&nbsp;@GangApps</label>
                            </li>
                        </ul>
                    </MDBCol>
                    <MDBCol md="6">
                        <h5 className="title" style={{fontWeight:"bold"}}>¡Comienza aquí tu proyecto!</h5>
                        <Form>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Nombre</Form.Label>
                                <Form.Control type="text" placeholder="Introduzca un nombre" />
                                <Form.Text className="text-muted">
                                Su nombre no será compartido con ninguna persona.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="mail" placeholder="Introduzca un correo electrónico" />
                                <Form.Text className="text-muted">
                                Su email no será compartido con ninguna persona.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Propuesta del proyecto</Form.Label>
                                <Form.Control as="textarea" rows={6} />
                            </Form.Group>
                    
                            <Button variant="primary" type="submit">
                                Enviar
                            </Button>
                        </Form>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3" style={{backgroundColor:"black",color:"white"}}>
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright: <a href="https://www.mdbootstrap.com"> MDBootstrap.com </a>
                </MDBContainer>
            </div>
        </MDBFooter>
    );
}

export default Piepagina;