"use client";

import { projects } from "@/config/data";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiExternalLink } from "react-icons/fi";
import { notFound } from "next/navigation";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-6xl mx-auto p-6 lg:p-8 bg-background text-foreground">
      {/* Back Button */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
        >
          <FiArrowLeft className="w-5 h-5" />
          Back to Portfolio
        </Link>
      </motion.div>

      {/* Project Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-cyan-300 bg-clip-text text-transparent">
          {project.title}
        </h1>
        <div className="flex flex-wrap gap-4 items-center mb-6">
          {project.techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-3 py-1 rounded-lg bg-gray-800/50 border border-gray-700"
              >
                <Icon className={`w-5 h-5 ${tech.color}`} />
                <span className="text-sm text-gray-300">{tech.name}</span>
              </div>
            );
          })}
        </div>
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
          >
            <FiExternalLink className="w-5 h-5" />
            Play Game
          </a>
        )}
      </motion.div>

      {/* Video Section */}
      {project.videoUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="aspect-video rounded-xl overflow-hidden bg-black border border-blue-500/30">
            {project.videoUrl.includes('youtube.com') || project.videoUrl.includes('youtu.be') ? (
              <iframe
                width="100%"
                height="100%"
                src={`${project.videoUrl}?autoplay=1&loop=1&mute=1`}
                title={project.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            ) : (
              <video
                autoPlay
                loop
                muted
                controls
                className="w-full h-full"
                poster={project.image}
              >
                <source src={project.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        </motion.div>
      )}

      {/* Introduction Section */}
      {project.introduction && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Introduction</h2>
          <div className="h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent mb-6" />
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.introduction}
          </p>
        </motion.section>
      )}

      {/* About Section */}
      {project.about && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">About</h2>
          <div className="h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent mb-6" />
          <p className="text-gray-300 leading-relaxed text-lg">
            {project.about}
          </p>
        </motion.section>
      )}

      {/* Project Info Section */}
      {project.projectInfo && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Project Info</h2>
          <div className="h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent mb-6" />
          <div className="grid md:grid-cols-2 gap-6">
            {project.projectInfo.duration && (
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                <h3 className="text-blue-400 font-semibold mb-2">Duration</h3>
                <p className="text-gray-300">{project.projectInfo.duration}</p>
              </div>
            )}
            {project.projectInfo.role && (
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                <h3 className="text-blue-400 font-semibold mb-2">Role</h3>
                <p className="text-gray-300">{project.projectInfo.role}</p>
              </div>
            )}
            {project.projectInfo.teamSize && (
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                <h3 className="text-blue-400 font-semibold mb-2">Team Size</h3>
                <p className="text-gray-300">{project.projectInfo.teamSize}</p>
              </div>
            )}
            {project.projectInfo.platform && (
              <div className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                <h3 className="text-blue-400 font-semibold mb-2">Platform</h3>
                <p className="text-gray-300">{project.projectInfo.platform}</p>
              </div>
            )}
          </div>
        </motion.section>
      )}

      {/* What I Learned Section */}
      {project.whatILearned && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">What I Learned</h2>
          <div className="h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent mb-6" />
          <ul className="space-y-4">
            {project.whatILearned.map((item, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="text-blue-400 text-xl mt-1">•</span>
                <span className="text-gray-300 leading-relaxed">{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.section>
      )}

      {/* Gallery Section (if you want to add screenshots) */}
      {project.gallery && project.gallery.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-4 text-white">Gallery</h2>
          <div className="h-px bg-gradient-to-r from-blue-500/50 via-cyan-500/50 to-transparent mb-6" />
          <div className="grid md:grid-cols-2 gap-6">
            {project.gallery.map((image, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden border border-blue-500/30"
              >
                <Image
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </main>
  );
}
