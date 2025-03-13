import Svg, { SvgProps, Path, Circle, Rect } from "react-native-svg";

export * from "./shiga-home-icon";
export * from "./shiga-card-icon";
export * from "./shiga-profile-icon";
export * from "./shiga-transactions-icon";
export * from "./shiga-search-icon";


export const HalfSunIcon = (props: SvgProps) => (
  <Svg
    width={36}
    height={36}
    fill="none"
    {...props}
  >
    <Path
      fill="#fff"
      d="m8.597 16.535 1.142-.973-1.142.973Zm-3.603 2.068a1.5 1.5 0 1 0 2.332 1.887l-2.332-1.887Zm5.034 3.542a1.5 1.5 0 1 0 2.7 1.309l-2.7-1.309Zm6.472 2.043a1.5 1.5 0 0 0 3 0h-3Zm6.788-.668a1.5 1.5 0 1 0 2.621-1.46l-2.62 1.46Zm5.319-3.097a1.5 1.5 0 0 0 2.282-1.948l-2.282 1.948Zm-10.59 1.889a13.93 13.93 0 0 0 5.494-1.196l-1.217-2.742a10.93 10.93 0 0 1-4.31.938l.032 3Zm5.494-1.196a14.13 14.13 0 0 0 4.875-3.59l-2.25-1.983a11.133 11.133 0 0 1-3.842 2.83l1.216 2.743Zm4.875-3.59c1.263-1.432 2.3-3.173 3.027-5.21l-2.826-1.007c-.603 1.69-1.45 3.097-2.451 4.234l2.25 1.983Zm-16.142 3.587c1.828.822 3.8 1.22 5.772 1.199l-.032-3a10.711 10.711 0 0 1-4.51-.935l-1.23 2.736Zm-7.67-8.835c.666 2.041 1.655 3.79 2.881 5.229l2.284-1.945c-.962-1.13-1.763-2.53-2.313-4.215l-2.852.931Zm2.881 5.229a13.601 13.601 0 0 0 4.789 3.606l1.23-2.736a10.602 10.602 0 0 1-3.735-2.815l-2.284 1.945Zm-.024-1.916-2.437 3.012 2.332 1.887 2.437-3.012-2.332-1.887Zm4.078 3.5-1.481 3.054 2.7 1.309 1.48-3.055-2.699-1.309Zm4.991 1.72v3.002h3v-3.001h-3Zm0 3.002v.375h3v-.375h-3Zm5.092-3.338 1.696 3.045 2.621-1.46-1.696-3.045-2.621 1.46Zm4.528-2.967 2.487 2.915 2.282-1.948-2.487-2.914-2.282 1.947Z"
    />
  </Svg>
)

export const TransactionCompletedIcon = (props: SvgProps) => (
  <Svg
    width={73}
    height={72}
    fill="none"
    {...props}
  >
    <Rect
      width={65.958}
      height={65.958}
      x={3.521}
      y={3.021}
      stroke="#727AE4"
      strokeWidth={6.042}
      rx={32.979}
    />
    <Path
      fill="#727AE4"
      fillRule="evenodd"
      stroke="#727AE4"
      strokeWidth={1.208}
      d="M52.055 25.66a2.474 2.474 0 0 0-3.524 0L32.875 41.725l-6.968-7.213a2.474 2.474 0 0 0-3.524 0 2.573 2.573 0 0 0 0 3.607l8.77 9.016a2.474 2.474 0 0 0 3.525 0l17.46-17.869c.9-.983.9-2.623-.083-3.606Z"
      clipRule="evenodd"
    />
  </Svg>
)

export const ConfirmSendIcon = (props: SvgProps) => (
  <Svg
    width={38}
    height={38}
    fill="none"
    {...props}
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.876}
      d="M19 30.048V7.952m0 0-8.216 8.217M19 7.952l8.217 8.217"
    />
  </Svg>
)

