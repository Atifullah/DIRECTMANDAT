import clsx from "clsx";
import React from "react";

export const FilterIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1744_12009)">
        <mask
          id="mask0_1744_12009"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path d="M24 0H0V24H24V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_1744_12009)">
          <path
            d="M3 17V19H9V17H3ZM3 5V7H13V5H3ZM13 21V19H21V17H13V15H11V21H13ZM7 9V11H3V13H7V15H9V9H7ZM21 13V11H11V13H21ZM15 9H17V7H21V5H17V3H15V9Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1744_12009">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PrintIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_739_69481"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_739_69481)">
        <path
          d="M19 8H5C3.34 8 2 9.34 2 11V17H6V21H18V17H22V11C22 9.34 20.66 8 19 8ZM16 19H8V14H16V19ZM19 12C18.45 12 18 11.55 18 11C18 10.45 18.45 10 19 10C19.55 10 20 10.45 20 11C20 11.55 19.55 12 19 12ZM18 3H6V7H18V3Z"
          fill="#323232"
        />
      </g>
    </svg>
  );
};

export const TradeIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1714_13630"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1714_13630)">
        <path
          d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
          fill="#E61B1B"
        />
      </g>
    </svg>
  );
};
export const TradeIconGray = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1612_1603"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="24"
        height="24"
      >
        <path d="M24 0H0V24H24V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_1612_1603)">
        <path
          d="M16 6L18.29 8.29L13.41 13.17L9.41 9.17L2 16.59L3.41 18L9.41 12L13.41 16L19.71 9.71L22 12V6H16Z"
          fill="#323232"
        />
      </g>
    </svg>
  );
};

