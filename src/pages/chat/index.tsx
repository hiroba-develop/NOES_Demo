import React, { useState, useRef, useEffect } from 'react';

// サンプルデータ
const conversations = [
  { id: 1, name: 'NOES 総合サポート', lastMessage: 'ご確認ありがとうございます！', unread: 0 },
  { id: 2, name: '田中 一郎（営業担当）', lastMessage: '先日の件、いかがでしょうか？', unread: 2 },
];

const initialMessages: { [key: string]: { from: string; text: string; time: string }[] } = {
  '1': [
    { from: 'other', text: 'こんにちは！何かお困りですか？', time: '10:00' },
    { from: 'me', text: 'はい、PCの動作が遅くて困っています。', time: '10:01' },
  ],
  '2': [
    { from: 'other', text: '田中です。先日の複合機のお見積もりの件、いかがでしょうか？', time: '昨日' },
  ]
};

const ChatPage: React.FC = () => {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0].id);
  const [messages, setMessages] = useState(initialMessages);
  const [newMessage, setNewMessage] = useState('');
  const messagesEndRef = useRef<null | HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, selectedConversation]);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMessage.trim() === '') return;

    const sentMessage = {
      from: 'me',
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    const updatedMessages = {
      ...messages,
      [selectedConversation]: [...messages[selectedConversation], sentMessage],
    };
    setMessages(updatedMessages);
    setNewMessage('');

    // 自動返信のシミュレーション
    setTimeout(() => {
      const replyMessage = {
        from: 'other',
        text: 'お問い合わせありがとうございます。内容を確認し、担当者より改めてご連絡いたします。',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages(prevMessages => ({
        ...prevMessages,
        [selectedConversation]: [...prevMessages[selectedConversation], replyMessage],
      }));
    }, 1000);
  };

  return (
    <div className="flex h-[calc(100vh-120px)] bg-white rounded-lg shadow-lg">
      {/* 会話リスト */}
      <div className="w-1/4 border-r border-gray-200">
        <div className="p-4 border-b">
          <h2 className="text-xl font-semibold text-primary-blue">チャット</h2>
        </div>
        <ul>
          {conversations.map((conv) => (
            <li
              key={conv.id}
              onClick={() => setSelectedConversation(conv.id)}
              className={`p-4 cursor-pointer hover:bg-gray-100 ${selectedConversation === conv.id ? 'bg-sub-light-blue/20' : ''}`}
            >
              <div className="flex justify-between">
                <p className="font-semibold text-gray-800">{conv.name}</p>
                {conv.unread > 0 && (
                  <span className="bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                    {conv.unread}
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 truncate">{conv.lastMessage}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* メッセージ表示エリア */}
      <div className="flex-1 flex flex-col">
        <div className="p-4 border-b flex items-center">
          <h3 className="text-lg font-semibold text-gray-800">{conversations.find(c => c.id === selectedConversation)?.name}</h3>
        </div>
        
        <div className="flex-1 p-4 overflow-y-auto bg-sub-background-gray">
          {messages[selectedConversation.toString()].map((msg, index) => (
            <div key={index} className={`flex mb-4 ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
              <div className={`rounded-lg px-4 py-2 max-w-sm ${msg.from === 'me' ? 'bg-primary-blue text-white' : 'bg-gray-200 text-gray-800'}`}>
                <p>{msg.text}</p>
                <p className={`text-xs mt-1 ${msg.from === 'me' ? 'text-blue-200' : 'text-gray-500'}`}>{msg.time}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* メッセージ入力フォーム */}
        <div className="p-4 bg-white border-t">
          <form onSubmit={handleSendMessage} className="flex items-center space-x-4">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="flex-1 px-4 py-2 border rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="メッセージを入力..."
            />
            <button type="submit" className="px-6 py-2 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors duration-300">
              送信
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatPage; 