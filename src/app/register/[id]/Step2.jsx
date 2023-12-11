import { logo } from "@/assets";
import Image from "next/image";
import { useCallback } from "react";

const Step2 = () => {
  const onCenterContainer1Click = useCallback(() => {
    // Please sync "Login" to the project
  }, []);

  return (
    <div className="relative bg-neutral-5 w-full h-[900px] overflow-hidden text-left text-sm text-neutral-40 font-inter">
      <div className="absolute top-[calc(50%_-_348px)] left-[calc(50%_-_216px)] rounded-lg bg-grey-on-black-white box-border w-[431px] flex flex-col items-center justify-start p-6 gap-[32px] border-[1px] border-solid border-neutral-10">
        <div className="flex flex-row items-start justify-start gap-[8px] text-base text-neutral-80 font-mabry-pro">
          <Image className="relative w-12 h-12" alt="" src={logo} />
          <div className="flex flex-col items-start justify-start pt-2.5 px-0 pb-1">
            <div className="flex flex-col items-start justify-start gap-[2px]">
              <div className="relative font-mabry-pro">AFTER-SCHOOL</div>
              <div className="relative font-mabry-pro">PROGRAM</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[16px]">
          <div className="w-[383px] flex flex-row items-center justify-start gap-[16px]">
            <div className="relative tracking-[-0.01em] leading-[18px] font-medium">
              Assigned role
            </div>
            <div className="rounded-3xl bg-neutral-5 flex flex-row items-center justify-center py-1.5 px-3 gap-[4px] text-center text-xs text-neutral-80 border-[1px] border-solid border-neutral-10">
              <div className="relative leading-[12px] font-medium">
                Administrator
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center justify-start gap-[24px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[-0.01em] leading-[18px] font-medium">
              First name
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-center text-gray-gray-800">
              <div className="self-stretch rounded-lg bg-grey-on-black-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-10">
                <div className="self-stretch flex flex-row items-center justify-start py-4 pr-4 pl-3 gap-[8px]">
                  <div className="flex-1 flex flex-row items-center justify-start text-left text-neutral-20">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                      Your first name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <div className="relative tracking-[-0.01em] leading-[18px] font-medium">
              Last name
            </div>
            <div className="self-stretch flex flex-col items-start justify-start text-center text-gray-gray-800">
              <div className="self-stretch rounded-lg bg-grey-on-black-white overflow-hidden flex flex-col items-start justify-start border-[1px] border-solid border-neutral-10">
                <div className="self-stretch flex flex-row items-center justify-start py-4 pr-4 pl-3 gap-[8px]">
                  <div className="flex-1 flex flex-row items-center justify-start text-left text-neutral-20">
                    <div className="flex-1 relative tracking-[-0.01em] leading-[18px] font-medium overflow-hidden text-ellipsis whitespace-nowrap">
                      Your last name
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-lg bg-neutral-80 flex flex-row items-center justify-center py-4 px-8 cursor-pointer text-center text-base text-grey-on-black-white">
            <div className="relative leading-[16px] font-medium">
              Create account
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step2;
