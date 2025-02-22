"use client";
import { Syne } from "next/font/google";
import Title from "../ui/Title";
import TimelineItem from "./TimelineItem";

const syne = Syne({ subsets: ["latin"] });

const TimelineData = [
  {
    companyImg: "/Thublogo.png",
    jobTitle: "Frontend Developer",
    company: "Technical Hub",
    jobType: "Internship",
    duration: "June 2024 - Aug 2024",
    stuffIDid: [
      "Developed an interactive e-commerce travel website where users can explore destinations based on states or seasons.",
      "Implemented categorized travel recommendations, including top places, famous food, and best resorts for each location.",
      "Integrated YouTube videos for travel references and Google Maps for easy navigation.",
      "Designed a fully responsive and user-friendly UI using HTML, CSS, Bootstrap, and JavaScript.",
      "Optimized website performance with smooth animations, efficient layouts, and fast-loading pages.",
      "Gained hands-on experience in front-end development, UI/UX design, and responsive web development.",
    ],
  },
  // {
  //   companyImg: "/nnpc.svg",
  //   jobTitle: "Intern",
  //   company: "NNPC",
  //   jobType: "Internship",
  //   duration: "July 2023 - Sept. 2023",
  //   stuffIDid: [
  //     "Came up with cross functional login & sign up page designs that are now integral parts of the tools used within the company.",
  //     "Led a team of fellow interns to design various templates and UI components common in internal applications such as dashboards, notification tabs, multi-step forms, tables with pagination etc. while making very impactful contributions.",
  //     "I also helped interns grasp the basics of design enabling them to make meaningful contributions.",
  //   ],
  // },
];

export default function Timeline() {
  return (
    <div className="mt-10 md:mt-[110px]">
      <Title> Work experience</Title>

      {/* THE THING, AFTER WHICH I WOULD DETERMINE THE HEIGHT */}
      <div className="flex mt-6 gap-4 pl-3">
        <div className="w-3 h-auto bg-linear-to-b from-white to-transparent" />

        <div className="flex flex-col gap-10">
          {TimelineData.map((item, index) => (
            <TimelineItem
              key={index}
              companyImg={item.companyImg}
              jobTitle={item.jobTitle}
              company={item.company}
              jobType={item.jobType}
              duration={item.duration}
              stuffIDid={item.stuffIDid}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
