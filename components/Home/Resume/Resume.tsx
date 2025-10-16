import { FaCodepen, FaReact } from "react-icons/fa";
import ResumeCard from "./ResumeCard";
import { BsDatabase } from "react-icons/bs";
import { BiBadge } from "react-icons/bi";

const Resume = () => {
  return (
    <div className=" pt-20 pb-16">
      <div className=" w-[90%] sm:w-[70%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* WORK PART */}
        <div>
          <h1 className=" text-3xl sm:text-4xl font-bold text-white">
            My Work <span className=" text-cyan-200">Experience</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-in"
            data-aos-anchor-placement="top-center"
          >
            <ResumeCard
              Icon={FaCodepen}
              role="Full-Stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            excepturi ex velit nisi ipsa temporibus saepe iure error quidem,
            suscipit "
            />
            <ResumeCard
              Icon={FaReact}
              role="Full-Stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            excepturi ex velit nisi ipsa temporibus saepe iure error"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="Full-Stack Developer"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
            excepturi ex velit nisi ipsa temporibus saepe iure error quidem,
            suscipit quisquam"
            />
          </div>
        </div>
        {/* EDUCATION PART */}
        <div>
          <h1 className=" text-3xl sm:text-4xl font-bold text-white">
            My <span className=" text-cyan-200">Education</span>
          </h1>
          <div
            className="mt-10"
            data-aos="zoom-out"
            data-aos-anchor-placement="top-center"
            data-aos-delay="300"
          >
            <ResumeCard
              Icon={BiBadge}
              role="SLIIT"
              date="June 2021 - Jun 2025"
              description="Bachelor of Science in Information Technology"
            />
            <ResumeCard
              Icon={FaReact}
              role="SLIIT"
              date="June 2021 - Jun 2025"
              description="Bachelor of Science in Information Technology"
            />
            <ResumeCard
              Icon={BsDatabase}
              role="SLIIT"
              date="June 2021 - Jun 2025"
              description="Bachelor of Science in Information Technology"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
