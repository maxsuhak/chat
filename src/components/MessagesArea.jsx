import React from 'react'
import NewMessageForm from './NewMessageForm'
import { orderedMessages } from '../helpers'

const MessagesArea = ({ conversation: { id, title, messages } }) => {
  return (
    <div>
      <ul className="list-group list-group-flush">
        {orderedMessages(messages)}
      </ul>
      <NewMessageForm conversation_id={id} />
    </div>
  )
}

export default MessagesArea
