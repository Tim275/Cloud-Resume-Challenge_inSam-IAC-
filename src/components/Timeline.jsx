import React from "react";
import TimelineItem from "./TimelineItem";
import Certifications from "./Certifications";
import timeline from "../data/timeline";
import certifications from "../data/certifications";

function Timeline() {
  return (
    <div className="flex flex-col md:flex-row justify-center my-20">
      {/* Timeline section */}
      <div className="w-full md:w-7/12">
        <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
          Timeline
        </h2>
        {timeline.map((item, index) => (
          <TimelineItem
            key={index}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            tools={item.tools}
          />
        ))}
      </div>

      {/* Certifications section */}
      <div className="w-full md:w-5/12 mt-10 md:mt-0 md:ml-10">
        <Certifications certifications={certifications} />
      </div>
    </div>
  );
}

export default Timeline;
