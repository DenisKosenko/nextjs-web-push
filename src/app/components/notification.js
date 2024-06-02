export default function Notification({ title, text }) {
  return (
    <div className="relative">
      <div className="p-3 bg-white/40 backdrop-blur-md rounded-[20px] shadow">
        <div className="flex gap-3 items-start">
          <svg
            viewBox="0 0 76 76"
            width="36px"
            height="36px"
            xmlns="http://www.w3.org/2000/svg"
            className="rounded-xl min-w-[36px]"
          >
            <defs>
              <filter
                id="filter0_d_70_54884"
                x="0"
                y="0"
                width="76"
                height="76"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                ></feColorMatrix>
                <feOffset></feOffset>
                <feGaussianBlur stdDeviation="4"></feGaussianBlur>
                <feComposite in2="hardAlpha" operator="out"></feComposite>
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0"
                ></feColorMatrix>
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_70_54884"
                ></feBlend>
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_70_54884"
                  result="shape"
                ></feBlend>
              </filter>
            </defs>
            <g
              filter="url(#filter0_d_70_54884)"
              transform="matrix(1.266667, 0, 0, 1.266667, -10.133333, -10.133333)"
            >
              <rect
                x="8"
                y="8"
                width="60"
                height="60"
                rx="4"
                fill="#00D1D2"
              ></rect>
              <path
                d="M47.8735 24.7127L56.5571 39.8617C60.9115 47.4872 55.4685 57 46.7343 57H29.3672C20.633 57 15.19 47.4872 19.5444 39.8617L28.2279 24.7127C32.5824 17.0872 43.4938 17.0872 47.8735 24.7127ZM38.0507 25.6054C29.8735 25.6054 23.2153 32.2872 23.2153 40.5503C23.2153 48.8134 29.8482 55.4698 38.0507 55.4698C46.2279 55.4698 52.8862 48.7879 52.8862 40.5248C52.8862 32.2617 46.2279 25.6054 38.0507 25.6054Z"
                fill="white"
              ></path>
            </g>
          </svg>
          <div>
            <p className="text-xs font-semibold">{title} from IQOS</p>
            <h2 className="text-xs">{text}</h2>
          </div>
          <p className="text-[10px] ml-auto -mt-1 text-[#a62a91]">now</p>
        </div>
      </div>
    </div>
  );
}
