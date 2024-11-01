export default function Footer() {
  return (
    <footer className="mt-auto ">
      <div className="bg-[url(/images/banner.png)] bg-cover bg-center w-full py-[104px] px-[16px] flex flex-col items-center justify-center text-center">
        <span className="text-[48px] sm:text-[72px] text-white">
          Big Summer <b>Sale</b>
        </span>
        <p className="text-textColor">
          Commodo fames vitae vitae leo mauris in. Eu consequat.
        </p>
        <span className="h-[56px] w-[191px] border-2 inline-flex items-center justify-center mt-5 rounded-md text-[16px] text-white hover:text-black hover:bg-white hover:opacity-90 btn-transition font-semibold">
          Shop Now
        </span>
      </div>
      <div className="bg-black py-[48px] md:py-[104px] text-textColor md:text-start text-center flex flex-col gap-10">
        <div className="w-full grid md:grid-cols-3 max-w-[1200px] px-[20px] mx-auto justify-items-center gap-10 text-[14px]">
          <div className="max-w-[384px] flex flex-col gap-2 items-center md:items-start">
            <span>
              <svg
                width="66"
                height="24"
                viewBox="0 0 66 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  width="65.3996"
                  height="22.872"
                  transform="translate(0 0.563995)"
                  fill="none"
                />
                <path
                  d="M14.1826 16.644C13.1266 17.916 8.016 18.064 6.096 18.064C2.304 18.064 0 15.616 0 12.064C0 8.536 2.328 6.088 6.096 6.088C7.92 6.088 13.1746 7.284 14.2306 8.556L8.832 10.048C8.064 9.208 7.224 8.872 6.096 8.872C4.488 8.872 3.096 10.168 3.096 12.064C3.096 14.128 4.392 15.28 6.096 15.28C7.104 15.28 8.256 14.896 8.88 14.104L14.1826 16.644Z"
                  fill="white"
                />
                <path
                  d="M28.8035 6.876L21.8195 23.436H18.3875L20.6195 18.276L15.7955 6.876H19.2035L21.6035 12.972L22.2995 15.156L22.9715 12.972L25.3715 6.876H28.8035Z"
                  fill="white"
                />
                <path
                  d="M36.6494 9.42C34.9214 9.42 33.6734 10.74 33.6734 12.54C33.6734 14.316 34.9214 15.636 36.6494 15.636C38.3294 15.636 39.4814 14.388 39.4814 12.54C39.4814 10.668 38.3294 9.42 36.6494 9.42ZM30.6734 18.156V0.563995H33.7214V6.828L33.6734 7.644C34.1774 6.972 35.7134 6.588 36.7694 6.588C40.5374 6.588 42.6495 9.348 42.6495 12.54C42.6495 16.14 40.4894 18.468 36.7694 18.468C35.8574 18.468 34.3934 18.036 33.7934 17.316L33.8174 17.964V18.156H30.6734Z"
                  fill="white"
                />
                <path
                  d="M55.3377 16.716C54.4497 17.868 52.4098 18.564 50.6578 18.564C46.8418 18.564 44.7058 15.948 44.7058 12.564C44.7058 9.108 46.8178 6.588 50.5378 6.588C54.2338 6.588 56.3457 9.108 56.3457 12.564C56.3457 12.948 56.3457 13.188 56.3217 13.524H47.8258C47.9938 14.94 49.0498 15.828 50.6578 15.828C51.8098 15.828 52.8897 15.444 53.5617 14.7L55.3377 16.716ZM47.8738 11.46H53.1537C53.0097 10.188 51.9538 9.324 50.5378 9.324C49.1218 9.324 47.9938 10.188 47.8738 11.46Z"
                  fill="white"
                />
                <path
                  d="M64.7516 9.708C64.1276 9.49199 63.5756 9.42 62.9276 9.42C62.4956 9.42 62.1356 9.444 61.7996 9.588V18.156H58.7036V7.38C59.6396 6.9 61.2476 6.564 62.8076 6.564C63.4796 6.564 64.6796 6.636 65.3996 6.9L64.7516 9.708Z"
                  fill="white"
                />
              </svg>
            </span>
            <p className="">
              We are a residential interior design firm located in Portland. Our
              boutique-studio offers more than
            </p>
          </div>
          <ul className="flex flex-col gap-2">
            <li className="text-white">
              <b>Services</b>
            </li>
            <li>Bonus Programs</li>
            <li>Gift Cards</li>
            <li>Credit and payments</li>
            <li>Service & contracts</li>
            <li>None-cash account</li>
            <li>Payment</li>
          </ul>
          <ul className="flex flex-col gap-2">
            <li className="text-white">
              <b>Assistance to the Buyer</b>
            </li>
            <li>Find an order</li>
            <li>Terms of delivery</li>
            <li>Exchange and returns of goods</li>
            <li>Guarantee</li>
            <li>Frequently asked questions</li>
            <li>Terms of use of the site</li>
          </ul>
          <div className="flex md:w-full gap-10">
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M24 4.68478C23.1182 5.08637 22.1687 5.35795 21.1727 5.47929C22.1898 4.85524 22.9702 3.86572 23.3379 2.68695C22.3856 3.26478 21.3333 3.68514 20.2092 3.91049C19.3133 2.92963 18.0328 2.31714 16.6156 2.31714C13.8982 2.31714 11.6936 4.57788 11.6936 7.36589C11.6936 7.7617 11.7359 8.14596 11.8204 8.51577C7.72812 8.30486 4.10072 6.29691 1.67072 3.23877C1.2467 3.98705 1.00439 4.85524 1.00439 5.77976C1.00439 7.53057 1.87357 9.07626 3.19493 9.982C2.38916 9.95744 1.62845 9.72776 0.963547 9.35217V9.41428C0.963547 11.8614 2.66103 13.9025 4.91495 14.3648C4.5022 14.4833 4.06691 14.5425 3.61754 14.5425C3.30058 14.5425 2.99067 14.5122 2.69061 14.4529C3.31748 16.458 5.1347 17.9184 7.29001 17.9574C5.6052 19.3124 3.48089 20.12 1.17485 20.12C0.777597 20.12 0.384575 20.0968 0 20.0506C2.17926 21.4807 4.76844 22.3171 7.54781 22.3171C16.6057 22.3171 21.5573 14.6248 21.5573 7.95238C21.5573 7.73281 21.5531 7.51324 21.5446 7.298C22.5068 6.58583 23.3421 5.69742 24 4.68478Z"
              fill="white"
            />
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_2619_2125)">
              <path
                d="M13.9381 6.04381C13.9381 6.28943 13.9381 7.09001 13.9381 8.22739H17.8486L17.4246 11.7133H13.9381C13.9381 17.0893 13.9381 24.2934 13.9381 24.2934H9.31032C9.31032 24.2934 9.31032 17.1847 9.31032 11.7133H6.89893V8.22739H9.31032C9.31032 6.84495 9.31032 5.86193 9.31032 5.58823C9.31032 4.28417 9.21207 3.66542 9.76618 2.65489C10.3206 1.6444 11.8843 0.308746 14.589 0.340902C17.2943 0.37423 18.4346 0.63448 18.4346 0.63448L17.8486 4.34965C17.8486 4.34965 16.1211 3.89351 15.2732 4.05607C14.4264 4.21868 13.9381 4.74031 13.9381 6.04381Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_2619_2125">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.666748 0.316895)"
                />
              </clipPath>
            </defs>
          </svg>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.1586 5.3539C17.1695 4.20406 16.6514 2.71846 16.6926 1.20598L12.9969 1.1167C12.9969 1.1167 12.9969 1.27438 12.9969 1.48702V16.3073C13.0485 20.9959 5.64064 20.8821 6.22672 15.6996C6.58504 13.6389 8.79928 12.3708 10.7668 13.0877V9.31678C6.48328 8.57086 2.42392 11.9803 2.46664 16.3238C2.84104 25.7438 16.3521 25.745 16.727 16.3238C16.6326 15.9866 16.6854 9.70918 16.672 9.17974C18.3525 10.2254 20.3078 10.7481 22.288 10.6812V6.7867C20.4573 6.7867 19.0602 6.29998 18.1586 5.3539Z"
              fill="white"
            />
          </svg>
          <svg
            width="24"
            height="25"
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22.3169C9.85576 22.3169 8.31273 22.3158 7.1097 22.1992C5.92045 22.0839 5.1597 21.8623 4.55258 21.4808C3.85868 21.0449 3.27192 20.4582 2.83591 19.7643C2.45455 19.1572 2.23288 18.3964 2.11773 17.2072C2.00106 16.0042 2 14.4611 2 12.3169C2 10.1727 2.00106 8.62962 2.11773 7.42659C2.23288 6.23735 2.45455 5.47659 2.83591 4.86947C3.2719 4.17555 3.85866 3.5888 4.55258 3.1528C5.1597 2.77144 5.92045 2.54977 7.1097 2.43462C8.31258 2.31796 9.85561 2.31689 12 2.31689C14.1442 2.31689 15.6873 2.31796 16.8903 2.43462C18.0795 2.54977 18.8403 2.77144 19.4474 3.1528C20.1413 3.58882 20.728 4.17557 21.1639 4.86947C21.5455 5.47659 21.767 6.23735 21.8823 7.42659C21.9989 8.62962 22 10.1727 22 12.3169C22 14.4611 21.9989 16.0042 21.8823 17.2072C21.767 18.3964 21.5455 19.1572 21.1639 19.7643C20.728 20.4582 20.1413 21.0449 19.4474 21.4808C18.8403 21.8623 18.0795 22.0839 16.8903 22.1992C15.6873 22.3158 14.1442 22.3169 12 22.3169Z"
              fill="white"
              stroke="white"
              strokeWidth="2"
            />
            <path
              d="M12 17.3169C14.2091 17.3169 16 15.526 16 13.3169C16 11.1078 14.2091 9.31689 12 9.31689C9.79086 9.31689 8 11.1078 8 13.3169C8 15.526 9.79086 17.3169 12 17.3169Z"
              fill="white"
              stroke="black"
              strokeWidth="2"
            />
            <path
              d="M16.875 8.56689C17.4963 8.56689 18 8.06321 18 7.44189C18 6.82057 17.4963 6.31689 16.875 6.31689C16.2537 6.31689 15.75 6.82057 15.75 7.44189C15.75 8.06321 16.2537 8.56689 16.875 8.56689Z"
              fill="black"
            />
          </svg>
        </div>
        </div>
      </div>
    </footer>
  );
}
