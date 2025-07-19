import React from 'react';

const assets = [
  { id: 'PC-001', type: 'ノートPC', name: 'Dell Latitude 7420', user: '山田 太郎', purchaseDate: '2023-04-10', warrantyExpiry: '2026-04-09' },
  { id: 'PC-002', type: 'デスクトップPC', name: 'HP EliteDesk 800 G9', user: '佐藤 花子', purchaseDate: '2023-04-15', warrantyExpiry: '2026-04-14' },
  { id: 'SV-001', type: 'サーバー', name: 'HPE ProLiant DL360 Gen10', user: 'システム管理', purchaseDate: '2022-08-01', warrantyExpiry: '2027-07-31' },
  { id: 'LIC-001', type: 'ソフトウェアライセンス', name: 'Microsoft 365 Business Standard', user: '全社', purchaseDate: '2023-04-01', warrantyExpiry: '2024-03-31' },
  { id: 'NW-001', type: 'ルーター', name: 'Yamaha RTX830', user: '本社', purchaseDate: '2022-05-20', warrantyExpiry: '2027-05-19' },
];

const ItAssetLedgerPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">IT資産管理台帳</h1>
                <p className="text-gray-600 mt-2">
                    お客様が保有するIT資産の一覧です。更新のご提案やサポートにご活用ください。
                </p>
            </header>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">管理番号</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">種別</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">機器名/ライセンス名</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">利用者</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">購入日</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">保証/契約終了日</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {assets.map((asset) => (
                                <tr key={asset.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{asset.id}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.name}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.user}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.purchaseDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{asset.warrantyExpiry}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ItAssetLedgerPage; 