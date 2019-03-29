import React, { Component } from 'react';
import axios from 'axios';



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

  async getPhoto(breed) {
    if (breed.split(' ').length === 1) {

      axios.get(`https://dog.ceo/api/breed/${breed}/images/random`)
        .then((response) => {
          const url = response.data.message
          this.setState(prevState => ({
            photo: url
          }))
        })
    }
    else {
      this.setState(prevState => ({
        photo: 'https://i.imgur.com/7LgUlA2.jpg'
      }))
    }
  }

  componentDidMount() {
    this.getBreeds()
  }

  render() {


    const dogs = this.state.breeds.map((eachDog) => (
      <div key={eachDog.id}>
        <p
          onClick={() => this.getPhoto(eachDog.name)}
        > {eachDog.name} </p>
      </div >
    ))

    return (

      <div className="col-sm-4 offset-sm-4">
        <form onSubmit={this.handleSubmit}>
          <input
            type='text'
            value={this.state.inputFormValue}
            onChange={this.handleInputChange}
            placeholder="Type dog breed"
          />
        </form>
        {this.state.photo &&
          <img src={this.state.photo} alt='https://i.imgur.com/7LgUlA2.jpg' />
        }
        <br />
        <p>Available Dog Breeds</p>
        {dogs}
      </div >
    )
  }
}

export default Home;

