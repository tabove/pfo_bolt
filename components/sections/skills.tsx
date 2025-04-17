"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Server, Terminal, Award, Check } from "lucide-react";
import Image from "next/image"; 

const skillCategories = [
  {
    title: "フロントエンド開発",
    icon: <Code2 className="h-6 w-6" />,
    skills: [
      {
        name: "React/Next.js",
        details: [
          "コンポーネント設計とフック活用",
          "それぞれのフレームワークの利点を活かした設計",
          "パフォーマンス最適化やコード分割",
          "ContextとReduxによる状態管理",
        ],
      },
      {
        name: "TypeScript",
        details: [
          "型安全性とインターフェース設計",
          "ジェネリクスとユーティリティ型の活用",
          "Reactとの統合実装",
          "Javascriptとの相互換"
        ],
      },
      {
        name: "モダンCSS",
        details: [
          "Tailwind CSSとCSS-in-JS",
          "レスポンシブデザインパターン",
          "CSS GridとFlexboxの活用",
          "アニメーションとトランジション",
        ],
      },
    ],
  },
  {
    title: "バックエンド開発",
    icon: <Server className="h-6 w-6" />,
    skills: [
      {
        name: "Node.js",
        details: [
          "ExpressとFastifyフレームワークの導入",
          "RESTful API設計",
          "認証と認可の実装",
          "ミドルウェア開発",
        ],
      },
      {
        name: "データベース",
        details: [
          "RDBMSの設計、導入（PostgreSQL、MySQL）",
          "クエリ最適化",
          "キャッシュ管理",
          "クラウドデータベース設計",
        ],
      },
      {
        name: "Java/Web API",
        details: [
          "Java EE/Jakarta EE",
          "Webアプリケーション開発(JSP,サーブレット)",
          "Spring Boot アプリケーション開発",
          "基礎プログラミング設計",
        ],
      },
    ],
  },
  {
    title: "UI/UXデザイン",
    icon: <Palette className="h-6 w-6" />,
    skills: [
      {
        name: "デザインツール",
        details: [
          "Adobe Creative suiteの活用",
          "Adobe Illustratoer, PhotoShop, XD, IN Design設計",
          "プロトタイピングツール",
          "デザインシステム構築",
        ],
      },
      {
        name: "デザイン原則",
        details: [
          "ユーザビリティの追求",
          "アクセシビリティの考慮",
          "レスポンシブデザイン",
          "レイアウトとタイポグラフィ",
        ],
      },
      {
        name: "ユーザーリサーチ",
        details: [
          "アナリティクス、データ分析",
          "ユーザビリティ分析",
          "A/Bテスト",
          "Google Adwords"
          
        ],
      },
    ],
  },
  {
    title: "Skills in Progress",
    icon: <Terminal className="h-6 w-6" />,
    skills: [
      {
        name: "実践的な開発演習",
        details: [
          "Gitワークフローの管理",
          "ブランチ活用",
          "コードレビューの実施",
          "Github DesktopやGithub Copilotの活用",
        ],
      },
      {
        name: "セキュリティ",
        details: [
          "Try HackMeでのサイバーセキュリティ演習",
          "Hack the Boxを使った実践的なCTFチャレンジ",
          "OWASP ZAPを活用した脆弱性診断",
          "セキュアコーディングの学習",
        ],
      },
      {
        name: "クラウドサービス",
        details: [
          "AWS主要サービス(Azure、DynamoDB,S3、Lambda)",
          "サーバーレスアーキテクチャ",
          "クラウドセキュリティ",
          "Infrastructure as Code",
        ],
      },
    ],
  },
];

const certifications = [
  {
    title: "Javaプログラミング能力認定試験 2級",
    issuer: "サーティファイ 情報処理能力検定",
    issueDate: "2025",
    imageUrl: "https://www.openbadge-global.com/api/v1/image/assertion/cVRwaGdlRG0xVis1Y3RJbGhhelJQdz09",
    badgeUrl: "https://www.openbadge-global.com/api/v1.0/openBadge/v2/Wallet/Public/GetAssertionShare/cVRwaGdlRG0xVis1Y3RJbGhhelJQdz09",
  },
  // 必要に応じて資格を追加
];

export function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 sm:py-32 bg-white dark:bg-gray-900"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center mb-16">
            スキルと専門知識
          </h2>
          
          {/* スキルグリッド */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {skillCategories.map((category, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-2 rounded-lg bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-6">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <h4 className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </h4>
                        <ul className="space-y-1">
                          {skill.details.map((detail, detailIndex) => (
                            <li
                              key={detailIndex}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                              <Check className="h-4 w-4 mt-0.5 flex-shrink-0 text-green-500" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 資格セクション */}
          <div className="mt-24">
            <div className="flex items-center justify-center gap-3 mb-12">
              <Award className="h-8 w-8 text-green-600 dark:text-green-400" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                資格＆認定
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <motion.a
                  key={index}
                  href={cert.badgeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="relative w-full aspect-square mb-4 rounded-lg overflow-hidden">
                      <Image
                           src={cert.imageUrl}
                           alt={cert.title}
                           width={340}
                           height={340}
                           className="object-contain transform group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {cert.issuer}
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        取得年 {cert.issueDate}
                      </p>
                    </CardContent>
                  </Card>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}