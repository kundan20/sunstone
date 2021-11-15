import React from 'react'
import { Badge } from 'react-bootstrap'

const LayoutSideNav = () => {
    return (
        <div className="side-nav-content p-3">
            <div className="logo">
                <img src="/images/logo.png" alt="logo" />
            </div>
            <div className="side-nav-items">
                <div className="item active"><span className="item-icon"><i className="fas fa-home"></i></span>Dashboard</div>
                <div className="item"><span className="item-icon"><i className="fas fa-user"></i></span>Profile</div>
                <div className="item"><span className="item-icon"><i className="fas fa-briefcase"></i></span>Opportunities <span className="badge bg">22</span></div>

            </div>
            
        </div>
    )
}

export default LayoutSideNav
