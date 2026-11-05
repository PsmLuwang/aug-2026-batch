import { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const CodeExample = ({ code, language }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-800 bg-[#050914]">
      {/* Header */}
      <div className="flex items-center justify-between px-5 py-3">
        <span className="text-sm font-medium uppercase text-gray-400">
          {language}
        </span>

        <button
          onClick={handleCopy}
          className="text-gray-400 transition hover:text-white"
          title="Copy code"
        >
          {copied ? (
            <Check size={19} className="text-green-400" />
          ) : (
            <Copy size={19} />
          )}
        </button>
      </div>

      {/* Code */}
      <div className="code-scroll mx-1 mb-1 overflow-x-auto rounded-xl border border-gray-700">
        <SyntaxHighlighter
          language={language}
          style={oneDark}
          showLineNumbers={true}
          wrapLongLines={false}
          customStyle={{
            margin: 0,
            padding: "24px",
            background: "#1e202a",
            fontSize: "15px",
            lineHeight: "1.6",
            minWidth: "100%",
            width: "max-content"
          }}
          codeTagProps={{
            style: {
              fontFamily: "monospace",
            },
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeExample;
