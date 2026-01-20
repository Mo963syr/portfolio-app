import { useState, useEffect } from 'react';
import { usePortfolioData } from './hooks/usePortfolioData';
import Home from './pages/Home';

// التأكد من أن التصدير افتراضي (default export)
function App() {
  const { data, loading, error } = usePortfolioData();
  
  useEffect(() => {
    console.log("App component mounted");
    console.log("Loading state:", loading);
    console.log("Error state:", error);
    console.log("Data state:", data);
  }, [data, loading, error]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-300 text-lg">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    console.error("App error:", error);
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-center p-8 bg-red-900/20 border border-red-500 rounded-xl max-w-md">
          <h2 className="text-2xl font-bold text-red-400 mb-2">Error</h2>
          <p className="text-gray-300 mb-4">{error || 'No portfolio data available'}</p>
          <button 
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return <Home data={data} />;
}

// التصدير الافتراضي الصحيح
export default App;