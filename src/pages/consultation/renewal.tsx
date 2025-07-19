import React, { useState } from 'react';

const RenewalPage: React.FC = () => {
  const [equipment, setEquipment] = useState('');
  const [issues, setIssues] = useState<string[]>([]);
  const [requests, setRequests] = useState('');

  const handleIssueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setIssues([...issues, value]);
    } else {
      setIssues(issues.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ equipment, issues, requests });
    alert('機器更新のご相談、ありがとうございます。内容を確認し、担当者よりご連絡いたします。');
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary-blue">今お使いの機器について、お聞かせください</h1>
        <p className="text-gray-600 mt-2">
          より快適な環境にするためのお手伝いをします。現状の課題やご要望をお聞かせください。
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="flex-grow space-y-6">
          <div>
            <label htmlFor="equipment" className="block text-lg font-semibold text-gray-700 mb-2">
              更新を検討している機器
            </label>
            <input
              type="text"
              id="equipment"
              value={equipment}
              onChange={(e) => setEquipment(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：〇〇社製ノートPC（5年前に購入）"
              required
            />
          </div>

          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              現状の課題（複数選択可）
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['動作が遅い', 'よく固まる・強制終了する', 'バッテリーが持たない', '容量が足りない', '異音がする', 'サポートが切れた', '新しい機能が使いたい', 'その他'].map((item) => (
                <label key={item} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleIssueChange}
                    className="w-5 h-5 text-primary-blue rounded border-gray-300 focus:ring-primary-blue"
                  />
                  <span className="ml-3 text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="requests" className="block text-lg font-semibold text-gray-700 mb-2">
              新しい機器へのご要望
            </label>
            <textarea
              id="requests"
              rows={8}
              value={requests}
              onChange={(e) => setRequests(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：今よりも軽くて、Web会議がスムーズにできるものがいい。予算は〇〇円くらい。"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full px-8 py-3 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors duration-300">
              この内容で相談する
            </button>
          </div>
        </form>

        <aside className="w-full md:w-1/3 space-y-6">
          <div className="p-6 bg-sub-light-blue/10 rounded-lg">
            <h3 className="text-xl font-semibold text-primary-blue mb-3">更新のメリット</h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>業務効率が大幅にアップします</li>
              <li>セキュリティリスクが低減します</li>
              <li>最新のソフトウェアを利用できます</li>
              <li>電気代などのコスト削減に繋がることも</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default RenewalPage; 