// 다크모드 적용 관련
'use client';
import { useState, useEffect } from 'react';
import { Switch } from '../ui/switch';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from 'next-themes';

export default function DarkMode() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return (
    <div className="bg-accent fixed right-5 bottom-5 rounded-xl">
      <Switch
        className="my-2 cursor-pointer"
        checked={theme === 'dark'}
        onCheckedChange={values => setTheme(values ? 'dark' : 'light')}
      />
      <span>{theme === 'dark' ? <Moon className="m-auto" /> : <Sun className="m-auto" />}</span>
    </div>
  );
}
