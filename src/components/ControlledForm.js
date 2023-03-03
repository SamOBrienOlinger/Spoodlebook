import React, { Component } from 'react'

export class ControlledForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            dogName: '',
            location: 'Kerry',
            comments: '',
       }
   }
   handleDogNameChange = (event) => {
       this.setState({
           dogName: event.target.value
       })
   }
   handleLocationChange = (event) => {
       this.setState({
           location: event.target.value
       })
   }
   handleCommentsChange = (event) => {
       this.setState({
           comments: event.target.value
       })
   }
   handleSubmit = (event) => {
       event.preventDefault();
       console.log(this.state)
   }
   render() {
       return (
           <div>
               <h2>Please fill out the form below:</h2>
               <form onSubmit={this.handleSubmit}>
                   <div>
                       <label htmlFor="id-dog-name">Your Dog's Name?</label>
                       <input
                           value={this.state.dogName}
                           onChange={this.handleDogNameChange}
                           id="id-dog-name"
                           name="name"
                           type="text"
                       />
                   </div>
                   <div>
                       <label htmlFor="id-category">Location?:</label>
                       <select
                           id="id-category"
                           name="Location"
                           value={this.state.location}
                           onChange={this.handleLocationChange}
                       >
                           <option value="Kerry">In Kerry?</option>
                           <option value="Dublin">In Dublin?</option>
                           <option value="Belfast">In Belfast?</option>

                       </select>
                   </div>
                   <div>
                       <label htmlFor="id-comments">Comments:</label>
                       <textarea
                           id="id-comments"
                           name="comments"
                           value={this.state.comments}
                           onChange={this.handleCommentsChange}
                       />
                   </div>
                   <input type="submit" value="Submit" />
               </form>
           </div>
       )
   }
}

export default ControlledForm
