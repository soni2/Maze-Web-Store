"use client";
import { useState } from "react";
import "./checkmark.css"; // Make sure to import your Tailwind CSS styles

function SuccessMark({ className }) {
  const [translate, setTranslate] = useState("translate-y-1");

  setTimeout(() => {
    setTranslate("translate-y-0");
  }, 500);

  return (
    <svg
      className={`w-48 h-48 success ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      stroke="currentColor"
      fill="none"
      strokeWidth="0.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* <circle id="circle_1_" cx={10.68} cy={10.68} r={10.01} className="st0" />
      <path
        d="M16.84 8.68v8c0 .5-.41.91-.91.91H5.55c-.57 0-1.04-.46-1.04-1.04V8.68M8.82 13.08 6.45 15.6M16.84 8.68l-4.72-3.22c-.85-.58-1.96-.58-2.81-.01l-4.8 3.23M12.72 13.08l2.37 2.52"
        className="st0"
      />
      <defs>
        <path
          id="SVGID_3_"
          d="m4.73 8.68 5.14 5.36c.49.51 1.31.51 1.81 0l5.04-5.26v-5H4.9l-.17 4.9z"
        />
      </defs>
      <clipPath id="SVGID_1_">
        <use
          xlinkHref="#SVGID_3_"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <path
        d="M5.91 4.29h9.62v10.69H5.91z"
        className="fill-white dark:fill-black"
        style={{
          clipPath: "url(#SVGID_1_)",
          strokeLinecap: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        d="m16.71 8.77-5.04 5.26c-.49.51-1.31.51-1.81 0L4.73 8.68"
        className="st0"
      /> */}

      <style>
        {
          ".st0{fill:none;stroke-width:.8;stroke-linecap:round;stroke-miterlimit:10}"
        }
      </style>
      <path
        d="m16.57 8.18-4.72-3.22c-.84-.57-1.95-.58-2.8-.01L4.24 8.18"
        className="st0 stroke-primary"
      />
      <path
        d="M15.26 12.03V3.5H5.64v8.53"
        className={`stroke-primary fill-white dark:fill-black duration-500 ease-out ${translate}`}
        style={{
          strokeWidth: 0.805,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
      />
      <path
        d="M16.57 14.59v1.82c0 .5-.41.91-.91.91H5.28c-.57 0-1.04-.46-1.04-1.04v-8.1l.22.22 5.14 5.36c.49.51 1.31.51 1.81 0l5.04-5.26s.07-.07.13-.14v.04s-.01 3.82-.01 6.19z"
        className="stroke-primary fill-white dark:fill-black"
        style={{
          strokeWidth: 0.8,
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 10,
        }}
      />
      <circle
        id="circle_2_"
        cx={10.41}
        cy={10.41}
        r={10.01}
        className="st0 stroke-primary"
      />
      <path
        d="m8.55 12.81-2.37 2.52M12.45 12.81l2.37 2.52"
        className="st0 stroke-primary"
      />
    </svg>
  );
}

export default SuccessMark;