export const CloseEyeIcon = ({ color }) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1714_13594)">
        <mask
          id="mask0_1714_13594"
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="16"
          height="16"
        >
          <path
            d="M23.196 8.80664H8.80273V23.1999H23.196V8.80664Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1714_13594)">
          <path
            d="M15.9993 13.0024C17.6545 13.0024 18.9979 14.3458 18.9979 16.001C18.9979 16.3908 18.9199 16.7566 18.782 17.0985L20.5331 18.8497C21.4387 18.094 22.1524 17.1165 22.5902 16.001C21.5527 13.3682 18.9919 11.5031 15.9933 11.5031C15.1537 11.5031 14.35 11.653 13.6064 11.9229L14.9018 13.2183C15.2436 13.0804 15.6094 13.0024 15.9993 13.0024ZM10.0021 11.3652L11.3694 12.7325L11.6453 13.0084C10.6498 13.782 9.87013 14.8135 9.40234 16.001C10.4399 18.6338 13.0007 20.4989 15.9993 20.4989C16.9288 20.4989 17.8164 20.319 18.626 19.9951L18.8779 20.247L20.6351 21.9982L21.3967 21.2366L10.7637 10.6035L10.0021 11.3652ZM13.3185 14.6816L14.2481 15.6112C14.2181 15.7371 14.2001 15.8691 14.2001 16.001C14.2001 16.9965 15.0037 17.8002 15.9993 17.8002C16.1312 17.8002 16.2631 17.7822 16.3891 17.7522L17.3186 18.6817C16.9168 18.8797 16.473 18.9996 15.9993 18.9996C14.344 18.9996 13.0007 17.6562 13.0007 16.001C13.0007 15.5272 13.1206 15.0834 13.3185 14.6816ZM15.9033 14.2138L17.7924 16.1029L17.8044 16.007C17.8044 15.0115 17.0008 14.2078 16.0053 14.2078L15.9033 14.2138Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1714_13594">
          <rect
            width="14.3933"
            height="14.3933"
            fill="white"
            transform="translate(8.80273 8.80273)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PenIcon = ({ color }) => {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1714_13602)">
        <mask
          id="mask0_1714_13602"
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="16"
          height="16"
        >
          <path
            d="M23.196 8.80664H8.80273V23.1999H23.196V8.80664Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1714_13602)">
          <path
            d="M10.6016 19.151V21.4H12.8505L19.4834 14.7671L17.2345 12.5181L10.6016 19.151ZM21.2226 13.0279C21.4565 12.794 21.4565 12.4162 21.2226 12.1823L19.8193 10.7789C19.5854 10.545 19.2075 10.545 18.9737 10.7789L17.8762 11.8764L20.1251 14.1254L21.2226 13.0279Z"
            fill={color ? color : "white"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1714_13602">
          <rect
            width="14.3933"
            height="14.3933"
            fill="white"
            transform="translate(8.80273 8.80273)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ScanIcon = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1714_13610)">
        <mask
          id="mask0_1714_13610"
          maskUnits="userSpaceOnUse"
          x="8"
          y="8"
          width="16"
          height="16"
        >
          <path
            d="M23.196 8.80664H8.80273V23.1999H23.196V8.80664Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1714_13610)">
          <path
            d="M19.7474 13.3643L16.4489 11.4572C16.1731 11.2953 15.8252 11.2953 15.5494 11.4572L12.2509 13.3643C11.975 13.5262 11.8011 13.8201 11.8011 14.1439V17.9521C11.8011 18.276 11.975 18.5699 12.2509 18.7318L15.5494 20.6389C15.8252 20.8008 16.1731 20.8008 16.4489 20.6389L19.7474 18.7318C20.0233 18.5699 20.1972 18.276 20.1972 17.9521V14.1439C20.1972 13.8201 20.0233 13.5262 19.7474 13.3643ZM13.0006 17.7782V15.0075L15.3994 16.3989V19.1636L13.0006 17.7782ZM15.9992 15.3614L13.6003 13.97L15.9992 12.5847L18.398 13.97L15.9992 15.3614ZM16.5989 19.1636V16.3989L18.9978 15.0075V17.7782L16.5989 19.1636ZM13.0006 10.0059H10.9015C10.4038 10.0059 10.002 10.4077 10.002 10.9054V13.0045H11.2014V11.2053H13.0006V10.0059ZM18.9978 10.0059H21.0968C21.5945 10.0059 21.9964 10.4077 21.9964 10.9054V13.0045H20.7969V11.2053H18.9978V10.0059ZM13.0006 22.0003H10.9015C10.4038 22.0003 10.002 21.5984 10.002 21.1007V19.0017H11.2014V20.8008H13.0006V22.0003ZM18.9978 22.0003H21.0968C21.5945 22.0003 21.9964 21.5984 21.9964 21.1007V19.0017H20.7969V20.8008H18.9978V22.0003Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1714_13610">
          <rect
            width="14.3933"
            height="14.3933"
            fill="white"
            transform="translate(8.80273 8.80273)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HeadsetIcon = ({ color }) => {
  return (
    <svg
      width="19"
      height="18"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1714_13520"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="19"
        height="18"
      >
        <path
          d="M18.2475 0.0078125H0.255859V17.9994H18.2475V0.0078125Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1714_13520)">
        <path
          d="M15.9992 9.16763C15.9992 5.05205 12.8057 2.25586 9.25236 2.25586C5.7365 2.25586 2.50551 4.99208 2.50551 9.21261C2.05572 9.46749 1.75586 9.94727 1.75586 10.502V12.0013C1.75586 12.8259 2.43054 13.5006 3.25516 13.5006H4.00481V8.92774C4.00481 6.0266 6.35121 3.68019 9.25236 3.68019C12.1535 3.68019 14.4999 6.0266 14.4999 8.92774V14.2503H8.50271V15.7496H14.4999C15.3245 15.7496 15.9992 15.0749 15.9992 14.2503V13.3357C16.4415 13.1033 16.7489 12.646 16.7489 12.1063V10.3821C16.7489 9.85731 16.4415 9.40002 15.9992 9.16763Z"
          fill="white"
        />
        <path
          d="M7.00356 10.5013C7.41757 10.5013 7.75321 10.1656 7.75321 9.7516C7.75321 9.33757 7.41757 9.00195 7.00356 9.00195C6.58954 9.00195 6.25391 9.33757 6.25391 9.7516C6.25391 10.1656 6.58954 10.5013 7.00356 10.5013Z"
          fill="white"
        />
        <path
          d="M11.5016 10.5013C11.9156 10.5013 12.2513 10.1656 12.2513 9.7516C12.2513 9.33757 11.9156 9.00195 11.5016 9.00195C11.0876 9.00195 10.752 9.33757 10.752 9.7516C10.752 10.1656 11.0876 10.5013 11.5016 10.5013Z"
          fill="white"
        />
        <path
          d="M13.7496 8.27465C13.3898 6.13814 11.5306 4.50391 9.28917 4.50391C7.01771 4.50391 4.57385 6.38553 4.76876 9.33915C6.62039 8.582 8.01476 6.93277 8.41208 4.92371C9.39412 6.89529 11.4107 8.25216 13.7496 8.27465Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const TickIcon = ({ color }) => {
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 26 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1769_63228)">
        <mask
          id="mask0_1769_63228"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="26"
          height="27"
        >
          <path
            d="M25.9361 0.471924H0.226562V26.1815H25.9361V0.471924Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1769_63228)">
          <path
            d="M9.86712 17.7936L6.14994 14.0764C5.73216 13.6586 5.05729 13.6586 4.63951 14.0764C4.22173 14.4942 4.22173 15.1691 4.63951 15.5869L9.11725 20.0646C9.53503 20.4824 10.2099 20.4824 10.6277 20.0646L21.9613 8.73103C22.3791 8.31325 22.3791 7.63837 21.9613 7.22059C21.5435 6.80281 20.8686 6.80281 20.4508 7.22059L9.86712 17.7936Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1769_63228">
          <rect
            width="25.7095"
            height="25.7095"
            fill="white"
            transform="translate(0.224609 0.471924)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SettingIcon = ({ color }) => {
  return (
    <svg
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1769_48957"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="23"
        height="23"
      >
        <path
          d="M22.7593 0.550415H0.586914V22.7228H22.7593V0.550415Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1769_48957)">
        <path
          d="M18.2691 12.5052C18.306 12.228 18.3245 11.9416 18.3245 11.6368C18.3245 11.3411 18.306 11.0455 18.2599 10.7683L20.1353 9.30868C20.3016 9.17934 20.3478 8.9299 20.2461 8.74513L18.4723 5.67795C18.3615 5.4747 18.1305 5.41003 17.9273 5.4747L15.7193 6.3616C15.2573 6.01053 14.7677 5.7149 14.2226 5.49318L13.89 3.1466C13.8531 2.92488 13.6683 2.76782 13.4466 2.76782H9.89901C9.67729 2.76782 9.50176 2.92488 9.4648 3.1466L9.13222 5.49318C8.58715 5.7149 8.08827 6.01977 7.63558 6.3616L5.42758 5.4747C5.22434 5.40079 4.99337 5.4747 4.88251 5.67795L3.11796 8.74513C3.0071 8.93914 3.04405 9.17934 3.22882 9.30868L5.10424 10.7683C5.05804 11.0455 5.02109 11.3504 5.02109 11.6368C5.02109 11.9232 5.03957 12.228 5.08576 12.5052L3.21034 13.9649C3.04405 14.0942 2.99786 14.3436 3.09948 14.5284L4.87327 17.5956C4.98413 17.7988 5.2151 17.8635 5.41834 17.7988L7.62634 16.9119C8.08827 17.263 8.57791 17.5586 9.12298 17.7804L9.45557 20.1269C9.50176 20.3487 9.67729 20.5057 9.89901 20.5057H13.4466C13.6683 20.5057 13.8531 20.3487 13.8808 20.1269L14.2134 17.7804C14.7585 17.5586 15.2573 17.263 15.71 16.9119L17.918 17.7988C18.1213 17.8727 18.3522 17.7988 18.4631 17.5956L20.2369 14.5284C20.3478 14.3252 20.3016 14.0942 20.126 13.9649L18.2691 12.5052ZM11.6728 14.9626C9.84358 14.9626 8.34695 13.466 8.34695 11.6368C8.34695 9.80754 9.84358 8.31092 11.6728 8.31092C13.502 8.31092 14.9987 9.80754 14.9987 11.6368C14.9987 13.466 13.502 14.9626 11.6728 14.9626Z"
          fill={color ? color : "#ED7A37"}
        />
      </g>
    </svg>
  );
};

