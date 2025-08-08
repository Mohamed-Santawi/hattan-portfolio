import React, { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { projects } from "../constants";
const ProjectCard = ({ index, name, description, image }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-gray-200 p-5 pr-4 rounded-2xl w-[390px]   max-w-[350px] mx-auto"
      >
        <div className="relative w-full h-[200px] sm:h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
     
      </Tilt>
    </motion.div>
  );
};

const MobileProjectCard = ({ index, name, description, image }) => {
  return (
    <div className="bg-tertiary p-5 rounded-2xl w-full mb-6">
      <div className="relative w-full h-[200px]">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-white font-bold text-[20px]">{name}</h3>
        <p className="mt-2 text-secondary text-[14px]">{description}</p>
      </div>
    </div>
  );
};









const Certificates = () => {
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const isIOSDevice =
      /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    setIsIOS(isIOSDevice);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="w-full max-w-7xl px-4 sm:px-6 md:px-8">
        {isIOS ? (
          <div>
            <p className={`${styles.sectionSubText} text-center`}>my </p>
            <h2 className={`${styles.sectionHeadText} text-center`}>
            Certificate
            </h2>
          </div>
        ) : (
          <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText} text-center`}>my </p>
            <h2 className={`${styles.sectionHeadText} text-[#004f38]  text-center`}>
            Certificate
            </h2>
          </motion.div>
        )}

        <div className="w-full mt-6 mb-12">
          <p className="text-secondary text-[14px] sm:text-[17px] leading-[30px] text-center">
            The following certifications validate my expertise across key areas of professional development.
            Each certification reflects my commitment to continuous learning and demonstrates proficiency in specialized skills such as data analysis,
            process improvement, coaching, and strategic thinking.
          </p>
        </div>

        <div
          className={`mt-8 ${
            isIOS
              ? "space-y-6"
              : "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
          }`}
        >
          {projects.map((project, index) =>
            isIOS ? (
              <MobileProjectCard
                key={`project-${index}`}
                index={index}
                name={project.name}
                description={project.description}
                image={project.image}
              />
            ) : (
              <ProjectCard
                key={`project-${index}`}
                index={index}
                name={project.name}
                description={project.description}
                image={project.image}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Certificates);