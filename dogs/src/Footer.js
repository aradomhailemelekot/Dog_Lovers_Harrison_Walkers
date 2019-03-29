import React, { Component } from 'react'
import { Link, BrowserRouter } from 'react-router-dom'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <footer className='footer'>
                        <Link to="/welcome"> Thank you for visiting our site. Woof! </Link>
                    </footer>
                </BrowserRouter>
            </div>
        )
    }
}