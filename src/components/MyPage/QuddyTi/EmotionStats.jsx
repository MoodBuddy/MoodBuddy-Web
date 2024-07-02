import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EmotionStats = ({ data }) => {
  const COLORS = [
    'rgba(199, 154, 118, 1)',
    'rgba(199, 154, 118, 0.75)',
    'rgba(211, 176, 148, 0.74)',
    'rgba(211, 176, 148, 0.56)',
    'rgba(199, 154, 118, 0.33)',
    'rgba(228, 208, 191, 0.46)',
    'rgba(222, 196, 175, 1)',
  ];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="#5E5E5E"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-3xl"
      >
        {data[index].name}
      </text>
    );
  };

  return (
    <ResponsiveContainer width={900} height={460} className="text-center">
      <h1 className="text-2xl font-medium text-center">감정</h1>
      <PieChart width={900} height={460}>
        {/* <Legend layout="vertical" verticalAlign="top" align="top"/> */}
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={200}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EmotionStats;
