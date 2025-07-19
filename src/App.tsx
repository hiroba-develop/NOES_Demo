import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuth, AuthProvider } from './contexts/AuthContext.tsx';
import Layout from './components/Layout.tsx';
import LoginPage from './pages/Login.tsx';
import DashboardPage from './pages/Dashboard.tsx';
import ProfilePage from './pages/profile/index.tsx';
import ChatPage from './pages/chat/index.tsx';
import BusinessTrendsPage from './pages/business-trends/index.tsx';
import NewSystemPage from './pages/consultation/new-system.tsx';
import SystemRenewalPage from './pages/consultation/renewal.tsx';
import CostSavingPage from './pages/consultation/cost-saving.tsx';
import HowToPage from './pages/support/how-to.tsx';
import TroubleshootingPage from './pages/support/troubleshooting.tsx';
import ConfigChangePage from './pages/support/config-change.tsx';
import PcServerPage from './pages/it-equipment/pc-server.tsx';
import NetworkPage from './pages/it-equipment/network.tsx';
import PrinterPage from './pages/it-equipment/printer.tsx';
import SecurityPage from './pages/it-equipment/security.tsx';
import InspectionPage from './pages/maintenance/inspection.tsx';
import MaintenanceTroubleshootingPage from './pages/maintenance/troubleshooting.tsx';
import UpdatePage from './pages/maintenance/updates.tsx';
import InboxPage from './pages/inbox/index.tsx';
import MessageDetailPage from './pages/inbox/[id].tsx';
import AnnouncementsPage from './pages/announcements/index.tsx';
import HistoryPage from './pages/history/index.tsx';
import KnowledgeBasePage from './pages/knowledge-base/index.tsx';
import ContractsPage from './pages/contracts/index.tsx';
import ItAssetLedgerPage from './pages/it-asset-ledger/index.tsx';
import SecurityReportPage from './pages/security-report/index.tsx';
import NoesUpdatesPage from './pages/noes-updates/index.tsx';
import FeedbackPage from './pages/feedback/index.tsx';
import OurTeamPage from './pages/our-team/index.tsx';
import QuickOrderPage from './pages/quick-order/index.tsx';

// 認証が必要なページをラップするコンポーネント
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const { user, isLoading } = useAuth();

    if (isLoading) {
        return <div>読み込み中...</div>;
    }

    return user ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route
                path="/*"
                element={
                    <ProtectedRoute>
                        <Layout>
                            <Routes>
                                <Route path="/" element={<Navigate to="/dashboard" />} />
                                <Route path="/dashboard" element={<DashboardPage />} />
                                <Route path="/profile" element={<ProfilePage />} />
                                <Route path="/chat" element={<ChatPage />} />
                                <Route path="/business-trends" element={<BusinessTrendsPage />} />
                                {/* 相談・質問 */}
                                <Route path="/consultation/new-system" element={<NewSystemPage />} />
                                <Route path="/consultation/system-renewal" element={<SystemRenewalPage />} />
                                <Route path="/consultation/cost-saving" element={<CostSavingPage />} />
                                {/* 使い方・設定変更 */}
                                <Route path="/support/how-to" element={<HowToPage />} />
                                <Route path="/support/troubleshooting" element={<TroubleshootingPage />} />
                                <Route path="/support/config-change" element={<ConfigChangePage />} />
                                {/* IT機器・設備 */}
                                <Route path="/it-equipment/pc-server" element={<PcServerPage />} />
                                <Route path="/it-equipment/network" element={<NetworkPage />} />
                                <Route path="/it-equipment/printer" element={<PrinterPage />} />
                                <Route path="/it-equipment/security" element={<SecurityPage />} />
                                {/* 保守・運用 */}
                                <Route path="/maintenance/inspection" element={<InspectionPage />} />
                                <Route path="/maintenance/troubleshooting" element={<MaintenanceTroubleshootingPage />} />
                                <Route path="/maintenance/update" element={<UpdatePage />} />

                                <Route path="/inbox" element={<InboxPage />} />
                                <Route path="/inbox/:id" element={<MessageDetailPage />} />
                                <Route path="/announcements" element={<AnnouncementsPage />} />
                                <Route path="/history" element={<HistoryPage />} />
                                <Route path="/knowledge-base" element={<KnowledgeBasePage />} />
                                <Route path="/contracts" element={<ContractsPage />} />
                                {/* New Pages */}
                                <Route path="/it-asset-ledger" element={<ItAssetLedgerPage />} />
                                <Route path="/security-report" element={<SecurityReportPage />} />
                                <Route path="/noes-updates" element={<NoesUpdatesPage />} />
                                <Route path="/feedback" element={<FeedbackPage />} />
                                <Route path="/our-team" element={<OurTeamPage />} />
                                <Route path="/quick-order" element={<QuickOrderPage />} />
                            </Routes>
                        </Layout>
                    </ProtectedRoute>
                }
            />
        </Routes>
    )
}

const App: React.FC = () => {
    return (
        <Router>
            <AuthProvider>
                <AppRoutes />
            </AuthProvider>
        </Router>
    );
};

export default App;