export const BackIcon = ({ color }) => {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_97485)">
        <mask
          id="mask0_626_97485"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="32"
          height="32"
        >
          <path d="M32 0H0V32H32V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_97485)">
          <path
            d="M20.547 9.88L18.667 8L10.667 16L18.667 24L20.547 22.12L14.4403 16L20.547 9.88Z"
            fill={color ? color : "#323232"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_97485">
          <rect width="32" height="32" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TimeIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_98322)">
        <mask
          id="mask0_626_98322"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-1"
          width="24"
          height="25"
        >
          <path d="M24 -0.0859375H0V23.9141H24V-0.0859375Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_98322)">
          <path
            d="M11.99 1.91406C6.47 1.91406 2 6.39406 2 11.9141C2 17.4341 6.47 21.9141 11.99 21.9141C17.52 21.9141 22 17.4341 22 11.9141C22 6.39406 17.52 1.91406 11.99 1.91406ZM12 19.9141C7.58 19.9141 4 16.3341 4 11.9141C4 7.49406 7.58 3.91406 12 3.91406C16.42 3.91406 20 7.49406 20 11.9141C20 16.3341 16.42 19.9141 12 19.9141Z"
            fill="#323232"
          />
          <path
            d="M12.5 6.91406H11V12.9141L16.25 16.0641L17 14.8341L12.5 12.1641V6.91406Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_98322">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.181641)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const CalenderIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_98310)">
        <mask
          id="mask0_626_98310"
          maskUnits="userSpaceOnUse"
          x="0"
          y="-1"
          width="24"
          height="25"
        >
          <path d="M24 -0.0878906H0V23.9121H24V-0.0878906Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_98310)">
          <path
            d="M9 10.9121H7V12.9121H9V10.9121ZM13 10.9121H11V12.9121H13V10.9121ZM17 10.9121H15V12.9121H17V10.9121ZM19 3.91211H18V1.91211H16V3.91211H8V1.91211H6V3.91211H5C3.89 3.91211 3.01 4.81211 3.01 5.91211L3 19.9121C3 21.0121 3.89 21.9121 5 21.9121H19C20.1 21.9121 21 21.0121 21 19.9121V5.91211C21 4.81211 20.1 3.91211 19 3.91211ZM19 19.9121H5V8.91211H19V19.9121Z"
            fill={color ? color : "#323232"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_98310">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 -0.0878906)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const NotifyIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="25"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 22.6406C13.1 22.6406 14 21.7406 14 20.6406H10C10 21.7406 10.89 22.6406 12 22.6406ZM18 16.6406V11.6406C18 8.57063 16.36 6.00062 13.5 5.32062V4.64062C13.5 3.81063 12.83 3.14062 12 3.14062C11.17 3.14062 10.5 3.81063 10.5 4.64062V5.32062C7.63 6.00062 6 8.56063 6 11.6406V16.6406L4 18.6406V19.6406H20V18.6406L18 16.6406Z"
        fill="#323232"
      />
    </svg>
  );
};
export const LocationIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="30"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_98364)">
        <mask
          id="mask0_626_98364"
          maskUnits="userSpaceOnUse"
          x="-2"
          y="0"
          width="24"
          height="25"
        >
          <path d="M22 0.179688H-2V24.1797H22V0.179688Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_98364)">
          <path
            d="M10 2.17969C6.13 2.17969 3 5.30969 3 9.17969C3 14.4297 10 22.1797 10 22.1797C10 22.1797 17 14.4297 17 9.17969C17 5.30969 13.87 2.17969 10 2.17969ZM10 11.6797C8.62 11.6797 7.5 10.5597 7.5 9.17969C7.5 7.79969 8.62 6.67969 10 6.67969C11.38 6.67969 12.5 7.79969 12.5 9.17969C12.5 10.5597 11.38 11.6797 10 11.6797Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_98364">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(-2 0.179688)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ForwardIcon = ({ color }) => {
  return (
    <svg
      width="44"
      height="45"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_98330)">
        <mask
          id="mask0_626_98330"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="25"
        >
          <path d="M24 0.451172H0V24.4512H24V0.451172Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_98330)">
          <path
            d="M12 4.45117L10.59 5.86117L16.17 11.4512H4V13.4512H16.17L10.59 19.0412L12 20.4512L20 12.4512L12 4.45117Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_98330">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(0 0.451172)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SelectedIcon = ({ ...props }) => {
  return (
    <svg
      {...props}
      width="24"
      height="25"
      viewBox="0 0 34 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.445312" width="34" height="34" rx="8" fill="#ED7A37" />
      <g clipPath="url(#clip0_626_96971)">
        <mask
          id="mask0_626_96971"
          maskUnits="userSpaceOnUse"
          x="5"
          y="5"
          width="24"
          height="25"
        >
          <path d="M29 5.44531H5V29.4453H29V5.44531Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_96971)">
          <path
            d="M14.0002 21.6152L9.83016 17.4452L8.41016 18.8552L14.0002 24.4452L26.0002 12.4452L24.5902 11.0352L14.0002 21.6152Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_96971">
          <rect
            width="24"
            height="24"
            fill="white"
            transform="translate(5 5.44531)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EyeIcon = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1695_4335)">
        <mask
          id="mask0_1695_4335"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <path
            d="M20.0009 0.332031H0.71875V19.6142H20.0009V0.332031Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1695_4335)">
          <mask
            id="mask1_1695_4335"
            maskUnits="userSpaceOnUse"
            x="0"
            y="0"
            width="21"
            height="20"
          >
            <path
              d="M20.0029 0.333984H0.720703V19.6161H20.0029V0.333984Z"
              fill="white"
            />
          </mask>
          <g mask="url(#mask1_1695_4335)">
            <path
              d="M10.3611 3.94727C6.34398 3.94727 2.91336 6.44591 1.52344 9.97294C2.91336 13.5 6.34398 15.9986 10.3611 15.9986C14.3782 15.9986 17.8088 13.5 19.1987 9.97294C17.8088 6.44591 14.3782 3.94727 10.3611 3.94727ZM10.3611 13.9901C8.14364 13.9901 6.34398 12.1904 6.34398 9.97294C6.34398 7.75549 8.14364 5.95582 10.3611 5.95582C12.5785 5.95582 14.3782 7.75549 14.3782 9.97294C14.3782 12.1904 12.5785 13.9901 10.3611 13.9901ZM10.3611 7.56267C9.02741 7.56267 7.95082 8.63926 7.95082 9.97294C7.95082 11.3066 9.02741 12.3832 10.3611 12.3832C11.6948 12.3832 12.7714 11.3066 12.7714 9.97294C12.7714 8.63926 11.6948 7.56267 10.3611 7.56267Z"
              fill={color ? color : "#ED7A37"}
            />
          </g>
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1695_4335">
          <rect
            width="19.2822"
            height="19.2822"
            fill="white"
            transform="translate(0.716797 0.330078)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HomeIcon = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_640_141690)">
        <mask
          id="mask0_640_141690"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <path d="M16 0H0V16H16V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_640_141690)">
          <path
            d="M6.66732 13.3333V9.33333H9.33398V13.3333H12.6673V8H14.6673L8.00065 2L1.33398 8H3.33398V13.3333H6.66732Z"
            fill={color ? "#ffff" : "#323232"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_640_141690">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SaveIcon = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_640_141698"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_640_141698)">
        <path
          d="M9.50065 14.2751C9.2451 14.5307 8.92843 14.6585 8.55065 14.6585C8.17287 14.6585 7.85621 14.5307 7.60065 14.2751L1.73398 8.40846C1.61176 8.28624 1.51454 8.1418 1.44232 7.97513C1.3701 7.80846 1.33398 7.63069 1.33398 7.4418V2.67513C1.33398 2.30846 1.46454 1.99457 1.72565 1.73346C1.98676 1.47235 2.30065 1.3418 2.66732 1.3418H7.43398C7.62287 1.3418 7.80065 1.37791 7.96732 1.45013C8.13398 1.52235 8.27843 1.61957 8.40065 1.7418L14.2673 7.62513C14.5229 7.88069 14.6507 8.19457 14.6507 8.5668C14.6507 8.93902 14.5229 9.25291 14.2673 9.50846L9.50065 14.2751ZM8.55065 13.3418L13.3173 8.57513L7.43398 2.67513H2.66732V7.4418L8.55065 13.3418ZM4.33398 5.3418C4.61176 5.3418 4.84787 5.24457 5.04232 5.05013C5.23676 4.85569 5.33398 4.61957 5.33398 4.3418C5.33398 4.06402 5.23676 3.82791 5.04232 3.63346C4.84787 3.43902 4.61176 3.3418 4.33398 3.3418C4.05621 3.3418 3.8201 3.43902 3.62565 3.63346C3.43121 3.82791 3.33398 4.06402 3.33398 4.3418C3.33398 4.61957 3.43121 4.85569 3.62565 5.05013C3.8201 5.24457 4.05621 5.3418 4.33398 5.3418Z"
          fill={color ? "#ffff" : "#323232"}
        />
      </g>
    </svg>
  );
};

export const PostalIcon = ({ color }) => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_640_141703"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <rect width="16" height="16" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_640_141703)">
        <path
          d="M3.70065 12.6643L1.33398 10.2976L2.26732 9.36426L3.68398 10.7809L6.51732 7.94759L7.45065 8.89759L3.70065 12.6643ZM3.70065 7.33092L1.33398 4.96426L2.26732 4.03092L3.68398 5.44759L6.51732 2.61426L7.45065 3.56426L3.70065 7.33092ZM8.66732 11.3309V9.99759H14.6673V11.3309H8.66732ZM8.66732 5.99759V4.66426H14.6673V5.99759H8.66732Z"
          fill={color ? "#ffff" : "#323232"}
        />
      </g>
    </svg>
  );
};

