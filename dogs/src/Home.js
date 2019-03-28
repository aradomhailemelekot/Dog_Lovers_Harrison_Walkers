import React, { Component } from 'react';
import axios from 'axios';
// import Button from './Button.js';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],
            inputFormValue: '',
            photo: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getBreeds = this.getBreeds.bind(this);
        this.getPhoto = this.getPhoto.bind(this)
    }

    handleInputChange(event) {
        console.log(`The event.target.value is `)
        console.log(event.target.value)
        this.setState({
            inputFormValue: event.target.value
        })
    }

    async getBreeds() {
        axios.get('https://api.TheDogAPI.com/v1/breeds/')
            .then(posts => {
                this.setState({
                    breeds: posts.data
                })
            })
    }

    async getPhoto() {
        axios.get('https://api.thedogapi.com/v1/images/search?breed_ids=')
            .then(pictures => {
                this.setState({
                    photo: 'https://api.thedogapi.com/v1/images/search?breed_ids='
                })
            })
    }
    componentDidMount() {
        this.getBreeds()
    }

    render() {

        const dogs = this.state.breeds.map((eachDog) => (
            <div key={eachDog.id}>
                <p>Breed: {eachDog.name}</p>
            </div>
        ))

        return (

            <div>
                <form onSubmit={dogs}>
                    <input
                        type='text'
                        value={this.state.getBreeds}
                        onChange={this.handleInputChange}
                    />

                </form>
                <br />
                <p>Show me All Dogs Breed and URL</p>
                <p>{dogs}</p>
                <img src='{this.state.photo}' alt='dummyphoto'></img>
            </div >)


    }
}

export default Home;