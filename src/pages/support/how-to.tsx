import React, { useState } from 'react';

const HowToPage: React.FC = () => {
  const [subject, setSubject] = useState('');
  const [details, setDetails] = useState('');
  const [urgency, setUrgency] = useState('normal');
  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォーム送信のロジックを実装
    console.log({ subject, details, urgency, files });
    alert('ご相談ありがとうございます。担当者からの連絡をお待ちください。');
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary-blue">どうしましたか？</h1>
        <p className="text-gray-600 mt-2">
          どんな些細なことでも、お気軽にご相談ください。私たちがサポートします。
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* メインの質問フォーム */}
        <form onSubmit={handleSubmit} className="flex-grow space-y-6">
          <div>
            <label htmlFor="subject" className="block text-lg font-semibold text-gray-700 mb-2">
              件名
            </label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：Excelの関数について"
              required
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-lg font-semibold text-gray-700 mb-2">
              詳しい内容
            </label>
            <textarea
              id="details"
              rows={10}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="困っていること、試したこと、エラーメッセージなどを詳しく教えてください。"
              required
            ></textarea>
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              添付ファイル
            </label>
            <div className="flex items-center justify-center w-full">
                <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">クリックしてアップロード</span>またはドラッグ＆ドロップ</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileChange} />
                </label>
            </div>
            {files.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                選択中のファイル: {files.map(f => f.name).join(', ')}
              </div>
            )}
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              緊急度
            </label>
            <div className="flex items-center space-x-4">
              <label className="flex items-center">
                <input type="radio" name="urgency" value="normal" checked={urgency === 'normal'} onChange={(e) => setUrgency(e.target.value)} className="w-4 h-4 text-primary-blue bg-gray-100 border-gray-300 focus:ring-primary-blue" />
                <span className="ml-2 text-gray-700">通常</span>
              </label>
              <label className="flex items-center">
                <input type="radio" name="urgency" value="high" checked={urgency === 'high'} onChange={(e) => setUrgency(e.target.value)} className="w-4 h-4 text-accent-orange bg-gray-100 border-gray-300 focus:ring-accent-orange" />
                <span className="ml-2 text-gray-700">高め</span>
              </label>
            </div>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full px-8 py-3 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors duration-300">
              この内容で相談する
            </button>
          </div>
        </form>

        {/* サイドのサポート情報 */}
        <aside className="w-full md:w-1/3 space-y-6">
            <div className="p-6 bg-sub-light-blue/10 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">もしかして...</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸ パスワードを忘れてしまった</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸ プリンターで印刷ができない</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸ Wi-Fiに接続できない</a></li>
                </ul>
                <a href="#" className="inline-block mt-4 text-sm font-bold text-primary-blue hover:text-accent-orange">すべての「よくある質問」を見る →</a>
            </div>
            <div className="p-6 bg-sub-light-blue/10 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">過去のあなたの質問</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸ 複合機のエラーについて (解決済み)</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸ 新しいPCの見積もり (回答待ち)</a></li>
                </ul>
                <a href="#" className="inline-block mt-4 text-sm font-bold text-primary-blue hover:text-accent-orange">すべての質問履歴を見る →</a>
            </div>
        </aside>

      </div>
    </div>
  );
};

export default HowToPage; 