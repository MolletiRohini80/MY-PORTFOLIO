import React, { useEffect } from "react";
import FolioCard from "./FolioCard";
import Title from "../ui/Title";
import { useView } from "@/contexts/ViewContext";

// @ts-ignore
import "intersection-observer";
import { useInView } from "react-intersection-observer";
import Timeline from "./Timeline";

export default function Works() {
  const { setSectionInView } = useView();

  const works = [
    {
      title: "Bus-Tracking Application",
      gitLink: "https://github.com/MolletiRohini80/BUS-IN-OUT.git",
      liveLink: "https://offsetcomms.africa/",
      about:
        "Your bus tracking project is a real-time system built with ReactJS and Vite, designed to track bus arrivals and departures at your college gate. It includes a student count graph and a pie chart for data visualization. The project features a responsive design, optimized for various screen sizes, with smooth animations and a clean, scroll-free UI. It highlights your skills in full-stack development, responsive design, and data visualization.",
      stack: ["React", "JavaScript", "NodeJS", "ExpressJS","MERN"],
      img: "/Bus.png",
    },
    {
      title: "Travel-Trek",
      gitLink: "https://github.com/MolletiRohini80/TRAVEL-TREK.git",
      liveLink: "trektravelwebsite.netlify.app ",
      about:
        "Travel Trek is a travel website built with HTML, CSS, and JavaScript, designed to make travel planning easier and more enjoyable for users. The platform offers two main features: travel suggestions based on seasons and states. Users can select a season, and the website recommends popular destinations for that time of year. Alternatively, users can choose a state and explore famous places, food, temples, and nearby attractions. If they select a destination, the site also suggests nearby places to visit, local cuisine, and resorts. ",
      stack: ["HTML","CSS", "JavaScript"],
      img: "/Travel.png",
    },
    // {
    //   title: "Where in the world",
    //   gitLink: "https://github.com/adex-hub/where-in-the-world",
    //   liveLink: "https://where-in-the-world-ade.netlify.app/",
    //   about:
    //     "A fun tool for checking information about any country in the world such as the country’s native name, currency, population,  border countries etc. It features dynamic routing for each country and theme switch.",
    //   stack: ["react", "react-router", "javascript", "tailwindcss"],
    //   img: "/witw.svg",
    // },
    // {
    //   title: "Yourtodo",
    //   gitLink: "https://github.com/adex-hub/Yourtodo",
    //   liveLink: "https://yourtodo-v1.vercel.app/",
    //   about:
    //     "This task management system lets you customize your name, add, delete, and edit tasks, and celebrates you when tasks are completed. It features built-in notifications and stores data in the browser, allowing you to resume tasks conveniently. Designed and developed by yours truly.",
    //   stack: ["react", "javascript", "figma", "sass"],
    //   img: "/todo.svg",
    // },
    // {
    //   title: "Multi-step form",
    //   gitLink: "https://github.com/adex-hub/multi-step-form-main",
    //   liveLink: "https://ade-loremgaming.netlify.app/",
    //   about:
    //     "This site features a clean, user-friendly multi-step form for subscribing to a gaming service. Users input personal info, select a plan (monthly or yearly), choose add-ons (online service, larger storage, customizable profile), and review the summary before confirming.",
    //   stack: ["html", "sass", "javascript", "ms clarity"],
    //   img: "/multistep.svg",
    // },
  ];

  const { ref, inView } = useInView({
    threshold: 0.1,
    rootMargin: "-100px 0px",
  });

  useEffect(() => {
    if (inView) setSectionInView("work");
  }, [inView, setSectionInView]);

  return (
    <section
      className="flex flex-col gap-6 md:gap-10 pt-[110px]"
      ref={ref}
      id="work"
    >
      <Title>Projects</Title>
      {works.map((work, index) => (
        <FolioCard
          key={index}
          img={work.img}
          title={work.title}
          gitLink={work.gitLink}
          liveLink={work.liveLink}
          about={work.about}
          stack={work.stack}
        />
      ))}

      <Timeline />
    </section>
  );
}
