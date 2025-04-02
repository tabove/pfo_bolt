"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {Card, CardContent, CardDescription, CardHeader, CardTitle}from"@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {Github, ExternalLink} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const projects = [
    {
        title: "Project One",
        description: "A full-stack web application built with Next.js and Supabase",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
        githubUrl: "https://github.com/yourusername/project-one",
        liveUrl: "https://project-one.com",
    },
    {
        title: "Project Two",
        description: "Mobile-first e-commerce platform with real-time updates",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        tags: ["React Native", "Node.js", "MongoDB", "Socket.io"],
        githubUrl: "https://github.com/yourusername/project-two",
        liveUrl: "https://project-two.com",
    },
    {
        title: "Project Three",
        description: "AI-powered content management system",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80",
        tags: ["Python", "Django", "React", "OpenAI"],
        githubUrl: "https://github.com/yourusername/project-three",
        liveUrl: "https://project-three.com",
      },
    ];
    
    export function Work() {
      const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
      });
    
      return (
        <section
          id="work"
          ref={ref}
          className="py-24 sm:py-32 bg-gray-50 dark:bg-gray-800"
        >
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl text-center mb-16">
                制作実績
              </h2>
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project, index) => (
                  <Card key={index} className="overflow-hidden">
                    <div className="relative h-48">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                          <Badge key={tag} variant="secondary">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-4">
                        <Link
                          href={project.githubUrl}
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                          <Github className="h-5 w-5" />
                        </Link>
                        <Link
                          href={project.liveUrl}
                          className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100"
                        >
                          <ExternalLink className="h-5 w-5" />
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
      );
    }