export const ChevronLeftIcon = (props: SvgProps) => {
  return (
    <Svg width={25} height={24} fill="none" {...props}>
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.6}
        d="m14.995 6.5-5.657 5.657 5.657 5.343"
      />
    </Svg>
  );
};
export const EqualsCircleIcon = (props: SvgProps) => (
  <Svg width={19} height={18} fill="none" {...props}>
    <Rect width={18} height={18.004} x={0.5} y={-0.002} fill="#2E302E" rx={9} />
    <Path
      fill="#fff"
      d="M12.363 8.202H6.637c-.35 0-.574-.042-.672-.14a.37.37 0 0 1-.098-.196.977.977 0 0 1-.042-.336v-.28c0-.154.014-.266.042-.35a.382.382 0 0 1 .098-.182c.098-.098.322-.14.672-.14h5.726c.35 0 .574.042.672.14a.575.575 0 0 1 .112.182c.014.084.028.196.028.35v.28c0 .154-.014.266-.028.336a.516.516 0 0 1-.112.196c-.098.098-.322.14-.672.14Zm0 3.22H6.637c-.35 0-.574-.042-.672-.14a.37.37 0 0 1-.098-.196.977.977 0 0 1-.042-.336v-.28c0-.154.014-.266.042-.35a.382.382 0 0 1 .098-.182c.098-.098.322-.14.672-.14h5.726c.35 0 .574.042.672.14a.575.575 0 0 1 .112.182c.014.084.028.196.028.35v.28c0 .154-.014.266-.028.336a.516.516 0 0 1-.112.196c-.098.098-.322.14-.672.14Z"
    />
  </Svg>
);

export const CancelIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.8}
      d="m6 6 6 6m0 0 6 6m-6-6 6-6m-6 6-6 6"
    />
  </Svg>
);

export const SpentCardIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#6F6F6F"
      fillRule="evenodd"
      d="M23.4 6.3a4 4 0 0 0-4-4H4.6a4 4 0 0 0-4 4v11.4a4 4 0 0 0 4 4h14.8a4 4 0 0 0 4-4V6.3ZM10.265 7.6h-2.73a1.925 1.925 0 0 0 0 3.85h2.73a1.925 1.925 0 0 0 0-3.85Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const RefundIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.2}
      d="M8.604 19.54V9.533a5.073 5.073 0 0 1 5.073-5.073v0a5.073 5.073 0 0 1 5.073 5.073v.704M8.604 19.54 5.25 16.237h6.332l-2.978 3.302Z"
    />
  </Svg>
);
export const ReceiveIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={3.2}
      d="M12 4.75v14.5m0 0-5.392-5.392M12 19.25l5.392-5.392"
    />
  </Svg>
);
export const WarnIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#FF453A"
      strokeLinecap="round"
      strokeWidth={2.4}
      d="M12 9.8v3.625m0 3.171v.068M10.025 4.256l-7.456 13.27c-.849 1.51.243 3.374 1.975 3.374h14.912c1.732 0 2.824-1.865 1.975-3.375l-7.456-13.27c-.866-1.54-3.084-1.54-3.95 0Z"
    />
  </Svg>
);

export const DeleteIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#6F6F6F"
      strokeLinecap="round"
      strokeWidth={2.4}
      d="M2.9 6.36h1.053m0 0 1.405 12.178A3.91 3.91 0 0 0 9.242 22h5.779c2 0 3.678-1.51 3.888-3.498L20.193 6.36m-16.24 0h4.51m11.73 0h.902m-.902 0h-4.511m-7.218 0V3.805c0-.997.808-1.805 1.804-1.805h3.61c.996 0 1.804.808 1.804 1.805V6.36m-7.218 0h7.218m-6.316 5.113.451 4.962m4.963-4.962-.301 4.962"
    />
  </Svg>
);

export const FreezeIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#6F6F6F"
      strokeLinecap="round"
      strokeWidth={2.4}
      d="M12 2v3.571M12 22v-3.571M12 5.57l4.285-2.857M12 5.571V18.43m0 0-4.285 2.857M3.339 7l3.093 1.786m0 0-.331-5.14m.331 5.14 11.135 6.428m0 0L20.66 17m-3.093-1.786.331 5.14M20.66 7l-3.093 1.786m0 0 4.617 2.283m-4.617-2.283L6.432 15.214m0 0L3.34 17m3.093-1.786-4.617-2.283"
    />
  </Svg>
);

