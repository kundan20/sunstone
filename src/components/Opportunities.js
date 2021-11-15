import React from 'react'
import { Col, Row, Card  } from 'react-bootstrap'
import * as constants from '../shared/Constants'

const Opportunities = (props) => {
    const { opportunities } = props
    return (
        <>
        <Row className="mt-4">
            <Col md={5}>
                <h3 className="title mbl">{constants.OPPORTUNITY_TITLE}</h3>
            </Col>
          
            <Col md={4}>
                <Row>
                    <Col md={4} xs={4}><div className="oppt-item">Eligible</div></Col>
                    <Col md={4} xs={4}><div className="oppt-item">Hot</div></Col>
                    <Col md={4} xs={4}><div className="oppt-item active">New</div></Col>
                </Row>
            </Col>
            <Col md={3} className="tr">
                <img src="/images/filter.png" alt="filter" />
            </Col>
        </Row>
        <Row className="mt-3">
            <Col md={12}>
                {opportunities.map((app, index) => {
                    return (
                        <Card className={`app-card ${index === 1 ? 'bg-grey' : ''}`} key={index}>
                            <Row>

                                {index % 2 === 0 && <div className="oppt-ptr"></div> }
                                
                                <Col md={5} xs={11}>
                                    <div className="app-title mbl"><span className="app title-type oppt">{app.entity}</span> - {app.type} &nbsp;&nbsp;<img src="/images/Shape.png" alt="icon" /></div>
                                </Col>
                                <Col md={6} xs={12} className="tr sal oppt">
                                    {app.sal}
                                    
                                </Col>
                            </Row>
                            <Row className="mt-1">
                                <Col md={2} xs={6}>
                                    <span className={`light-black clock`}>
                                        {app.date}
                                    </span>
                                </Col>
                                <Col md={2} xs={6}>
                                    <span className={`grey-color clock`}>
                                        <span className="dot"></span>&nbsp;{app.empType}
                                    </span>                                        
                                </Col>
                                <Col md={2} xs={6}>
                                    <span className={`grey-color clock`}>
                                        <span className="dot"></span>&nbsp;{app.loc}
                                    </span>                                        
                                </Col>
                            </Row>
                            {index !== 1 && 
                                <Row className="mt-4">
                                    <Col md={3} xs={6}>
                                        <div className="oppt apply-btn common-btn cur-ptr">APPLY</div>
                                    </Col>
                                    <Col md={4} xs={6}>
                                        <div className="oppt nt-btn common-btn cur-ptr">NOT INTERESTED</div>
                                    </Col>
                                </Row>
                            }                           
                        </Card>
                    )
                })}
               
            </Col>
           
        </Row>
        <Row className="mb-4">
            <Col >
                <div className="text-center view-all cur-ptr">
                    View All (100)
                </div>
            </Col>
        </Row>
    </>
    )
}

export default Opportunities
