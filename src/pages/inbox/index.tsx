import React from 'react';
import { useLocation, Link } from 'react-router-dom';

const unreadMessages = [
    { id: 'msg-1', from: '田中 一郎', subject: 'Re: 複合機のお見積もり', date: '2時間前' },
    { id: 'msg-2', from: 'サポートデスク', subject: 'サーバーメンテナンス完了のお知らせ', date: '昨日' },
    // ... 3 more messages
];
const unansweredConsultations = [
    { id: 'consult-1', type: '技術サポート', subject: 'PCの動作が遅い件', date: '3日前' },
    { id: 'consult-2', type: '見積依頼', subject: '新規ノートPC導入の件', date: '5日前' },
];

const InboxPage: React.FC = () => {
    const location = useLocation();
    const filter = location.state?.filter;

    const itemsToDisplay = filter === 'unanswered_consultations' ? unansweredConsultations : unreadMessages;
    const title = filter === 'unanswered_consultations' ? '未対応の相談 (2件)' : '未読メッセージ (5件)';

    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">{title}</h1>
                <p className="text-gray-600 mt-2">
                    クリックして詳細を確認してください。
                </p>
            </header>
            
            <div className="space-y-4">
                {itemsToDisplay.map(item => (
                    <Link to={`/inbox/${item.id}`} key={item.id} className="block p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                        <div className="flex justify-between">
                            <p className="font-semibold">{item.subject}</p>
                            <p className="text-sm text-gray-500">{item.date}</p>
                        </div>
                        <p className="text-sm text-gray-600">
                             {'from' in item ? `From: ${item.from}` : `種別: ${item.type}`}
                        </p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default InboxPage; 