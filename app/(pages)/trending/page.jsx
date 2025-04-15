'use client';

import { useEffect, useState } from 'react';
import { fetchNasdaq100 } from '@/app/requests';

export default function Nasdaq100Page() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNasdaq100()
      .then((groupedData) => {
        setData(groupedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || 'Unknown error');
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="p-4">Loading...</p>;
  if (error) return <p className="p-4 text-red-500">Error: {error}</p>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">NASDAQ-100 ESG Metrics</h1>
      <table className="w-full border-collapse border border-gray-300 text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-3 py-2">Company</th>
            <th className="border px-3 py-2">Metric</th>
            <th className="border px-3 py-2">Value</th>
            <th className="border px-3 py-2">Percentile</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(data).map(([company, metrics]) =>
            metrics.map((item, idx) => (
              <tr key={`${company}-${idx}`} className="hover:bg-gray-50">
                <td className="border px-3 py-2">{item.company_name}</td>
                <td className="border px-3 py-2">{item.metric_name}</td>
                <td className="border px-3 py-2">{item.metric_value.toLocaleString()}</td>
                <td className="border px-3 py-2">{(item.percentile * 100).toFixed(2)}%</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}