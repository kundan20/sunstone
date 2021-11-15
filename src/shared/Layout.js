import React from 'react'
import { Container } from 'react-bootstrap'
import LayoutNavbar from './LayoutNavbar'
import LayoutNavFooter from './LayoutNavFooter'
import LayoutRightSideNav from './LayoutRightSideNav'
import LayoutSideNav from './LayoutSideNav'

const Layout = (props) => {
    return (
        <div className = "layout-wrapper">
            <div className = "side-nav d-none d-sm-block">
                <LayoutSideNav />
            </div>
            <div className = "top-nav  d-block d-sm-none">
                <LayoutNavbar />
            </div>
            <div className = "layout-content">
                <Container>
                    {props.children}
                </Container>
            </div>            
            <div className = "right-nav  d-none d-sm-block">
                <LayoutRightSideNav />
            </div>
            <div className = "nav-footer  d-block d-sm-none">
                <LayoutNavFooter />
            </div>
        </div>
    )
}

export default Layout
