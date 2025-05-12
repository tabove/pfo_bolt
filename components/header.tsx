"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// トップページ用のアンカーリンク
const topNavigation = [
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

const menuVariants = {
  closed: {
    opacity: 0,
    x: "100%",
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const menuItemVariants = {
  closed: { x: 50, opacity: 0 },
  open: (i: number) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.3,
    },
  }),
};

{/* ヘッダーメニュー  */}
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  // ナビゲーションリンクをクリックしたときの処理
  const handleNavClick = (href: string) => {
    closeMenu();

    // トップページ以外からのリンクの場合
    if (!isTopPage && href.startsWith('/#')) {
      // ハッシュを取得
      const hash = href.substring(1);
      // トップページに移動してからハッシュにスクロール
      router.push("/");
      
      // ページ遷移後にスクロール処理を行うために少し遅延させる
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      
      return;
    }
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
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
          <motion.div
              initial={false}
              animate={mobileMenuOpen ? "open" : "closed"}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </motion.div>
          </Button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-600 dark:text-gray-100 dark:hover:text-green-400 transition-colors duration-200"
              onClick={(e) => {
                if (!isTopPage && item.href.includes('#')) {
                  e.preventDefault();
                  handleNavClick(`/${item.href}`);
                }
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* モバイルメニュー - Tailwindクラスを使用した全画面表示 */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="mobile-menu-fullscreen"
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
              {navigation.map((item, i) => (
                <motion.div
                  key={item.name}
                  custom={i}
                  variants={menuItemVariants}
                  className="w-full max-w-md"
                >
                  <Link
                    href={item.href}
                    className="mobile-menu-item group flex items-center justify-center gap-2"
                    onClick={(e) => {
                      if (!isTopPage && item.href.includes('#')) {
                        e.preventDefault();
                        handleNavClick(`/${item.href}`);
                      } else {
                        closeMenu();
                      }
                    }}
                  >
                    <span className="mobile-menu-icon">•</span>
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}