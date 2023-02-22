import React from 'react'
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import "../style/Home.css";

const Home = () => {
    return (
        <div id="home">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="https://it.makautwb.ac.in/itimage/makaut.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className='mb-4'>Welcome To Department of Computer Science and Egineering</h1>
                        <p>Maulana Abul Kalam Azad University of Technology, W.B</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                        src="https://it.makautwb.ac.in/itimage/makaut.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>About Us</h1>
                        <p>The Department of Computer Science & Engineering, under the School of Engineering & Technology offers B.Tech. in Computer Science & Engineering (CSE), MTech in Computer Science and Engineering and M.Tech. in Software Engineering. All the programmes are approved by AICTE.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default Home