import React, { useState } from 'react';

const CostSavingPage: React.FC = () => {
  const [costItems, setCostItems] = useState<string[]>([]);
  const [monthlyCost, setMonthlyCost] = useState('');
  const [details, setDetails] = useState('');

  const handleCostItemChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setCostItems([...costItems, value]);
    } else {
      setCostItems(costItems.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ costItems, monthlyCost, details });
    alert('コスト削減のご相談、ありがとうございます。内容を確認し、担当者よりご連絡いたします。');
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary-blue">コストに関するお悩み、お聞かせください</h1>
        <p className="text-gray-600 mt-2">
          専門家の視点から、無駄なコストを削減し、最適なIT投資をご提案します。
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        <form onSubmit={handleSubmit} className="flex-grow space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              見直しを検討したいコスト（複数選択可）
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['通信費（インターネット回線など）', 'サーバー・クラウド利用料', 'ソフトウェア・ライセンス料', '複合機・リース代', 'ドメイン・サーバー証明書費用', 'その他IT関連費用'].map((item) => (
                <label key={item} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleCostItemChange}
                    className="w-5 h-5 text-primary-blue rounded border-gray-300 focus:ring-primary-blue"
                  />
                  <span className="ml-3 text-sm text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
              <label htmlFor="monthlyCost" className="block text-lg font-semibold text-gray-700 mb-2">
                おおよその月額費用（任意）
              </label>
              <input
                type="text"
                id="monthlyCost"
                value={monthlyCost}
                onChange={(e) => setMonthlyCost(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
                placeholder="例：月々10万円くらい"
              />
            </div>

          <div>
            <label htmlFor="details" className="block text-lg font-semibold text-gray-700 mb-2">
              お悩みの詳しい内容
            </label>
            <textarea
              id="details"
              rows={8}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：長年同じプランを使い続けているが、もっと安くならないか。クラウドの費用が毎月変動して管理しづらい。"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full px-8 py-3 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors duration-300">
              この内容で専門家に相談する
            </button>
          </div>
        </form>

        <aside className="w-full md:w-1/3 space-y-6">
          <div className="p-6 bg-sub-light-blue/10 rounded-lg">
            <h3 className="text-xl font-semibold text-primary-blue mb-3">ご安心ください</h3>
            <div className="text-gray-700 space-y-4">
                <p>
                    <span className="font-bold text-primary-blue">秘密は厳守します。</span>
                    <br />
                    ご相談いただいた内容が、許可なく外部に漏れることは一切ありません。
                </p>
                <p>
                    <span className="font-bold text-primary-blue">無理な営業はしません。</span>
                    <br />
                    お客様の状況を第一に考え、最適なご提案のみをさせていただきます。
                </p>
                <a href="/privacy-policy" className="inline-block mt-2 text-sm font-bold text-primary-blue hover:text-accent-orange">プライバシーポリシー →</a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default CostSavingPage; 