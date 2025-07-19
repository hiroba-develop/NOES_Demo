import React, { useState } from 'react';

// サンプルデータ
const pcs = [
    { id: 1, hostname: 'DESKTOP-001', user: '山田 太郎', os: 'Windows 11 Pro', cpu: 'Core i7-12700', memory: '16GB' },
    { id: 2, hostname: 'LAPTOP-002', user: '鈴木 花子', os: 'Windows 11 Home', cpu: 'Core i5-1240P', memory: '8GB' },
];

const servers = [
    { id: 1, hostname: 'FS-SRV-01', purpose: 'ファイルサーバー', os: 'Windows Server 2022', cpu: 'Xeon E-2324G', memory: '32GB' },
];

const PcServerPage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('pc');

    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">PC・サーバー管理</h1>
                <p className="text-gray-600 mt-2">
                    管理下のPCおよびサーバーの一覧です。
                </p>
            </header>

            {/* タブ切り替え */}
            <div className="mb-6 border-b">
                <nav className="-mb-px flex space-x-8">
                    <button onClick={() => setActiveTab('pc')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${activeTab === 'pc' ? 'border-primary-blue text-primary-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                        PC
                    </button>
                    <button onClick={() => setActiveTab('server')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-lg ${activeTab === 'server' ? 'border-primary-blue text-primary-blue' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>
                        サーバー
                    </button>
                </nav>
            </div>
            
            {/* コンテンツ */}
            <div>
                {activeTab === 'pc' && (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ホスト名</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">使用者</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OS</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPU / メモリ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {pcs.map(pc => (
                                    <tr key={pc.id}>
                                        <td className="py-4 px-6 whitespace-nowrap">{pc.hostname}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{pc.user}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{pc.os}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{pc.cpu} / {pc.memory}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                {activeTab === 'server' && (
                     <div className="overflow-x-auto">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ホスト名</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">用途</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">OS</th>
                                    <th className="py-3 px-6 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">CPU / メモリ</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-200">
                                {servers.map(server => (
                                    <tr key={server.id}>
                                        <td className="py-4 px-6 whitespace-nowrap">{server.hostname}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{server.purpose}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{server.os}</td>
                                        <td className="py-4 px-6 whitespace-nowrap">{server.cpu} / {server.memory}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default PcServerPage; 