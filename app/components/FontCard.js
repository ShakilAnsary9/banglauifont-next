import { useState } from "react";
import FontLists from "./FontList";

const FontCard = ({ previewText, fontSize, fontWeight }) => {
  const FontList = ({ fonts }) => {
    const [copiedStates, setCopiedStates] = useState(
      Array(fonts.length).fill(false)
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

    return (
      <>
        {fonts.map((font, index) => (
          <div
            className="bg-card rounded-2xl p-5 relative overflow-hidden"
            key={index}
          >
            <div className="relative z-10">
              <h1 className="text-xl font-medium mb-2">{font.title}</h1>
              <small>Preview</small>
              <div
                className="preview pb-3"
                id="preview"
                style={{
                  fontSize: `${fontSize}px`,
                  fontWeight: `${fontWeight}`,
                }}
              >
                {previewText}
              </div>

              <details className="open:ring-1 open:ring-black/5 transform-gpu delay-75 duration-200 ease-in-out ">
                <summary className="leading-6 text-slate-900 dark:text-white select-none list-none">
                  <div className="flex justify-between">
                    <div>CDN</div>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                      >
                        <g fill="none" stroke="currentColor" stroke-width="1.5">
                          <path
                            stroke-linecap="round"
                            d="M2.668 5.35A4 4 0 1 0 5.35 2.668M21.832 19.15a4 4 0 1 0-2.682 2.682"
                          />
                          <path d="M2.5 17.5c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586C2.5 20.328 2.5 19.386 2.5 17.5Zm11-11c0-1.886 0-2.828.586-3.414c.586-.586 1.528-.586 3.414-.586c1.886 0 2.828 0 3.414.586c.586.586.586 1.528.586 3.414c0 1.886 0 2.828-.586 3.414c-.586.586-1.528.586-3.414.586c-1.886 0-2.828 0-3.414-.586C13.5 9.328 13.5 8.386 13.5 6.5Z" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </summary>

                <div class="link-cdn flex items-center bg-cdn p-3 mt-4 rounded-lg">
                  <input
                    className="w-full bg-transparent pe-3"
                    type="text"
                    value="<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/ShakilAnsary9/BanglaUI-Font@latest/FontCSS/hind-siliguri.css'>"
                    readonly
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z" />
                      <path
                        d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3"
                        opacity=".5"
                      />
                    </g>
                  </svg>
                </div>

                <div class="link-cdn flex items-center bg-cdn p-3 mt-4 rounded-lg">
                  <input
                    className="w-full bg-transparent pe-3"
                    type="text"
                    value="<link rel='stylesheet' href='https://cdn.jsdelivr.net/gh/ShakilAnsary9/BanglaUI-Font@latest/FontCSS/hind-siliguri.css'>"
                    readonly
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <g fill="none" stroke="currentColor" stroke-width="1.5">
                      <path d="M6 11c0-2.828 0-4.243.879-5.121C7.757 5 9.172 5 12 5h3c2.828 0 4.243 0 5.121.879C21 6.757 21 8.172 21 11v5c0 2.828 0 4.243-.879 5.121C19.243 22 17.828 22 15 22h-3c-2.828 0-4.243 0-5.121-.879C6 20.243 6 18.828 6 16z" />
                      <path
                        d="M6 19a3 3 0 0 1-3-3v-6c0-3.771 0-5.657 1.172-6.828C5.343 2 7.229 2 11 2h4a3 3 0 0 1 3 3"
                        opacity=".5"
                      />
                    </g>
                  </svg>
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
                  <span
                    className={`tag ${copiedStates[index] ? "" : "hidden"}`}
                  >
                    Copied!
                  </span>
                </button>
              </div>
            </div>
            <div className="absolute h-48 w-48 rounded-full bg-element opacity-30 z-1 -top-10 -left-10"></div>
          </div>
        ))}
      </>
    );
  };

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
