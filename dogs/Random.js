import React, { Component } from 'react'

export default class Random extends Component {
    constructor(props) {
        super(props)
        this.state = {
            num: [],
            breed: ''
        }

    }

    getEndPoint = () => (num, breed) => {
        if (breed) return `https://dog.ceo/api/breed/${breed}/images/random/${num}`
        else return `https://dog.ceo/api/breed/images/random/${num}`


        function getDogImages(num, breed) {
            fetch(getEndPoint(num, breed))
                .then(response => response.json())
                .then(responseJson => displayResults(responseJson))
                .catch(error => alert)('Please pick a number between 1 and 50 or try again later.')
        }
    }
    render() {
        return (
            <div>

            </div>
        )
    }

}

    // function displayResults(responseJson) {
    //     //unhappy case
    //     const img
    // }