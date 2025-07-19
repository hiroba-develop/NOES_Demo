import React from 'react';

const HistoryPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">やりとり履歴</h1>
                <p className="text-gray-600 mt-2">
                    過去のすべてのご相談や見積依頼の履歴を確認できます。
                </p>
            </header>
             {/* TODO: Implement history list */}
             <p>ここに過去のやりとり一覧が表示されます。</p>
        </div>
    );
};

export default HistoryPage; 