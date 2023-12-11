import { analytics_info, school_table } from "@/app/constants";
import {
  approved,
  avatar,
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
      <div className="flex flex-col items-start gap-2.5 px-12 py-8">
        <div className="flex flex-col items-center gap-4">
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
                {info.percentage}
              </span>
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
        <div className="flex w-full justify-between items-center gap-[30px] border border-[color:var(--neutral-10,#DAD9DE)] rounded-lg border-solid">
          <AnalyticsCard info={analytics_info[0]} />
          <div className="w-px h-[74px] bg-[#DAD9DE]"></div>
          <AnalyticsCard info={analytics_info[1]} />
          <div className="w-px h-[74px] bg-[#DAD9DE]"></div>
          <AnalyticsCard info={analytics_info[2]} />
          <div className="w-px h-[74px] bg-[#DAD9DE]"></div>
          <AnalyticsCard info={analytics_info[3]} />
          <div className="w-px h-[74px] bg-[#DAD9DE]"></div>
          <AnalyticsCard info={analytics_info[4]} />
        </div>
      </div>
      <div id="dnb_table" className="flex w-full flex-col items-start">
        <div className="flex items-center justify-between w-full self-stretch px-8 py-6">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-semibold leading-6 tracking-[-0.18px]">
            Schools
          </h3>
          <div className="flex flex-row items-start gap-3 self-stretch">
            <div className="flex items-center gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
              <Image src={ic_search} alt="Search icon" />
              <input
                className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]"
                placeholder="Search"
              />
            </div>
          </div>
        </div>
        <div className="flex items-start self-stretch px-8 py-0">
          <div class="relative overflow-x-auto sm:rounded-lg border border-solid border-[color:var(--neutral-10,#DAD9DE)]">
            <table class="w-full text-sm text-left ">
              <thead class="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]  bg-[#F6F5F6] ">
                <tr>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5 border-solid border-b ">
                      <span class="sr-only">Edit</span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch  border-b- border-l-[color:var(--neutral-10,#DAD9DE)] px-4 py-2.5  border-solid border-b border-l">
                      <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        School name
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                      <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        Type
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                      <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        Grade
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                      <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        Curriculum
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                      <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        Teachers (ASP)
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                      <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        Students
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                      <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        Confirmation
                      </span>
                    </div>
                  </th>
                  <th scope="col">
                    <div className="flex h-10 items-center gap-[5px] self-stretch border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5 border-solid border-b border-l ">
                      <span class="sr-only">Menu</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {school_table.map((val, key) => {
                  return (
                    <tr key={key} class="bg-white border-b  hover:bg-gray-50 ">
                      <th
                        scope="row"
                        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <div className="w-8 h-8 shrink-0">
                          <Image src={val.logo} />
                        </div>
                      </th>
                      <td class="px-6 py-4 border-l-[color:var(--neutral-10,#DAD9DE)] border-solid flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {val.name}
                      </td>
                      <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {val.type}
                      </td>
                      <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {val.grade}
                      </td>
                      <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                          <svg
                            width="6"
                            height="6"
                            viewBox="0 0 6 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="3" cy="3" r="3" fill="#1C1A24" />
                          </svg>
                          <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                            {val.curriculum}
                          </span>
                        </div>
                      </td>
                      <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {val.teachers}
                      </td>
                      <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {val.students}
                      </td>
                      <td class="px-6 py-4">
                        <Image src={val.confirmation} />
                      </td>
                      <td class="px-6 py-4">
                        <Image src={ic_menu} />
                      </td>
                      {/* <td class="px-6 py-4 text-right">
                    <a
                      href="#"
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
                  </td> */}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex w-full justify-between items-center self-stretch px-8 py-4">
          <div className="flex justify-end items-center gap-0.5 flex-[1_0_0]">
            <a className="flex cursor-pointer w-10 h-10 justify-center bg-[#F6F5F6] items-center gap-2.5 px-3 py-1.5 rounded-md">
              <span className="text-[color:var(--neutral-60,#393347)] text-center  text-sm not-italic font-semibold leading-5 tracking-[-0.15px]">
                1
              </span>
            </a>
            <a className="flex cursor-pointer w-10 h-10 justify-center bg-[#fff] items-center gap-2.5 px-3 py-1.5 rounded-md">
              <span className="text-[color:var(--neutral-60,#393347)] text-center  text-sm not-italic font-semibold leading-5 tracking-[-0.15px]">
                2
              </span>
            </a>
            <a className="flex cursor-pointer w-10 h-10 justify-center bg-[#fff] items-center gap-2.5 px-3 py-1.5 rounded-md">
              <span className="text-[color:var(--neutral-60,#393347)] text-center  text-sm not-italic font-semibold leading-5 tracking-[-0.15px]">
                3
              </span>
            </a>
          </div>
        </div>
      </div>
      <div id="quick_links" className="flex flex-col items-start">
        <div className="flex w-full items-center pt-4 pb-6 px-8">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-semibold leading-6 tracking-[-0.18px]">
            Quick links
          </h3>
        </div>
        <div className="flex flex-col items-start gap-2.5 pl-8 pr-14 py-0">
          <div className="flex items-start gap-4">
            {quick_links.map((val, key) => {
              return (
                <div
                  key={key}
                  className=" hover:bg-gray-50 flex cursor-pointer items-center gap-3 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-3 rounded-lg border-solid"
                >
                  <h4 className="text-[color:var(--gray-900,#11171F)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                    {val.title}
                  </h4>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 3L11 8L6 13"
                      stroke="#1C1A24"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
