import { avatar, ic_arrow_down, ic_increase, ic_notification } from "@/assets";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  return (
    <div className="flex w-[80vw] flex-col">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-end gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-3xl not-italic font-inter font-semibold leading-[38px] tracking-[-0.6px]">
          Dashboard
        </h1>
        <div className="flex w-[226px] justify-center items-center shrink-0">
          <div className="flex flex-col w-6 h-6 items-end shrink-0">
            <Image src={ic_notification} alt="Notification icon" />
            <div className="flex w-3.5 h-3 flex-col justify-center items-start gap-2.5 shrink-0 p-0.5 rounded-3xl bg-[#D92D20] absolute">
              <span
                id="alert_indic"
                className="w-2.5 font-inter text-[color:var(--grey-on-black-white,#FFF)] text-center text-[8px] not-italic font-medium leading-[10px] tracking-[-0.08px]"
              >
                3
              </span>
            </div>
          </div>
          <div className="flex w-[202px] flex-col items-start shrink-0 pl-4 pr-3 py-3">
            <div className="flex items-center flex-row justify-center gap-3 flex-[1_0_0]">
              <div className="flex w-8 h-8 flex-col justify-center items-center rounded-[266.667px]">
                <Image src={avatar} alt="Profile avatar" />
              </div>
              <h3 className=" h-full self-center text-center text-[color:var(--neutral-80,#1C1A24)] text-sm not-italic font-semibold leading-4 tracking-[-0.14px] font-inter">
                Bolu Maku
              </h3>
              <Image src={ic_arrow_down} alt="Arrow down" />
            </div>
          </div>
        </div>
      </div>
      <div
        id="dhb_analytics"
        className="flex w-full flex-col items-start gap-2.5 pt-6 pb-4 px-8"
      >
        <div className="flex items-center gap-[30px] border border-[color:var(--neutral-10,#DAD9DE)] rounded-lg border-solid">
          <div className="flex flex-col items-start gap-2.5 px-12 py-8">
            <div className="flex flex-col items-start gap-4">
              <h3 className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                Total users
              </h3>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-inter font-semibold leading-8">
                  12389
                </h3>
                <div className="flex items-center gap-1 self-stretch">
                  <div className="flex items-start bg-[#A6F4C5] gap-2.5 p-1 rounded-[32px]">
                    <Image src={ic_increase} />
                  </div>
                  <span className="text-[color:var(--success-90,#05603A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                    +6.7
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-px h-[74px] bg-[#DAD9DE]"></div>
          <div className="flex flex-col items-start gap-2.5 px-12 py-8">
            <div className="flex flex-col items-center gap-4">
              <h3 className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                Total users
              </h3>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-inter font-semibold leading-8">
                  12389
                </h3>
                <div className="flex items-center gap-1 self-stretch">
                  <Image src={ic_increase} />
                  <span className="text-[color:var(--success-90,#05603A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                    +6.7
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
