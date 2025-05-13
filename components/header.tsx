"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

// トップページ用のアンカーリンク
const topNavigation = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

{/* ヘッダーメニュー  */}
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hasRestoredPosition, setHasRestoredPosition] = useState(false);
  const savedScrollPosition = useRef(0);
  const headerRef = useRef<HTMLElement>(null);
  
  const pathname = usePathname();
  const router = useRouter();
  const isTopPage = pathname === "/";

  // 現在のパスに基づいてナビゲーションリンクを設定
  const navigation = topNavigation.map(item => {
    if (isTopPage) {
      // トップページではそのままハッシュリンクを使用
      return item;
    } else {
      // トップページ以外では、トップページへ戻ってからハッシュへジャンプ
      return {
        ...item,
        href: `/${item.href}`,
      };
    }
  });

  // ページロード時のスクロール位置復元を制御するuseEffect
  useEffect(() => {
    // スクロール位置を復元する前にフラグをチェック
    if (!hasRestoredPosition) {
      // sessionStorage からスクロール位置を取得
      const savedPosition = sessionStorage.getItem('scrollPosition');
      
      if (savedPosition !== null) {
        // 少し遅延させてDOM構築後にスクロール
        setTimeout(() => {
          window.scrollTo(0, parseInt(savedPosition));
          setHasRestoredPosition(true);
        }, 100);
      } else {
        setHasRestoredPosition(true);
      }
    }
    
    // ページを離れる前にスクロール位置を保存
    const handleBeforeUnload = () => {
      // モバイルメニューが開いている場合は保存しない
      if (!mobileMenuOpen) {
        sessionStorage.setItem('scrollPosition', window.scrollY.toString());
      }
    };
    
    window.addEventListener('beforeunload', handleBeforeUnload);
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, [hasRestoredPosition, mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    
    // 初期ロード時にハッシュがある場合の処理
    if (isTopPage && window.location.hash) {
      setTimeout(() => {
        const id = window.location.hash.substring(1);
        scrollToSection(`#${id}`);
      }, 100);
    }
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isTopPage]);

  // モバイルメニューuseEffect
  useEffect(() => {
    if (mobileMenuOpen) {
      // メニューを開く前に現在のスクロール位置を保存
      savedScrollPosition.current = window.scrollY;
      
      // スクロールをロック
      document.body.style.position = 'fixed';
      document.body.style.top = `-${savedScrollPosition.current}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // スクロールロックを解除
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      // 保存したスクロール位置に戻る（メニューが閉じられた場合のみ）
      if (savedScrollPosition.current > 0) {
        window.scrollTo(0, savedScrollPosition.current);
        savedScrollPosition.current = 0;
      }
    }
  }, [mobileMenuOpen]);

  // セクションへのスクロール処理
  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      const headerHeight = headerRef.current?.offsetHeight || 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight - 20; // 余白も追加
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // ナビゲーションリンクをクリックしたときの処理
  const handleNavClick = (href: string) => {
    // 現在のスクロール位置を一時的に消去
    // これによりページ間移動時に誤った位置が保存されるのを防ぐ
    sessionStorage.removeItem('scrollPosition');
    
    closeMenu();

    // トップページ以外からのリンクの場合
    if (!isTopPage && href.startsWith('/#')) {
      // ハッシュを取得
      const hash = href.substring(1);
      // トップページに移動してからハッシュにスクロール
      router.push("/");
      
      // ページ遷移後にスクロール処理を行うための遅延
      setTimeout(() => {
        scrollToSection(hash);
      }, 200); // 少し長めの遅延を設定
      
      return;
    } else if (isTopPage && href.startsWith('#')) {
      // トップページでのアンカーリンクの場合
      setTimeout(() => {
        scrollToSection(href);
      }, 50); // 短い遅延でUIの応答性を維持
      return;
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 w-full z-40 transition-all duration-300",
        isScrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 text-2xl font-bold text-green-600">
            TH
          </Link>
        </div>
        <div className="flex lg:hidden">
          <Button
            variant="ghost"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 dark:text-gray-100 dark:hover:text-green-400 transition-colors duration-200"
              onClick={(e) => {
                if (item.href.includes('#')) {
                  e.preventDefault();
                  if (!isTopPage) {
                    handleNavClick(`/${item.href}`);
                  } else {
                    handleNavClick(item.href);
                  }
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* モバイルメニュー */}
      {mobileMenuOpen && (
        <div 
          className="mobile-menu-fullscreen"
          aria-modal="true"
          role="dialog"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 }}
        >
          <div className="mobile-menu-header">
            <Link
              href="/"
              className="-m-1.5 p-1.5 text-2xl font-bold text-green-600"
              onClick={closeMenu}
            >
              TH
            </Link>
            <Button
              variant="ghost"
              className="-m-2.5 rounded-md p-2.5"
              onClick={closeMenu}
            >
              <span className="sr-only">Close menu</span>
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>
          
          <div className="mobile-menu-content">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="w-full max-w-md my-2"
              >
                <Link
                  href={item.href}
                  className="mobile-menu-item group flex items-center justify-center gap-2"
                  onClick={(e) => {
                    if (item.href.includes('#')) {
                      e.preventDefault();
                      closeMenu(); // 先にメニューを閉じる
                      // setTimeout を使って、メニューが閉じた後にナビゲーションを実行
                      setTimeout(() => {
                        if (!isTopPage) {
                          router.push(`/${item.href}`);
                        } else {
                          scrollToSection(item.href);
                        }
                      }, 100);
                    } else {
                      closeMenu();
                    }
                  }}
                >
                  <span className="mobile-menu-icon">•</span>
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}