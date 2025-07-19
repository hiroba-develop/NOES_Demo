import React from 'react';

const KnowledgeBasePage: React.FC = () => {
    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">ナレッジ検索</h1>
                <p className="text-gray-600 mt-2">
                    マニュアルやよくあるご質問（FAQ）を横断的に検索できます。
                </p>
            </header>
            <div className="mt-6">
                <input
                    type="text"
                    placeholder="キーワードを入力して検索..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
                />
            </div>
        </div>
    );
};

export default KnowledgeBasePage; 