import { motion } from 'framer-motion';
import { BookOpen, ArrowUpRight } from 'lucide-react';
import { useI18n } from '@/lib/i18n';

const courses = [
  { titleKey: 'course.backend', progress: 54, total: 28, done: 16, status: 'inProgress', gradient: 'from-violet-600 to-pink-500' },
  { titleKey: 'course.frontend', progress: 68, total: 20, done: 5, status: 'inProgress', gradient: 'from-indigo-600 to-purple-500' },
  { titleKey: 'course.dataStructures', progress: 100, total: 16, done: 16, status: 'completed', gradient: 'from-blue-500 to-violet-500' },
];

const MyCourses = () => {
  const { t } = useI18n();

  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-base font-semibold text-foreground">{t('courses.title')}</h2>
        </div>
        <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground hover:bg-accent transition-colors">
          <ArrowUpRight className="w-3.5 h-3.5" />
          {t('courses.browse')}
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-1">
        {courses.map((course, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.03, y: -2 }}
            className={`min-w-[200px] flex-1 rounded-xl bg-gradient-to-br ${course.gradient} p-4 cursor-pointer relative overflow-hidden`}
          >
            {/* Decorative circles */}
            <div className="absolute -top-6 -right-6 w-20 h-20 rounded-full bg-white/10" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/5" />

            <div className="relative z-10">
              <span className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold mb-6 ${
                course.status === 'completed'
                  ? 'bg-emerald-400/20 text-emerald-100'
                  : 'bg-white/20 text-white'
              }`}>
                {course.status === 'completed' ? `● ${t('status.completed')}` : `● ${t('status.inProgress')}`}
              </span>

              <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center mb-2">
                <BookOpen className="w-4 h-4 text-white" />
              </div>

              <h3 className="text-sm font-semibold text-white mb-3">{t(course.titleKey)}</h3>

              <div className="flex items-center justify-between text-xs text-white/80">
                <span className="text-lg font-bold text-white">{course.progress}%</span>
                <span>{course.done}/{course.total} {t('courses.lessons')}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyCourses;
