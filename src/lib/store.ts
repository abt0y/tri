import { create } from 'zustand';

interface AppState {
  darkMode: boolean;
  sidebarOpen: boolean;
  activeNav: string;
  toggleDark: () => void;
  setSidebarOpen: (open: boolean) => void;
  setActiveNav: (nav: string) => void;
}

export const useAppStore = create<AppState>((set) => ({
  darkMode: localStorage.getItem('darkMode') === 'true',
  sidebarOpen: false,
  activeNav: 'dashboard',
  toggleDark: () => set((s) => {
    const next = !s.darkMode;
    localStorage.setItem('darkMode', String(next));
    if (next) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    return { darkMode: next };
  }),
  setSidebarOpen: (open) => set({ sidebarOpen: open }),
  setActiveNav: (nav) => set({ activeNav: nav }),
}));

// Initialize dark mode on load
if (localStorage.getItem('darkMode') === 'true') {
  document.documentElement.classList.add('dark');
}
