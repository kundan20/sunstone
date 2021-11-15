import React from 'react'
import { Row, Col, Card } from 'react-bootstrap'

const Profile = (props) => {
    const { profile } = props
    return (
        <Card className="p-3 mt-4">
            <Row >
                <Col md={3} className="prfl-img">
                    <img src={profile.img} alt="profile" />
                </Col>
                <Col md={8}>
                    <Row>
                        <Col md={12} className="prfl-name">
                            <h4>{profile.name}</h4>
                        </Col>
                        <Col md={12}>
                            <Row>
                                {profile.profileDetails.map((item, ind) => {
                                    return (
                                        <Col md={6} key = {ind}>
                                            <div className="profile-key">
                                                {item.key}
                                            </div>
                                            <div className="profile-val">
                                                {item.val}
                                            </div>                                        
                                        </Col>
                                    )
                                })}
                            </Row>
                        </Col>
                    </Row>                
                </Col>                
            </Row>
        </Card>
       
    )
}

export default Profile
