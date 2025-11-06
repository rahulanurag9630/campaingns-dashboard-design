'use client';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sent: 400, replies: 65 },
  { name: 'Tue', sent: 500, replies: 85 },
  { name: 'Wed', sent: 450, replies: 72 },
  { name: 'Thu', sent: 600, replies: 95 },
  { name: 'Fri', sent: 550, replies: 88 },
  { name: 'Sat', sent: 300, replies: 45 },
  { name: 'Sun', sent: 250, replies: 38 },
];

export function CampaignChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
        <XAxis dataKey="name" stroke="#888888" fontSize={12} />
        <YAxis stroke="#888888" fontSize={12} />
        <Tooltip
          contentStyle={{
            backgroundColor: 'white',
            border: '1px solid #e5e7eb',
            borderRadius: '8px',
          }}
        />
        <Line
          type="monotone"
          dataKey="sent"
          stroke="#25826A"
          strokeWidth={2}
          dot={{ fill: '#25826A', r: 4 }}
          activeDot={{ r: 6 }}
        />
        <Line
          type="monotone"
          dataKey="replies"
          stroke="#35a47f"
          strokeWidth={2}
          dot={{ fill: '#35a47f', r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
