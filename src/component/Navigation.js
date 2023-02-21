import React from 'react'
import "../style/Navigation.css";
import logoImg from "../img/Logo.png";
import searchImg from "../img/search.svg";
import userImg from "../img/user.svg";
import Hamburger from 'hamburger-react'
import { Col, Container, Row } from 'react-bootstrap';
const navContent = [
    { name: "home", route: "/" },
    { name: "about", route: "/" },
    { name: "programmes", route: "/" },
    { name: "admission", route: "/" },
    { name: "faculty", route: "/" },
    { name: "fee", route: "/" },
    { name: "research", route: "/" },
    { name: "facilities", route: "/" },
    { name: "contact", route: "/" },
]

function Navigation() {
    return (
        <>
            <span className="screen-darken"></span>
            <div className="top-bar">
                <div id="top-bar" className="owl-carousel owl-theme">
                    <div className="item">
                        <p>Click on the <b>Placement</b> option for go to Placement page. Work is in progress. Our developers are working on it.</p>
                    </div>
                </div>
            </div>
            <article className="card mobile-offcanvas bg-light" id="card_mobile">
                <div className="card-body">
                    <div className="offcanvas-header"><button className="btn-close float-end"></button></div>
                    <ul>
                        <li><a href="#!">New Release</a></li>
                        <li><a href="#!">Best Sellers</a></li>
                        <li><a href="singleProduct.html">Shop</a></li>
                        <li><a href="#!">Custom</a></li>
                        <li><a href="#!">Customer Service</a></li>
                    </ul>
                    <Col className="search">
                        <div className="input-group">
                            <input type="text" className="form-control" />
                            <button className="input-group-text"><img src="./img/search.svg" alt="..." /></button>
                        </div>
                    </Col>
                </div>
            </article>
            <nav className="mobile">
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={4}>
                            <Hamburger direction="right" rounded label="Show menu" />
                        </Col>
                        <Col xs={4} className="d-flex justify-content-center">
                            <a className="logo" href="/"><img src={logoImg} alt="makaut_logo" loading='lazy' draggable="false" /></a>
                        </Col>
                        <Col xs={4} className="last-icons">
                            <ul>
                                <li><img src={userImg} alt='user' loading='lazy' draggable="false" /></li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </nav>

            <nav className="large">
                <Container fluid>
                    <Row className="align-items-center">
                        <Col xs={2} className="d-flex justify-content-center align-items-center">
                            <img src={logoImg} alt="Logo" className='logo' />
                            <h6 className='m-0 p-0 w-100 text-center text-secondary'>CSE Depertment</h6>
                        </Col>
                        <Col xs={3} className="search">
                            <div className="input-group">
                                <input type="text" placeholder='Search' className="form-control" />
                                <button className="input-group-text"><img src={searchImg} alt="search" /></button>
                            </div>
                        </Col>
                        <Col xs={7} className="last-icons">
                            <ul>{
                                navContent.map((items, id) => {
                                    return <li><a href={items.route}>{items.name}</a></li>
                                })
                            }</ul>
                        </Col>
                    </Row>
                </Container>
            </nav>
        </>
    )
}

export default Navigation