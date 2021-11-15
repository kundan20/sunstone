import React from 'react'
import { Col, Row, Card  } from 'react-bootstrap'
import * as constants from '../shared/Constants'

const Applications = (props) => {
    const { applications } = props

    return (
        <>
            <Row className="mt-4">
                <Col md={6} xs={6}>
                    <h3 className="title mbl">{constants.APPLICATION_TITLE}</h3>
                </Col>
                <Col md={6} xs={6} className="tr">
                    <img src="/images/filter.png" alt="filter" />
                </Col>
            </Row>
            <Row className="mt-3">
                <Col md={12}>
                    {applications.map((app, index) => {
                        return (
                            <Card className={`app-card ${index === 0 ? 'br-red' : ''}`} key={index}>
                                <Row>
                                    <Col md={6} xs={10}>
                                        <div className="app-title mbl"><span className="app title-type">{app.appType}</span> - {app.title}</div>
                                    </Col>
                                    <Col md={6} xs={2} className="tr">
                                        {index === 0 ? <img src="/images/top.png" className="cur-ptr" alt="top" />
                                        : <img src="/images/bottom.png" className="cur-ptr" alt="bottom" />}
                                        
                                    </Col>
                                </Row>
                                <Row className="mt-1">
                                        <Col md={2} xs={6}>
                                            <span className={`${index === 0 ? 'warn-color' : 'light-black clock'}`}>
                                                <i className="far fa-calendar-alt"></i>&nbsp;&nbsp;{app.date}
                                            </span>
                                        </Col>
                                        <Col md={2} xs={6}>
                                            <span className={`${index === 0 ? 'warn-color' : 'grey-color clock'}`}>
                                                <i className="far fa-clock"></i>&nbsp;&nbsp;{app.time}
                                            </span>
                                            
                                        </Col>
                                </Row>
                                {index === 0 && <>
                                    <div className="app-divider"></div>
                                    <Row>
                                            <Col md={12}>
                                                <Row>
                                                    {app.applicationDetails.map((item, ind) => {
                                                        return (
                                                            <>
                                                                <Col md={ind !== app.applicationDetails.length-1 ? 12 : 6}>
                                                                    <div className="profile-key ">
                                                                        {item.key}
                                                                    </div>
                                                                    <div className="profile-val app-val">
                                                                        {item.val}
                                                                    </div>                                        
                                                                </Col>
                                                                {ind === app.applicationDetails.length-1 &&
                                                                    <Col md={6} className="tr mbl">
                                                                        <div className="view-details">
                                                                            <i className="far fa-list-alt"></i>&nbsp; View Details
                                                                        </div>
                                                                                                            
                                                                    </Col>
                                                                }
                                                            </>
                                                        )
                                                    })}
                                                </Row>
                                            </Col>
                                    </Row>
                                    </>
                                }
                            </Card>
                        )
                    })}
                   
                </Col>
               
            </Row>
            <Row className="mb-2">
                <Col >
                    <div className="text-center view-all cur-ptr">
                        View All (79)
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Applications
