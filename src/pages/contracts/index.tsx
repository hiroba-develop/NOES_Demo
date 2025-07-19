import React from 'react';

const ContractPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">ご契約内容の確認</h1>
                <p className="text-gray-600 mt-2">
                    現在ご契約いただいている保守・サポートプランの一覧です。
                </p>
            </header>
            <div className="mt-6">
                <div className="border rounded-lg p-6">
                    <h2 className="text-2xl font-semibold text-gray-800">ITサポート保守プラン</h2>
                    <p className="text-gray-600 mt-2">契約期間: 2023年4月1日 〜 2024年3月31日</p>
                    <p className="text-gray-600 mt-1">対象範囲: PC、サーバー、ネットワーク機器のトラブルシューティング</p>
                </div>
            </div>
        </div>
    );
};

export default ContractPage; 