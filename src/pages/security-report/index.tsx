import React from 'react';
import { ShieldCheckIcon, ExclamationTriangleIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const SecurityReportPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">月次セキュリティレポート (2025年7月)</h1>
                <p className="text-gray-600 mt-2">
                    お客様のネットワークの保護状況をご報告します。
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1: Overall Status */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <ShieldCheckIcon className="h-16 w-16 text-green-500 mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-800">総合評価</h2>
                    <p className="text-4xl font-bold text-green-500 mt-2">安全</p>
                    <p className="text-gray-500 mt-2">重大なインシデントは検知されていません。</p>
                </div>

                {/* Card 2: Threats Blocked */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <ChartBarIcon className="h-16 w-16 text-primary-blue mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-800">検知した脅威</h2>
                    <p className="text-4xl font-bold text-primary-blue mt-2">1,204<span className="text-lg">件</span></p>
                    <p className="text-gray-500 mt-2">ファイアウォールおよびウィルス対策ソフトによるブロック数</p>
                </div>

                {/* Card 3: Important Notice */}
                <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center">
                    <ExclamationTriangleIcon className="h-16 w-16 text-yellow-500 mb-4" />
                    <h2 className="text-2xl font-semibold text-gray-800">重要なお知らせ</h2>
                    <p className="text-gray-700 mt-2">
                        OSおよびソフトウェアの定期的なアップデートを推奨します。7台のPCでWindows Updateが保留中です。
                    </p>
                </div>
            </div>

            <div className="mt-12 bg-white rounded-lg shadow-lg p-6">
                 <h2 className="text-2xl font-semibold text-gray-800 mb-4">脅威の内訳</h2>
                 {/* This would be replaced by a real chart component */}
                 <div className="bg-gray-100 p-4 rounded-md text-center">
                     <p className="font-semibold">【グラフ表示エリア】</p>
                     <p className="text-sm text-gray-600">マルウェア: 75%, フィッシング詐欺: 20%, 不正アクセス: 5%</p>
                 </div>
            </div>
        </div>
    );
};

export default SecurityReportPage; 