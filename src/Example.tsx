import React, { useState } from 'react';
import CodeViewer from './CodeViewer';
import './main.css';

interface ExampleProps {
  designCode: string;
  children: React.ReactNode;
}

const Example: React.FC<ExampleProps> = ({ designCode, children }) => {
  const [showCode, setShowCode] = useState(false);

  const handleToggleCode = () => {
    setShowCode(!showCode);
    console.log('showCode is now:', !showCode); // Debugging line
  };

  return (
    <div className="example-container">
      {children}

      {/* Button to toggle code visibility */}
      <button onClick={handleToggleCode} className="toggle-button">
        {showCode ? 'Hide Code' : 'View Code'}
      </button>

      {/* Conditionally render the CodeViewer */}
      {showCode && (
        <div className="code-viewer">
          <CodeViewer code={designCode} />
        </div>
      )}
    </div>
  );
};

export default Example;
