import { CheckSquare, ArrowUpRight, BookOpen } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const tasks = [
  { titleKey: 'task.flexbox', descKey: 'task.flexbox.desc', progress: 87, due: '18 Apr', color: 'bg-indigo-500' },
  { titleKey: 'task.api', descKey: 'task.api.desc', progress: 32, due: '19 Apr', color: 'bg-rose-500' },
  { titleKey: 'task.graph', descKey: 'task.graph.desc', progress: 0, due: '20 Apr', color: 'bg-violet-500' },
];

const MyTasks = () => {
  const { t } = useI18n();

  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-base font-semibold text-foreground">{t('tasks.title')}</h2>
        </div>
        <span className="text-xs text-muted-foreground">5 {t('tasks.count')}</span>
      </div>

      <div className="space-y-3">
        {tasks.map((task, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-3.5 rounded-xl bg-secondary/60 hover:bg-secondary transition-colors cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-lg ${task.color}/10 flex items-center justify-center`}>
                  <BookOpen className={`w-4 h-4 ${task.color === 'bg-indigo-500' ? 'text-indigo-500' : task.color === 'bg-rose-500' ? 'text-rose-500' : 'text-violet-500'}`} />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t(task.titleKey)}</p>
                  <p className="text-xs text-muted-foreground">{t(task.descKey)}</p>
                </div>
              </div>
              <ArrowUpRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            {task.progress > 0 && (
              <div className="mt-2">
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="text-muted-foreground font-medium">{task.progress}% {t('tasks.complete')}</span>
                  <span className="text-muted-foreground">📅 {t('tasks.due')}: {task.due}</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${task.progress}%` }}
                    transition={{ duration: 0.8, delay: i * 0.15 }}
                    className={`h-full rounded-full ${task.color}`}
                  />
                </div>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default MyTasks;
