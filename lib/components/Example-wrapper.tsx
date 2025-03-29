import React from "react"
import { CodeBlock, anOldHope } from "react-code-blocks"
import { ChevronUp, ChevronDown } from "lucide-react"

type FixtureWrapperProps = {
  children: React.ReactNode
  fileName: string
}

export function ExampleWrapper({ children, fileName }: FixtureWrapperProps) {
  const [showCode, setShowCode] = React.useState(false)
  const [codeString, setCodeString] = React.useState<string | null>(null)

  React.useEffect(() => {
    if (showCode && codeString === null) {
      fetch(`/code-examples/${fileName}`)
        .then((response) => response.text())
        .then((data) => setCodeString(data))
        .catch((error) => console.error("Error fetching code:", error))
    }
  }, [showCode, codeString, fileName])

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
            transition: "background-color 0.9s ease",
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

        {showCode && codeString && (
          <pre
            style={{
              zIndex: 1,
              margin: "30px 5px 9px 5px",
            }}
          >
            <CodeBlock
              customStyle={{
                padding: "20px",
                borderRadius: "0px 0px 20px 20px",
              }}
              language="jsx"
              text={codeString}
              theme={anOldHope}
            />
          </pre>
        )}
      </div>
      <div>{children}</div>
    </div>
  )
}
