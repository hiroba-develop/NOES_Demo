import React from 'react';
import { Link } from 'react-router-dom';

const printers = [
    {
        id: 1,
        name: '本社3F 複合機A',
        model: 'Fuji-Xerox ApeosPort-VII C3373',
        status: '正常',
        toner: { black: 80, cyan: 40, magenta: 65, yellow: 90 }
    },
    {
        id: 2,
        name: '営業部 プリンターB',
        model: 'Epson LP-S7180',
        status: 'トナー交換推奨',
        toner: { black: 15, cyan: 70, magenta: 60, yellow: 80 }
    }
];

const TonerLevel: React.FC<{ color: string, level: number }> = ({ color, level }) => {
    const bgColor = {
        black: 'bg-gray-800',
        cyan: 'bg-cyan-500',
        magenta: 'bg-pink-500',
        yellow: 'bg-yellow-400'
    }[color] || 'bg-gray-400';
    
    return (
        <div>
            <div className="flex justify-between text-sm">
                <span>{color.charAt(0).toUpperCase() + color.slice(1)}</span>
                <span>{level}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className={`${bgColor} h-2.5 rounded-full`} style={{ width: `${level}%` }}></div>
            </div>
        </div>
    )
}


const PrinterPage: React.FC = () => {
    return (
        <div className="container mx-auto p-8 bg-white rounded-lg shadow-lg">
            <header className="mb-8">
                <h1 className="text-4xl font-bold text-primary-blue">複合機・プリンター</h1>
                <p className="text-gray-600 mt-2">
                    管理下の複合機・プリンターの状態確認や、消耗品の発注ができます。
                </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {printers.map(printer => (
                    <div key={printer.id} className="p-6 border rounded-lg shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h2 className="text-xl font-semibold text-gray-800">{printer.name}</h2>
                                <p className="text-sm text-gray-500">{printer.model}</p>
                            </div>
                            <span className={`px-3 py-1 text-sm font-bold text-white rounded-full ${printer.status === '正常' ? 'bg-green-500' : 'bg-yellow-500'}`}>
                                {printer.status}
                            </span>
                        </div>
                        
                        <div className="space-y-3 mb-6">
                            <h3 className="text-md font-semibold text-gray-700">トナー残量</h3>
                            <TonerLevel color="black" level={printer.toner.black} />
                            <TonerLevel color="cyan" level={printer.toner.cyan} />
                            <TonerLevel color="magenta" level={printer.toner.magenta} />
                            <TonerLevel color="yellow" level={printer.toner.yellow} />
                        </div>
                        
                        <div className="flex space-x-3">
                             <Link to="/consultation/new-system" className="flex-1 text-center px-4 py-2 font-bold text-white bg-primary-blue rounded-lg hover:bg-accent-orange transition-colors">
                                消耗品を注文
                            </Link>
                             <Link to="/maintenance/troubleshooting" className="flex-1 text-center px-4 py-2 font-bold text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors">
                                故障・トラブル報告
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PrinterPage; 