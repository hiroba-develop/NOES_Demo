import React from 'react';

const rankData = {
    currentRank: 'BRONZE',
    rankIcon: '🥉',
    nextRank: 'シルバー',
    loginDays: { current: 15, required: 30 },
    contracts: { current: 3, required: 5 }, // 契約数を更新
    surveyAnswers: { current: 5, required: 10 },
    totalAmount: { current: 150000, required: 300000 },
};

const allNoesStrategy = [
    { name: '文具通販「アスクル」', contracted: true, firstPurchaseDate: '2022-04-01' },
    { name: '複合機・プリンター', contracted: true, firstPurchaseDate: '2023-01-15' },
    { name: 'PC・サーバー', contracted: true, firstPurchaseDate: '2023-03-20' },
    { name: 'PC保守', contracted: false, firstPurchaseDate: null },
    { name: 'セキュリティ対策', contracted: false, firstPurchaseDate: null },
    { name: '基幹アプリケーション', contracted: false, firstPurchaseDate: null },
];

const ProgressBar: React.FC<{ value: number, max: number }> = ({ value, max }) => (
    <div className="w-full bg-gray-200 rounded-full h-4">
        <div className="bg-primary-blue h-4 rounded-full" style={{ width: `${(value / max) * 100}%` }}></div>
    </div>
);


const ProfilePage: React.FC = () => {
    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">お客様情報</h1>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* ランク情報 */}
                <div className="lg:col-span-2 space-y-8">
                    <div className="p-6 border rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">お取引ランク</h2>
                        <div className="text-center">
                            <p className="text-lg">現在のランク</p>
                            <p className="text-6xl font-bold text-amber-600 my-2">
                                {rankData.rankIcon} {rankData.currentRank}
                            </p>
                            <p className="text-gray-600">いつもありがとうございます！</p>
                        </div>
                    </div>
                     <div className="p-6 border rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">次のランク「{rankData.nextRank}」への道のり</h2>
                        <div className="space-y-6">
                            <div>
                                <div className="flex justify-between items-end mb-1">
                                    <h3 className="font-semibold">連続ログイン日数</h3>
                                    <p className="text-sm"><span className="text-xl font-bold">{rankData.loginDays.current}</span> / {rankData.loginDays.required} 日</p>
                                </div>
                                <ProgressBar value={rankData.loginDays.current} max={rankData.loginDays.required} />
                                <p className="text-xs text-right mt-1 text-gray-500">あと {rankData.loginDays.required - rankData.loginDays.current} 日</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-end mb-1">
                                    <h3 className="font-semibold">ビジネストレンド アンケート回答数</h3>
                                     <p className="text-sm"><span className="text-xl font-bold">{rankData.surveyAnswers.current}</span> / {rankData.surveyAnswers.required} 回</p>
                                </div>
                                <ProgressBar value={rankData.surveyAnswers.current} max={rankData.surveyAnswers.required} />
                                <p className="text-xs text-right mt-1 text-gray-500">あと {rankData.surveyAnswers.required - rankData.surveyAnswers.current} 回</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-end mb-1">
                                    <h3 className="font-semibold">ALLNOES商材購入状況</h3>
                                     <p className="text-sm"><span className="text-xl font-bold">{rankData.contracts.current}</span> / {rankData.contracts.required} 件</p>
                                </div>
                                <ProgressBar value={rankData.contracts.current} max={rankData.contracts.required} />
                                <p className="text-xs text-right mt-1 text-gray-500">あと {rankData.contracts.required - rankData.contracts.current} 件</p>
                            </div>
                            <div>
                                <div className="flex justify-between items-end mb-1">
                                    <h3 className="font-semibold">お取引金額</h3>
                                     <p className="text-sm"><span className="text-xl font-bold">{rankData.totalAmount.current.toLocaleString()}</span> / {rankData.totalAmount.required.toLocaleString()} 円</p>
                                </div>
                                <ProgressBar value={rankData.totalAmount.current} max={rankData.totalAmount.required} />
                                <p className="text-xs text-right mt-1 text-gray-500">あと {(rankData.totalAmount.required - rankData.totalAmount.current).toLocaleString()} 円</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* All Noes戦略 */}
                <aside className="p-6 bg-sub-light-blue/10 rounded-lg">
                    <h2 className="text-xl font-semibold text-primary-blue mb-4">ALLNOES商材購入状況</h2>
                    <ul className="space-y-3">
                        {allNoesStrategy.map(item => (
                             <li key={item.name} className="flex items-start">
                                <div className="pt-1">
                                    {item.contracted ? (
                                        <span className="text-green-500">✔</span>
                                    ) : (
                                        <span className="text-gray-400">〇</span>
                                    )}
                                </div>
                                <div className="ml-3">
                                    <span className={` ${item.contracted ? 'font-semibold text-gray-800' : 'text-gray-600'}`}>
                                        {item.name}
                                    </span>
                                    {item.firstPurchaseDate && (
                                        <p className="text-xs text-gray-500">取引開始日: {item.firstPurchaseDate}</p>
                                    )}
                                </div>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>
        </div>
    );
};

export default ProfilePage; 