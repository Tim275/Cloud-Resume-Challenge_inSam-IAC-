import React from "react";

const CertificationItem = ({ title, issuer, date, badgeUrl, link }) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
        <div className="flex items-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0"
          >
            <img
              src={badgeUrl}
              alt={`${title} badge`}
              className="w-24 h-24 mr-4"
            />
          </a>
          <div className="flex-1 min-w-0">
            <h3 className="text-md font-semibold text-stone-900 dark:text-white whitespace-normal">
              {title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">{issuer}</p>
            <p className="text-xs text-gray-500 dark:text-gray-500">{date}</p>
          </div>
        </div>
      </li>
    </ol>
  );
};

const Certifications = ({ certifications }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
        Certifications
      </h2>
      {certifications.map((cert, index) => (
        <CertificationItem
          key={index}
          title={cert.title}
          issuer={cert.issuer}
          date={cert.date}
          badgeUrl={cert.badgeUrl}
          link={cert.link}
        />
      ))}
    </div>
  );
};

export default Certifications;

// import React from "react";

// const CertificationItem = ({ title, issuer, date, badgeUrl, link }) => {
//   return (
//     <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
//       <li className="mb-10 ml-4">
//         <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
//         <a
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="flex items-center"
//         >
//           <img
//             src={badgeUrl}
//             alt={`${title} badge`}
//             className="w-24 h-24 mr-4"
//           />
//         </a>
//         <div>
//           <h3 className="text-md font-semibold text-stone-900 dark:text-white">
//             {title}
//           </h3>
//           <p className="text-sm text-gray-600 dark:text-gray-400">{issuer}</p>
//           <p className="text-xs text-gray-500 dark:text-gray-500">{date}</p>
//         </div>
//       </li>
//     </ol>
//   );
// };

// const Certifications = ({ certifications }) => {
//   return (
//     <div>
//       <h2 className="text-lg font-semibold text-stone-900 dark:text-white mb-4">
//         Certifications
//       </h2>
//       {certifications.map((cert, index) => (
//         <CertificationItem
//           key={index}
//           title={cert.title}
//           issuer={cert.issuer}
//           date={cert.date}
//           badgeUrl={cert.badgeUrl}
//           link={cert.link}
//         />
//       ))}
//     </div>
//   );
// };

// export default Certifications;
