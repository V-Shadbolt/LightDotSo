module.exports = {
  titleSuffix: " | Light",
  darkMode: true,
  unstable_flexsearch: true,
  newNextLinkBehavior: true,
  docsRepositoryBase:
    "https://github.com/LightDotSo/LightDotSo/blob/main/apps/docs",
  editLink: {
    nextLinks: true,
    prevLinks: true,
    projectLink: "https://github.com/LightDotSo",
  },
  footer: {
    text: `${new Date().getFullYear()} ©Light, Inc.`,
  },
  chat: {
    link: "https://light.so/discord",
  },
  head: () => {
    return (
      <>
        <meta name="description" content="Light Whitepaper" />
      </>
    );
  },
  logo: (
    <>
      <span className="mr-3">
        <svg
          width="96"
          height="36"
          viewBox="0 0 96 36"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M44 27.9172V9H45.9617V27.9172H44ZM48.9297 12.1059V9H50.8639V12.1059H48.9297ZM48.9297 27.9178V13.8005H50.8639V27.9178H48.9297ZM59.0094 13.6873C55.2501 13.6873 53.1523 16.2284 53.1523 20.1814C53.1523 24.1343 55.2775 26.677 58.9824 26.6754C61.3256 26.6754 63.0145 25.3767 63.6408 23.7674H63.6682V27.325C63.6682 30.1204 62.6604 31.1932 59.7723 31.1932C56.94 31.1932 55.8225 30.2046 55.8225 27.9178H53.8878C53.8878 31.1364 56.3127 32.9999 59.7449 32.9999C63.2867 32.9999 65.6294 31.1085 65.6294 27.325V13.9695H63.8861V16.6801H63.7774C63.1775 14.9013 61.3799 13.6873 59.0094 13.6873ZM63.6682 20.6046C63.6682 23.4852 61.8701 24.925 59.4457 24.925C56.8303 24.925 55.1139 23.8801 55.1139 20.1814C55.1139 16.5111 56.7759 15.4377 59.3365 15.4377C61.8427 15.4377 63.6682 16.878 63.6682 19.7581V20.6046ZM68.6793 27.9172V9H70.641V16.569H70.7496C71.2672 15.2419 72.6565 13.6889 75.3811 13.6889C78.8955 13.6889 80.3939 16.1173 80.3939 19.308V27.9194H78.4587V19.8139C78.4587 16.7927 77.4779 15.4656 74.7533 15.4656C72.0566 15.4656 70.6389 16.7643 70.6389 19.8987V27.9172H68.6793ZM84.453 15.7204V23.9648C84.453 26.9296 85.8965 27.9462 88.3758 27.9462C89.1436 27.9402 89.9095 27.8646 90.6646 27.7203V26.0826H88.8934C87.1502 26.0826 86.4141 25.7152 86.4141 24.078V15.7204H90.6646V13.9695H86.4141V10.4124H84.9411L84.4779 13.9695H82.1921V15.7204H84.453Z"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.0001 2.00001C13.1628 1.9966 10.3761 2.75171 7.92868 4.18713H24.0704C21.6234 2.75191 18.8371 1.99681 16.0001 2.00001ZM27.5833 6.96894C28.229 7.64543 28.8144 8.37706 29.3328 9.15549H2.66604C3.04893 8.58899 3.46795 8.04779 3.92055 7.53526H3.9013C3.94051 7.49054 3.9822 7.4488 4.02379 7.40718L4.02379 7.40718L4.02381 7.40716L4.02382 7.40715L4.02383 7.40714C4.05912 7.37181 4.09433 7.33657 4.12786 7.29966C4.16923 7.25376 4.20918 7.20654 4.24912 7.15934L4.24914 7.15932L4.24914 7.15931L4.24915 7.1593L4.24916 7.15929C4.30381 7.0947 4.35845 7.03012 4.41669 6.96894H4.44389C4.99187 6.38556 5.58253 5.8438 6.21099 5.34814H15.0578C14.4291 5.84351 13.8384 6.38529 13.2907 6.96894H27.5833ZM31.5252 14.1228C31.3396 13.3775 31.1 12.6467 30.8082 11.9362H10.0476C10.2714 11.3822 10.5259 10.8411 10.8099 10.3154H1.96309C1.67905 10.841 1.42474 11.3821 1.20133 11.9362H1.19169C1.17618 11.9744 1.16241 12.0136 1.14863 12.0529C1.13623 12.0883 1.12382 12.1236 1.11014 12.1582C1.09271 12.2018 1.07411 12.2453 1.0554 12.2892C1.02546 12.3593 0.995238 12.4301 0.969097 12.5025H0.98327C0.784132 13.033 0.613954 13.5739 0.473516 14.1228H31.5252ZM31.959 16.9054H8.89781C8.93108 16.3626 8.99193 15.8218 9.08016 15.2852H0.233928C0.145228 15.8217 0.0841689 16.3625 0.0509892 16.9054H0.0413445C0.0367978 16.9703 0.0350425 17.0353 0.0333045 17.0996C0.0320115 17.1474 0.0307281 17.1949 0.028312 17.2418C0.0266981 17.2783 0.0238098 17.3145 0.0209181 17.3508C0.0177209 17.3908 0.0145195 17.431 0.0130325 17.4717H0.0198426C0.0176437 17.5285 0.0147906 17.5851 0.0119368 17.6418C0.00596993 17.7602 0 17.8786 0 17.9989C0 18.3665 0.0169902 18.7306 0.0413445 19.0919H31.959C31.9834 18.7306 32.0004 18.3665 32.0004 17.9989C32.0004 17.6314 31.9834 17.2673 31.959 16.9054ZM5.64459 30.1902H14.4914C15.2058 30.797 15.9721 31.3401 16.7813 31.8132H24.0717C21.6243 33.2487 18.8376 34.0038 16.0002 34.0004C13.5719 34.0014 11.1755 33.4466 8.99471 32.3784H8.97998C8.96431 32.3702 8.94908 32.3617 8.93395 32.3532L8.93391 32.3532C8.91461 32.3424 8.89547 32.3316 8.87579 32.3218C8.82816 32.2982 8.78135 32.2729 8.7345 32.2475C8.70392 32.231 8.67332 32.2144 8.64245 32.1983C8.4193 32.0828 8.19782 31.965 7.9809 31.8393C7.97183 31.8338 7.96243 31.8289 7.95297 31.8239L7.95294 31.8239C7.94469 31.8195 7.93639 31.8152 7.92822 31.8104H7.93448C7.12536 31.3382 6.35913 30.796 5.64459 30.1902ZM10.5714 25.2224H1.72463C2.01259 25.7807 2.33296 26.3217 2.68409 26.8426H2.66708C2.70198 26.8948 2.73966 26.9446 2.77733 26.9943C2.80753 27.0341 2.83771 27.074 2.86644 27.115C2.89513 27.1561 2.92349 27.1999 2.95222 27.2442L2.95226 27.2443C2.98816 27.2998 3.02462 27.3561 3.063 27.409H3.08111C3.49079 27.9775 3.93688 28.5189 4.41662 29.0298H27.5815C28.2271 28.353 28.8125 27.6211 29.331 26.8426H11.5292C11.1783 26.3219 10.8584 25.7809 10.5714 25.2224ZM0.16089 20.2537H9.00771C9.08779 20.7991 9.19668 21.3399 9.33394 21.8739H31.5252C31.3397 22.6192 31.1 23.35 30.8082 24.0604H1.1917C0.97846 23.5306 0.793751 22.9898 0.638357 22.4402H0.6293C0.616711 22.3969 0.60628 22.3526 0.595849 22.3083C0.587038 22.2709 0.578227 22.2335 0.568113 22.1967C0.555531 22.1505 0.541708 22.1048 0.527881 22.0591C0.509343 21.9978 0.490798 21.9365 0.475226 21.8739H0.487118C0.35013 21.3399 0.241242 20.7991 0.16089 20.2537Z"
          />
          <defs>
            <clipPath id="clip0_215_1308">
              <rect width="628" height="205" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </span>
      <span className="font-normal text-gray-400">Whitepaper</span>
    </>
  ),
};
