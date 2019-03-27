import React, { Component } from 'react'


export default class Button extends Component {
    render() {

        return (

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown button

                </button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">

                    <a className="dropdown-item" href="/Home">
                        African Dog</a>
                    <a className="dropdown-item" href="/Home">
                        Affenpinscher</a>


                    Afghan Hound
                    African Hunting Dog
                    Airedale Terrier
                    Akbash Dog

                    {/* <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a> */}
                </div>
            </div>

        )
    }
}


