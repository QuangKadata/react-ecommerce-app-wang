import React from 'react'

import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

// import Header from './Header'
// import Footer from './Footer'

import Routes from '../routes/Routes'

const Layout = () => {
    return (
        <BrowserRouter>
            <Route render={props => (
                <div>
                    <Header {...props}/>
                    <div className="container">
                        <div className="main">
                            <Routes/>
                        </div>
                    </div>
                    <Footer/> 
                </div>
            )}/>
        </BrowserRouter>
    )
}

export default Layout