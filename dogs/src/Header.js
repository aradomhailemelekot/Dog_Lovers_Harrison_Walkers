import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="nav">
                    <ul>
                        <li><a href='www.harrisonwalkers.com'>Dog Walks</a></li>
                        <li><a href='#'>Photos</a></li>
                        <li><a href='#'>Blog</a></li>
                        <li><a href='www.harrisonwalkers.com'>More Info</a></li>
                        <li><a href='#'>Contact Us</a></li>
                    </ul>
                </nav>
            </div >
        )
    }
}



