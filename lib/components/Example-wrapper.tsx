import React from "react"
import { CodeBlock, anOldHope } from "react-code-blocks"
import jsxToString from "react-element-to-jsx-string"
import { ChevronUp, ChevronDown } from "lucide-react"

type FixtureWrapperProps = {
  children: React.ReactNode
}

export function ExampleWrapper({ children }: FixtureWrapperProps) {
  let codeString = jsxToString(children)

  // Handle nested HOCs and format the code string
  codeString = codeString
    .replace(/<\w+\([^<>]*?(\w+)Base\)([^>]*)>/g, "<$1$2>")
    .replace(/<\w+\([^<>]*?(\w+)Base\)([^>]*)?\/>/g, "<$1$2/>")
    .replace(/<(\w+)\)\s*([^>]*)>/g, "<$1 $2>")
    .replace(/<\/\w+(?:\(\w+)*\((\w+)Base\)\)>/g, "</$1>")
    .replace(/<(\w+)\s*\)\s*([^>]*)>/g, "<$1 $2>")

  // Format array and object props as single lines
  codeString = codeString
    .replace(
      /(\w+)=\{\s*\[(.*?)\]\s*\}/gs,
      (match, propName, inner) =>
        `${propName}={[${inner.replace(/\s+/g, " ").trim()}]}`,
    )
    .replace(
      /(\w+)=\{\s*\{\s*(.*?)\s*\}\s*\}/gs,
      (match, propName, inner) =>
        `${propName}={{${inner.replace(/\s+/g, " ").trim()}}}`,
    )

  const [showCode, setShowCode] = React.useState(false)

  return (
    <div>
      <div
        style={{
          position: "absolute",
          background: showCode
            ? "rgba(255, 255, 255, 0.9)"
            : "rgba(0, 0, 0, 0.0)",
          borderRadius: "0px 0px 20px 20px",
          top: "4px",
          right: "5px",
          padding: "2px 3px",
          border: "1px solid rgba(0,0,0,0.3)",
        }}
      >
        <button
          style={{
            border: "none",
            position: "absolute",
            width: "120px",
            fontSize: "13px",
            fontWeight: "500",
            height: "30px",
            borderRadius: "0px 0px 8px 8px",
            background: showCode
              ? "rgba(0, 0, 0, 0.0)"
              : "rgba(255, 255, 255, 0.9)",
            top: "0px",
            right: "9px",
            alignContent: "center",
            justifyContent: "space-around",
            display: "flex",
            padding: "8px 8px",
            cursor: "pointer",
          }}
          onClick={() => setShowCode(!showCode)}
        >
          {showCode ? "Hide Code" : "Show Code"}
          {showCode ? (
            <ChevronUp strokeWidth={4} size={16} />
          ) : (
            <ChevronDown strokeWidth={4} size={16} />
          )}
        </button>

        {showCode && (
          <pre
            style={{
              zIndex: 1,
              borderRadius: "8px",
              padding: "2px",
              marginTop: "40px",
            }}
          >
            <CodeBlock language="jsx" text={codeString} theme={anOldHope} />
          </pre>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}
