import React, { Component } from 'react';
import Welcome from './Welcome';
import { Link, BrowserRouter } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <div className="navbar">
                        <li><a href='https://www.harrisonwalkers.com'>Dog Walks</a></li>
                        <li><a href='https://random.dog/'>Photos</a></li>
                        <li><a href='https://sitstay.com/blogs/good-dog-blog'>Blog</a></li>
                        <li><Link to="/welcome"> More Info </Link></li>

                    </div>
                </div >
            </BrowserRouter>
        )
    }
}



