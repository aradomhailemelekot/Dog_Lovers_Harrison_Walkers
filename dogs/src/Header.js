import React, { Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Welcome from './Welcome.js'

export default class Header extends Component {
    render() {

        return (
            <BrowserRouter>

                <div>
                    <div className="navbar">

                        <li><a href='https://www.harrisonwalkers.com'>Dog Walks</a></li>
                        <li><a href='https://random.dog/'>Photos</a></li>
                        <li><a href='https://sitstay.com/blogs/good-dog-blog'>Blog</a></li>
                        <li><a href='https://www.harrisonwalkers.com'>More Info</a></li>

                    </div>
                    <Link to path="/welcome" component={Welcome} />
                </div >
            </BrowserRouter >
        )
    }
}






