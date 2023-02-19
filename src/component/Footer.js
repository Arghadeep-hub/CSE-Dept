import React from 'react';
import "../style/Footer.css";
import { Col, Container, Row } from 'react-bootstrap'
import LogoImage from "../img/Logo.png";
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import Newsletter from './Newsletter';


const RouteNav = [
    {
        names: "quick links",
        subLinks: [
            { name: "placement", route: "/" },
            { name: "exam portal", route: "/" },
            { name: "NIRF data", route: "/" },
            { name: "AICTE approvals", route: "/" },
            { name: "ERP protal", route: "/" },
        ]
    },
    {
        names: "important",
        subLinks: [
            { name: "blog - the engineer", route: "/" },
            { name: "বাংলা   ব্লগ", route: "/" },
            { name: "हिंदी   ब्लॉग", route: "/" },
            { name: "terms of use", route: "/" },
            { name: "privacy policy", route: "/" },
        ]
    }
];
function Footer() {
    const mailchimpURL = "https://trythemenu.us20.list-manage.com/subscribe/post?u=aaa5c0d84717e89362694b5cb&amp;id=65369095a1";

    return (
        <footer className="padding-top-bottom margin-top">
            <Container fluid>
                <Row className="justify-content-center footer-logog">
                    <div className="col-md-2">
                        <a href="/">
                            <img src={LogoImage} alt="logo" draggable="false" loading="lazy" />
                        </a>
                    </div>
                </Row>
                <Row className="footerdata">
                    <Col md={4} xs={12} className="p-2 overview">
                        <h6>Welcome To</h6>

                        <p className="overview-para">Maulana Abul Kalam Azad University of Technology, West Bengal Formerly West Bengal University of Technology</p>
                    </Col>
                    {RouteNav.map((params, id) => {
                        const { names, subLinks } = params;
                        console.log(names);
                        return (<Col key={id} md={2} xs={6} className="p-2">
                            <div className="d-flex middle-list">
                                <ul>
                                    <li><h6>{names}</h6></li>
                                    {subLinks.map((list, idx) => {
                                        const { name, route } = list;
                                        return <li key={idx}>
                                            <a href={route} className="text-capitalize">{name}</a>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </Col>)
                    })
                    }
                    <MailchimpSubscribe
                        url={mailchimpURL}
                        render={(props) => {
                            const { subscribe, status, message } = props || {};
                            return (
                                <Newsletter
                                    status={status}
                                    message={message}
                                    onValidated={formData => subscribe(formData)}
                                />
                            )
                        }
                        }
                    />
                </Row>
                <div className="footer-text">
                    <p>&copy; Copyright {new Date().getFullYear()} By CSE Depertment | All right reserved | Design and Developed by REPL Devs.</p>
                </div>
            </Container>
        </footer>
    )
}
export default Footer