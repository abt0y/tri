import { Calendar, X, ChevronDown } from 'lucide-react';
import { useI18n } from '@/lib/i18n';
import { motion } from 'framer-motion';

const scheduleData = [
  { dayKey: 'days.mon', date: 8, items: [{ titleKey: 'schedule.dom', start: 1, span: 3, color: 'bg-emerald-500/90' }] },
  { dayKey: 'days.tue', date: 9, items: [{ titleKey: 'schedule.auth', start: 2, span: 2, color: 'bg-pink-500/80' }] },
  { dayKey: 'days.wed', date: 10, items: [{ titleKey: 'schedule.arrays', start: 2, span: 3, color: 'bg-blue-500/80' }] },
  { dayKey: 'days.thu', date: 11, items: [{ titleKey: 'schedule.jsBasics', start: 3, span: 3, color: 'bg-indigo-500/80' }] },
  { dayKey: 'days.fri', date: 12, items: [{ titleKey: 'schedule.database', start: 0, span: 2, color: 'bg-rose-500/80' }] },
];

const hours = ['1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm'];

const MySchedule = () => {
  const { t } = useI18n();

  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Calendar className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-base font-semibold text-foreground">{t('schedule.title')}</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground">
            08-12 Apr <ChevronDown className="w-3 h-3" />
          </button>
          <button className="text-muted-foreground hover:text-foreground"><X className="w-3.5 h-3.5" /></button>
        </div>
      </div>

      <div className="overflow-x-auto scrollbar-hide">
        <div className="min-w-[500px]">
          {/* Time headers */}
          <div className="flex ml-16 mb-2">
            {hours.map((h) => (
              <div key={h} className="flex-1 text-xs text-muted-foreground text-center">{h}</div>
            ))}
          </div>

          {/* Days */}
          <div className="space-y-2">
            {scheduleData.map((day, di) => (
              <div key={di} className="flex items-center gap-0">
                <div className="w-16 flex-shrink-0 text-xs">
                  <span className="text-muted-foreground font-medium">{t(day.dayKey)} {day.date}</span>
                </div>
                <div className="flex-1 relative h-9 bg-secondary/50 rounded-lg">
                  {/* Grid lines */}
                  {hours.map((_, hi) => (
                    <div key={hi} className="absolute top-0 bottom-0 border-l border-border/50" style={{ left: `${(hi / hours.length) * 100}%` }} />
                  ))}
                  {day.items.map((item, ii) => (
                    <motion.div
                      key={ii}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: di * 0.08, duration: 0.4 }}
                      className={`absolute top-1 bottom-1 rounded-md ${item.color} flex items-center px-2 text-[11px] font-medium text-white origin-left`}
                      style={{
                        left: `${(item.start / hours.length) * 100}%`,
                        width: `${(item.span / hours.length) * 100}%`,
                      }}
                    >
                      <span className="truncate">{t(item.titleKey)}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MySchedule;
