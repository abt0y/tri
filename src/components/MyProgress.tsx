import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { useI18n } from '@/lib/i18n';
import { TrendingUp, X } from 'lucide-react';

const data = [
  { name: 'completed', value: 72 },
  { name: 'inProgress', value: 18 },
  { name: 'pending', value: 10 },
];

const COLORS = ['hsl(250, 60%, 55%)', 'hsl(340, 75%, 55%)', 'hsl(25, 90%, 60%)'];

const MyProgress = () => {
  const { t } = useI18n();

  return (
    <div className="bg-card rounded-2xl border border-border p-5">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-base font-semibold text-foreground">{t('progress.title')}</h2>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-xs text-muted-foreground">08-12 Apr</span>
          <button className="text-muted-foreground hover:text-foreground"><X className="w-3.5 h-3.5" /></button>
        </div>
      </div>

      <div className="flex items-center gap-6">
        <div className="relative w-32 h-32 flex-shrink-0">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={38}
                outerRadius={55}
                paddingAngle={3}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((_, i) => (
                  <Cell key={i} fill={COLORS[i]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-bold text-foreground">72%</span>
            <span className="text-[10px] text-muted-foreground">{t('progress.overall')}</span>
          </div>
        </div>

        <div className="space-y-3 text-sm">
          {[
            { key: 'status.pending', color: 'bg-orange-400', value: '10%' },
            { key: 'status.inProgress', color: 'bg-pink-500', value: '18%' },
            { key: 'status.completed', color: 'bg-indigo-500', value: '72%' },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${item.color}`} />
              <span className="text-muted-foreground">{t(item.key)}</span>
              <span className="ml-auto font-semibold text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-[11px] text-muted-foreground mt-3 flex items-center gap-1">
        <span className="w-3 h-3 rounded-full border border-muted-foreground inline-flex items-center justify-center text-[8px]">i</span>
        {t('progress.based')}
      </p>
    </div>
  );
};

export default MyProgress;
