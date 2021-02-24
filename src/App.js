import logo from './logo.svg';
import './App.css';
import Navegacion from './components/Navegacion';
import Piepagina from './components/Piepagina';
import Proyectos from './components/Proyectos';
import { Carousel, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import {AiFillCaretDown} from "react-icons/ai"

function App() {
  return (
    <div>
      <Navegacion />
      <div style={{backgroundColor:"#EEEBF5",paddingBottom:"5vh"}} id="info">
        <Container style={{paddingTop:"5vh"}}>
        <Row>
          <Col style={{display: "flex",alignItems: "center"}}>
            <div>
              <p style={{fontSize:"x-large",fontWeight:"bold"}}>
                ¿Busca una aplicación para su empresa?<br/>
                Le traemos su solución Apps y webs profesionales a <span style={{fontSize:"xx-large"}}>¡Precio de Ganga!</span>
              </p>
              <div style={{marginTop:"3vh"}}>
              <Row style={{marginBottom:"2vh",borderBottom:"solid gray 1px"}}>
                <Col>
                  <label style={{color:"black",fontWeight:"bold"}}>Plataformas</label>
                </Col>
              </Row>
              <Row style={{marginBottom:"2vh",borderBottom:"solid gray 1px",paddingBottom:"2vh"}}>
                <Col lg="2">
                  <img
                  width="30"
                  src="https://image.flaticon.com/icons/png/512/35/35312.png">
                  </img>
                </Col>
                <Col lg="3">
                  <label>IOS</label>
                </Col>
                <Col lg="3">
                  <label>Android</label>
                </Col>
              </Row>
              <Row style={{marginBottom:"2vh",borderBottom:"solid gray 1px",paddingBottom:"2vh"}}>
                <Col>
                  <img
                  width="30"
                  src='../imgs/ordenador.png'></img>
                </Col>
              </Row>
            </div>
            </div>
          </Col>
          <Col>
            <img
              className="float-right"
              src="https://play-lh.googleusercontent.com/6dcTV8RNj9YTnyvQbEmDwKVZ6c9y0unKoJb7F4FC_qMgmKWYpb7f32VIsOj7vyo1GH4">
            </img>
          </Col>
        </Row>
        </Container>
        <Container style={{marginTop:"15vh"}}>
          <Row>
            <Col lg="8">
            <div style={{marginTop:"10vh"}}>
              <img 
              width="90%"
              src="https://www.experimenta.es/wp-content/uploads/2017/10/Restaurant-Bar-Design-Awads-2017-Piccolino-Hachem-experimenta-3-e1511513363350.jpg"></img>
            </div>
            </Col>
            <Col>
            <p style={{fontSize:"x-large",fontWeight:"bold",marginTop:"auto",marginBottom:"auto"}}>
              ¿Es usted dueño de un <span style={{fontSize:"xx-large"}}>restaurante</span> o de un <span style={{fontSize:"xx-large"}}>gimnasio</span> y busca expandirse?
              La mejor manera para ello es una <span style={{fontSize:"xx-large"}}>Página Web </span>
              con la situación actual del Covid-19<br/><br/><br/>
              <span style={{fontWeight:"normal",fontSize:"large",color:"gray"}}>Desde 199€</span>
            </p>
            <Button style={{marginTop:"2vh",fontWeight:"bold"}} className="button-elevated">Consigue tu App</Button>
            </Col>
          </Row>
        </Container>
      </div>
      <Proyectos />
      <div style={{backgroundColor:"#EEEBF5",marginTop:"2vh",paddingTop:"3vh"}} id="aplicaciones">
        <Container className="text-center">
          <h1><span style={{fontWeight:"bold"}}>Apps a medida</span> para <span style={{fontWeight:"bold"}}>TU</span> negocio</h1>
          <label style={{color:"gray"}}>Desde sólo 199€. Diseño, desarrollo, publicación <br/> y código fuente incluidos.</label>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://download.logo.wine/logo/Android_(operating_system)/Android_(operating_system)-Logo.wine.png"
                alt="First slide"
              />
              <Carousel.Caption>
                <h3 style={{color:"black"}}>Desarrollo tu App Android</h3>
                <p style={{color:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://download.logo.wine/logo/IOS/IOS-Logo.wine.png"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3 style={{color:"black"}}>Desarrolla tu App IOS</h3>
                <p style={{color:"black"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <Row style={{marginTop:"7vh"}}>
            <Col xl="5">
              <Row style={{marginBottom:"2vh",borderBottom:"solid gray 1px"}} className="text-left">
                <Col>
                  <h4>Escríbenos con total confianza <AiFillCaretDown /></h4>
                </Col>
              </Row>
              <Row style={{marginBottom:"2vh",borderBottom:"solid gray 1px"}} className="text-left"> 
                <Col>
                  <h4>Acordamos un presupuesto <AiFillCaretDown /></h4>
                </Col>
              </Row>
              <Row style={{marginBottom:"2vh",borderBottom:"solid gray 1px"}} className="text-left">
                <Col>
                  <h4>Información constante en el avance de tu App <AiFillCaretDown /></h4>
                </Col>
              </Row>
              <img 
              style={{marginTop:"7vh"}}
              height="30%"
              src="https://images.vexels.com/media/users/3/213258/isolated/preview/f79c0eed9b0e128f4af3c2afd939deed-pila-de-monedas-de-oro-by-vexels.png"></img>
            </Col>
            <Col xl="7">
              <img
              height="60%"
              src="https://www.miflashmobile.mx/repos/files/Acn/homepage/mplanes.png"></img>
            </Col>
          </Row>
        </Container>
      </div>
      <div id="piePag">
        <Piepagina/>
      </div>
      <div style={{width:"auto",position:"fixed",bottom:"3vh",right:"3vh"}}>
        <img
        width="70"
        src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
        ></img>
      </div>
    </div>
  );
}

export default App;
