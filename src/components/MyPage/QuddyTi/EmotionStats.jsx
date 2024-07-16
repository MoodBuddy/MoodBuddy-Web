import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const EmotionStats = ({ data, emotions }) => {
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
            {entry.value}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <ResponsiveContainer width={900} height={460} className="text-center">
      <div className="text-2xl font-medium text-center mb-4">감정</div>
      <div className="mx-7">
        <PieChart width={900} height={460}>
          <Pie
            data={chartData}
            cx="50%"
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
