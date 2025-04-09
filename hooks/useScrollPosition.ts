"use client";

import { useEffect, useCallback } from 'react';


    // ページロード時に保存された位置を復元
export function useScrollPosition() {
    const saveScrollPosition = useCallback((position: number) => {
        try {
        localStorage.setItem('scrollPosition', position.toString());
        } catch (error) {
        console.error('Failed to save scroll position:', error);
        }
    }, 
    []);

    const restoreScrollPosition = useCallback(() => {
        try {
            const savedPosition = localStorage.getItem('scrollPosition');
            if (savedPosition) {
            window.scrollTo(0, parseInt(savedPosition));
            localStorage.removeItem('scrollPosition');
            }
        } catch (error) {
            console.error('Failed to restore scroll position:', error);
        }
        }, 
    []);

    // 外部リンクをクリックした時の位置を保存
    const handleExternalClick = useCallback((e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        
        if (link && !link.getAttribute('href')?.startsWith('#')) {
          saveScrollPosition(window.scrollY);
        }
      }, [saveScrollPosition]);
    
      useEffect(() => {
        restoreScrollPosition();
        document.addEventListener('click', handleExternalClick);
    
    return () => {
        document.removeEventListener('click', handleExternalClick);
    };
    }, [handleExternalClick, restoreScrollPosition]);
}