export const DeleteIcon = ({ color }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1717_1957)">
        <mask
          id="mask0_1717_1957"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="16"
          height="16"
        >
          <path
            d="M15.196 0.801758H0.802734V15.195H15.196V0.801758Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1717_1957)">
          <path
            d="M4.4005 12.1971C4.4005 12.8568 4.94025 13.3965 5.59994 13.3965H10.3977C11.0574 13.3965 11.5971 12.8568 11.5971 12.1971V5.00044H4.4005V12.1971ZM5.87581 7.92708L6.72141 7.08147L7.99882 8.35288L9.27022 7.08147L10.1158 7.92708L8.84442 9.19848L10.1158 10.4699L9.27022 11.3155L7.99882 10.0441L6.72741 11.3155L5.88181 10.4699L7.15321 9.19848L5.87581 7.92708ZM10.0978 3.20128L9.49811 2.60156H6.49952L5.8998 3.20128H3.80078V4.40072H12.1968V3.20128H10.0978Z"
            fill="white"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1717_1957">
          <rect
            width="14.3933"
            height="14.3933"
            fill="white"
            transform="translate(0.802734 0.803711)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const SendIcon = ({ color }) => {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_1717_20225"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="16"
        height="16"
      >
        <path
          d="M15.196 0.803711H0.802734V15.197H15.196V0.803711Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_1717_20225)">
        <path
          d="M2.00795 13.3985L14.5961 8.001L2.00795 2.60352L2.00195 6.80156L10.9978 8.001L2.00195 9.20044L2.00795 13.3985Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export const PhoneIcon = ({ color, onClick }) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_640_141902"
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="20"
        height="20"
      >
        <rect x="5" y="5" width="20" height="20" fill="#ED7A37" />
      </mask>
      <g mask="url(#mask0_640_141902)">
        <path
          d="M10.8327 24.1634C10.3743 24.1634 9.98199 24.0002 9.6556 23.6738C9.32921 23.3474 9.16602 22.9551 9.16602 22.4967V7.49674C9.16602 7.03841 9.32921 6.64605 9.6556 6.31966C9.98199 5.99327 10.3743 5.83008 10.8327 5.83008H19.166C19.6244 5.83008 20.0167 5.99327 20.3431 6.31966C20.6695 6.64605 20.8327 7.03841 20.8327 7.49674V22.4967C20.8327 22.9551 20.6695 23.3474 20.3431 23.6738C20.0167 24.0002 19.6244 24.1634 19.166 24.1634H10.8327ZM10.8327 19.9967V22.4967H19.166V19.9967H10.8327ZM14.9993 22.0801C15.2355 22.0801 15.4334 22.0002 15.5931 21.8405C15.7528 21.6808 15.8327 21.4829 15.8327 21.2467C15.8327 21.0106 15.7528 20.8127 15.5931 20.653C15.4334 20.4933 15.2355 20.4134 14.9993 20.4134C14.7632 20.4134 14.5653 20.4933 14.4056 20.653C14.2459 20.8127 14.166 21.0106 14.166 21.2467C14.166 21.4829 14.2459 21.6808 14.4056 21.8405C14.5653 22.0002 14.7632 22.0801 14.9993 22.0801ZM10.8327 18.3301H19.166V9.99675H10.8327V18.3301ZM10.8327 8.33008H19.166V7.49674H10.8327V8.33008Z"
          fill={color ? color : "#828282"}
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="29"
        height="29"
        rx="4.5"
        stroke={color ? color : "#828282"}
      />
    </svg>
  );
};

