"use client"

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Code, Rocket, Brain } from "lucide-react";

export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-b from-green-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* 装飾的な背景要素 */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-72 h-72 -top-24 -left-24 bg-green-200/20 rounded-full blur-3xl" />
        <div className="absolute w-72 h-72 -bottom-24 -right-24 bg-green-200/20 rounded-full blur-3xl" />
      </div>

      {/* アイコンの装飾 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{
            y: [0, -10, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4"
        >
          <Code className="w-8 h-8 text-green-500/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, 10, 0],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-1/3 right-1/4"
        >
          <Rocket className="w-8 h-8 text-green-500/30" />
        </motion.div>
        <motion.div
          animate={{
            y: [0, -8, 0],
            rotate: [0, 3, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/3"
        >
          <Brain className="w-8 h-8 text-green-500/30" />
        </motion.div>
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl dark:text-white mb-6">
            <span className="text-green-600 dark:text-green-400">エンジニア</span>として
            <br className="sm:hidden" />
            <span className="text-green-600 dark:text-green-400">学び</span>と
            <span className="text-green-600 dark:text-green-400">創造</span>を
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            フロントエンド開発をはじめ、バックエンド設計やセキュリティ対策を学び
            <br className="hidden sm:block" />
            様々な分野で活躍できるようなエンジニアを目指しています。
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-8 text-sm text-gray-500 dark:text-gray-400"
          >
            技術に触れることが楽しいと思えるようなワクワク感を常に忘れないように心がけています。
          </motion.div>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              asChild
              className="bg-green-600 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-600"
            >
              <a href="#contact">お問い合わせ</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#work">制作実績を見る</a>
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-8 z-10"
      >
        <Button
          variant="ghost"
          size="icon"
          className="animate-bounce"
          onClick={() => {
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </motion.div>
    </section>
  );
}