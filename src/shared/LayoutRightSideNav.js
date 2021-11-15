import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import * as master from './MasterData'
const LayoutRightSideNav = () => {
    return (
        <div className = "right-side-nav-content">
            <div className = "notifications p-4">
                <div className="title">Notifications</div>
                <div className = "divider">
                    <span className="divider-filled"></span>             
                    <span className="divider-unfilled"></span>
                </div>
                <Container>
                    <div className="noti-content mt-2">
                        {master.notifications.map((item, index) => {
                            return (
                                <Row key={index}>
                                    <Col md={2}>
                                        <div className="bubble ">
                                            <div className={`bubble-item bubble-item-main-${index === 0 ? 'blue' : (index % 2 !== 0 ? 'red' : 'green')}`}><div className={`child-bubble-item bubble-item-${index === 0 ? 'blue' : (index % 2 !== 0 ? 'red' : 'green')}`}></div></div>
                                            {index !== master.notifications.length -1 && <div className="vertical-line"></div>   }
                                        </div>
                                    </Col>                  
                                    <Col md={8}>
                                        <div className={`noti-item ${index <= 1 ? 'active-item' : ''}`}>{item.desc}</div>
                                    </Col>
                                    <Col className="rt">
                                        <div className={`noti-time`}>{item.time}</div>
                                    </Col>
                                </Row>  
                            )
                        })}
                    </div>
                    <Row className="mt-2">
                        <Col md={{span:8, offset:2}}>
                            <div className="view-more ">View More</div>
                        </Col>

                    </Row>
                </Container>
                
            </div>
            <div className="help-section p-2">
                <Container>
                    <Row>
                        <Col>
                            <img src="/images/Group.png" className="help-section-pic" alt="help-section"/>
                        </Col>
                        <Col>
                            <div className="title">
                                Need Help?
                            </div>
                            <div className="subtitle mt-1">
                                Do you have any problem and want to consult?
                            </div>
                            <div className = "contact-btn mt-1">
                                Contact Now
                            </div>
                        </Col>
                       
                    </Row>
                </Container>
            </div>
            
        </div>
    )
}

export default LayoutRightSideNav
