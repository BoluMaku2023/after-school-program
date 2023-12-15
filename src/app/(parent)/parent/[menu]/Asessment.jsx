import {
  analytics_info,
  assessment_list,
  school_table,
  school_table2,
  teacher_student_profile,
  unit_list,
  unit_list2,
} from "@/app/constants";
import {
  approved,
  arrow_back_boxed,
  avatar,
  calendar,
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
import React, { useState } from "react";

const EnglishLanguage = () => {
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            Mayflower School, Ikenne
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            English Language
          </h3>
        </div>
      </div>
      {unit_list.map((unit, index) => {
        return (
          <div key={index} className="flex w-full flex-col items-start">
            <div className="flex w-full flex-row justify-between items-start gap-2.5 pl-8 pr-[55px] pt-2.5 pb-3">
              <p className="unit-text">
                {"Unit "}
                {index + 1}
                {": "} {unit.name}
                <span className="flex-[1_0_0] text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                  {" "}
                  {"· "}
                  {unit.questions} Questions
                </span>
              </p>
              <Image src={calendar} alt="Calendar icon" />
            </div>
            <div className="flex items-start pl-8 pr-[51px] py-0">
              <div class="relative overflow-x-auto sm:rounded-lg border border-solid border-[color:var(--neutral-10,#DAD9DE)]">
                <table class="w-full text-sm text-left ">
                  <thead class="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]  bg-[#F6F5F6] ">
                    <tr>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch   border-b-[color:var(--neutral-10,#DAD9DE)] px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Unit name
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Points
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Duration
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Teacher
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Date
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Time
                          </span>
                        </div>
                      </th>

                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5 border-solid border-b border-l ">
                          <span class="sr-only">Edit</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                      <td class="px-6 py-4 border-l-[color:var(--neutral-10,#DAD9DE)] border-solid flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.name}
                      </td>
                      <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.points}
                      </td>
                      <td class="px-6 py-4 text-[color:var(--error-80,#B32318)] text-center text-xs not-italic font-medium leading-3">
                        {unit.duration} minutes
                      </td>
                      <td class="px-6 py-4  text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.teacher}
                      </td>
                      <td class="px-6 py-4  text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.date}
                      </td>
                      <td class="px-6 py-4 text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.time}
                      </td>
                      <td class="px-6 py-4">
                        <button className=" hover:bg-gray-50 flex cursor-pointer items-center gap-2 border border-[color:var(--neutral-10,#DAD9DE)] p-2 rounded-lg border-solid">
                          <h4 className="text-[color:var(--neutral-80,#1C1A24)] text-center text-sm not-italic font-normal leading-[14px]">
                            Edit
                          </h4>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Mathematics = () => {
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%] overscroll-contain overflow-auto"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            Mayflower School, Ikenne
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            Mathematics
          </h3>
        </div>
      </div>
      {unit_list2.map((unit, index) => {
        return (
          <div key={index} className="flex w-full flex-col items-start">
            <div className="flex w-full flex-row justify-between items-start gap-2.5 pl-8 pr-[55px] pt-2.5 pb-3">
              <p className="unit-text">
                {"Unit "}
                {index + 1}
                {": "} {unit.name}
                <span className="flex-[1_0_0] text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                  {" "}
                  {"· "}
                  {unit.questions} Questions
                </span>
              </p>
              <Image src={calendar} alt="Calendar icon" />
            </div>
            <div className="flex items-start pl-8 pr-[51px] py-0">
              <div class="relative overflow-x-auto sm:rounded-lg border border-solid border-[color:var(--neutral-10,#DAD9DE)]">
                <table class="w-full text-sm text-left ">
                  <thead class="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]  bg-[#F6F5F6] ">
                    <tr>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch   border-b-[color:var(--neutral-10,#DAD9DE)] px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Unit name
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Points
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Duration
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Teacher
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Date
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Time
                          </span>
                        </div>
                      </th>

                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5 border-solid border-b border-l ">
                          <span class="sr-only">Edit</span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-white border-b  hover:bg-gray-50 ">
                      <td class="px-6 py-4 border-l-[color:var(--neutral-10,#DAD9DE)] border-solid flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.name}
                      </td>
                      <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.points}
                      </td>
                      <td class="px-6 py-4 text-[color:var(--error-80,#B32318)] text-center text-xs not-italic font-medium leading-3">
                        {unit.duration} minutes
                      </td>
                      <td class="px-6 py-4  text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.teacher}
                      </td>
                      <td class="px-6 py-4  text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.date}
                      </td>
                      <td class="px-6 py-4 text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                        {unit.time}
                      </td>
                      <td class="px-6 py-4">
                        <button className=" hover:bg-gray-50 flex cursor-pointer items-center gap-2 border border-[color:var(--neutral-10,#DAD9DE)] p-2 rounded-lg border-solid">
                          <h4 className="text-[color:var(--neutral-80,#1C1A24)] text-center text-sm not-italic font-normal leading-[14px]">
                            Edit
                          </h4>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
const Assessment = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabb0 = () => {
    setSelectedTab(0);
  };
  const tabb1 = () => {
    setSelectedTab(1);
  };
  let tab = {};
  switch (selectedTab) {
    case 0:
      tab = <EnglishLanguage />;
      break;
    case 1:
      tab = <Mathematics />;
      break;
  }
  return (
    <div className="flex w-[80vw] overflow-hidden flex-col bg-white overscroll-contain">
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
      <div className="flex items-start flex-row w-full">
        <div
          id="courses_by_schl"
          className="flex w-[30%] flex-col items-start border-r-[color:var(--neutral-10,#DAD9DE)] pb-[52px] border-r border-solid"
        >
          <div className="flex items-center gap-2 self-stretch border-b-[color:var(--neutral-10,#DAD9DE)] pt-6 pb-4 px-6 border-b border-solid">
            <h3 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-semibold leading-6 tracking-[-0.18px]">
              Course assessment
            </h3>
            <Image
              className="flex w-8 h-8 justify-center items-center"
              src={arrow_back_boxed}
              alt=""
            />
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch pt-6 pb-0 px-6">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <h3 className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-[10px] not-italic font-medium leading-4 tracking-[0.5px] uppercase">
                MAYFLOWER SCHOOL, IKENNE
              </h3>
              <div className="w-[352px] h-px bg-[#F6F5F6]"></div>
              <div className="flex flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-[8px] border-solid overflow-hidden">
                <div
                  onClick={tabb0}
                  className={
                    selectedTab == 0 || selectedTab == 2
                      ? "course-item-active"
                      : "course-item"
                  }
                >
                  <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                    English Language
                  </span>
                </div>
                <div
                  className={
                    selectedTab == 1 ? "course-item-active" : "course-item"
                  }
                  onClick={tabb1}
                >
                  <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                    Mathematics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {tab}
      </div>
    </div>
  );
};

export default Assessment;
