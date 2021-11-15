import React, { useState, useEffect } from 'react'
import { Col, Container, Row, Button, Card  } from 'react-bootstrap'
import LayoutNavbar from '../shared/LayoutNavbar'
import * as constants from '../shared/Constants'
import * as master from '../shared/MasterData'
import { Link } from 'react-router-dom'
import Profile from './Profile'
import Applications from './Applications'
import Opportunities from './Opportunities'

const Home = (props) => {
    const [ infoData, setInfoData ] = useState([]);
    const [ imageData, setImageData ] = useState([]);
    console.log('Home Props--', props)
   

    return (
        <>
            <section className="dashboard-content">
                <Profile profile = {master.profile} />
                <Applications applications = {master.applications} />
                <Opportunities opportunities = {master.opportunities} />
                                
            </section>
           
        </>
    )
}

export default Home
