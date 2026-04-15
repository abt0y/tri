import { Bell, ChevronDown, Menu, Moon, Sun } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { useAppStore } from '@/lib/store';
import { useState } from 'react';

const TopNav = () => {
  const { lang, setLang, t } = useI18n();
  const { darkMode, toggleDark, setSidebarOpen } = useAppStore();
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 bg-card/80 backdrop-blur-xl border-b border-border px-4 sm:px-6 py-3 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => setSidebarOpen(true)}
          className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h1 className="text-xl sm:text-2xl font-bold text-foreground">{t('app.title')}</h1>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {/* Language toggle */}
        <button
          onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
          className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-secondary hover:bg-accent text-sm font-medium text-foreground transition-colors"
          aria-label="Toggle language"
        >
          <span>{lang === 'vi' ? '🇻🇳' : '🇺🇸'}</span>
          <span className="hidden sm:inline">{lang === 'vi' ? 'VIE' : 'ENG'}</span>
        </button>

        {/* Dark mode */}
        <button
          onClick={toggleDark}
          className="p-2 rounded-lg bg-secondary hover:bg-accent text-foreground transition-colors"
          aria-label="Toggle dark mode"
        >
          {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
        </button>

        {/* Notifications */}
        <button className="p-2 rounded-lg hover:bg-secondary text-muted-foreground transition-colors relative" aria-label="Notifications">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-chart-progress rounded-full" />
        </button>

        {/* Profile */}
        <div className="relative">
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 pl-2 pr-1 py-1 rounded-lg hover:bg-secondary transition-colors"
          >
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-xs font-bold text-primary-foreground">
              NC
            </div>
            <div className="hidden sm:block text-left">
              <p className="text-sm font-semibold text-foreground leading-tight">Nathan Collins</p>
              <p className="text-xs text-muted-foreground leading-tight">@nathan_collins</p>
            </div>
            <ChevronDown className="w-4 h-4 text-muted-foreground" />
          </button>

          {profileOpen && (
            <>
              <div className="fixed inset-0 z-40" onClick={() => setProfileOpen(false)} />
              <div className="absolute right-0 top-full mt-1 w-44 bg-card border border-border rounded-lg shadow-lg z-50 py-1">
                {['profile.profile', 'profile.settings', 'profile.logout'].map((key) => (
                  <button
                    key={key}
                    onClick={() => setProfileOpen(false)}
                    className="w-full text-left px-4 py-2 text-sm text-foreground hover:bg-accent transition-colors"
                  >
                    {t(key)}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default TopNav;
