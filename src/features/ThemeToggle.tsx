"use client";
import { useTheme } from "next-themes";
import CsLineIcons from '@/shared/lib/cs-line-icons/CsLineIcons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      className="pb-4"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      <span className="sr-only">Toggle mode</span>
      <div className="p-1 ml-2 rounded-lg cursor-pointer ">
      <CsLineIcons icon={theme === 'dark' ? 'sun' : 'moon'} stroke="1" fill="#facc13" />
      </div>
    </button>
  );
}