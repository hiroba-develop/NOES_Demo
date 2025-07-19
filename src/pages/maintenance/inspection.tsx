import React from 'react';

const reports = [
  { id: 1, date: '2023-10-15', title: '2023年10月度 サーバー定期点検レポート', file: '/reports/report-2023-10.pdf' },
  { id: 2, date: '2023-09-15', title: '2023年9月度 サーバー定期点検レポート', file: '/reports/report-2023-09.pdf' },
  { id: 3, date: '2023-08-15', title: '2023年8月度 サーバー定期点検レポート', file: '/reports/report-2023-08.pdf' },
];

const InspectionPage: React.FC = () => {
  return (
    <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-primary-blue">定期点検のご報告</h1>
        <p className="text-gray-600 mt-2">
          お客様のシステムを常に最適な状態に保つため、定期的な点検を実施しています。
        </p>
      </header>
      
      <div className="flex flex-col md:flex-row gap-8">
        <main className="flex-grow">
            <div className="mb-8 p-6 bg-sub-light-blue/20 rounded-lg">
                <h2 className="text-2xl font-semibold text-primary-blue mb-2">次回の点検予定</h2>
                <p className="text-xl text-gray-800">2023年11月15日（水） 10:00〜12:00</p>
            </div>

            <div>
                <h2 className="text-2xl font-semibold text-primary-blue mb-4">過去の点検レポート</h2>
                <div className="space-y-4">
                {reports.map((report) => (
                    <div key={report.id} className="p-4 border rounded-lg flex justify-between items-center hover:bg-gray-50">
                        <div>
                            <p className="font-semibold text-gray-800">{report.title}</p>
                            <p className="text-sm text-gray-500">実施日: {report.date}</p>
                        </div>
                        <a 
                            href={report.file} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="px-4 py-2 text-sm font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors duration-300"
                        >
                            レポートを見る
                        </a>
                    </div>
                ))}
                </div>
          </div>
        </main>
        
        <aside className="w-full md:w-1/3 space-y-6">
          <div className="p-6 bg-sub-light-blue/10 rounded-lg">
            <h3 className="text-xl font-semibold text-primary-blue mb-3">主な点検内容</h3>
            <ul className="space-y-2 text-sm text-gray-700 list-disc list-inside">
              <li>ハードウェア動作確認</li>
              <li>リソース使用状況の確認</li>
              <li>セキュリティログの確認</li>
              <li>バックアップの正常性確認</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default InspectionPage; 