export const MessageIcon = ({ color, onClick }) => {
  return (
    <svg
      className="cursor-pointer"
      onClick={onClick}
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_640_141903"
        maskUnits="userSpaceOnUse"
        x="5"
        y="5"
        width="20"
        height="20"
      >
        <rect x="5" y="5" width="20" height="20" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_640_141903)">
        <path
          d="M8.33268 21.6634C7.87435 21.6634 7.48199 21.5002 7.1556 21.1738C6.82921 20.8474 6.66602 20.4551 6.66602 19.9967V9.99674C6.66602 9.53841 6.82921 9.14605 7.1556 8.81966C7.48199 8.49327 7.87435 8.33008 8.33268 8.33008H21.666C22.1243 8.33008 22.5167 8.49327 22.8431 8.81966C23.1695 9.14605 23.3327 9.53841 23.3327 9.99674V19.9967C23.3327 20.4551 23.1695 20.8474 22.8431 21.1738C22.5167 21.5002 22.1243 21.6634 21.666 21.6634H8.33268ZM14.9993 15.8301L8.33268 11.6634V19.9967H21.666V11.6634L14.9993 15.8301ZM14.9993 14.1634L21.666 9.99674H8.33268L14.9993 14.1634ZM8.33268 11.6634V9.99674V19.9967V11.6634Z"
          fill={color ? color : "#828282"}
        />
      </g>
      <rect
        x="0.5"
        y="0.5"
        width="29"
        height="29"
        rx="4.5"
        stroke={color ? color : "#828282"}
      />
    </svg>
  );
};

