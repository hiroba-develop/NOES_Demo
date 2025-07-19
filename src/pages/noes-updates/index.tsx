import React from 'react';

const updates = [
    { id: 1, title: '【Tips】Excelのショートカットキーで業務効率を10倍にする方法', date: '2025-07-15', category: '業務改善' },
    { id: 2, title: '【注意喚起】最新のフィッシング詐欺の手口と対策について', date: '2025-07-10', category: 'セキュリティ' },
    { id: 3, title: '【解説】話題のAI「生成AI」とは？ビジネスにどう活かせるか', date: '2025-07-05', category: '新技術' },
    { id: 4, title: '【Tips】Web会議で好印象を与えるカメラとマイクの設定', date: '2025-06-28', category: '業務改善' },
];

const NoesUpdatesPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">NOESからのお知らせ</h1>
                <p className="text-gray-600 mt-2">
                    IT活用のヒントや、セキュリティ情報など、お客様のビジネスに役立つ情報をお届けします。
                </p>
            </header>

            <div className="space-y-6">
                {updates.map(update => (
                    <div key={update.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow cursor-pointer">
                        <div className="flex justify-between items-start">
                            <div>
                                <span className={`inline-block bg-primary-blue text-white text-xs font-semibold mr-2 px-2.5 py-0.5 rounded-full`}>
                                    {update.category}
                                </span>
                                <h2 className="text-2xl font-semibold text-gray-800 mt-2">{update.title}</h2>
                            </div>
                            <p className="text-sm text-gray-500 whitespace-nowrap">{update.date}</p>
                        </div>
                        <p className="text-gray-600 mt-4">
                            記事のプレビューテキストがここに表示されます。クリックして詳細をご覧ください...
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default NoesUpdatesPage; 