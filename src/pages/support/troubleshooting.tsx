import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const troubleCategories = {
    'PCのトラブル': [
        { question: 'PCの電源が入らない', answer: 'まずは電源ケーブルが正しく接続されているか、コンセントに電気が来ているか確認してください。ノートPCの場合は、ACアダプターのランプが点灯しているかも確認点です。' },
        { question: '動作が異常に遅い', answer: 'タスクマネージャー（Ctrl+Shift+Esc）を開き、CPUやメモリを大量に消費しているプロセスがないか確認してください。不要な常駐ソフトを停止したり、再起動したりすることで改善する場合があります。' },
    ],
    'ソフトウェアのトラブル': [
        { question: '特定のソフトが起動しない・固まる', answer: 'ソフトウェアを一度アンインストールし、再度インストールし直すことで解決する場合があります。また、管理者として実行してみるのも有効です。' },
    ],
    '周辺機器のトラブル': [
        { question: 'USB機器が認識されない', answer: 'PCの別のUSBポートに接続してみてください。それでも認識しない場合は、デバイスマネージャーでドライバーの状態を確認し、必要であれば更新または再インストールを行ってください。' },
    ]
};

const SupportTroubleshootingPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<string | null>(null);

    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">トラブルシューティング</h1>
                <p className="text-gray-600 mt-2">
                    お困りの問題について、まずはこちらの解決策をお試しください。
                </p>
            </header>

            <div className="flex flex-col md:flex-row gap-8">
                <main className="flex-grow space-y-8">
                    {Object.entries(troubleCategories).map(([category, faqs]) => (
                        <div key={category}>
                            <h2 className="text-2xl font-semibold text-primary-blue mb-4 border-b-2 border-primary-blue pb-2">{category}</h2>
                            <div className="space-y-4">
                                {faqs.map((faq, index) => (
                                    <div key={index} className="border rounded-lg">
                                        <button
                                            onClick={() => setOpenFaq(openFaq === `${category}-${index}` ? null : `${category}-${index}`)}
                                            className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800"
                                        >
                                            <span>{faq.question}</span>
                                            <span>{openFaq === `${category}-${index}` ? '−' : '+'}</span>
                                        </button>
                                        {openFaq === `${category}-${index}` && (
                                            <div className="p-4 bg-gray-50 border-t">
                                                <p className="text-gray-700">{faq.answer}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </main>

                 <aside className="w-full md:w-1/3 space-y-6">
                    <div className="p-6 bg-amber-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-amber-800 mb-3">解決しない場合は…</h3>
                        <p className="text-sm text-gray-700 mb-4">
                            専門のスタッフが詳しくお伺いします。以下のボタンからご相談内容に近いものを選択してください。
                        </p>
                        <div className="space-y-3">
                            <Link to="/maintenance/troubleshooting" className="block w-full text-center px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                                障害として緊急報告
                            </Link>
                            <Link to="/support/how-to" className="block w-full text-center px-4 py-2 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors">
                                操作方法などを質問
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default SupportTroubleshootingPage; 