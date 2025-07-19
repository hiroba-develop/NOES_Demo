import React from 'react';
import { Link } from 'react-router-dom';

const securityChecks = [
    { id: 1, name: 'ウイルス対策ソフト', status: '有効', message: '保護されています', isOk: true },
    { id: 2, name: 'ファイアウォール', status: '有効', message: '正常に動作中', isOk: true },
    { id: 3, name: '不審なログイン履歴', status: '検出なし', message: '過去30日間、不審なログインはありません', isOk: true },
    { id: 4, name: 'OSアップデート', status: '要対応', message: 'お使いのPCのうち、2台に重要な更新があります', isOk: false, action: '/maintenance/updates' },
    { id: 5, name: 'データバックアップ', status: '警告', message: '一部のデータがバックアップされていません', isOk: false, action: '/support/how-to' }
];

const SecurityPage: React.FC = () => {
    const score = securityChecks.filter(c => c.isOk).length / securityChecks.length * 100;

    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">セキュリティ状況</h1>
                <p className="text-gray-600 mt-2">
                    お客様の環境を保護するためのセキュリティチェックリストです。
                </p>
            </header>
            
            <div className="flex flex-col md:flex-row gap-8">
                <main className="flex-grow">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {securityChecks.map(check => (
                             <div key={check.id} className={`p-6 rounded-lg shadow-sm border-l-4 ${check.isOk ? 'border-green-500' : 'border-red-500'}`}>
                                 <div className="flex items-center justify-between">
                                    <h3 className="text-lg font-semibold text-gray-800">{check.name}</h3>
                                     <span className={`px-2 py-1 text-xs font-bold text-white rounded-full ${check.isOk ? 'bg-green-500' : 'bg-red-500'}`}>
                                         {check.status}
                                     </span>
                                 </div>
                                 <p className="text-sm text-gray-600 mt-2">{check.message}</p>
                                 {!check.isOk && check.action && (
                                     <div className="mt-4 text-right">
                                         <Link to={check.action} className="text-sm font-bold text-primary-blue hover:text-accent-orange">
                                             詳細・対応はこちら →
                                         </Link>
                                     </div>
                                 )}
                             </div>
                        ))}
                    </div>
                </main>

                <aside className="w-full md:w-1/3 space-y-6">
                    <div className="p-6 bg-blue-50 text-center rounded-lg">
                        <h3 className="text-xl font-semibold text-primary-blue mb-2">セキュリティスコア</h3>
                        <p className="text-6xl font-bold text-primary-blue">{Math.round(score)}<span className="text-2xl">%</span></p>
                    </div>
                     <div className="p-6 bg-sub-light-blue/10 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary-blue mb-3">セキュリティニュース</h3>
                        <ul className="space-y-2 text-sm">
                            <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸ 新種のフィッシング詐欺にご注意ください</a></li>
                            <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸ 【注意喚起】ソフトウェアXの脆弱性について</a></li>
                        </ul>
                    </div>
                </aside>
            </div>

        </div>
    );
};

export default SecurityPage; 