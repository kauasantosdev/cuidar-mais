import React, { useEffect, useState, useRef } from 'react'
import { Send, Bot, User, Sparkles, Loader2 } from 'lucide-react'
 function PaginaDaIA() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      content: 'Olá! Eu sou uma IA assistente. Como posso ajudar você hoje?',
    },
  ])
  const [inputMessage, setInputMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  useEffect(() => {
    scrollToBottom()
  }, [messages])
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return
    // Add user message
    const newMessage = {
      type: 'user',
      content: inputMessage,
    }
    setMessages((prev) => [...prev, newMessage])
    setInputMessage('')
    // Simulate AI response
    setIsTyping(true)
    setTimeout(() => {
      const aiResponse = {
        type: 'bot',
        content:
          'Esta é uma demonstração de interface. Em uma implementação real, aqui seria processada a resposta da IA.',
      }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1500)
  }
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center">
        <div className="flex items-center space-x-2">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Sparkles className="h-6 w-6 text-blue-600" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">AI Assistant</h1>
            <p className="text-sm text-gray-500">Sempre pronta para ajudar</p>
          </div>
        </div>
      </header>
      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}
          >
            <div
              className={`p-2 rounded-lg ${message.type === 'user' ? 'bg-blue-600 text-white' : 'bg-white border border-gray-200'}`}
            >
              <div className="flex items-center space-x-2 mb-1">
                {message.type === 'user' ? (
                  <User className="h-4 w-4" />
                ) : (
                  <Bot className="h-4 w-4" />
                )}
                <span className="text-sm font-medium">
                  {message.type === 'user' ? 'Você' : 'AI Assistant'}
                </span>
              </div>
              <p
                className={`text-sm ${message.type === 'user' ? 'text-white' : 'text-gray-700'}`}
              >
                {message.content}
              </p>
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex items-center space-x-2">
            <div className="p-2 bg-white border border-gray-200 rounded-lg">
              <div className="flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin" />
                <span className="text-sm text-gray-500">
                  AI está digitando...
                </span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="flex space-x-4">
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Digite sua mensagem..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2"
            disabled={!inputMessage.trim()}
          >
            <Send className="h-5 w-5" />
            <span>Enviar</span>
          </button>
        </form>
      </div>
    </div>
  )
}
export default PaginaDaIA;