export const CardIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#6F6F6F"
      strokeLinecap="round"
      strokeWidth={2.4}
      d="M1.8 16.5v-9a4 4 0 0 1 4-4h12.4a4 4 0 0 1 4 4v9a4 4 0 0 1-4 4H5.8a4 4 0 0 1-4-4Z"
    />
  </Svg>
);

export const SearchIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#6F6F6F"
      d="M15.819 17.516a1.2 1.2 0 1 0 1.696-1.698l-1.696 1.698Zm-2.185-8.43a4.552 4.552 0 0 1-4.552 4.551v2.4a6.952 6.952 0 0 0 6.952-6.952h-2.4Zm-4.552 4.551A4.552 4.552 0 0 1 4.53 9.085h-2.4a6.952 6.952 0 0 0 6.952 6.953v-2.4ZM4.53 9.085a4.552 4.552 0 0 1 4.552-4.552v-2.4A6.952 6.952 0 0 0 2.13 9.085h2.4Zm4.552-4.552a4.552 4.552 0 0 1 4.552 4.552h2.4a6.952 6.952 0 0 0-6.952-6.952v2.4Zm3.466 9.715 3.27 3.268 1.697-1.698-3.27-3.268-1.697 1.698Z"
    />
  </Svg>
);

export const BusinessIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M1.5 10.542V19a3.208 3.208 0 0 0 3.208 3.208h14.584A3.208 3.208 0 0 0 22.5 19v-8.458a2.917 2.917 0 0 0-2.917-2.917h-2.479V5.292a3.5 3.5 0 0 0-3.5-3.5H10.25a3.5 3.5 0 0 0-3.5 3.5v2.333H4.417A2.917 2.917 0 0 0 1.5 10.542Zm12.833-4.959v2.042H9.375V5.583c0-.644.522-1.166 1.167-1.166h2.625c.644 0 1.166.522 1.166 1.166Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ScholarFillIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="m23.066 8.662-11.15 4.215a1.08 1.08 0 0 1-.782-.007L.867 8.775a.324.324 0 0 1-.003-.601l10.272-4.196a1.08 1.08 0 0 1 .78-.014l11.146 4.09a.324.324 0 0 1 .003.608Z"
    />
    <Path
      fill="#fff"
      d="m11.121 15.185-8.418-3.403v5.04c5.102 4.394 12.662 4.486 17.734.214v-5.254l-8.51 3.404a1.08 1.08 0 0 1-.806-.001Z"
    />
  </Svg>
);
export const ChevronRightIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#6F6F6F"
      strokeLinecap="round"
      strokeLinejoin="bevel"
      strokeWidth={2}
      d="M5.9 12.2 10.1 8 5.9 3.8"
    />
  </Svg>
);
export const SwapIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="m20.717 11.754-.34 1.46a1.5 1.5 0 0 0 1.799-1.109l-1.459-.351Zm-4.59-2.612a1.5 1.5 0 0 0-.682 2.921l.682-2.921Zm7.2-1.804a1.5 1.5 0 0 0-2.917-.704l2.916.704ZM4.215 6.144a1.5 1.5 0 1 0 2.407 1.79l-2.407-1.79Zm-.933 6.103.34-1.461a1.5 1.5 0 0 0-1.798 1.109l1.458.352Zm4.59 2.611a1.5 1.5 0 0 0 .682-2.921l-.682 2.921Zm-7.2 1.804a1.5 1.5 0 1 0 2.917.704l-2.916-.704Zm19.111 1.194a1.5 1.5 0 0 0-2.407-1.79l2.407 1.79ZM11.958 5.2c1.633 0 2.842.68 3.985 1.934 1.207 1.326 2.227 3.163 3.469 5.359l2.611-1.477c-1.175-2.079-2.375-4.269-3.862-5.902C16.609 3.41 14.646 2.2 11.958 2.2v3Zm9.1 5.094-4.931-1.151-.682 2.921 4.931 1.151.682-2.921Zm-.648-3.659-1.15 4.768 2.915.703 1.151-4.767-2.916-.704Zm-13.787 1.3c1.249-1.68 3.183-2.735 5.335-2.735v-3c-3.169 0-5.97 1.56-7.742 3.945l2.407 1.79ZM12.042 18.8c-1.633 0-2.842-.68-3.985-1.934-1.207-1.326-2.227-3.164-3.469-5.359l-2.611 1.477c1.175 2.079 2.375 4.269 3.862 5.902C7.391 20.59 9.354 21.8 12.042 21.8v-3Zm-9.1-5.094 4.931 1.151.682-2.921-4.932-1.151-.681 2.921Zm.648 3.659 1.15-4.767-2.915-.704-1.151 4.767 2.916.704Zm13.787-1.3c-1.249 1.68-3.182 2.735-5.335 2.735v3c3.169 0 5.97-1.56 7.742-3.945l-2.407-1.79Z"
    />
  </Svg>
);
export const OptionIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#6F6F6F"
      d="M12 16.4a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM12 3.6a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z"
    />
  </Svg>
);

