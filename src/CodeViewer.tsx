import React, { useState } from "react";
import { FiCopy } from "react-icons/fi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface CodeViewerProps {
  code: string;
}

const CodeViewer: React.FC<CodeViewerProps> = ({ code }) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("Failed to copy code: ", err);
    }
  };

  return (
    <div style={{ position: "relative", width: "100%" }}>
      <SyntaxHighlighter
        language="typescript"
        style={vscDarkPlus}
        customStyle={{
          padding: "16px",
          borderRadius: "8px",
          fontSize: "14px",
          overflow: "auto",
          whiteSpace: "pre-wrap",
          wordWrap: "break-word",
        }}
      >
        {code}
      </SyntaxHighlighter>
      <button
        onClick={handleCopy}
        style={{
          position: "absolute",
          top: "8px",
          right: "8px",
          backgroundColor: "transparent",
          border: "none",
          color: "white",
          cursor: "pointer",
          zIndex: 10,
        }}
        title="Copy to clipboard"
      >
        <FiCopy size={20} />
      </button>
      {copySuccess && (
        <span
          style={{
            position: "absolute",
            top: "40px",
            right: "8px",
            color: "white",
            fontSize: "0.9rem",
          }}
        >
          Copied!
        </span>
      )}
    </div>
  );
};

export default CodeViewer;
