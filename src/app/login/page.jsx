import { eye, logo } from "@/assets";
import Image from "next/image";
import { useCallback } from "react";

const Login = () => {
  const onCenterClick = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="relative bg-neutral-5 w-full h-[900px] overflow-hidden text-left text-base text-neutral-80 font-mabry-pro">
      <div className="absolute top-[calc(50%_-_326px)] left-[calc(50%_-_216px)] rounded-lg bg-grey-on-black-white box-border w-[431px] flex flex-col items-center justify-start pt-6 px-6 pb-8 gap-[48px] border-[1px] border-solid border-neutral-10">
        <div className="flex flex-row items-start justify-start gap-[8px]">
          <img className="relative w-12 h-12" alt="" src="/logo.svg" />
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-1">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative font-medium">AFTER-SCHOOL</div>
              <div className="relative font-medium">PROGRAM</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px] text-sm text-neutral-40 font-text-md-medium">
          <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
              <div className="relative tracking-[-0.01em] leading-[18px] font-medium">
                Email
              </div>
              <div className="self-stretch flex flex-col items-start justify-start text-center text-gray-gray-800">
                <div className="self-stretch rounded-lg bg-grey-on-black-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-10">
                  <div className="self-stretch flex flex-row items-center justify-start py-4 pr-4 pl-3 gap-[8px]">
                    <div className="flex-1 flex flex-row items-center justify-start text-left text-neutral-20">
                      <div className="flex-1 relative tracking-[-0.01em] leading-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                        Enter your email address
                      </div>
                    </div>
                  </div>
                </div>
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
                        Confirm your password
                      </div>
                    </div>

                    <Image className="relative w-4 h-4" alt="" src={eye} />
                  </div>
                </div>
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-4 px-8 bg-neutral-80 self-stretch rounded-lg flex flex-row items-center justify-center">
              <div className="relative text-base leading-[16px] font-medium font-text-md-medium text-grey-on-black-white text-center">
                Login
              </div>
            </button>
          </div>
          <div className="relative text-base tracking-[-0.01em] leading-[24px] font-medium">
            Forgot password
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
