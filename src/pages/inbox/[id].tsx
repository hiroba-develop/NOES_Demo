import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const mockMessages: { [key: string]: any } = {
  'msg-1': { id: 'msg-1', type: 'message', from: '田中 一郎', subject: 'Re: 複合機のお見積もり', date: '2時間前', body: '先日お送りした複合機のお見積もりですが、ご確認いただけましたでしょうか。ご不明な点がございましたら、お気軽にお知らせください。', history: [{ from: 'あなた', body: '確認します。本日中に返信します。' }] },
  'msg-2': { id: 'msg-2', type: 'message', from: 'サポートデスク', subject: 'サーバーメンテナンス完了のお知らせ', date: '昨日', body: '定例のサーバーメンテナンスが完了いたしましたのでご報告いたします。ご協力ありがとうございました。', history: [] },
  'consult-1': { id: 'consult-1', type: 'consultation', from: 'あなた', subject: 'PCの動作が遅い件', date: '3日前', body: '経理部のPCの動作が非常に遅く、業務に支障が出ています。一度見ていただくことは可能でしょうか。', history: [] },
  'consult-2': { id: 'consult-2', type: 'consultation', from: 'あなた', subject: '新規ノートPC導入の件', date: '5日前', body: '営業部で新規に5台のノートPCを導入したいと考えています。おすすめの機種と見積もりをお願いします。', history: [] },
};


const MessageDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [item, setItem] = useState<any>(null);
    const [replyText, setReplyText] = useState('');

    useEffect(() => {
        if (id) {
            setItem(mockMessages[id]);
        }
    }, [id]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!replyText.trim()) return;

        const newReply = {
            from: 'あなた',
            body: replyText,
        };
        
        setItem((prevItem: any) => ({
            ...prevItem,
            history: [...prevItem.history, newReply],
        }));

        setReplyText('');
    };

    if (!item) {
        return <div className="p-8 text-center">メッセージが見つかりません。</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <Link to="/inbox" className="text-primary-blue hover:underline mb-6 block">&larr; 受信トレイに戻る</Link>
            
            <div className="bg-white rounded-lg shadow-lg p-8">
                <header className="border-b pb-4 mb-6">
                    <h1 className="text-3xl font-bold text-gray-800">{item.subject}</h1>
                    <div className="text-sm text-gray-500 mt-2">
                        <span>From: {item.from}</span>
                        <span className="mx-2">|</span>
                        <span>Date: {item.date}</span>
                    </div>
                </header>

                <div className="prose max-w-none mb-8">
                    <p>{item.body}</p>
                </div>

                {item.history && (
                     <div className="space-y-4 mb-8">
                        {item.history.map((reply: any, index: number) => (
                            <div key={index} className={`p-4 rounded-md ${reply.from === 'あなた' ? 'bg-blue-100' : 'bg-gray-100'}`}>
                                <p className="font-semibold">{reply.from}</p>
                                <p>{reply.body}</p>
                            </div>
                        ))}
                    </div>
                )}

                <div className="border-t pt-6">
                    <h2 className="text-xl font-semibold mb-4">返信する</h2>
                    <form onSubmit={handleSubmit}>
                        <textarea
                            className="w-full p-4 border rounded-md focus:ring-2 focus:ring-primary-blue"
                            rows={5}
                            placeholder="ここに返信内容を入力してください..."
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                        ></textarea>
                        <div className="mt-4 flex justify-end">
                            <button type="button" className="bg-gray-200 text-gray-700 py-2 px-4 rounded-md mr-2 hover:bg-gray-300">下書き保存</button>
                            <button type="submit" className="bg-primary-blue text-white py-2 px-6 rounded-md hover:bg-blue-600">送信</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MessageDetailPage; 