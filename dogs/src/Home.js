import React, { Component } from 'react';
import Button from './Button.js';
import axios from 'axios';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],

        };

        this.handleInputChange = this.handleInputChange.bind(this);

    }

    handleInputChange(userTyped) {
        this.setState({
            inputFormValue: userTyped.target.value
        })
    }

    getBreeds() {
        return axios.get('https://api.TheDogAPI.com/v1/breeds/')
            .then(res => res)
            .then(posts => {
                this.setState({
                    breeds: posts.data
                })
            })
    }

    componentDidMount() {
        this.getBreeds()
    }

    render() {

        const dogs = this.state.breeds.map((breed, index) => (
            <div key={index}>
                {breed.name}
            </div>
        ))

        return (
            <div>
                <Button breeds={this.state.breeds} />
                {dogs}
            </div>
        );
    }
}

export default Home;