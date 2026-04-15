import Sidebar from '@/components/Sidebar';
import TopNav from '@/components/TopNav';
import MyCourses from '@/components/MyCourses';
import MyProgress from '@/components/MyProgress';
import MySchedule from '@/components/MySchedule';
import MyTasks from '@/components/MyTasks';
import { I18nProvider } from '@/lib/i18n';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <TopNav />
        <main className="flex-1 p-4 sm:p-6 overflow-y-auto">
          <div className="grid grid-cols-1 xl:grid-cols-[1fr_340px] gap-5">
            {/* Left column */}
            <div className="space-y-5 min-w-0">
              <MyCourses />
              <MySchedule />
            </div>
            {/* Right column */}
            <div className="space-y-5">
              <MyProgress />
              <MyTasks />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

const Index = () => (
  <I18nProvider>
    <Dashboard />
  </I18nProvider>
);

export default Index;