export const CalendarIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M21.11 6.512a1.886 1.886 0 0 0-1.886-1.886H5.05c-1.196 0-2.166.97-2.166 2.167v1.605H21.11V6.512Z"
    />
    <Path
      fill="#fff"
      fillOpacity={0.05}
      d="M2.885 19.188c0 1.197.97 2.167 2.166 2.167h13.892c1.197 0 2.167-.97 2.167-2.167V8.398H2.885v10.79Z"
    />
    <Path
      stroke="#fff"
      strokeWidth={2.6}
      d="M2.885 8.398V6.793c0-1.197.97-2.167 2.166-2.167h14.173c1.041 0 1.886.845 1.886 1.886v1.886m-18.225 0v10.79c0 1.197.97 2.167 2.166 2.167h13.892c1.197 0 2.167-.97 2.167-2.167V8.398m-18.225 0H21.11"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.6}
      d="M7.285 2.645v3.769m9.95-3.769v3.769"
    />
    <Circle
      cx={7.758}
      cy={16.261}
      r={1.174}
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.175}
    />
  </Svg>
);

export const ChevronDownIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.4}
      d="M11.6 6.2 8 9.8 4.4 6.2"
    />
  </Svg>
);

export const SendIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      d="M21.158.574 1.828 6.13c-1.34.385-1.776 2.063-.796 3.052L4.67 12.85a3.055 3.055 0 0 0 4.047.258l6.22-4.846c.5-.39 1.155.238.785.754l-4.732 6.59a3.055 3.055 0 0 0 .313 3.932l3.39 3.419c.982.99 2.667.564 3.06-.775l5.672-19.33c.407-1.387-.877-2.678-2.266-2.278Z"
    />
  </Svg>
);

export const BankIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      fill="#fff"
      fillRule="evenodd"
      d="M27.322 11.737 16.257 2.842a2.01 2.01 0 0 0-2.514 0L2.678 11.737c-.547.44-.233 1.314.471 1.314h2.007v10.11h-.499c-.826 0-1.495.663-1.495 1.48v1.726c0 .68.558 1.233 1.246 1.233h21.309a1.24 1.24 0 0 0 1.246-1.233v-1.726c0-.817-.67-1.48-1.495-1.48h-.499v-10.11h1.882c.704 0 1.018-.875.471-1.314ZM13.754 23.161v-10.11h2.617v10.11h-2.617Zm-2.99 0v-10.11H8.145v10.11h2.617Zm8.598 0v-10.11h2.616v10.11h-2.617Z"
      clipRule="evenodd"
    />
  </Svg>
);

export const ScanIcon = (props: SvgProps) => (
  <Svg width={24} height={24} fill="none" {...props}>
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeWidth={2.4}
      d="M7.88 2.5H6.644a4.09 4.09 0 0 0-4.091 4.09v1.24M7.88 21.5H6.476a3.924 3.924 0 0 1-3.924-3.924v-1.405M16.117 21.5h1.407a3.924 3.924 0 0 0 3.924-3.924v-1.405M16.118 2.5h1.407a3.924 3.924 0 0 1 3.923 3.924v1.405"
    />
  </Svg>
);
