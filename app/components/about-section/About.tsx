import React, { useEffect } from "react";
import Link from "next/link";
import { Syne } from "next/font/google";
import { useView } from "@/contexts/ViewContext";
import { useInView } from "react-intersection-observer";
import AnimatedBody from "../ui/AnimatedBody";
import AnimatedTitle from "../ui/AnimatedTitle";
import { SiC, SiCplusplus, SiPython, SiR, SiJavascript, SiHtml5, SiCss3, SiMysql,SiReact, SiExpress, SiNodedotjs,SiMongodb,SiGit, SiIntellijidea, SiEclipseide } from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { DiMysql } from "react-icons/di"; 
import { DiVisualstudio } from "react-icons/di";
import {motion} from "framer-motion"

const syne = Syne({ subsets: ["latin"] });

export default function About() {
  const { setSectionInView } = useView();

  const { ref, inView } = useInView({
    threshold: 0.2,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("about");
  }, [inView, setSectionInView]);

  return (
    <section ref={ref} className="pt-24 md:pt-[150px]" id="about">
      <AnimatedTitle
        wordSpace={"mr-[14px]"}
        charSpace={"mr-[0.001em]"}
        className={`uppercase ${syne.className} antialiased text-4xl md:text-5xl xl:text-6xl font-bold opacity-80`}
      >
       I Bring Creativity and Functionality Together in Development
      </AnimatedTitle>

      <div className="grid grid-cols-1 lg:grid-cols-[8.5fr_3.5fr] gap-8 mt-6">
        <div className="grid grid-cols-1 antialiased gap-6 text-white/80 text-xl md:text-2xl">
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          I am a passionate and detail-oriented full-stack developer with a strong focus on building efficient, scalable, and user-friendly applications. 
          My expertise lies in React, React Native, and Vite, where I have developed dynamic projects such as a real-time bus tracking system and an interactive travel recommendation website. 
          These projects highlight my ability to integrate real-time data processing, responsive design, and seamless animations to enhance the user experience. 
          </AnimatedBody>
          <AnimatedBody className="leading-[34px] md:leading-[39px]">
          Beyond development, I have a keen interest in data visualization and UI/UX design, ensuring that my applications are both visually appealing and highly intuitive.
           My experience working with graphs, charts, and analytics in applications has strengthened my ability to transform raw data into meaningful insights. 
          </AnimatedBody>
          <motion.div
      className="text-center px-6 py-12 max-w-3xl mx-auto bg-transparent"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ✅ Heading */}
      <h2 className="text-5xl font-extrabold text-gray-400 mb-12 tracking-wide">
        MY TECHNICAL JOURNEY
      </h2>

      {/* ✅ Journey Steps with Rotation + Lift */}
      <div className="space-y-8 text-lg leading-relaxed text-white">
        {[
          {
            title: "INTRODUCTION TO PROGRAMMING – C LANGUAGE",
            description:
              "Started my coding journey with C, learning fundamentals of programming, logic building, and problem-solving.",
          },
          {
            title: "ADVANCING WITH PYTHON",
            description:
              "Moved to Python, exploring its simplicity and power. Built a strong foundation in object-oriented programming and data manipulation.",
          },
          {
            title: "MASTERING JAVA",
            description:
              "Learned Java, focusing on OOP concepts, multithreading, and exception handling. Applied Java skills to DSA for problem-solving.",
          },
          {
            title: "FULL-STACK DEVELOPMENT – MERN STACK",
            description:
              "Started learning the MERN stack (MongoDB, Express.js, ReactJS, Node.js) to build dynamic web applications.",
          },
          {
            title: "EXPANDING INTO MOBILE DEVELOPMENT – REACT NATIVE",
            description:
              "Exploring React Native to develop cross-platform mobile applications. Currently working on interactive and scalable mobile apps.",
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="p-5 rounded-lg bg-blue-900/20 border border-blue-600 shadow-md transition-all duration-200 relative overflow-hidden"
            whileHover={{
              rotate: index % 2 === 0 ? -3 : 3, // Slight rotation
              y: -5, // Lift up
              scale: 1.02, // Slight zoom
            }}
            transition={{ type: "spring", stiffness: 250, damping: 15 }}
          >
            {/* ✅ Shimmer Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent opacity-0"
              whileHover={{ opacity: 1, x: ["-100%", "100%"] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            />

            {/* ✅ Title Styled */}
            <h3 className="font-bold text-blue-400 text-xl">{item.title}</h3>
            {/* ✅ Description Styled */}
            <p className="text-gray-300 mt-2">{item.description}</p>
          </motion.div>
        ))}
      </div>

      {/* ✅ Resume Link Styled */}
      <motion.div
        className="mt-10 text-lg text-blue-400 font-semibold underline hover:text-blue-500 transition duration-200"
        whileHover={{ scale: 1.15 }}
      >
        <Link
          href="https://drive.google.com/file/d/1_hsDcRoLE_2N6jV76tQGMmXxPO-HjrtC/view?usp=sharing"
          target="_blank"
        >
          MY RÉSUMÉ 
        </Link>
      </motion.div>
    </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Languages
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8 flex gap-4 flex-wrap">
  <SiC size={30} color="#A8B9CC" title="C" />
  <SiCplusplus size={30} color="#00599C" title="C++" />
  <FaJava size={30} color="#007396" title="Java" />
  <SiPython size={30} color="#3776AB" title="Python" />
  <SiR size={30} color="#276DC3" title="R" />
  <SiJavascript size={30} color="#F7DF1E" title="JavaScript" />
  <SiHtml5 size={30} color="#E34F26" title="HTML" />
  <SiCss3 size={30} color="#1572B6" title="CSS" />
  <SiMysql size={30} color="#4479A1" title="SQL" />
</AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              FrameWorks
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8 flex gap-4 flex-wrap">
  <SiReact size={30} color="#61DAFB" title="React" />
  <DiMysql size={30} color="#4479A1" title="MySQL" />
  <SiExpress size={30} color="#000000" title="ExpressJS" />
  <SiNodedotjs size={30} color="#339933" title="NodeJS" />
  <SiMongodb size={30} color="#61DAFB" title="MongoDB" />
</AnimatedBody>
          </div>
          <div>
            <AnimatedTitle
              wordSpace={"mr-[0.5ch]"}
              charSpace={"mr-[0.001em]"}
              className="font-bold antialiased text-xl md:text-2xl mb-2"
            >
              Developer Tools
            </AnimatedTitle>
            <AnimatedBody className="text-white/60 text-base md:text-xl leading-8 flex gap-4 flex-wrap">
            <DiVisualstudio size={30} color="#007ACC" title="VS Code" />
  <SiGit size={30} color="#F05032" title="Git" />
  <SiIntellijidea size={30} color="#000000" title="IntelliJ IDEA" />
  <SiEclipseide size={30} color="#2C2255" title="Eclipse" />
</AnimatedBody>
          </div>
        </div>
      </div>
    </section>
  );
}
