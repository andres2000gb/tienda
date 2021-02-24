import '../App.css';
import { Carousel, Container } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Button } from "react-bootstrap";
import {AiFillCaretDown} from "react-icons/ai"
import { Card } from 'react-bootstrap';

function Proyectos(){
    return (
        <div style={{marginTop:"2vh"}} className="text-center carouselAct">
            <Carousel className="text-center">
                <Carousel.Item>
                    <Card style={{paddingBottom:"4vh"}}>
                    <Card.Img variant="top" style={{opacity:"50%"}} src="https://connect.germanpulse.com/wp-content/uploads/2017/09/Website-1-1600x675.jpeg" />
                    <Card.Body>
                        <Card.Title style={{fontWeight:"bold"}}>Tu Web para Restaurante</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Empieza ahora</Button>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{paddingBottom:"4vh"}}>
                    <Card.Img variant="top" style={{opacity:"50%"}} src="https://maldita.es/app/uploads/2020/12/pexels-victor-freitas-703012-1-1.jpg"/>
                    <Card.Body>
                        <Card.Title style={{fontWeight:"bold"}}>Tu Web para Gimnasio</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Empieza ahora</Button>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
                <Carousel.Item>
                    <Card style={{paddingBottom:"4vh"}}>
                    <Card.Img variant="top" style={{opacity:"50%"}} src="https://multivia.us/wp-content/uploads/2020/08/covidtimes2.jpg"/>
                    <Card.Body>
                        <Card.Title style={{fontWeight:"bold"}}>Tu Web contra el COVID-19</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
                        </Card.Text>
                        <Button variant="primary">Empieza ahora</Button>
                    </Card.Body>
                    </Card>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Proyectos;