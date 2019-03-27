import React, { Component } from 'react';
import axios from 'axios';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],

        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(theyTyped) {
        this.setState({
            inputFormValue: theyTyped.target.value
        })
    }

    getImages() {
        return axios.get('https://api.TheDogAPI.com/v1/breeds/')
            .then(res => res)
            .then(posts => {
                this.setState({
                    breeds: posts.data
                })
            })
    }


    componentDidMount() {
        this.getImages()
    }


    render() {

        return (
            <div>

            </div>
        );
    }
}

export default Home;