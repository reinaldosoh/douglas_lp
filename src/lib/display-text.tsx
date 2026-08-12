const NUMERIC_TOKEN = /(R\$|\d[\d,.]*|[+°%])/g;

function isNumericToken(part: string) {
  return /^(R\$|\d[\d,.]*|[+°%])$/.test(part);
}

export function DisplayText({ children }: { children: string }) {
  const parts = children.split(NUMERIC_TOKEN).filter((part) => part.length > 0);

  return (
    <>
      {parts.map((part, index) =>
        isNumericToken(part) ? (
          <span key={index} className="font-display-nums">
            {part}
          </span>
        ) : (
          <span key={index}>{part}</span>
        ),
      )}
    </>
  );
}
