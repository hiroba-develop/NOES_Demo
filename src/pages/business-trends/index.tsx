import React, { useState } from 'react';

const BusinessTrendsPage: React.FC = () => {
    const [surveyResponse, setSurveyResponse] = useState('');
    const [opinion, setOpinion] = useState('');

    const handleSurveySubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!surveyResponse) {
            alert('アンケートにご回答ください。');
            return;
        }
        console.log({ surveyResponse, opinion });
        alert('ご回答ありがとうございます！今後の参考にさせていただきます。');
    };

    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">ビジネストレンド情報</h1>
                <p className="text-gray-600 mt-2">
                    ノエスが注目する最新のITトレンドや、業務改善に役立つ情報をお届けします。
                </p>
            </header>

            <div className="flex flex-col lg:flex-row gap-12">
                {/* 記事コンテンツ */}
                <article className="lg:w-2/3">
                    <p className="text-sm text-gray-500 mb-2">2023年11月1日公開</p>
                    <h2 className="text-3xl font-bold text-gray-800 mb-6">【特集】中小企業におけるAI活用入門</h2>
                    <div className="prose max-w-none text-gray-700">
                        <p>
                            近年、AI（人工知能）の進化は目覚ましく、大企業だけでなく中小企業においてもその活用が広がりつつあります。しかし、「何から始めればいいかわからない」「難しそう」と感じている方も多いのではないでしょうか。
                        </p>
                        <p>
                            本記事では、中小企業がAIを導入するメリットや、比較的簡単に始められる具体的な活用事例について解説します。
                        </p>
                        <h3 className="text-xl font-semibold mt-6 mb-3">事例1：顧客対応の自動化</h3>
                        <p>
                           ウェブサイトにAIチャットボットを導入することで、よくある質問への自動応答が可能になります。これにより、24時間365日の顧客対応を実現しつつ、担当者の負担を大幅に軽減できます。
                        </p>
                         <h3 className="text-xl font-semibold mt-6 mb-3">事例2：単純作業の効率化</h3>
                        <p>
                           RPA（Robotic Process Automation）ツールとAIを組み合わせることで、請求書データの入力や定型的なレポート作成といった単純作業を自動化できます。従業員はより創造的な業務に集中できるようになります。
                        </p>
                    </div>
                </article>

                {/* アンケート */}
                <aside className="lg:w-1/3">
                    <form onSubmit={handleSurveySubmit} className="sticky top-8 p-6 bg-sub-light-blue/10 rounded-lg">
                        <h3 className="text-xl font-semibold text-primary-blue mb-4">この記事に関するアンケート</h3>
                        <div className="space-y-4">
                            <p className="font-semibold text-gray-700">Q. あなたの会社ではAIの導入に関心がありますか？</p>
                            <div className="space-y-2">
                                <label className="flex items-center">
                                    <input type="radio" name="survey" value="very_interested" onChange={(e) => setSurveyResponse(e.target.value)} className="w-4 h-4 text-primary-blue" />
                                    <span className="ml-2">非常に関心がある</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="survey" value="somewhat_interested" onChange={(e) => setSurveyResponse(e.target.value)} className="w-4 h-4 text-primary-blue" />
                                    <span className="ml-2">少し関心がある</span>
                                </label>
                                <label className="flex items-center">
                                    <input type="radio" name="survey" value="not_interested" onChange={(e) => setSurveyResponse(e.target.value)} className="w-4 h-4 text-primary-blue" />
                                    <span className="ml-2">あまり関心がない</span>
                                </label>
                            </div>
                        </div>
                        <div className="mt-6">
                            <label htmlFor="opinion" className="font-semibold text-gray-700">ご意見・ご感想（任意）</label>
                            <textarea
                                id="opinion"
                                rows={4}
                                value={opinion}
                                onChange={(e) => setOpinion(e.target.value)}
                                className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-lg"
                                placeholder="特に知りたい情報などがあればご記入ください"
                            ></textarea>
                        </div>
                         <div className="mt-6 text-center">
                            <button type="submit" className="w-full px-6 py-2 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange">
                                回答を送信する
                            </button>
                        </div>
                    </form>
                </aside>
            </div>
        </div>
    );
};

export default BusinessTrendsPage; 