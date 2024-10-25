// frontend/src/components/ProgressBar.jsx
import React from 'react';

const ProgressBar = ({ label, percentage }) => {
  return (
    <div className="w-full">
      <p className="text-gray-700 font-medium mb-1">{label}</p>
      <div className="w-full bg-gray-200 rounded-full h-4">
        <div
          className="bg-green-500 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <p className="text-sm text-gray-500 mt-1">{percentage}%</p>
    </div>
  );
};

export default ProgressBar;