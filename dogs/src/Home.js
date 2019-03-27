import React, { Component } from 'react';
import axios from 'axios';
import Button from './Button.js';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            breeds: [],

        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.getBreeds = this.getBreeds.bind(this);

    }

    handleInputChange(userTyped) {
        this.setState({
            inputFormValue: userTyped.target.value
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
                <form onSubmit={dogs}>
                    <input
                        type='text'
                        value={this.state.getBreeds}
                        onChange={dogs}
                    />
                </form>
                <br />
                {/* < searchresult={inputFormValue: userTyped.target.value} */}

            </div >)

        {/* <h1>Dropdown Button</h1>
                <div style={{ margin: '16px' }}>
                    <Button
                        itms={[
                            { value: "dogs" },
                        ]}
                    />
                </div> */}

        {/* // <div>
        //     <Button breeds={this.state.breeds} />
        //     {dogs}
        // </div>
        ; */}
    }
}

export default Home;