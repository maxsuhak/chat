import React from 'react'

export const findActiveConversation = (conversations, activeConversation) => {
  return conversations.find(
    conversation => conversation.id === activeConversation
  )
}

export const mapConversations = (conversations, handleClick, activeConversation) => {
  return conversations.reverse().map(conversation => {
    let active = activeConversation === conversation.id ? 'active' : ''
    return (
      <li className={`list-group-item ${active}`}
          key={conversation.id}
          onClick={() => handleClick(conversation.id)}>
        {conversation.title}
      </li>
    )
  })
}

export const orderedMessages = messages => {
  const sortedMessages = messages.sort(
    (a, b) => new Date(a.created_at) - new Date(b.created_at)
  )
  return sortedMessages.map(message => {
    return <li className="list-group-item" key={message.id}>{message.text}</li>
  })
}
