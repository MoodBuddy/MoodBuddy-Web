import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EmotionStats = ({ data, emotions }) => {
  const COLORS = [
    '#C79A76',
    '#CE8C98',
    '#F08D74',
    '#9C8EBD',
    '#9CB57A',
    '#7598BA',
    '#E3C778',
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
    const radius = innerRadius + (outerRadius - innerRadius) * 0.6;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        className="text-[34px] text-black"
        style={{ fontWeight: '500' }}
      >
        {chartData[index].name}
      </text>
    );
  };

  const chartData = emotions.map((emotion) => ({
    name: emotion.name,
    value: data ? data[emotion.key] : 1,
  }));

  const renderLegend = (props) => {
    const { payload } = props;

    return (
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {payload.map((entry, index) => (
          <li
            key={`item-${index}`}
            style={{
              fontSize: '22px',
              color: '#5F5F5F',
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <span
              style={{
                width: '25px',
                height: '25px',
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: '10px',
                display: 'inline-block',
              }}
            ></span>
            <div className=" flex gap-3 items-baseline">
              <span className="font-semibold text-[30px]">{entry.value}</span>
              <span className="text-[14px]">({emotions[index].fullName})</span>
            </div>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width={900} height={460} className="text-center">
      <div className="text-2xl font-medium text-center mb-4">감정</div>
      <div className="mx-1">
        <PieChart width={900} height={460}>
          <Pie
            data={chartData}
            cx="60%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            dataKey="value"
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend
            layout="vertical"
            verticalAlign="middle"
            align="right"
            content={renderLegend}
            wrapperStyle={{
              position: 'absolute',
              right: '30px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        </PieChart>
      </div>
    </ResponsiveContainer>
  );
};

export default EmotionStats;