export const SearchZoomIcon = ({ color }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1717_2588)">
        <mask
          id="mask0_1717_2588"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="20"
          height="20"
        >
          <path
            d="M19.8056 0.331055H0.523438V19.6132H19.8056V0.331055Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_1717_2588)">
          <path
            d="M12.9744 11.5789H12.3397L12.1148 11.3619C12.9021 10.446 13.3761 9.25697 13.3761 7.96346C13.3761 5.07917 11.0382 2.74121 8.15389 2.74121C5.2696 2.74121 2.93164 5.07917 2.93164 7.96346C2.93164 10.8478 5.2696 13.1857 8.15389 13.1857C9.4474 13.1857 10.6365 12.7117 11.5524 11.9243L11.7693 12.1493V12.784L15.7864 16.7931L16.9835 15.596L12.9744 11.5789ZM8.15389 11.5789C6.15337 11.5789 4.53849 9.96399 4.53849 7.96346C4.53849 5.96294 6.15337 4.34806 8.15389 4.34806C10.1544 4.34806 11.7693 5.96294 11.7693 7.96346C11.7693 9.96399 10.1544 11.5789 8.15389 11.5789ZM6.41046 10.3737L8.12979 9.14449L9.84911 10.3737L9.18227 8.39731L10.9096 7.19218H8.80466L8.12979 5.15148L7.45491 7.19218H5.34191L7.06124 8.38928L6.41046 10.3737Z"
            fill="#ED7A37"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_1717_2588">
          <rect
            width="19.2822"
            height="19.2822"
            fill="white"
            transform="translate(0.521484 0.331055)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const ProfileIcon = ({ color }) => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <mask
        id="mask0_626_106166"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width="25"
        height="24"
      >
        <path d="M24.5 0H0.5V24H24.5V0Z" fill="white" />
      </mask>
      <g mask="url(#mask0_626_106166)">
        <path
          d="M12.5 12C14.71 12 16.5 10.21 16.5 8C16.5 5.79 14.71 4 12.5 4C10.29 4 8.5 5.79 8.5 8C8.5 10.21 10.29 12 12.5 12ZM12.5 14C9.83 14 4.5 15.34 4.5 18V20H20.5V18C20.5 15.34 15.17 14 12.5 14Z"
          fill={color ? color : "#323232"}
        />
      </g>
    </svg>
  );
};

