import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const faqs = [
    {
        question: 'インターネットに接続できません',
        answer: 'まずは、ルーターとモデムの再起動をお試しください。電源ケーブルを抜き、1分ほど待ってから再度差し込みます。それでも改善しない場合は、配線が抜けていないか確認してください。'
    },
    {
        question: 'Wi-Fiの接続が頻繁に途切れます',
        answer: 'ルーターの設置場所が適切でない可能性があります。電子レンジや他の電子機器から離し、家の中心に近い場所に設置することをお勧めします。また、ルーターのファームウェアが最新であるか確認してください。'
    },
    {
        question: '特定のウェブサイトだけ表示されません',
        answer: '他のデバイス（スマートフォンなど）から同じウェブサイトにアクセスできるか確認してください。特定のデバイスでのみ問題が発生している場合、そのデバイスのキャッシュクリアやDNS設定の見直しが有効な場合があります。'
    }
];

const NetworkPage: React.FC = () => {
    const [openFaq, setOpenFaq] = useState<number | null>(null);

    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">ネットワーク・通信</h1>
                <p className="text-gray-600 mt-2">
                    現在の接続状況の確認や、一般的な問題の解決策をご案内します。
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-semibold text-primary-blue mb-4">よくあるご質問と解決策</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border rounded-lg">
                                <button
                                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                                    className="w-full flex justify-between items-center p-4 text-left font-semibold text-gray-800"
                                >
                                    <span>{faq.question}</span>
                                    <span>{openFaq === index ? '−' : '+'}</span>
                                </button>
                                {openFaq === index && (
                                    <div className="p-4 bg-gray-50 border-t">
                                        <p className="text-gray-700">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <aside className="space-y-6">
                    <div className="p-6 bg-sub-light-blue/10 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary-blue mb-3">現在の接続情報</h3>
                        <div className="text-sm space-y-2">
                            <p><strong>IPアドレス:</strong> 192.168.1.10 (ダミー)</p>
                            <p><strong>接続方法:</strong> Wi-Fi (ダミー)</p>
                        </div>
                    </div>
                    <div className="p-6 bg-amber-50 rounded-lg">
                        <h3 className="text-xl font-semibold text-amber-800 mb-3">それでも解決しない場合</h3>
                        <p className="text-sm text-gray-700 mb-4">
                            専門のスタッフが対応します。以下のボタンからご相談ください。
                        </p>
                        <div className="space-y-3">
                            <Link to="/maintenance/troubleshooting" className="block w-full text-center px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                                障害として報告する
                            </Link>
                            <Link to="/support/config-change" className="block w-full text-center px-4 py-2 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors">
                                設定変更を依頼する
                            </Link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};

export default NetworkPage; 