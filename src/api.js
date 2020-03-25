import axios from 'axios'
import { API_ROOT, HEADERS } from './constants'

export const fetchConversations = () => {
  return axios.get(`${API_ROOT}/conversations`, {})
}

export const submitMessage = async (message) => {
  axios.post(`${API_ROOT}/messages`, message, { headers: HEADERS })
}

export const submitConversation = async (conversation) => {
  axios.post(`${API_ROOT}/conversations`, conversation, { headers: HEADERS })
}
