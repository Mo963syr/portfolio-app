import { useState, useEffect } from 'react';
import type { PortfolioData } from '../types/Portfolio';

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('🚀 Starting data fetch process...');

        const response = await fetch(
          'https://api.moafaqaqeed.synerycode.com/portfolio/api/portfolio'
        );
        console.log('🚀 تم الاتصال بالخادم بنجاح');
        console.log('📡 Response status:', response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log('✅ Data successfully received:', jsonData);

        setData(jsonData);
      } catch (err) {
        console.error('❌ Fetch error details:', err);
        setError(err instanceof Error ? err.message : 'Fetch error');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};
