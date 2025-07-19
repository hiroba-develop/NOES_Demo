import React, { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

const FeedbackPage: React.FC = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    return (
        <div className="container mx-auto p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">満足度アンケート・フィードバック</h1>
                <p className="text-gray-600 mt-2">
                    より良いサービスのため、お客様の声をお聞かせください。
                </p>
            </header>

            <div className="bg-white rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
                <form>
                    {/* Recent Support Ticket Selection */}
                    <div className="mb-6">
                        <label htmlFor="ticket" className="block text-lg font-medium text-gray-700 mb-2">フィードバック対象のサポート</label>
                        <select
                            id="ticket"
                            name="ticket"
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
                        >
                            <option>選択してください</option>
                            <option value="TKT-20250718-001">TKT-20250718-001: プリンターの接続不良について</option>
                            <option value="TKT-20250715-003">TKT-20250715-003: 新規PCの見積依頼</option>
                        </select>
                    </div>

                    {/* Star Rating */}
                    <div className="mb-6">
                        <label className="block text-lg font-medium text-gray-700 mb-2">担当者の対応はいかがでしたか？</label>
                        <div className="flex items-center">
                            {[...Array(5)].map((_, index) => {
                                const ratingValue = index + 1;
                                return (
                                    <label key={index}>
                                        <input type="radio" name="rating" value={ratingValue} onClick={() => setRating(ratingValue)} className="hidden" />
                                        <StarIcon
                                            className="cursor-pointer h-10 w-10"
                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                            onMouseEnter={() => setHover(ratingValue)}
                                            onMouseLeave={() => setHover(0)}
                                        />
                                    </label>
                                );
                            })}
                        </div>
                    </div>

                    {/* Feedback Text Area */}
                    <div className="mb-6">
                        <label htmlFor="feedback" className="block text-lg font-medium text-gray-700 mb-2">ご意見・ご感想</label>
                        <textarea
                            id="feedback"
                            name="feedback"
                            rows={6}
                            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-primary-blue focus:border-primary-blue"
                            placeholder="具体的なご意見や、改善してほしい点などがございましたらご記入ください。"
                        ></textarea>
                    </div>

                    {/* Submit Button */}
                    <div className="text-right">
                        <button
                            type="submit"
                            className="bg-primary-blue text-white font-bold py-3 px-8 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-blue"
                        >
                            フィードバックを送信
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FeedbackPage; 