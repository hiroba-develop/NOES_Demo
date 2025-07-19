import React from 'react';

const updates = [
  { 
    id: 1, 
    date: '2023-10-20', 
    title: '会計ソフト「かんたん会計 ver3.2」アップデートのお知らせ', 
    category: 'ソフトウェア',
    tag: '重要',
    tagColor: 'bg-red-500',
    summary: 'セキュリティ強化といくつかの不具合修正が含まれています。早めのアップデートを推奨します。' 
  },
  { 
    id: 2, 
    date: '2023-10-18', 
    title: 'Windows Server 2022向けセキュリティ更新プログラム', 
    category: 'OS・サーバー',
    tag: 'セキュリティ',
    tagColor: 'bg-accent-orange',
    summary: 'リモートコード実行の脆弱性を修正する重要な更新です。' 
  },
  { 
    id: 3, 
    date: '2023-10-12', 
    title: 'Web会議ツール「NextMeet」に新機能追加', 
    category: 'ソフトウェア',
    tag: '新機能',
    tagColor: 'bg-primary-blue',
    summary: 'バーチャル背景機能と、文字起こし機能が追加されました。' 
  },
];

const UpdatesPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary-blue">アップデート情報</h1>
        <p className="text-gray-600 mt-2">
          ご利用中のソフトウェアやシステムに関する最新情報をお届けします。
        </p>
      </header>
      
      <div className="space-y-6">
        {updates.map((update) => (
          <div key={update.id} className="p-6 border rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-500">{update.date} - {update.category}</p>
                <h2 className="text-2xl font-semibold text-gray-800 mt-1">{update.title}</h2>
              </div>
              <span className={`px-3 py-1 text-sm font-bold text-white rounded-full ${update.tagColor}`}>
                {update.tag}
              </span>
            </div>
            <p className="mt-4 text-gray-700">
              {update.summary}
            </p>
            <div className="text-right mt-4">
              <a href="#" className="text-sm font-bold text-primary-blue hover:text-accent-orange">
                詳細を見る →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UpdatesPage; 