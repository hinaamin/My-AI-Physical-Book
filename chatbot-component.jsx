import React, { useState, useEffect, useRef } from 'react';

const ChatbotComponent = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [selectedText, setSelectedText] = useState('');
    const [sessionId, setSessionId] = useState(null);
    const messagesEndRef = useRef(null);
    const textareaRef = useRef(null);

    // Function to create a new session
    const createSession = async () => {
        try {
            const response = await fetch('/api/chat/sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user_id: 'user123' }) // In a real app, this would be a real user ID
            });
            const session = await response.json();
            setSessionId(session.session_id);
            return session.session_id;
        } catch (error) {
            console.error('Error creating session:', error);
            // Generate a temporary session ID
            const tempId = `temp_${Date.now()}`;
            setSessionId(tempId);
            return tempId;
        }
    };

    // Initialize session on component mount
    useEffect(() => {
        const initSession = async () => {
            const id = await createSession();
            setSessionId(id);

            // Add welcome message
            setMessages([{
                id: 'welcome',
                role: 'assistant',
                content: 'Hello! I\'m your Physical AI Humanoid Robotics book assistant. I can help answer questions about the content. Select text on the page and ask questions about it, or ask me anything about humanoid robotics!',
                sources: [],
                timestamp: new Date()
            }]);
        };
        initSession();
    }, []);

    // Auto-scroll to bottom of messages
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    // Handle text selection
    useEffect(() => {
        const handleSelection = () => {
            const selection = window.getSelection();
            if (selection.toString().trim()) {
                setSelectedText(selection.toString().trim());
            } else {
                setSelectedText('');
            }
        };

        document.addEventListener('mouseup', handleSelection);
        return () => document.removeEventListener('mouseup', handleSelection);
    }, []);

    const sendMessage = async () => {
        if (!inputValue.trim() || isLoading) return;

        const userMessage = {
            id: Date.now().toString(),
            role: 'user',
            content: inputValue,
            sources: [],
            timestamp: new Date()
        };

        setMessages(prev => [...prev, userMessage]);
        setInputValue('');
        setIsLoading(true);

        try {
            // In a real app, you would have a session ID
            const currentSessionId = sessionId || await createSession();

            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    session_id: currentSessionId,
                    message: inputValue,
                    selected_text: selectedText
                })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            const assistantMessage = {
                id: `assistant_${Date.now()}`,
                role: 'assistant',
                content: data.response,
                sources: data.sources || [],
                timestamp: new Date()
            };

            setMessages(prev => [...prev, assistantMessage]);
        } catch (error) {
            console.error('Error sending message:', error);
            const errorMessage = {
                id: `error_${Date.now()}`,
                role: 'assistant',
                content: 'Sorry, I encountered an error. Please try again.',
                sources: [],
                timestamp: new Date()
            };
            setMessages(prev => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
            setSelectedText('');
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const toggleChat = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="chatbot-container">
            <button className="chatbot-button" onClick={toggleChat}>
                💬
            </button>

            <div className={`chatbot-window ${isOpen ? 'open' : ''}`}>
                <div className="chatbot-header">
                    <div className="chatbot-title">Physical AI Book Assistant</div>
                    <button className="chatbot-close" onClick={toggleChat}>
                        ×
                    </button>
                </div>

                <div className="chatbot-messages">
                    {selectedText && (
                        <div className="selected-text-indicator">
                            <strong>Selected text:</strong> "{selectedText.substring(0, 100)}{selectedText.length > 100 ? '...' : ''}"
                        </div>
                    )}

                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`message ${message.role === 'user' ? 'user-message' : 'assistant-message'}`}
                        >
                            {message.content}
                            {message.sources && message.sources.length > 0 && (
                                <div className="message-sources">
                                    <strong>Sources:</strong>
                                    {message.sources.slice(0, 3).map((source, index) => (
                                        <div key={index} className="source-item">
                                            {source.url ? (
                                                <a href={source.url} className="source-link" target="_blank" rel="noopener noreferrer">
                                                    {source.title || 'Source'}
                                                </a>
                                            ) : (
                                                <span>{source.title || 'Source'}</span>
                                            )}
                                            {source.section && ` (${source.section})`}
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}

                    {isLoading && (
                        <div className="typing-indicator">
                            Assistant is thinking...
                        </div>
                    )}

                    <div ref={messagesEndRef} />
                </div>

                <div className="chatbot-input">
                    <textarea
                        ref={textareaRef}
                        className="chatbot-textarea"
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Ask about the Physical AI book..."
                        rows="1"
                    />
                    <button
                        className="chatbot-send"
                        onClick={sendMessage}
                        disabled={isLoading || !inputValue.trim()}
                    >
                        ➤
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ChatbotComponent;