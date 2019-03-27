import React, { Component } from 'react'


export default class Button extends Component {
    render() {

        return (

            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown Button

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a href="https://imgur.com/f77SARV"><img src="https://i.imgur.com/f77SARV.jpg" title="source: imgur.com" /></a>
                        <a className="dropdown-item" href="https://imgur.com/f77SARV">Dog A</a>

                        <a className="dropdown-item" href="#">Dog B </a>

                        <a className="dropdown-item" href="#">Dog C</a>
                    </div>
                </button>
            </div>
        )
    }
}

// import React, { Component } from 'react'

// export default class Sample extends Component {
//     state = {
//         items: this.props.items || []
//         showItems: false,
//     }

//     render() {
//         return <div>
//             <div
//                 className="select-box--arrow"
//             ><span
//                     className={`${this.state.showItems ? 'select-box-arrow-up' : 'select-box--arrow-down'}`} />
//             </div>

//             <div
//                 style={{ display: this.state.showItems ? 'block' : 'nonw' }}
//                 {
//                 this.state.items.map(item => <div key={item.id}>
//                     {item.value}
//                 </div>)
//                 }
//             </div>
//         </div>
//     }
// }
