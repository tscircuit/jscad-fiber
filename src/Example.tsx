import React, { useState } from "react";
import jsxToString from "react-element-to-jsx-string";
import CodeViewer from "./CodeViewer";
import "./main.css";

interface ExampleProps {
  children: React.ReactNode;
}

const Example: React.FC<ExampleProps> = ({ children }) => {
  const [showCode, setShowCode] = useState(false);

  const handleToggleCode = () => setShowCode(!showCode);

  // Convert children to JSX string
  const designCode = jsxToString(children, {
    useFunctionCode: true,
    functionNameOnly: true,
  });

  return (
    <div className="example-container">
      {children}
      <button onClick={handleToggleCode} className="toggle-button">
        {showCode ? "Hide Code" : "View Code"}
      </button>
      {showCode && (
        <div className="code-viewer">
          <CodeViewer code={designCode} />
        </div>
      )}
    </div>
  );
};

export default Example;
