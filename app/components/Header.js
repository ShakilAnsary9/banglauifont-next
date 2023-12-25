import Image from "next/image";
import { useState, useEffect } from "react";
import { ref, get, set } from "firebase/database";
import { database } from "../utils/Firebase";

const Header = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    const visitCountRef = ref(database, "visit_counter");

    const fetchVisitCount = async () => {
      try {
        const snapshot = await get(visitCountRef);
        if (snapshot.exists()) {
          const count = snapshot.val();
          setVisitCount(count);
          await set(visitCountRef, count + 1); // Increment count in Firebase
        } else {
          await set(visitCountRef); // Initialize count if not exists
          setVisitCount(0);
        }
      } catch (error) {
        console.error("Error fetching/setting visit count:", error);
      }
    };

    fetchVisitCount();
  }, []);

  return (
    <>
      <div className="container mx-auto mt-4 mb-8">
        <div className="grid grid-cols-2">
          <div className="logo flex align-center">
            <Image
              width={200}
              height={40}
              src="/svg/bangla-font-ui-logo.svg"
              alt="banglauifont"
            />
          </div>
          {/* <div className="search-box element">search</div> */}
          <div className="info-box flex gap-5 items-center justify-end">
            <div className="counter flex gap-2 items-center element">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g fill="none" stroke="currentColor" stroke-width="1.5">
                  <path d="M3.275 15.296C2.425 14.192 2 13.639 2 12c0-1.64.425-2.191 1.275-3.296C4.972 6.5 7.818 4 12 4c4.182 0 7.028 2.5 8.725 4.704C21.575 9.81 22 10.361 22 12c0 1.64-.425 2.191-1.275 3.296C19.028 17.5 16.182 20 12 20c-4.182 0-7.028-2.5-8.725-4.704Z" />
                  <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                </g>
              </svg>
              <span className="font-sans">
                {visitCount || (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="4" cy="12" r="3" fill="currentColor">
                      <animate
                        id="svgSpinners3DotsFade0"
                        fill="freeze"
                        attributeName="opacity"
                        begin="0;svgSpinners3DotsFade1.end-0.25s"
                        dur="0.75s"
                        values="1;.2"
                      />
                    </circle>
                    <circle
                      cx="12"
                      cy="12"
                      r="3"
                      fill="currentColor"
                      opacity=".4"
                    >
                      <animate
                        fill="freeze"
                        attributeName="opacity"
                        begin="svgSpinners3DotsFade0.begin+0.15s"
                        dur="0.75s"
                        values="1;.2"
                      />
                    </circle>
                    <circle
                      cx="20"
                      cy="12"
                      r="3"
                      fill="currentColor"
                      opacity=".3"
                    >
                      <animate
                        id="svgSpinners3DotsFade1"
                        fill="freeze"
                        attributeName="opacity"
                        begin="svgSpinners3DotsFade0.begin+0.3s"
                        dur="0.75s"
                        values="1;.2"
                      />
                    </circle>
                  </svg>
                )}
              </span>
            </div>
            <div className="error-mail gap-2 items-center element hidden md:flex">
              <svg
                className="text-caution"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    stroke="currentColor"
                    stroke-width="1.5"
                    d="M5.312 10.761C8.23 5.587 9.689 3 12 3c2.31 0 3.77 2.587 6.688 7.761l.364.645c2.425 4.3 3.638 6.45 2.542 8.022S17.786 21 12.364 21h-.728c-5.422 0-8.134 0-9.23-1.572s.117-3.722 2.542-8.022l.364-.645Z"
                  />
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-width="1.5"
                    d="M12 8v5"
                  />
                  <circle cx="12" cy="16" r="1" fill="currentColor" />
                </g>
              </svg>
              <span>Report an Issue</span>
            </div>
            <div className="creator">
              <Image
                className="rounded-xl border-2 border-primary"
                height={50}
                width={50}
                src="/images/shakil-light.jpg"
                alt="shakil-ansary"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
