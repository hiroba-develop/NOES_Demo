import React, { useState } from 'react';

const NewSystemPage: React.FC = () => {
  const [equipment, setEquipment] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);
  const [budget, setBudget] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [details, setDetails] = useState('');

  const handleEquipmentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setEquipment([...equipment, value]);
    } else {
      setEquipment(equipment.filter((item) => item !== value));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォーム送信のロジックを実装
    console.log({ equipment, quantity, budget, deliveryDate, details });
    alert('お見積もりのご相談、ありがとうございます。内容を確認し、担当者よりご連絡いたします。');
  };

  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary-blue">どのようなものをご希望ですか？</h1>
        <p className="text-gray-600 mt-2">
          PC、サーバー、ネットワーク機器など、ITに関するあらゆるご要望にお応えします。
        </p>
      </header>

      <div className="flex flex-col md:flex-row gap-8">
        {/* メインの見積依頼フォーム */}
        <form onSubmit={handleSubmit} className="flex-grow space-y-6">
          <div>
            <label className="block text-lg font-semibold text-gray-700 mb-2">
              ご希望の機器の種類（複数選択可）
            </label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {['デスクトップPC', 'ノートPC', 'サーバー', '複合機・プリンター', 'ネットワーク機器', 'その他'].map((item) => (
                <label key={item} className="flex items-center p-3 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <input
                    type="checkbox"
                    value={item}
                    onChange={handleEquipmentChange}
                    className="w-5 h-5 text-primary-blue rounded border-gray-300 focus:ring-primary-blue"
                  />
                  <span className="ml-3 text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="quantity" className="block text-lg font-semibold text-gray-700 mb-2">
                台数
              </label>
              <input
                type="number"
                id="quantity"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
                min="1"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
                required
              />
            </div>
            <div>
              <label htmlFor="budget" className="block text-lg font-semibold text-gray-700 mb-2">
                ご予算（任意）
              </label>
              <input
                type="text"
                id="budget"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
                placeholder="例：1台あたり15万円前後"
              />
            </div>
          </div>

          <div>
            <label htmlFor="deliveryDate" className="block text-lg font-semibold text-gray-700 mb-2">
              希望納期（任意）
            </label>
            <input
              type="date"
              id="deliveryDate"
              value={deliveryDate}
              onChange={(e) => setDeliveryDate(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
            />
          </div>

          <div>
            <label htmlFor="details" className="block text-lg font-semibold text-gray-700 mb-2">
              用途やその他ご要望
            </label>
            <textarea
              id="details"
              rows={8}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-primary-blue focus:border-primary-blue"
              placeholder="例：Web会議やデザイン業務で快適に使えるノートPCが欲しいです。持ち運びやすさも重視します。"
            ></textarea>
          </div>

          <div className="text-center">
            <button type="submit" className="w-full px-8 py-3 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors duration-300">
              この内容で見積もりを相談する
            </button>
          </div>
        </form>

        {/* サイドのサポート情報 */}
        <aside className="w-full md:w-1/3 space-y-6">
            <div className="p-6 bg-sub-light-blue/10 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">人気の構成例</h3>
                <ul className="space-y-2 text-sm">
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸【事務作業向け】標準構成PC</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸【Web会議も快適】高コスパ構成PC</a></li>
                    <li><a href="#" className="text-gray-700 hover:text-accent-orange hover:underline">▸【クリエイター向け】高性能PC</a></li>
                </ul>
                <a href="#" className="inline-block mt-4 text-sm font-bold text-primary-blue hover:text-accent-orange">他の導入事例も見る →</a>
            </div>
            <div className="p-6 bg-sub-light-blue/10 rounded-lg">
                <h3 className="text-xl font-semibold text-primary-blue mb-3">お見積もりの流れ</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                    <li>上記フォームからご相談</li>
                    <li>担当者が内容を確認し、ご連絡</li>
                    <li>ヒアリング・ご提案</li>
                    <li>正式なお見積書の発行</li>
                </ol>
            </div>
        </aside>

      </div>
    </div>
  );
};

export default NewSystemPage; 