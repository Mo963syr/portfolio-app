import { useState, useEffect } from 'react';
import type { PortfolioData } from '../types/Portfolio';

export const usePortfolioData = () => {
  const [data, setData] = useState<PortfolioData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("🚀 Starting data fetch process...");
        
        // تحقق من مسار الطلب
        console.log("🔍 Fetching from: /api/portfolio");
        
       // في usePortfolioData.ts
const response = await fetch('/api/portfolio', {
  method: 'GET',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});
        
        console.log("📡 Response status:", response.status);
        
        if (!response.ok) {
          console.error(`❌ HTTP error! status: ${response.status}`);
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const jsonData = await response.json();
        console.log("✅ Data successfully received:", jsonData);
        
        setData(jsonData);
      } catch (err) {
        console.error("❌ Fetch error details:", err);
        setError(err instanceof Error ? err.message : 'An error occurred during data fetching');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};