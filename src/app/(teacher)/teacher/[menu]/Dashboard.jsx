import {
  analytics_info,
  school_table,
  teacher_analytics_info,
} from "@/app/constants";
import {
  approved,
  avatar,
  english_card,
  ic_arrow_down,
  ic_increase,
  ic_menu,
  ic_notification,
  ic_search,
  schl_logo1,
} from "@/assets";
import Image from "next/image";
import React from "react";

const Dashboard = () => {
  const AnalyticsCard = ({ info }) => {
    return (
      <div className="flex flex-col items-start gap-[9.159px] self-stretch border-[color:var(--neutral-10,#DAD9DE)] rounded-[11.913px] border-[0.916px] border-solid">
        <div className="flex flex-col items-start gap-2.5 px-12 py-8">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              {info.title}
            </h3>
            <div className="flex flex-col items-start gap-2">
              <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-inter font-semibold leading-8">
                {info.figure}
              </h3>
              <div className="flex items-center gap-1 self-stretch">
                <Image src={info.icon} />
                <span className="text-[color:var(--success-90,#05603A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                  {info.percentage}%
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const quick_links = [
    { title: "Create new user account" },
    { title: "Add  a new school" },
    { title: "Set new curriculum" },
    { title: "Edit profile" },
    { title: "View inbox" },
    { title: "Report issue" },
  ];
  return (
    <div className="flex w-[80vw] overflow-hidden flex-col bg-white">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-end gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
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
        id="dhb_analytics"
        className="flex w-full  flex-col items-start gap-2.5 pt-6 pb-4 px-8"
      >
        <div className="flex w-full items-center gap-[30px]">
          {teacher_analytics_info.map((info) => {
            return <AnalyticsCard info={info} />;
          })}
        </div>
      </div>
      <div className="flex w-[512px] mx-8 flex-col items-center gap-8 border border-[color:var(--neutral-10,#DAD9DE)] p-6 rounded-xl border-solid">
        <div className="flex flex-col items-center gap-5 self-stretch">
          <Image src={english_card} alt="card" />
          <h3 className="self-stretch text-[color:var(--neutral-70,#2B2635)] text-lg not-italic font-semibold leading-7">
            English Language
          </h3>
          <div className="flex items-center gap-2.5 self-stretch">
            <h4 className="flex-[1_0_0] text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-normal leading-5">
              Teacher
            </h4>
            <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
              <Image src={avatar} className="w-[18px] h-[18px]" alt="avatar" />
              <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                Ayodeji Adeniji
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 self-stretch">
            <h4 className="flex-[1_0_0] text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-normal leading-5">
              Curriculum
            </h4>
            <div className="flex bg-[#c5f8da] justify-center items-center gap-1 border border-[color:var(--neutral-10,#039855)] px-2 py-[5px] rounded-3xl border-solid">
              <svg
                width="6"
                height="6"
                viewBox="0 0 6 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="3" cy="3" r="3" fill="#039855" />
              </svg>
              <span className="text-[color:var(--neutral-80,#039855)] text-center text-xs not-italic font-medium leading-3">
                Ayodeji Adeniji
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 self-stretch">
            <h4 className="flex-[1_0_0] text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-normal leading-5">
              Student Attendance
            </h4>
            <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
              <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                81
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2.5 self-stretch">
            <h4 className="flex-[1_0_0] text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-normal leading-5">
              Parents
            </h4>
            <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
              <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                72
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center self-stretch">
          <div className="flex items-center gap-2 self-stretch">
            <input type="checkbox" id="reviewed" />
            <label
              for="reviewed"
              className="flex-[1_0_0] text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]"
            >
              Show parents’ linked
            </label>
          </div>
          <button className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
            <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
              View course
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
