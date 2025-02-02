"use client";
import { useTheme } from "next-themes";
import CsLineIcons from '@/shared/lib/cs-line-icons/CsLineIcons';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}  
    >
      <span className="sr-only">Toggle mode</span>
        <div className="p-1 ml-2 rounded-lg cursor-pointer hover:bg-neutral-100 dark:bg-neutral-800">
        <CsLineIcons icon={theme === 'dark' ? 'moon' : 'sun'} stroke="1" fill="#facc13" />
      </div>
    </button>
  );
}
