import React from 'react';
import { Link } from 'react-router-dom';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import holiday_jp from '@holiday-jp/holiday_jp';

const Dashboard: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">ダッシュボード</h1>
        <Link to="/profile" className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
            <div className="flex items-center space-x-4 text-sm">
                <div>
                    <span className="font-semibold text-gray-600">現在のランク: </span>
                    <span className="font-bold text-amber-600">🥉 BRONZE</span>
                </div>
                <div className="border-l pl-4">
                    <span className="font-semibold text-gray-600">連続ログイン: </span>
                    <span className="font-bold text-gray-800">15日</span>
                </div>
            </div>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* 未読メッセージ */}
        <Link to="/inbox" state={{ filter: 'unread_messages' }} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-primary-blue">未読メッセージ</h2>
          <p className="text-3xl font-bold">5件</p>
        </Link>

        {/* 未対応の相談 */}
        <Link to="/inbox" state={{ filter: 'unanswered_consultations' }} className="block bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <h2 className="text-xl font-semibold mb-2 text-primary-blue">未対応の相談</h2>
          <p className="text-3xl font-bold">2件</p>
        </Link>

        {/* クイックアクセス */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2">
          <h2 className="text-xl font-semibold mb-4 text-primary-blue">クイックアクセス</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link to="/support/how-to" className="block text-center bg-accent-orange/90 text-white font-bold py-3 px-4 rounded-lg hover:bg-accent-orange">
              新規相談
            </Link>
            <Link to="/consultation/new-system" className="block text-center bg-accent-orange/90 text-white font-bold py-3 px-4 rounded-lg hover:bg-accent-orange">
              見積依頼
            </Link>
            <Link to="/knowledge-base" className="block text-center bg-sub-light-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-blue">
              ナレッジ検索
            </Link>
            <Link to="/contracts" className="block text-center bg-sub-light-blue text-white font-bold py-3 px-4 rounded-lg hover:bg-primary-blue">
              保守契約確認
            </Link>
          </div>
        </div>

        {/* お知らせ */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-primary-blue">お知らせ</h2>
            <Link to="/announcements" className="text-sm font-bold text-primary-blue hover:text-accent-orange">すべて見る →</Link>
          </div>
          <ul>
            <li className="border-b py-2">【重要】サーバーメンテナンスのお知らせ（2023/10/28）</li>
            <li className="border-b py-2">新しいセキュリティ製品のご案内</li>
            <li className="py-2">年末年始のサポート対応について</li>
          </ul>
        </div>

        {/* 最新のやりとり */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-primary-blue">最新のやりとり履歴</h2>
                <Link to="/history" className="text-sm font-bold text-primary-blue hover:text-accent-orange">すべて見る →</Link>
            </div>
            <ul>
                <li className="border-b py-2">PCの動作が遅い件について、担当者から返信がありました。</li>
                <li className="border-b py-2">複合機のトナー交換の見積依頼を送信しました。</li>
                <li className="py-2">ネットワーク設定の変更依頼が完了しました。</li>
            </ul>
        </div>
        
        {/* カレンダー */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 md:col-span-2 lg:col-span-2 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4 text-primary-blue w-full">保守スケジュール</h2>
          <Calendar
            key="ja-JP-calendar" // key を追加して再描画を強制
            locale="ja-JP" // 週の始まりを日曜日に設定
            calendarType="gregory" // 週の始まりを日曜日に強制
            className="border-none"
            formatDay={(_, date) => date.getDate().toString()}
            tileClassName={({ date, view }) => {
              if (view === 'month') {
                const classNames = [];
                // サーバーメンテナンス日
                if (date.getDate() === 28 && date.getMonth() === 9) {
                  classNames.push('maintenance-day');
                }
                // 祝日判定
                if (holiday_jp.isHoliday(date)) {
                  classNames.push('sunday-holiday');
                }
                // 曜日判定
                else if (date.getDay() === 0) { // 日曜日
                  classNames.push('sunday-holiday');
                } else if (date.getDay() === 6) { // 土曜日
                  classNames.push('saturday');
                }
                return classNames.join(' ');
              }
            }}
          />
        </div>

      </div>
    </div>
  );
};

export default Dashboard; 