import React, { useState } from 'react';

const products = [
  { id: 'TONER-001', name: '【複合機A用】トナーカートリッジ (黒)', price: '8,500円' },
  { id: 'MOUSE-001', name: 'ワイヤレスマウス', price: '2,800円' },
  { id: 'LAN-010', name: 'LANケーブル (10m)', price: '1,200円' },
  { id: 'A4-PAPER-001', name: 'A4コピー用紙 (500枚 x 5冊)', price: '3,500円' },
];

const QuickOrderPage: React.FC = () => {
    const [cart, setCart] = useState<{ [key: string]: number }>({});

    const handleQuantityChange = (productId: string, quantity: number) => {
        setCart(prev => ({ ...prev, [productId]: quantity }));
    };

    return (
        <div className="container mx-auto p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">クイック発注</h1>
                <p className="text-gray-600 mt-2">
                    IT関連の消耗品を簡単にご注文いただけます。
                </p>
            </header>

            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="space-y-4">
                    {products.map(product => (
                        <div key={product.id} className="grid grid-cols-12 items-center gap-4 p-4 border-b">
                            <div className="col-span-6">
                                <p className="font-semibold text-lg text-gray-800">{product.name}</p>
                            </div>
                            <div className="col-span-3">
                                <p className="text-gray-600">{product.price}</p>
                            </div>
                            <div className="col-span-3">
                                <input
                                    type="number"
                                    min="0"
                                    className="w-full p-2 border border-gray-300 rounded-md text-center"
                                    placeholder="数量"
                                    onChange={(e) => handleQuantityChange(product.id, parseInt(e.target.value, 10) || 0)}
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 pt-6 border-t flex justify-end">
                     <button
                        type="submit"
                        className="bg-primary-blue text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 disabled:bg-gray-400"
                        disabled={Object.values(cart).every(qty => qty === 0 || isNaN(qty))}
                    >
                        発注依頼を送信する
                    </button>
                </div>
            </div>
        </div>
    );
};

export default QuickOrderPage; 