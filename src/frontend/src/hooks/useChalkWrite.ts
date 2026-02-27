import { useState, useEffect, useRef } from 'react';

interface UseChalkWriteReturn {
  revealedLines: string[];
  isAnimating: boolean;
  currentLineIndex: number;
}

export function useChalkWrite(
  lines: string[],
  speed: number = 25
): UseChalkWriteReturn {
  const [revealedLines, setRevealedLines] = useState<string[]>(() =>
    lines.map(() => '')
  );
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const animationRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    // Reset
    setRevealedLines(lines.map(() => ''));
    setCurrentLineIndex(0);

    if (!lines.length) {
      setIsAnimating(false);
      return;
    }

    setIsAnimating(true);

    let lineIdx = 0;
    let charIdx = 0;
    let cancelled = false;

    function tick() {
      if (cancelled) return;

      if (lineIdx >= lines.length) {
        setIsAnimating(false);
        return;
      }

      const currentLine = lines[lineIdx];

      if (charIdx <= currentLine.length) {
        const revealed = currentLine.slice(0, charIdx);
        const capturedLine = lineIdx;
        setRevealedLines((prev) => {
          const next = [...prev];
          next[capturedLine] = revealed;
          return next;
        });
        setCurrentLineIndex(lineIdx);
        charIdx++;
        animationRef.current = setTimeout(tick, speed);
      } else {
        lineIdx++;
        charIdx = 0;
        animationRef.current = setTimeout(tick, speed * 4);
      }
    }

    tick();

    return () => {
      cancelled = true;
      if (animationRef.current) {
        clearTimeout(animationRef.current);
      }
    };
  }, [lines, speed]);

  return { revealedLines, isAnimating, currentLineIndex };
}
