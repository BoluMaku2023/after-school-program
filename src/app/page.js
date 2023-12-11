import Image from "next/image";
import logo from "../assets/logo.svg";
import { useCallback } from "react";
export default function Home() {
  return (
    <div className="relative bg-neutral-5 w-full h-[900px] overflow-hidden text-left text-base text-neutral-80 font-mabry-pro">
      <div className="absolute top-[calc(50%_-_328px)] left-[calc(50%_-_216px)] rounded-lg bg-grey-on-black-white box-border w-[431px] flex flex-col items-center justify-start p-6 gap-[48px] border-[1px] border-solid border-neutral-10">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <Image className="relative w-12 h-12" alt="" src={logo} />
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-1">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative font-medium font-mabry-pro">
                AFTER-SCHOOL
              </div>
              <div className="relative font-medium font-mabry-pro">PROGRAM</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-sm text-neutral-40 font-inter">
          <div className="rounded-3xl bg-neutral-5 flex flex-row items-center justify-center p-3 gap-[4px] text-center text-neutral-80 border-[1px] border-solid border-neutral-10">
            <div className="relative leading-[12px] font-medium">
              adedejiadeniji@gmail.com
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[-0.01em] leading-[18px] font-medium">
              Password
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-center text-gray-gray-800">
              <div className="self-stretch rounded-lg bg-grey-on-black-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-10">
                <div className="self-stretch flex flex-row items-center justify-start py-4 pr-4 pl-3 gap-[8px]">
                  <div className="flex-1 flex flex-row items-center justify-start text-left text-neutral-20">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                      Enter your password
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    className="relative w-4 h-4"
                  >
                    <path
                      d="M10.3866 7.99995C10.3866 9.31995 9.31995 10.3866 7.99995 10.3866C6.67995 10.3866 5.61328 9.31995 5.61328 7.99995C5.61328 6.67995 6.67995 5.61328 7.99995 5.61328C9.31995 5.61328 10.3866 6.67995 10.3866 7.99995Z"
                      stroke="#474059"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.00002 13.5133C10.3534 13.5133 12.5467 12.1266 14.0734 9.72665C14.6734 8.78665 14.6734 7.20665 14.0734 6.26665C12.5467 3.86665 10.3534 2.47998 8.00002 2.47998C5.64668 2.47998 3.45335 3.86665 1.92668 6.26665C1.32668 7.20665 1.32668 8.78665 1.92668 9.72665C3.45335 12.1266 5.64668 13.5133 8.00002 13.5133Z"
                      stroke="#474059"
                      strokeWidth="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[-0.01em] leading-[18px] font-medium">
              Confirm password
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-center text-gray-gray-800">
              <div className="self-stretch rounded-lg bg-grey-on-black-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-10">
                <div className="self-stretch flex flex-row items-center justify-start py-4 pr-4 pl-3 gap-[8px]">
                  <div className="flex-1 flex flex-row items-center justify-start text-left text-neutral-20">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                      Confirm your password
                    </div>
                  </div>

                  <img className="relative w-4 h-4" alt="" src="./eye.png" />
                </div>
              </div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-4 px-8 bg-neutral-80 self-stretch rounded-lg flex flex-row items-center justify-center">
            <div className="relative text-base leading-[16px] font-medium font-inter text-grey-on-black-white text-center">
              Continue
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
