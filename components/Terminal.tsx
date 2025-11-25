import React, { useState, useRef, useEffect } from 'react';
import { Send, Terminal as TerminalIcon, Loader2, Sparkles } from 'lucide-react';
import { getGeminiResponse } from '../services/geminiService';
import { ChatMessage } from '../types';
import ReactMarkdown from 'react-markdown';

const Terminal: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Nexus AI initialized. Ready to assist with deployment configurations.' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const responseText = await getGeminiResponse(input);
      const aiMessage: ChatMessage = { role: 'model', text: responseText };
      setMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: 'System Error: Connection failed.', isError: true }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="ai-terminal" className="py-24 relative overflow-hidden">
        {/* Background Decorative Gradient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-xs font-mono text-indigo-400 mb-4">
            <Sparkles size={12} />
            <span>Powered by Gemini 2.5</span>
            </div>
            <h2 className="text-3xl font-bold mb-4">Intelligent Operations</h2>
            <p className="text-zinc-400 max-w-lg">
            Ask Nexus to generate Dockerfiles, debug Nginx configs, or explain complex infrastructure patterns.
            </p>
        </div>

        {/* Terminal Window */}
        <div className="rounded-xl overflow-hidden border border-zinc-800 bg-[#0c0c0e] shadow-2xl shadow-black/50">
          {/* Terminal Header */}
          <div className="bg-zinc-900/50 px-4 py-3 flex items-center justify-between border-b border-zinc-800">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
            </div>
            <div className="text-xs font-mono text-zinc-500 flex items-center gap-2">
              <TerminalIcon size={12} />
              nexus-cli — zsh
            </div>
            <div className="w-10"></div> {/* Spacer for centering */}
          </div>

          {/* Terminal Body */}
          <div className="h-[400px] overflow-y-auto p-6 font-mono text-sm space-y-4">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                {msg.role === 'model' && (
                  <div className="w-6 h-6 rounded bg-indigo-600/20 flex items-center justify-center shrink-0 mt-1">
                    <TerminalIcon size={14} className="text-indigo-400" />
                  </div>
                )}
                
                <div className={`max-w-[85%] rounded px-4 py-2 ${
                  msg.role === 'user' 
                    ? 'bg-zinc-800 text-zinc-100' 
                    : 'bg-transparent text-zinc-300'
                }`}>
                  {msg.role === 'user' ? (
                     msg.text
                  ) : (
                    <div className="prose prose-invert prose-sm max-w-none">
                        <ReactMarkdown 
                            components={{
                                code({node, className, children, ...props}) {
                                    const match = /language-(\w+)/.exec(className || '')
                                    return match ? (
                                        <div className="relative group my-2">
                                            <div className="absolute top-2 right-2 text-[10px] text-zinc-500 uppercase">{match[1]}</div>
                                            <code className={`${className} block bg-black/50 p-3 rounded border border-zinc-800 text-xs overflow-x-auto`} {...props}>
                                                {children}
                                            </code>
                                        </div>
                                    ) : (
                                        <code className="bg-zinc-800 px-1 py-0.5 rounded text-zinc-200" {...props}>
                                            {children}
                                        </code>
                                    )
                                }
                            }}
                        >
                            {msg.text}
                        </ReactMarkdown>
                    </div>
                  )}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-3 justify-start">
                 <div className="w-6 h-6 rounded bg-indigo-600/20 flex items-center justify-center shrink-0 mt-1">
                    <TerminalIcon size={14} className="text-indigo-400" />
                  </div>
                  <div className="flex items-center gap-2 text-zinc-500 px-4 py-2">
                    <Loader2 size={14} className="animate-spin" />
                    <span className="text-xs">Processing request...</span>
                  </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="border-t border-zinc-800 bg-zinc-900/30 p-4">
            <form onSubmit={handleSubmit} className="relative flex items-center">
              <span className="absolute left-3 text-zinc-500 font-mono">{'>'}</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="How do I deploy a Node.js app with Docker?"
                className="w-full bg-zinc-950/50 border border-zinc-800 rounded-md py-3 pl-8 pr-12 text-zinc-200 text-sm font-mono focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/50 placeholder:text-zinc-600"
              />
              <button 
                type="submit" 
                disabled={!input.trim() || isLoading}
                className="absolute right-2 p-1.5 rounded bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terminal;