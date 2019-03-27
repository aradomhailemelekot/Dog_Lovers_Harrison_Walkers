import React, { Component } from 'react';
import axios from 'axios';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breed: '',
            id: '',
            name: '',
            tempermant: '',
            url: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    handleInputChange(theyTyped) {
        this.setState({
            inputFormValue: theyTyped.target.value
        })
    }

    onFormSubmit() {
        return axios.get('https://api.TheDogAPI.com/v1/images/search?breed_ids')
            .then(res => res)
            .then(posts => {
                this.setState({
                })
                console.log('checkme', posts)
            })
    }




    render() {

        return (
            <div>

            </div>
        );
    }
}

export default Home;