import React from 'react'
import { ActionCableConsumer } from 'react-actioncable-provider'
import NewConversationForm from './NewConversationForm'
import MessagesArea from './MessagesArea'
import Cable from './Cable'
import { findActiveConversation, mapConversations } from '../helpers'
import { fetchConversations } from '../api'

class ConversationsList extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      conversations: [],
      activeConversation: null
    }
  }

  async componentDidMount () {
    let { data } = await fetchConversations()
    this.setState({ conversations: data })
  }

  handleClick = id => {
    this.setState({ activeConversation: id })
  }

  handleReceivedConversation = response => {
    const { conversation } = response
    this.setState({
      conversations: [...this.state.conversations, conversation]
    })
  }

  handleReceivedMessage = response => {
    const { message } = response
    const conversations = [...this.state.conversations]
    const conversation = findActiveConversation(conversations, message.conversation_id)
    conversation.messages = [...conversation.messages, message]
    this.setState({ conversations })
  }

  render () {
    const { conversations, activeConversation } = this.state

    return (
      <div className='row'>
        <div className='col-md-4'>
          <NewConversationForm />
          <ActionCableConsumer
            channel={{ channel: 'ConversationsChannel' }}
            onReceived={this.handleReceivedConversation}
          />
          {this.state.conversations.length ? (
            <Cable
              conversations={conversations}
              handleReceivedMessage={this.handleReceivedMessage}
            />
          ) : null}
          <ul className="list-group"
              style={{maxHeight: "40%", overflow: "scroll"}}>
            {mapConversations(conversations, this.handleClick, activeConversation)}
          </ul>
        </div>
        <div className='col-md-8'>
          {activeConversation ? (
            <MessagesArea conversation={findActiveConversation(conversations, activeConversation)} />
          ) : null}
        </div>
      </div>
    )
  }
}

export default ConversationsList
