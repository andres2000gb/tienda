import { Button } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import { Nav } from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import '../App.css';
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import { Image } from "react-bootstrap";

function irApp(){
    let element=document.getElementById("aplicaciones");
    element.scrollIntoView({block: "start",behavior: "smooth"});
}

function irInfo(){
    let element=document.getElementById("info");
    element.scrollIntoView({block: "start",behavior: "smooth"});
}

function irPie(){
    let element=document.getElementById("piePag");
    element.scrollIntoView({block: "start",behavior: "smooth"});
}

function Navegacion() {
    return (
        <div style={{backgroundColor:"#343a40",width:"100%"}}>
        <Navbar bg="dark" className="navegacion">
            <Container>
                <Row style={{width:"100%"}}>
                    <Col>
                        <Navbar.Brand href="/" className="titulo text-center">
                            <img
                                src="https://play-lh.googleusercontent.com/6dcTV8RNj9YTnyvQbEmDwKVZ6c9y0unKoJb7F4FC_qMgmKWYpb7f32VIsOj7vyo1GH4"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            GangApps
                        </Navbar.Brand>
                    </Col>
                    <Col>
                        <Nav className="mr-auto text-center">
                            <Nav.Link onClick={irInfo} className="itemNav" style={{marginRight:"5vh"}}>Información</Nav.Link>
                            <Nav.Link className="itemNav" style={{marginRight:"5vh"}} onClick={irApp}>Aplicaciones</Nav.Link>
                            <Nav.Link onClick={irInfo} className="itemNav" style={{marginRight:"5vh",width:"15vh"}}>Páginas Web</Nav.Link>
                            <Nav.Link onClick={irPie} className="itemNav">Contacto</Nav.Link>
                        </Nav>
                    </Col>
                    <Col>
                        
                    </Col>
                </Row>
            </Container>
        </Navbar>
        <div style={{minHeight:"90vh",width:"100%",marginTop:"5vh",paddingBottom:"3vh"}} className="text-center">
            <Image
            fluid
            style={{marginTop:"2vh",marginBottom:"0vh",opacity:"70%"}}
            src="https://maldita.es/app/uploads/2020/02/oficina.jpg">
            </Image>
            <h3 style={{color:"white",fontWeight:"bold", marginTop:"2vh"}}>Bienvenido a tu espacio web</h3>
            <p style={{color:"white"}}>Diseña la mejor App para tu negocio a un precio económico.</p>
            <Button>Leer más</Button>
        </div>
        </div>
    );
};

export default Navegacion;