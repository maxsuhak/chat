import React from 'react'
import { submitConversation } from '../api'

class NewConversationForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  handleChange = e => {
    this.setState({ title: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    submitConversation(JSON.stringify(this.state))

    this.setState({ title: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input type="text"
                   className="form-control mb-2"
                   placeholder="Add Conversaation"
                   value={this.state.title}
                   onChange={this.handleChange} />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">Add Conversaation</button>
          </div>
        </div>
      </form>
    )
  }
}

export default NewConversationForm
