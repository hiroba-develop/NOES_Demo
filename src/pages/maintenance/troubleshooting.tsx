import React, { useState } from 'react';

const TroubleshootingPage: React.FC = () => {
  const [target, setTarget] = useState('');
  const [time, setTime] = useState('');
  const [details, setDetails] = useState('');
  const [urgency, setUrgency] = useState('normal');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ target, time, details, urgency });
    alert('障害のご報告ありがとうございます。内容を確認し、担当者より迅速にご連絡いたします。');
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold text-red-600">緊急のご連絡ですか？</h1>
        <p className="text-gray-600 mt-2">
          落ち着いて、状況をお知らせください。私たちがすぐに対応します。
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="flex-grow space-y-6">
          <div>
            <label htmlFor="target" className="block text-lg font-semibold text-gray-700 mb-2">
              障害が発生している機器・サービス
            </label>
            <input
              type="text"
              id="target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="例：社内ファイルサーバー、経理システムなど"
              required
            />
          </div>

          <div>
            <label htmlFor="time" className="block text-lg font-semibold text-gray-700 mb-2">
              障害の発生時刻
            </label>
            <input
              type="datetime-local"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-lg font-semibold text-gray-700 mb-2">
              障害の詳しい状況
            </label>
            <textarea
              id="details"
              rows={8}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              placeholder="表示されているエラーメッセージ、試したこと、具体的な症状などをできるだけ詳しく教えてください。"
              required
            ></textarea>
          </div>
          
           <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              緊急度
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="radio" name="urgency" value="high" checked={urgency === 'high'} onChange={(e) => setUrgency(e.target.value)} className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500" />
                <span className="ml-2 font-bold text-red-600">【高】業務が完全に停止している</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="urgency" value="normal" checked={urgency === 'normal'} onChange={(e) => setUrgency(e.target.value)} className="w-4 h-4 text-accent-orange bg-gray-100 border-gray-300 focus:ring-accent-orange" />
                <span className="ml-2 text-gray-700">【中】一部の業務に支障が出ている</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="urgency" value="low" checked={urgency === 'low'} onChange={(e) => setUrgency(e.target.value)} className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 focus:ring-primary-blue" />
                <span className="ml-2 text-gray-700">【低】業務に大きな支障はないが、問題がある</span>
              </label>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full px-8 py-3 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors duration-300">
              緊急サポートを要請する
            </button>
          </div>
        </form>

        <aside className="w-full md:w-1/3 space-y-6">
          <div className="p-6 bg-red-50 border border-red-200 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700 mb-3">お電話でのご連絡</h3>
            <p className="text-gray-700">
                お急ぎの場合は、お電話でも受け付けております。
            </p>
            <p className="text-2xl font-bold text-red-700 my-2">
                TEL: 03-1234-5678
            </p>
            <p className="text-sm text-gray-600">（受付時間：平日9:00〜18:00）</p>
          </div>
          <div className="p-6 bg-sub-light-blue/10 rounded-lg">
            <h3 className="text-xl font-semibold text-primary-blue mb-3">対応の流れ</h3>
            <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                <li>ご報告内容に基づき、初期切り分けを実施</li>
                <li>担当者より状況確認のご連絡</li>
                <li>リモートまたは現地での復旧作業</li>
                <li>作業完了報告と原因説明</li>
            </ol>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TroubleshootingPage; 