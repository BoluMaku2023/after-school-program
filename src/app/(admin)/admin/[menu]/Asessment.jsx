import { analytics_info, school_table, school_table2 } from "@/app/constants";
import {
  approved,
  arrow_back_boxed,
  avatar,
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

const Assessment = () => {
  const quick_links = [
    { title: "Link accounts" },
    { title: "Add  a new school" },
    { title: "Set new curriculum" },
    { title: "Edit profile" },
    { title: "View inbox" },
    { title: "New support ticket" },
  ];
  return (
    <div className="flex w-[80vw] overflow-hidden flex-col bg-white">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-end gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
          Assessment
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
      <div
        id="courses_by_schl"
        className="flex w-[400px] flex-col items-start border-r-[color:var(--neutral-10,#DAD9DE)] pb-[52px] border-r border-solid"
      >
        <div className="flex items-center gap-2 self-stretch border-b-[color:var(--neutral-10,#DAD9DE)] pt-6 pb-4 px-6 border-b border-solid">
          <h3 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-semibold leading-6 tracking-[-0.18px]">
            Courses by school
          </h3>
          <Image
            className="flex w-8 h-8 justify-center items-center"
            src={arrow_back_boxed}
          />
        </div>
        <div className="flex flex-col items-start gap-4 self-stretch pt-6 pb-0 px-6">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <h3 className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-[10px] not-italic font-medium leading-4 tracking-[0.5px] uppercase">
              Command Secondary School, Saki
            </h3>
            <div className="w-[352px] h-px bg-[#F6F5F6]"></div>
            <div className="flex flex-col items-start self-stretch">
              <div className="flex h-9 flex-row  gap-2  px-4 py-0  items-center self-stretch rounded-[8px_8px_0px_0px] bg-[#1C1A24]">
                <span className="w-[140px] text-[color:var(--bg-white,var(--grey-on-black-white,#FFF))] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                  English Language
                </span>
              </div>
              <div className="flex h-9 flex-row  gap-2  px-4 py-0  items-center self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-[0px_0px_8px_8px] border-solid">
                <span className="w-[140px] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                  Maths
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assessment;