export const TopBottomIcon = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_106148)">
        <mask
          id="mask0_626_106148"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="24"
        >
          <path d="M24 0H0V24H24V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_106148)">
          <path
            d="M12.0002 5.83L15.1702 9L16.5802 7.59L12.0002 3L7.41016 7.59L8.83016 9L12.0002 5.83ZM12.0002 18.17L8.83016 15L7.42016 16.41L12.0002 21L16.5902 16.41L15.1702 15L12.0002 18.17Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_106148">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const WorkBagIcon = () => {
  return (
    <svg
      width="30"
      height="31"
      viewBox="0 0 30 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_104559)">
        <mask
          id="mask0_626_104559"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="31"
        >
          <path d="M30 0.75H0V30.75H30V0.75Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_104559)">
          <path
            d="M25 9.5H18.75V5.75C18.75 4.375 17.625 3.25 16.25 3.25H13.75C12.375 3.25 11.25 4.375 11.25 5.75V9.5H5C3.625 9.5 2.5 10.625 2.5 12V25.75C2.5 27.125 3.625 28.25 5 28.25H25C26.375 28.25 27.5 27.125 27.5 25.75V12C27.5 10.625 26.375 9.5 25 9.5ZM11.25 15.75C12.2875 15.75 13.125 16.5875 13.125 17.625C13.125 18.6625 12.2875 19.5 11.25 19.5C10.2125 19.5 9.375 18.6625 9.375 17.625C9.375 16.5875 10.2125 15.75 11.25 15.75ZM15 23.25H7.5V22.3125C7.5 21.0625 10 20.4375 11.25 20.4375C12.5 20.4375 15 21.0625 15 22.3125V23.25ZM16.25 12H13.75V5.75H16.25V12ZM22.5 21.375H17.5V19.5H22.5V21.375ZM22.5 17.625H17.5V15.75H22.5V17.625Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_104559">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0 0.75)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const AdTheRate = () => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_811_71608)">
        <mask
          id="mask0_811_71608"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <path d="M30 0H0V30H30V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_811_71608)">
          <path
            d="M15 2.5C8.1 2.5 2.5 8.1 2.5 15C2.5 21.9 8.1 27.5 15 27.5H21.25V25H15C9.575 25 5 20.425 5 15C5 9.575 9.575 5 15 5C20.425 5 25 9.575 25 15V16.7875C25 17.775 24.1125 18.75 23.125 18.75C22.1375 18.75 21.25 17.775 21.25 16.7875V15C21.25 11.55 18.45 8.75 15 8.75C11.55 8.75 8.75 11.55 8.75 15C8.75 18.45 11.55 21.25 15 21.25C16.725 21.25 18.3 20.55 19.425 19.4125C20.2375 20.525 21.6375 21.25 23.125 21.25C25.5875 21.25 27.5 19.25 27.5 16.7875V15C27.5 8.1 21.9 2.5 15 2.5ZM15 18.75C12.925 18.75 11.25 17.075 11.25 15C11.25 12.925 12.925 11.25 15 11.25C17.075 11.25 18.75 12.925 18.75 15C18.75 17.075 17.075 18.75 15 18.75Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_811_71608">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const MapIcon = () => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_811_71614)">
        <mask
          id="mask0_811_71614"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="31"
          height="30"
        >
          <path d="M30.25 0H0.25V30H30.25V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_811_71614)">
          <path
            d="M25.875 3.75L25.675 3.7875L19 6.375L11.5 3.75L4.45 6.125C4.1875 6.2125 4 6.4375 4 6.725V25.625C4 25.975 4.275 26.25 4.625 26.25L4.825 26.2125L11.5 23.625L19 26.25L26.05 23.875C26.3125 23.7875 26.5 23.5625 26.5 23.275V4.375C26.5 4.025 26.225 3.75 25.875 3.75ZM19 23.75L11.5 21.1125V6.25L19 8.8875V23.75Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_811_71614">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const TelephoneIcon = ({ color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_811_71602)">
        <mask
          id="mask0_811_71602"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="30"
          height="30"
        >
          <path d="M30 0H0V30H30V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_811_71602)">
          <path
            d="M8.275 13.4875C10.075 17.025 12.975 19.9125 16.5125 21.725L19.2625 18.975C19.6 18.6375 20.1 18.525 20.5375 18.675C21.9375 19.1375 23.45 19.3875 25 19.3875C25.6875 19.3875 26.25 19.95 26.25 20.6375V25C26.25 25.6875 25.6875 26.25 25 26.25C13.2625 26.25 3.75 16.7375 3.75 5C3.75 4.3125 4.3125 3.75 5 3.75H9.375C10.0625 3.75 10.625 4.3125 10.625 5C10.625 6.5625 10.875 8.0625 11.3375 9.4625C11.475 9.9 11.375 10.3875 11.025 10.7375L8.275 13.4875Z"
            fill={clsx(color ? color : "#323232")}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_811_71602">
          <rect width="30" height="30" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const EmailIcon = () => {
  return (
    <svg
      width="31"
      height="30"
      viewBox="0 0 31 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_104614)">
        <mask
          id="mask0_626_104614"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="31"
          height="30"
        >
          <path d="M30.25 0H0.25V30H30.25V0Z" fill="white" />
        </mask>
        <g mask="url(#mask0_626_104614)">
          <path
            d="M27.7375 10C27.7375 9.1 27.275 8.3125 26.5625 7.875L15.25 1.25L3.9375 7.875C3.225 8.3125 2.75 9.1 2.75 10V22.5C2.75 23.875 3.875 25 5.25 25H25.25C26.625 25 27.75 23.875 27.75 22.5L27.7375 10ZM15.25 16.25L4.925 9.8L15.25 3.75L25.575 9.8L15.25 16.25Z"
            fill="#323232"
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_104614">
          <rect
            width="30"
            height="30"
            fill="white"
            transform="translate(0.25)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};

export const UploadIcon = ({ color }) => {
  return (
    <svg
      width="24"
      height="23"
      viewBox="0 0 24 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_626_114478)">
        <mask
          id="mask0_626_114478"
          maskUnits="userSpaceOnUse"
          x="0"
          y="0"
          width="24"
          height="23"
        >
          <path
            d="M23.1335 0.0917969H0.390625V22.8347H23.1335V0.0917969Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_626_114478)">
          <path
            d="M8.91938 15.2536H14.6051V9.5679H18.3956L11.7622 2.93457L5.12891 9.5679H8.91938V15.2536ZM5.12891 17.1489H18.3956V19.0441H5.12891V17.1489Z"
            fill={color ? color : "white"}
          />
        </g>
      </g>
      <defs>
        <clipPath id="clip0_626_114478">
          <rect
            width="22.7429"
            height="22.7429"
            fill="white"
            transform="translate(0.390625 0.0917969)"
          />
        </clipPath>
      </defs>
    </svg>
  );
};
