import { useState } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import ProjectContent from "../../../Data/ProjectContent";

const RenderContent = ({ content }) => {
  switch (content.type) {
    case "subtitle":
      return (
        <h3
          className={`font-title font-medium text-sm-h3 md:text-md-h3 lg:text-lg-h3 px-4 py-2 rounded ${content.bgColor}`}
        >
          {content.content}
        </h3>
      );

    case "text":
      return (
        <div className="space-y-4 font-description font-light text-am-p md:text-md-p lg:text-lg-p">
          {Array.isArray(content.content) ? (
            content.content.map((paragraph, idx) => (
              <div key={idx}>
                {Array.isArray(paragraph) ? (
                  paragraph.map((part, partIdx) =>
                    part.type === "image" ? (
                      <Zoom key={partIdx}>
                        <img
                          src={part.url}
                          alt={part.alt}
                          className={part.className}
                        />
                      </Zoom>
                    ) : (
                      <span key={partIdx} className={part.className || ""}>
                        {part.text}
                      </span>
                    )
                  )
                ) : (
                  <p className="font-description font-light text-black">
                    {paragraph}
                  </p>
                )}
              </div>
            ))
          ) : (
            <p className="font-description font-light text-black">
              {content.content}
            </p>
          )}
        </div>
      );

    case "table":
      return (
        <table className="w-full border-collapse border border-gray-300 font-description text-sm-p md:text-md-p lg:text-lg-p">
          <thead>
            <tr className="bg-gray-200">
              {content.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="border border-gray-300 p-2 font-medium text-left"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.rows.map((row, idx) => (
              <tr key={idx}>
                {row.map((cell, i) => (
                  <td key={i} className="border border-gray-300 p-2">
                    {Array.isArray(cell) ? (
                      cell.map((part, partIdx) =>
                        part.type === "image" ? (
                          <Zoom key={partIdx}>
                            <img
                              src={part.url}
                              alt={part.alt}
                              className={part.className || "w-full"}
                            />
                          </Zoom>
                        ) : (
                          <p key={partIdx} className={part.className || "mb-2"}>
                            {part.text}
                          </p>
                        )
                      )
                    ) : (
                      <p>{cell}</p>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      );

    case "image":
      return (
        <Zoom>
          <img src={content.url} alt={content.alt} className="w-full rounded" />
        </Zoom>
      );

    case "video":
      return (
        <video controls className="w-full">
          <source src={content.url} type="video/mp4" />
        </video>
      );

    case "code":
      return (
        <div className="w-full max-w-full overflow-x-auto">
          <pre className="bg-gray-800 text-white p-4 rounded text-sm whitespace-pre-wrap break-words">
            <code>{content.code}</code>
          </pre>
        </div>
      );

    case "tabbed-media":
      return <TabbedMedia tabs={content.tabs} />;

    case "figma":
      return (
        <div className="w-full">
          <iframe
            className="w-full h-[500px] rounded"
            src={`https://www.figma.com/embed?embed_host=chatgpt&url=${encodeURIComponent(
              content.url
            )}`}
            allowFullScreen
          ></iframe>
        </div>
      );

    default:
      return null;
  }
};

// Tabbed Component
const TabbedMedia = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      {/* Tabs */}
      <div className="flex w-full flex-wrap overflow-x-auto space-x-4">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            className={`px-2 py-2 mb-4 w-max border cursor-pointer rounded-full ${
              activeTab === idx
                ? "bg-orange text-white font-medium"
                : "border-orange-outline text-orange"
            }`}
            onClick={() => setActiveTab(idx)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      {/* Media */}
      <div className="w-full rounded overflow-hidden">
        {tabs[activeTab].type === "image" ? (
          <Zoom key={tabs[activeTab].url}>
            <img
              src={tabs[activeTab].url}
              alt={tabs[activeTab].alt}
              className="w-full rounded"
            />
          </Zoom>
        ) : tabs[activeTab].type === "video" ? (
          <video
            key={tabs[activeTab].url} // Forces React to reload the video
            controls
            className="w-full"
          >
            <source src={tabs[activeTab].url} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : null}
      </div>
    </div>
  );
};

const Content = ({ projectName }) => {
  const project = ProjectContent[projectName];
  if (!project) return <p>Project not found</p>;

  return (
    <div className="flex flex-col-reverse md:grid md:grid-cols-9 gap-4">
      {/* Main Layout */}
      <div className="md:col-span-7">
        {project.sections.map((section) => (
          <div
            key={section.id}
            id={section.id}
            className={`grid gap-4 my-6 ${
              section.layout === "full-width"
                ? "" // Full width
                : section.layout === "two-column-1-1"
                ? "md:grid-cols-2"
                : section.layout === "two-column-1-2"
                ? "md:grid-cols-3 md:[&>*:first-child]:col-span-1 md:[&>*:nth-child(2)]:col-span-2"
                : section.layout === "three-column"
                ? "md:grid-cols-3"
                : ""
            }`}
          >
            {/* Section title */}
            <h2 className="font-title font-medium text-orange border-b-1 border-orange-outline text-sm-h2 md:text-md-h2 lg:text-lg-h2">
              {section.title}
            </h2>

            {section.content.map((item, idx) => {
              if (item.layout) {
                return (
                  <div
                    key={idx}
                    className={`grid gap-4 ${
                      item.layout === "two-column-1-1"
                        ? "md:grid-cols-2"
                        : item.layout === "two-column-1-2"
                        ? "md:grid-cols-3 md:[&>*:first-child]:col-span-1 md:[&>*:nth-child(2)]:col-span-2"
                        : item.layout === "three-column"
                        ? "md:grid-cols-3"
                        : ""
                    }`}
                  >
                    {item.content.map((nestedItem, nestedIdx) => (
                      <div
                        key={nestedIdx}
                        className="p-2 font-description font-light"
                      >
                        <RenderContent content={nestedItem} />
                      </div>
                    ))}
                  </div>
                );
              }
              return (
                <div key={idx} className="p-2 font-description font-light">
                  <RenderContent content={item} />
                </div>
              );
            })}
          </div>
        ))}
      </div>

      {/* Index Box */}
      <div className="md:col-span-2 md:sticky top-20 h-fit py-4">
        <h3 className="font-title font-medium text-black text-sm-h2">Index</h3>
        <ul className="mt-2">
          {project.sections.map((section) => (
            <li key={section.id} className="mt-1">
              <a
                href={`#${section.id}`}
                className="font-description font-light text-black hover:underline text-sm-p md:text-md-p lg:text-lg-p"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
        {project.liveDemoLink && (
          <div className="mt-4">
            <a
              href={project.liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white border-orange-outline border-1 text-orange text-center py-2 rounded-full mt-4 hover:bg-orange-outline hover:text-white"
            >
              Live Demo
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Content;
