import React, { useState } from 'react';

const ConfigChangePage: React.FC = () => {
  const [target, setTarget] = useState('');
  const [currentSettings, setCurrentSettings] = useState('');
  const [desiredSettings, setDesiredSettings] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ target, currentSettings, desiredSettings });
    alert('設定変更のご依頼、ありがとうございます。内容を確認し、担当者よりご連絡いたします。');
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary-blue">どのような設定変更をご希望ですか？</h1>
        <p className="text-gray-600 mt-2">
          サーバー、ネットワーク、ソフトウェアなど、各種設定変更を承ります。
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="flex-grow space-y-6">
          <div>
            <label htmlFor="target" className="block text-lg font-semibold text-gray-700 mb-2">
              設定を変更したい機器・サービス
            </label>
            <input
              type="text"
              id="target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：社内ネットワークのWi-Fi設定"
              required
            />
          </div>

          <div>
            <label htmlFor="currentSettings" className="block text-lg font-semibold text-gray-700 mb-2">
              現在の設定状況
            </label>
            <textarea
              id="currentSettings"
              rows={5}
              value={currentSettings}
              onChange={(e) => setCurrentSettings(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：ゲスト用のWi-Fiパスワードが設定されている。"
              required
            ></textarea>
          </div>

          <div>
            <label htmlFor="desiredSettings" className="block text-lg font-semibold text-gray-700 mb-2">
              希望する設定内容
            </label>
            <textarea
              id="desiredSettings"
              rows={8}
              value={desiredSettings}
              onChange={(e) => setDesiredSettings(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：ゲスト用のWi-Fiパスワードを新しいものに変更したい。新しいパスワードは「XXXX」を希望。"
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full px-8 py-3 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors duration-300">
              この内容で変更を依頼する
            </button>
          </div>
        </form>

        <aside className="w-full md:w-1/3 space-y-6">
          <div className="p-6 bg-sub-light-blue/10 rounded-lg">
            <h3 className="text-xl font-semibold text-primary-blue mb-3">ご依頼の前に</h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>設定変更には、管理者権限が必要な場合があります。</li>
              <li>作業内容によっては、一時的にサービスが停止する可能性があります。</li>
              <li>ご依頼内容を確認後、作業日時や影響範囲について担当者よりご連絡します。</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default ConfigChangePage; 