'use client'
import {SunIcon, MoonIcon} from '@heroicons/react/24/solid'
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function DarkModeToglle() {
    const [mounted, setMounted] = useState(false);
    const { systemTheme, theme, setTheme} = useTheme();

    useEffect(() => {
        setMounted(true);
        setTheme("dark");
    }, [setTheme]);
    if (!mounted) {
        return null;
    }
    const currentTheme = theme === "system" ? systemTheme : theme;
  return (
    <div>
        {currentTheme === "dark" ? (
            <SunIcon onClick={() => setTheme("ligth")} className='h-4 w-4 cursor-pointer text-yellow-400' />
        ) : (
            <MoonIcon onClick={() => setTheme("dark")} className='h-4 w-4 cursor-pointer text-slate-900' />
        )}
    </div>
  )
}

export default DarkModeToglle