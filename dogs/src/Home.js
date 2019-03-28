import React, { Component } from 'react';
import axios from 'axios';
// import Button from './Button.js';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      breeds: [],
      inputFormValue: '',
      photo: null
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getBreeds = this.getBreeds.bind(this);
    this.getPhoto = this.getPhoto.bind(this)
  }

  handleInputChange(event) {
    this.setState({
      inputFormValue: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.getPhoto(this.state.inputFormValue)
    this.setState({
      inputFormValue: ''
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

  async getPhoto(id) {
    console.log(id)
    axios.get(`https://api.thedogapi.com/v1/images/search?breed_ids=${id}`)
      .then((response) => {
        const url = response.data.length && response.data[0].url
        this.setState({
          photo: url || 'https://i.imgur.com/f77SARV.jpg'
        })
      })
  }
  componentDidMount() {
    this.getBreeds()
  }

  render() {

    const dogs = this.state.breeds.map((eachDog) => (
      <div key={eachDog.id}>
        <p>Breed: {eachDog.name} {eachDog.id}</p>
      </div>
    ))

    return (

      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.inputFormValue}
            onChange={this.handleInputChange}
            placeholder="Please input a number"
          />
        </form>
        {this.state.photo &&
          <img src={this.state.photo} alt='dummyphoto' />
        }
        <br />
        <p>Show me All Dogs Breed and URL</p>
        {dogs}
      </div >
    )


  }
}

export default Home;