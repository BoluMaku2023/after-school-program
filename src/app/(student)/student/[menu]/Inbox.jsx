import { analytics_info, school_table, school_table2 } from "@/app/constants";
import {
  approved,
  avatar,
  empty_inbox,
  filter,
  ic_arrow_down,
  ic_grades,
  ic_increase,
  ic_menu,
  ic_notification,
  ic_plus,
  ic_search,
  schl_logo1,
} from "@/assets";
import Image from "next/image";
import React from "react";

const Inbox = () => {
  return (
    <div className="flex w-[80vw] min-h-[100vh] overflow-hidden flex-col bg-white">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-end gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
          Inbox
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
            <div className="flex items-center flex-row justify-between gap-3 ">
              <div className="flex w-8 h-8 flex-col justify-center items-center rounded-[266.667px]">
                <Image src={avatar} alt="Profile avatar" />
              </div>
              <div className="flex h-full items-center flex-row">
                <h3 className=" h-full self-center text-center text-[color:var(--neutral-80,#1C1A24)] text-sm not-italic font-semibold leading-4 tracking-[-0.14px] font-inter">
                  Bolu Maku
                </h3>
              </div>
              <Image src={ic_arrow_down} alt="Arrow down" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[80vh] items-center justify-center flex">
        <div className="flex h-full w-full justify-center flex-col items-center gap-6">
          <div className="flex flex-col justify-center items-center gap-2">
            <Image src={empty_inbox} alt="empty inbox" />
            <p className="text-[color:var(--neutral-50,#474059)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
              No chats available
            </p>
            <p className="text-[color:var(--neutral-50,#474059)] text-sm not-italic font-normal leading-[18px] tracking-[-0.14px]">
              Please onboard a school and add people first
            </p>
          </div>
          <button className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
            <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
              Go to school
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Inbox;
