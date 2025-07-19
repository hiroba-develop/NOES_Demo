import React from 'react';

const AnnouncementsPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">お知らせ</h1>
                <p className="text-gray-600 mt-2">
                    ノエスからのすべてのお知らせを確認できます。
                </p>
            </header>
             {/* TODO: Implement announcement list */}
            <p>ここに過去のお知らせ一覧が表示されます。</p>
        </div>
    );
};

export default AnnouncementsPage; 