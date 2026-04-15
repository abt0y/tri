import { motion, AnimatePresence } from 'framer-motion';
import {
  LayoutDashboard, BookOpen, FileText, CheckSquare, TrendingUp,
  Calendar, MessageSquare, Settings, HelpCircle, LogOut, X, Sparkles
} from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useAppStore } from '@/lib/store';

const navItems = [
  { key: 'dashboard', icon: LayoutDashboard, labelKey: 'nav.dashboard' },
  { key: 'courses', icon: BookOpen, labelKey: 'nav.courses' },
  { key: 'lessons', icon: FileText, labelKey: 'nav.lessons' },
  { key: 'tasks', icon: CheckSquare, labelKey: 'nav.tasks' },
  { key: 'progress', icon: TrendingUp, labelKey: 'nav.progress' },
  { key: 'schedule', icon: Calendar, labelKey: 'nav.schedule' },
  { key: 'messages', icon: MessageSquare, labelKey: 'nav.messages' },
];

const otherItems = [
  { key: 'settings', icon: Settings, labelKey: 'nav.settings' },
  { key: 'help', icon: HelpCircle, labelKey: 'nav.help' },
];

const Sidebar = () => {
  const { t } = useI18n();
  const { activeNav, setActiveNav, sidebarOpen, setSidebarOpen } = useAppStore();

  const content = (
    <div className="flex flex-col h-full bg-card border-r border-border">
      {/* Logo */}
      <div className="flex items-center gap-2.5 px-5 py-6">
        <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <Sparkles className="w-4 h-4 text-primary-foreground" />
        </div>
        <span className="text-lg font-bold text-foreground tracking-tight">Devoria</span>
        <button
          className="ml-auto lg:hidden text-muted-foreground"
          onClick={() => setSidebarOpen(false)}
          aria-label="Close menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main nav */}
      <div className="px-3 mt-2">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
          {t('nav.main')}
        </p>
        <nav className="space-y-0.5">
          {navItems.map(({ key, icon: Icon, labelKey }) => {
            const isActive = activeNav === key;
            return (
              <button
                key={key}
                onClick={() => { setActiveNav(key); setSidebarOpen(false); }}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                }`}
              >
                <Icon className="w-[18px] h-[18px]" />
                {t(labelKey)}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Other */}
      <div className="px-3 mt-6">
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 mb-2">
          {t('nav.other')}
        </p>
        <nav className="space-y-0.5">
          {otherItems.map(({ key, icon: Icon, labelKey }) => (
            <button
              key={key}
              onClick={() => { setActiveNav(key); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeNav === key
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-muted-foreground hover:bg-accent hover:text-foreground'
              }`}
            >
              <Icon className="w-[18px] h-[18px]" />
              {t(labelKey)}
            </button>
          ))}
        </nav>
      </div>

      {/* Logout */}
      <div className="mt-auto px-3 pb-6">
        <button className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted-foreground hover:bg-accent hover:text-foreground transition-all duration-200">
          <LogOut className="w-[18px] h-[18px]" />
          {t('nav.logout')}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-60 flex-shrink-0 h-screen sticky top-0">
        {content}
      </aside>

      {/* Mobile overlay */}
      <AnimatePresence>
        {sidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-foreground/40 z-40 lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
            <motion.aside
              initial={{ x: -280 }}
              animate={{ x: 0 }}
              exit={{ x: -280 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed left-0 top-0 bottom-0 w-60 z-50 lg:hidden"
            >
              {content}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
