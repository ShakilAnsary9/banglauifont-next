import { useState } from "react";
import FontLists from "./FontList";

const FontCard = ({ previewText, fontSize, fontWeight }) => {
  const [copiedStates, setCopiedStates] = useState(
    Array(FontLists.length).fill(false)
  );

  const copyFontFamily = (fontFamily, index) => {
    navigator.clipboard
      .writeText(fontFamily)
      .then(() => {
        setCopiedStates((prevStates) => {
          const newCopiedStates = [...prevStates];
          newCopiedStates[index] = true;
          setTimeout(() => {
            newCopiedStates[index] = false;
            setCopiedStates([...newCopiedStates]);
          }, 1500); // Reset copied state after 1.5 seconds
          return newCopiedStates;
        });
      })
      .catch((err) => {
        console.error("Failed to copy:", err);
      });
  };

  const FontList = ({ fonts }) => (
    <>
      {fonts.map((font, index) => (
        <div className="bg-card rounded-2xl p-5" key={index}>
          {/* my section  */}
          <h1 className="text-xl font-medium mb-2">{font.title}</h1>
          <small>Preview</small>
          <div
            className="preview text-2xl"
            id="preview"
            style={{ fontSize: `${fontSize}px`, fontWeight: `${fontWeight}` }}
          >
            {previewText}
          </div>

          <details className="open:ring-1 open:ring-black/5 transform-gpu delay-75 duration-100 ease-in-out ">
            <summary className="leading-6 text-slate-900 dark:text-white font-semibold select-none">
              Why do they call it Ovaltine?
            </summary>
            <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              <p>
                The mug is round. The jar is round. They should call it
                Roundtine.
              </p>
            </div>
          </details>

          <div className="flex justify-between mt-5">
            <a
              href={font.download_url}
              className="card-btn font-down-btn"
              download
            >
              Download Font
            </a>

            <button
              className="card-btn font-copy-btn"
              onClick={() => copyFontFamily(font.font_family, index)}
            >
              Copy Font Family
              <span className={`tag ${copiedStates[index] ? "" : "hidden"}`}>
                Copied!
              </span>
            </button>
          </div>
        </div>
      ))}
    </>
  );

  return (
    <>
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-6">
          {Object.keys(FontLists).map((key) => (
            <div className="flex flex-col gap-6" key={key}>
              <FontList fonts={FontLists[key]} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FontCard;
