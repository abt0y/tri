import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';

type Lang = 'vi' | 'en';

interface I18nContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (key: string) => string;
}

const translations: Record<Lang, Record<string, string>> = {
  vi: {
    'app.title': 'Trung Tâm Tri Thức',
    'nav.dashboard': 'Bảng điều khiển',
    'nav.courses': 'Khóa học',
    'nav.lessons': 'Bài học',
    'nav.tasks': 'Nhiệm vụ',
    'nav.progress': 'Tiến độ',
    'nav.schedule': 'Lịch trình',
    'nav.messages': 'Tin nhắn',
    'nav.settings': 'Cài đặt',
    'nav.help': 'Trợ giúp',
    'nav.logout': 'Đăng xuất',
    'nav.main': 'Chính',
    'nav.other': 'Khác',
    'courses.title': 'Khóa học của tôi',
    'courses.browse': 'Duyệt khóa học',
    'courses.lessons': 'bài học',
    'status.inProgress': 'Đang học',
    'status.completed': 'Hoàn thành',
    'status.pending': 'Chờ xử lý',
    'progress.title': 'Tiến độ của tôi',
    'progress.overall': 'Tiến độ tổng thể',
    'progress.based': 'Dựa trên hoạt động khóa học tuần này',
    'schedule.title': 'Lịch trình của tôi',
    'tasks.title': 'Nhiệm vụ của tôi',
    'tasks.count': 'nhiệm vụ',
    'tasks.complete': 'hoàn thành',
    'tasks.due': 'Hạn',
    'days.mon': 'T2',
    'days.tue': 'T3',
    'days.wed': 'T4',
    'days.thu': 'T5',
    'days.fri': 'T6',
    'profile.profile': 'Hồ sơ',
    'profile.settings': 'Cài đặt',
    'profile.logout': 'Đăng xuất',
    'course.backend': 'Phát triển Backend',
    'course.frontend': 'Phát triển Frontend',
    'course.dataStructures': 'Cấu trúc dữ liệu',
    'schedule.dom': 'Thao tác DOM',
    'schedule.auth': 'Xác thực & JWT',
    'schedule.arrays': 'Mảng & Danh sách liên kết',
    'schedule.jsBasics': 'Cơ bản JavaScript',
    'schedule.database': 'Tích hợp Cơ sở dữ liệu',
    'task.flexbox': 'Sửa bố cục Flexbox',
    'task.flexbox.desc': 'Căn chỉnh các phần tử và khoảng cách',
    'task.api': 'Xây dựng REST API',
    'task.api.desc': 'Tạo các endpoint và routes',
    'task.graph': 'Giải bài toán Đồ thị',
    'task.graph.desc': 'Thuật toán duyệt đồ thị',
  },
  en: {
    'app.title': 'Learning Hub',
    'nav.dashboard': 'Dashboard',
    'nav.courses': 'Courses',
    'nav.lessons': 'Lessons',
    'nav.tasks': 'Tasks',
    'nav.progress': 'Progress',
    'nav.schedule': 'Schedule',
    'nav.messages': 'Messages',
    'nav.settings': 'Settings',
    'nav.help': 'Help',
    'nav.logout': 'Log out',
    'nav.main': 'Main',
    'nav.other': 'Other',
    'courses.title': 'My courses',
    'courses.browse': 'Browse Courses',
    'courses.lessons': 'lessons',
    'status.inProgress': 'In Progress',
    'status.completed': 'Completed',
    'status.pending': 'Pending',
    'progress.title': 'My Progress',
    'progress.overall': 'Overall Progress',
    'progress.based': 'Based on your course activity this week',
    'schedule.title': 'My Schedule',
    'tasks.title': 'My Tasks',
    'tasks.count': 'tasks',
    'tasks.complete': 'complete',
    'tasks.due': 'Due',
    'days.mon': 'MON',
    'days.tue': 'TUE',
    'days.wed': 'WED',
    'days.thu': 'THU',
    'days.fri': 'FRI',
    'profile.profile': 'Profile',
    'profile.settings': 'Settings',
    'profile.logout': 'Logout',
    'course.backend': 'Backend Development',
    'course.frontend': 'Frontend Development',
    'course.dataStructures': 'Data Structures',
    'schedule.dom': 'DOM Manipulation',
    'schedule.auth': 'Authentication & JWT',
    'schedule.arrays': 'Arrays & Linked Lists',
    'schedule.jsBasics': 'JavaScript Basics',
    'schedule.database': 'Database Integration',
    'task.flexbox': 'Fix Flexbox Layout',
    'task.flexbox.desc': 'Align items and spacing',
    'task.api': 'Build REST API',
    'task.api.desc': 'Create endpoints and routes',
    'task.graph': 'Solve Graph Problem',
    'task.graph.desc': 'Graph traversal algorithms',
  },
};

const I18nContext = createContext<I18nContextType | null>(null);

export const I18nProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    return (localStorage.getItem('lang') as Lang) || 'vi';
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  }, []);

  const t = useCallback((key: string) => {
    return translations[lang][key] || key;
  }, [lang]);

  return (
    <I18nContext.Provider value={{ lang, setLang, t }}>
      {children}
    </I18nContext.Provider>
  );
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
