import React, { useState, Fragment } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Dialog, Transition } from '@headlessui/react';
import {
    HomeIcon, ChatBubbleLeftRightIcon, BriefcaseIcon, WrenchScrewdriverIcon, BuildingOffice2Icon, Cog8ToothIcon, SparklesIcon, Bars3Icon, XMarkIcon, ArrowRightOnRectangleIcon, ChevronDownIcon, CurrencyYenIcon,
} from '@heroicons/react/24/outline';

interface SubMenuItem {
    name: string;
    path: string;
}

interface MenuItem {
    name: string;
    icon: React.ReactNode;
    path?: string;
    subItems?: SubMenuItem[];
}

const menuItems: MenuItem[] = [
    { name: "ダッシュボード", path: "/dashboard", icon: <HomeIcon className="h-5 w-5" /> },
    { name: "チャット", path: "/chat", icon: <ChatBubbleLeftRightIcon className="h-5 w-5" /> },
    { name: "ビジネストレンド", path: "/business-trends", icon: <SparklesIcon className="h-5 w-5" /> },
    {
        name: "見積・購入相談",
        icon: <CurrencyYenIcon className="h-5 w-5" />,
        subItems: [
            { name: "新規導入相談", path: "/consultation/new-system" },
            { name: "機器更新相談", path: "/consultation/system-renewal" },
            { name: "コスト削減提案", path: "/consultation/cost-saving" },
        ],
    },
    {
        name: "技術サポート",
        icon: <WrenchScrewdriverIcon className="h-5 w-5" />,
        subItems: [
            { name: "操作方法質問", path: "/support/how-to" },
            { name: "トラブルシューティング", path: "/support/troubleshooting" },
            { name: "設定変更依頼", path: "/support/config-change" },
        ],
    },
    {
        name: "IT機器・設備",
        icon: <BuildingOffice2Icon className="h-5 w-5" />,
        subItems: [
            { name: "PC・サーバー関連", path: "/it-equipment/pc-server" },
            { name: "ネットワーク関連", path: "/it-equipment/network" },
            { name: "プリンター・複合機関連", path: "/it-equipment/printer" },
            { name: "セキュリティ対策", path: "/it-equipment/security" },
        ],
    },
    {
        name: "保守・メンテナンス",
        icon: <Cog8ToothIcon className="h-5 w-5" />,
        subItems: [
            { name: "定期点検", path: "/maintenance/inspection" },
            { name: "障害対応", path: "/maintenance/troubleshooting" },
            { name: "アップデート情報", path: "/maintenance/update" },
        ],
    },
    {
        name: "便利屋サービス",
        icon: <BriefcaseIcon className="h-5 w-5" />,
        subItems: [
            { name: "ナレッジベース", path: "/knowledge-base" },
            { name: "契約情報", path: "/contracts" },
            { name: "IT資産管理台帳", path: "/it-asset-ledger" },
            { name: "セキュリティレポート", path: "/security-report" },
            { name: "NOESからのお知らせ", path: "/noes-updates" },
            { name: "満足度アンケート", path: "/feedback" },
            { name: "担当者紹介", path: "/our-team" },
            { name: "クイック発注", path: "/quick-order" },
        ],
    },
];

const NavLink: React.FC<{ item: SubMenuItem }> = ({ item }) => {
    const location = useLocation();
    const isActive = location.pathname === item.path;
    return (
        <Link 
            to={item.path} 
            className={`block p-2 rounded-md text-sm hover:bg-gray-100 ${isActive ? 'bg-gray-100 text-primary-blue font-semibold' : 'text-gray-600'}`}
        >
            {item.name}
        </Link>
    );
};

const SidebarContent: React.FC = () => {
    const location = useLocation();
    const [openSubMenu, setOpenSubMenu] = useState<string | null>(() => {
        const currentMenu = menuItems.find(item =>
            item.subItems?.some(subItem => location.pathname.startsWith(subItem.path))
        );
        return currentMenu ? currentMenu.name : null;
    });

    return (
        <div className="bg-white text-gray-700 w-64 p-4 flex flex-col h-full border-r">
            <div className="text-2xl font-bold mb-8 text-center text-primary-blue">NOES Benriya</div>
            <nav className="flex-grow">
                <ul>
                    {menuItems.map((item, index) => {
                        const isSubMenuActive = item.subItems?.some(sub => location.pathname.startsWith(sub.path)) ?? false;
                        
                        return (
                            <li key={index} className="mb-2">
                                {item.subItems ? (
                                    <>
                                        <button
                                            onClick={() => setOpenSubMenu(openSubMenu === item.name ? null : item.name)}
                                            className={`w-full flex justify-between items-center p-2 rounded-md hover:bg-gray-100 text-left ${isSubMenuActive ? 'text-primary-blue' : ''}`}
                                        >
                                            <div className="flex items-center font-semibold">
                                                {item.icon}
                                                <span className="ml-3">{item.name}</span>
                                            </div>
                                            <ChevronDownIcon className={`h-5 w-5 transition-transform ${openSubMenu === item.name ? 'rotate-180' : ''}`} />
                                        </button>
                                        {openSubMenu === item.name && (
                                            <ul className="pl-8 mt-1 space-y-1">
                                                {item.subItems.map((subItem) => (
                                                    <li key={subItem.path}><NavLink item={subItem} /></li>
                                                ))}
                                            </ul>
                                        )}
                                    </>
                                ) : (
                                    item.path && (
                                        <Link 
                                            to={item.path} 
                                            className={`flex items-center p-2 rounded-md font-semibold hover:bg-gray-100 ${location.pathname === item.path ? 'bg-gray-100 text-primary-blue' : ''}`}
                                        >
                                            {item.icon}
                                            <span className="ml-3">{item.name}</span>
                                        </Link>
                                    )
                                )}
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </div>
    );
};


const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
    const { user, logout } = useAuth();
    return (
        <header className="bg-white shadow-md p-4 flex justify-between items-center">
            <button onClick={onMenuClick} className="lg:hidden">
                <Bars3Icon className="h-6 w-6" />
            </button>
            <div className="flex-1"></div>
            <div className="flex items-center">
                <span className="mr-4">こんにちは、{user?.name}さん</span>
                <Link to="/profile" className="mr-4 text-primary-blue hover:underline">プロフィール</Link>
                <button
                    onClick={logout}
                    className="flex items-center bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600"
                >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-2" />
                    ログアウト
                </button>
            </div>
        </header>
    );
};


const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="flex h-screen bg-gray-100">
            {/* Mobile sidebar */}
            <Transition.Root show={sidebarOpen} as={Fragment}>
                <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
                    </Transition.Child>
                    <div className="fixed inset-0 flex z-40">
                        <Transition.Child
                            as={Fragment}
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full">
                                <div className="absolute top-0 right-0 -mr-12 pt-2">
                                    <button
                                        type="button"
                                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <XMarkIcon className="h-6 w-6 text-white" />
                                    </button>
                                </div>
                                <SidebarContent />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </Dialog>
            </Transition.Root>

            {/* Static sidebar for desktop */}
            <div className="hidden lg:flex lg:flex-shrink-0">
                <SidebarContent />
            </div>

            <div className="flex flex-col flex-1 overflow-auto">
                <Header onMenuClick={() => setSidebarOpen(true)} />
                <main className="flex-1 p-6 lg:p-10">
                    {children}
                </main>
            </div>
        </div>
    );
};

export default Layout;
