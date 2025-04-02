"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import {Code2, ChefHat, Baby, Gamepad, Music, Book, }from "lucide-react"

export function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 sm:py-32 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
           {/* 自己紹介セクション */}
           <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="relative aspect-[4/3] lg:aspect-[3/4]">
              <Image
                src="/IMG_prof.JPG"
                alt="プロフィール画像"
                fill
                className="object-cover rounded-2xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                自己紹介
              </h2>
              
              <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  自分は元々飲食店で4年半、店長職を勤めていました。
                  その中で、デザインの魅力やWebページの制作等に興味を持ち、
                  Webデザイナーへの道を進みました。
                </p>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  0からスタートの中、スクールに通い基礎的な技術を身につけた後、
                  ECサイトの更新やホームページ、バナーの作成を行いながら
                  たくさんのことに関わらせていただいていました。
                </p>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  様々な経験を経て、当時の自分が解決することが出来なかったことに対して
                  「もっと技術的なスキルを身につけたい」と思い、
                  新たにバックエンドやセキュリティ分野を学び、
                  エンジニアとしてのスキルを日々磨いています。
                </p>

                <p className="text-lg leading-relaxed text-gray-600 dark:text-gray-300">
                  1つのことに対して、熱意と情熱を持って取り組むことが得意な人間です。
                  また、自分が知らない新しいモノ・コトに触れることが楽しく、
                  休みの日や時間があるときには気になることについて調べたりしながら、
                  日々学んでいます。
                </p>
              </div>
            </div>
          </div>

          {/* 趣味セクション */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
              趣味
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* プログラミング */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Code2 className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">プログラミング</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  現在学習しているJava/SQL/Webアプリケーションの復習や、学んだ内容を基にしたプログラムの作成などを行っています。
                </p>
              </div>

              {/* 料理 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">料理</h4>
                <p className="text-gray-600 dark:text-gray-300">
                 飲食店の経験から料理をすることが好きで、時短で美味しい料理を作るのが得意です。
                </p>
              </div>

              {/* 娘と遊ぶ */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Baby className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">おでかけ</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  休みの日は、娘と一緒に外へお出かけしたり遊びにいくことも好きです。
                </p>
              </div>

              {/* ゲーム */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Gamepad className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">ゲーム</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  PlayStationやNintendoSwitch、またスマートフォンのゲーム等をプレイすることが大好きです。
                </p>
              </div>

              {/* 音楽 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Music className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">音楽鑑賞</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  J-pop、J-rock、その他インストルメンタル系の音楽を聴くことが好きで、野外フェスに行くことが毎年の楽しみです。
                </p>
              </div>

              {/* 読書 */}
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center">
                  <Book className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white">読書</h4>
                <p className="text-gray-600 dark:text-gray-300">
                  技術系の書籍や資格取得の本、またマーケティングの本を読んだりしています。漫画を読むのも大好きです！
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}