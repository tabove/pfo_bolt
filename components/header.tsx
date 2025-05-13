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

  useEffect(() => {
    // モバイルメニューの開閉状態に応じてスクロールをロック/解除
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
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
      }, 100);
      
      return;
    } else if (isTopPage && href.startsWith('#')) {
      // トップページでのアンカーリンクの場合
      scrollToSection(href);
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
                className="w-full max-w-md"
              >
                <Link
                  href={item.href}
                  className="mobile-menu-item group flex items-center justify-center gap-2"
                  onClick={(e) => {
                    if (item.href.includes('#')) {
                      e.preventDefault();
                      if (!isTopPage) {
                        handleNavClick(`/${item.href}`);
                      } else {
                        handleNavClick(item.href);
                      }
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