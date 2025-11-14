"use client";
import React, { useState, useRef, useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { FaRobot, FaTimes, FaPaperPlane, FaComments, FaTrash } from "react-icons/fa";
import { findBestResponse } from "../../data/chatbotKnowledge";

const pulse = keyframes`
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(157, 74, 188, 0.7);
  }
  50% {
    box-shadow: 0 0 0 15px rgba(157, 74, 188, 0);
  }
`;

const slideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const FABContainer = styled.div`
  position: fixed;
  bottom: 32px;
  right: 32px;
  z-index: 1000;
  
  @media (max-width: 768px) {
    bottom: 20px;
    right: 20px;
  }
`;

const FABButton = styled.button<{ $isOpen: boolean }>`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary) 0%, #7c398f 100%);
  border: none;
  color: var(--color-white);
  font-size: 1.8rem;
  cursor: pointer;
  box-shadow: 0 8px 24px rgba(157, 74, 188, 0.4);
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${pulse} 2s infinite;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 12px 32px rgba(157, 74, 188, 0.6);
  }
  
  &:active {
    transform: scale(0.95);
  }
  
  ${props => props.$isOpen && `
    animation: none;
    background: #7c398f;
  `}
`;

const ChatWindow = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 380px;
  height: 550px;
  background: var(--color-white);
  border-radius: 1.5rem;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  flex-direction: column;
  overflow: hidden;
  animation: ${slideUp} 0.3s ease;
  
  @media (max-width: 768px) {
    width: calc(100vw - 40px);
    height: 500px;
    right: -20px;
  }
`;

const ChatHeader = styled.div`
  background: linear-gradient(135deg, var(--color-primary) 0%, #7c398f 100%);
  color: var(--color-white);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const BotAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  backdrop-filter: blur(10px);
`;

const BotInfo = styled.div`
  flex: 1;
  
  h3 {
    margin: 0;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: var(--font-poppins);
  }
  
  p {
    margin: 0.25rem 0 0 0;
    font-size: 0.85rem;
    opacity: 0.9;
  }
`;

const HeaderButton = styled.button`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: ${props => props.className?.includes('close') ? 'rotate(90deg)' : 'scale(1.1)'};
  }
`;

const MessagesContainer = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 1.5rem;
  background: #f8f9fa;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  
  &::-webkit-scrollbar {
    width: 6px;
  }
  
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  
  &::-webkit-scrollbar-thumb {
    background: rgba(157, 74, 188, 0.3);
    border-radius: 3px;
  }
`;

const Message = styled.div<{ $isBot: boolean }>`
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
  animation: ${slideUp} 0.3s ease;
  ${props => !props.$isBot && 'flex-direction: row-reverse;'}
`;

const MessageAvatar = styled.div<{ $isBot: boolean }>`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${props => props.$isBot 
    ? 'linear-gradient(135deg, var(--color-primary) 0%, #7c398f 100%)' 
    : 'var(--color-text-dark)'};
  color: var(--color-white);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
`;

const MessageBubble = styled.div<{ $isBot: boolean }>`
  max-width: 75%;
  padding: 0.875rem 1.125rem;
  border-radius: ${props => props.$isBot 
    ? '0.75rem 0.75rem 0.75rem 0.25rem' 
    : '0.75rem 0.75rem 0.25rem 0.75rem'};
  background: ${props => props.$isBot ? 'var(--color-white)' : 'var(--color-primary)'};
  color: ${props => props.$isBot ? 'var(--color-text-dark)' : 'var(--color-white)'};
  font-family: var(--font-poppins);
  font-size: 0.95rem;
  line-height: 1.5;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  white-space: pre-line;
  word-wrap: break-word;
  
  strong {
    font-weight: 600;
  }
`;

const InputContainer = styled.form`
  padding: 1rem 1.5rem;
  background: var(--color-white);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  gap: 0.75rem;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  padding: 0.875rem 1.125rem;
  border: 2px solid var(--color-primary);
  border-radius: 2rem;
  font-family: var(--font-poppins);
  font-size: 0.95rem;
  outline: none;
  transition: all 0.2s;
  background: var(--color-white);
  color: var(--color-text-dark);
  caret-color: var(--color-primary);
  
  &:focus {
    border-color: var(--color-primary);
    box-shadow: 0 0 0 3px rgba(157, 74, 188, 0.1);
    
    &::placeholder {
      opacity: 0;
    }
  }
  
  &::placeholder {
    color: rgba(107, 107, 107, 0.5);
    transition: opacity 0.2s;
  }
`;

const SendButton = styled.button`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--color-primary) 0%, #7c398f 100%);
  border: none;
  color: var(--color-white);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s;
  
  &:hover:not(:disabled) {
    transform: scale(1.1);
    box-shadow: 0 4px 12px rgba(157, 74, 188, 0.4);
  }
  
  &:active:not(:disabled) {
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const QuickActions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-top: 0.5rem;
`;

const QuickActionButton = styled.button`
  padding: 0.5rem 1rem;
  background: rgba(157, 74, 188, 0.1);
  border: 1px solid rgba(157, 74, 188, 0.3);
  border-radius: 1rem;
  color: var(--color-primary);
  font-family: var(--font-poppins);
  font-size: 0.85rem;
  cursor: pointer;
  transition: all 0.2s;
  
  &:hover {
    background: var(--color-primary);
    color: var(--color-white);
  }
`;

interface ChatMessage {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function ChatbotFAB() {
  const [isOpen, setIsOpen] = useState(false);
  const initialMessage: ChatMessage = {
    text: "¡Hola! 👋 Soy el asistente virtual de Bora Viajes. ¿En qué puedo ayudarte hoy?",
    isBot: true,
    timestamp: new Date()
  };
  const [messages, setMessages] = useState<ChatMessage[]>([initialMessage]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleClearChat = () => {
    setMessages([initialMessage]);
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;

    // Agregar mensaje del usuario
    const userMessage: ChatMessage = {
      text: inputValue,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simular tiempo de respuesta del bot
    setTimeout(() => {
      const botResponse = findBestResponse(inputValue);
      const botMessage: ChatMessage = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const handleQuickAction = (question: string) => {
    setInputValue(question);
    // Auto-enviar
    const userMessage: ChatMessage = {
      text: question,
      isBot: false,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsTyping(true);

    setTimeout(() => {
      const botResponse = findBestResponse(question);
      const botMessage: ChatMessage = {
        text: botResponse,
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800);
  };

  const quickActions = [
    "Ver destinos",
    "Ofertas especiales",
    "Precios",
    "Cómo reservar"
  ];

  return (
    <FABContainer>
      <ChatWindow $isOpen={isOpen}>
        <ChatHeader>
          <BotAvatar>
            <FaRobot />
          </BotAvatar>
          <BotInfo>
            <h3>Asistente Bora Viajes</h3>
            <p>En línea • Responde al instante</p>
          </BotInfo>
          <HeaderButton onClick={handleClearChat} title="Limpiar chat">
            <FaTrash />
          </HeaderButton>
          <HeaderButton className="close" onClick={() => setIsOpen(false)} title="Cerrar">
            <FaTimes />
          </HeaderButton>
        </ChatHeader>

        <MessagesContainer>
          {messages.map((message, index) => (
            <Message key={index} $isBot={message.isBot}>
              <MessageAvatar $isBot={message.isBot}>
                {message.isBot ? <FaRobot /> : "👤"}
              </MessageAvatar>
              <div>
                <MessageBubble $isBot={message.isBot}>
                  {message.text}
                </MessageBubble>
                {message.isBot && index === messages.length - 1 && !isTyping && (
                  <QuickActions>
                    {quickActions.map((action, idx) => (
                      <QuickActionButton 
                        key={idx}
                        onClick={() => handleQuickAction(action)}
                      >
                        {action}
                      </QuickActionButton>
                    ))}
                  </QuickActions>
                )}
              </div>
            </Message>
          ))}
          
          {isTyping && (
            <Message $isBot={true}>
              <MessageAvatar $isBot={true}>
                <FaRobot />
              </MessageAvatar>
              <MessageBubble $isBot={true}>
                Escribiendo...
              </MessageBubble>
            </Message>
          )}
          
          <div ref={messagesEndRef} />
        </MessagesContainer>

        <InputContainer onSubmit={handleSendMessage}>
          <Input
            type="text"
            placeholder="Escribe tu pregunta..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isTyping}
          />
          <SendButton type="submit" disabled={!inputValue.trim() || isTyping}>
            <FaPaperPlane />
          </SendButton>
        </InputContainer>
      </ChatWindow>

      <FABButton $isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <FaTimes /> : <FaComments />}
      </FABButton>
    </FABContainer>
  );
}

