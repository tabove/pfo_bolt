"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

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
          className="grid grid-cols-1 gap-12 lg:grid-cols-2"
        >
          <div className="relative aspect-[4/3] lg:aspect-[3/4]">
            <Image
              src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80"
              alt="Profile"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              About Me
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              I'm a passionate software engineer with a love for creating elegant solutions
              to complex problems. When I'm not coding, you can find me running trails
              or exploring new technologies.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
              With over X years of experience in software development, I've worked on
              various projects ranging from web applications to mobile apps. I'm
              particularly interested in user experience and performance optimization.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}