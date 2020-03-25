import React from 'react'
import { submitMessage } from '../api'

class NewMessageForm extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      text: '',
      conversation_id: this.props.conversation_id
    }
  }

  componentWillReceiveProps = nextProps => {
    this.setState({ conversation_id: nextProps.conversation_id })
  }

  handleChange = e => {
    this.setState({ text: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()

    submitMessage(JSON.stringify(this.state))

    this.setState({ text: '' })
  }

  render () {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-row align-items-center">
          <div className="col-auto">
            <input type="text"
                   className="form-control mb-2"
                   placeholder="Add Message"
                   value={this.state.text}
                   onChange={this.handleChange}
                   autofocus />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-2">Add Message</button>
          </div>
        </div>
      </form>
    )
  }
}

export default NewMessageForm
