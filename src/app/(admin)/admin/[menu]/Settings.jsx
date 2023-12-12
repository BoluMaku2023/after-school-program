import {
  admin_accounts_notification_prefs,
  admin_notification_prefs,
  admin_system_notification_prefs,
  analytics_info,
  assessment_list,
  school_table,
  school_table2,
  unit_list,
} from "@/app/constants";
import {
  approved,
  arrow_back_boxed,
  arrow_left,
  avatar,
  calendar,
  email_link,
  filter,
  ic_arrow_down,
  ic_edit_profile,
  ic_grades,
  ic_increase,
  ic_menu,
  ic_notification,
  ic_plus,
  ic_role,
  ic_search,
  pass,
  profile_icon,
  schl_logo1,
} from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

const Contacts = ({ tabb2 }) => {
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            General Settings
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            Contacts
          </h3>
        </div>
        <button className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
          <Image src={ic_plus} />
          <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
            Add custom field
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-10 px-8">
        <div className="flex flex-col items-start gap-4 ">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            General support
          </h3>
          <div className="flex items-center gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <Image src={email_link} alt="Search icon" />
            <input
              className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]"
              placeholder="asp@support.com"
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Enquiries
          </h3>
          <div className="flex items-center gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <Image src={email_link} alt="Search icon" />
            <input
              className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]"
              placeholder="asp@enquiries.com"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Accounts = ({ tabb2 }) => {
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            School & People
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            Accounts
          </h3>
        </div>
        <button className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
          <Image src={ic_plus} />
          <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
            Add custom field
          </span>
        </button>
      </div>
    </div>
  );
};
const TimeDate = ({ tabb2 }) => {
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            General Settings
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            Time & Date
          </h3>
        </div>
        <button className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
          <Image src={ic_plus} />
          <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
            Add custom field
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-10 px-8">
        <div className="flex flex-col items-start gap-4 ">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Date format
          </h3>
          <div className="flex items-center justify-between gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              DD/MM/YYYY
            </p>
            <Image src={ic_arrow_down} alt="Arrow down icon" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Time zone
          </h3>
          <div className="flex items-center justify-between gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              Coordinated Universal Time (UTC+01:00)
            </p>
            <Image src={ic_arrow_down} alt="Arrow down icon" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 ">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Clock formatClock format
          </h3>
          <div className="flex items-center justify-between gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              24 hour
            </p>
            <Image src={ic_arrow_down} alt="Arrow down icon" />
          </div>
        </div>
        <button className="flex bg-[#1C1A24]  justify-center w-[50%] gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
          <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
            Save changes
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-6 items-start w-full justify-between border-t-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-t border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Preferences{" "}
          </h3>
        </div>
        <div className="flex w-[40%] flex-row justify-between items-center">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            Automatic date & time
          </h3>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
        <div className="flex w-[40%] flex-row justify-between items-center">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            Automatic time-zone
          </h3>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
const Language = ({ tabb2 }) => {
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            General Settings
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            Language
          </h3>
        </div>
      </div>
      <div className="flex flex-col gap-10 px-8">
        <div className="flex flex-col items-start gap-4 ">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Input
          </h3>
          <div className="flex items-center justify-between gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              English (United States)
            </p>
            <Image src={ic_arrow_down} alt="Arrow down icon" />
          </div>
        </div>

        <button className="flex bg-[#1C1A24]  justify-center w-[80%] gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
          <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
            Save changes
          </span>
        </button>
      </div>
    </div>
  );
};
const Roles = ({ tabb2 }) => {
  const role_list = [
    {
      title: "Administrator",
      desc: "These are users that can monitor/make changes to other accounts.",
    },
    {
      title: "Teacher",
      desc: "Teachers are users that can create, schedule, and manage activities on courses and school related functions",
    },
    {
      title: "Student",
      desc: "The primary role of this user is to engage in learning which involves active participation in the educational processes set by other users",
    },
    {
      title: "Parent",
      desc: "This user role offers guidance to the student as their guardian.",
    },
  ];
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            School & People
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            Roles
          </h3>
        </div>
        <button className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
          <Image src={ic_plus} />
          <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
            Add new role
          </span>
        </button>
      </div>
      <div className="flex flex-col gap-10 px-8">
        <div className="flex flex-col items-start gap-8 ">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Roles
          </h3>
          {role_list.map((role) => {
            return (
              <div className="flex flex-col items-start gap-4">
                <div className="flex items-start  gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
                  <Image src={ic_role} alt="Arrow down icon" />
                  <p className="px-1 outline-none text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                    {role.title}
                  </p>
                </div>
                <p className="text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                  {role.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
const Notification = () => {
  return (
    <div
      id="prf_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex w-full flex-col items-start gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-12 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            General Settings
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-semibold leading-8">
            Notifications
          </h3>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-8 pl-8 pr-[10%] pt-4 pb-0">
        {admin_notification_prefs.map((prefs) => {
          return (
            <div className="flex w-full flex-row items-end gap-5 justify-between self-stretch">
              <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
                <h3 className="w-[485px] text-[color:var(--neutral-70,#2B2635)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                  {prefs.title}
                </h3>
                <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                  {prefs.desc}
                </p>
              </div>
              <div className="">
                <label class="toggle">
                  <input
                    class="toggle-input"
                    type="checkbox"
                    checked={prefs.checked}
                  />
                  <span class="toggle-label" data-off="" data-on=""></span>
                  <span class="toggle-handle"></span>
                </label>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Grading = () => {
  return (
    <div
      id="prf_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex w-full flex-col items-start gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-12 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            School & People
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-semibold leading-8">
            Gamification/Grading
          </h3>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-8 pl-8 pr-[10%] pt-4 pb-0">
        <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
          Grading
        </h3>
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <h3 className="w-[485px] text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
              Pass/Fail
            </h3>
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Use category based weightage for courses. Students must score
              equal or above the course pass percentage to pass.
            </p>
            <div className=" hover:bg-gray-50 flex cursor-pointer items-center gap-3 border border-[color:var(--neutral-10,#DAD9DE)] p-2 rounded-lg border-solid">
              <h4 className="text-[color:var(--gray-900,#11171F)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                40%
              </h4>
              <Image src={ic_arrow_down} alt="Arrow down" />
            </div>
          </div>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <h3 className="w-[485px] text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
              Total point
            </h3>
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Total summation of all the scores achieved by the student for a
              particular course
            </p>
          </div>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex w-full flex-col items-start gap-4 flex-[1_0_0]">
            <h3 className="w-[485px] text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
              Letter grades
            </h3>
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Use category based weightage for courses. A letter will be used to
              denote the range of scores achieved be the student
            </p>
            <div class="relative w-full overflow-x-auto sm:rounded-lg border border-solid border-[color:var(--neutral-10,#DAD9DE)]">
              <table class="w-full text-sm text-left ">
                <thead class="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]  bg-[#F6F5F6] ">
                  <tr>
                    <th scope="col">
                      <div className="flex h-10 items-center gap-[5px] self-stretch   border-b-[color:var(--neutral-10,#DAD9DE)] px-4 py-2.5  border-solid border-b">
                        <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                          Grade
                        </span>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                        <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                          Score range
                        </span>
                      </div>
                    </th>
                    <th scope="col">
                      <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                        <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                          Status
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
                      A (6)
                    </td>
                    <td class="px-6 py-4 flex-[1_0_0] gap-1 items-center flex-row flex text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                      <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                        <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                          90
                        </span>
                      </div>
                      <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xl not-italic font-bold leading-3">
                        {" "}
                        -{" "}
                      </span>
                      <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                        <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                          90
                        </span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-[color:var(--error-80,#B32318)] text-center text-xs not-italic font-medium leading-3">
                      <Image src={pass} alt="Pass" />
                    </td>

                    <td class="px-6 py-4">
                      <button className=" hover:bg-gray-50 flex cursor-pointer items-center gap-2 border border-[color:var(--neutral-10,#DAD9DE)] p-2 rounded-lg border-solid">
                        <h4 className="text-[color:var(--neutral-80,#1C1A24)] text-center text-sm not-italic font-normal leading-[14px]">
                          Edit
                        </h4>
                      </button>
                    </td>
                  </tr>
                  <tr class="bg-white border-b  hover:bg-gray-50 ">
                    <td class="px-6 py-4 border-l-[color:var(--neutral-10,#DAD9DE)] border-solid flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                      A (6)
                    </td>
                    <td class="px-6 py-4 flex-[1_0_0] gap-1 items-center flex-row flex text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                      <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                        <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                          90
                        </span>
                      </div>
                      <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xl not-italic font-bold leading-3">
                        {" "}
                        -{" "}
                      </span>
                      <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                        <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                          90
                        </span>
                      </div>
                    </td>
                    <td class="px-6 py-4 text-[color:var(--error-80,#B32318)] text-center text-xs not-italic font-medium leading-3">
                      <Image src={pass} alt="Pass" />
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
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};
const Password = () => {
  return (
    <div
      id="prf_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex w-full flex-col items-start gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-12 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            School & People
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-semibold leading-8">
            Gamification/Grading
          </h3>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-8 pl-8 pr-[10%] pt-4 pb-0">
        <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
          Grading
        </h3>
        <div className="flex w-[350px] justify-between items-center gap-2">
          <p className=" text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-5 tracking-[-0.14px]">
            Minimum Character length
          </p>
          <div className="flex w-[50px]  justify-between pb-2 border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium tracking-[-0.14px]">
              8
            </p>
            <Image src={ic_arrow_down} alt="Search icon" />
          </div>
        </div>
        <div className="flex w-[350px] justify-between items-center gap-2">
          <p className=" text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-5 tracking-[-0.14px]">
            Minimum Uppercase character
          </p>
          <div className="flex w-[50px] justify-between pb-2 border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium tracking-[-0.14px]">
              1
            </p>
            <Image src={ic_arrow_down} alt="Search icon" />
          </div>
        </div>{" "}
        <div className="flex w-[350px] justify-between items-center gap-2">
          <p className=" text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-5 tracking-[-0.14px]">
            Minimum Lowercase character
          </p>
          <div className="flex w-[50px] justify-between justify-between pb-2 border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none  placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium tracking-[-0.14px]">
              1
            </p>
            <Image src={ic_arrow_down} alt="Search icon" />
          </div>
        </div>
        <div className="flex w-[350px] justify-between items-center gap-2">
          <p className=" text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-5 tracking-[-0.14px]">
            Minimum Special character
          </p>
          <div className="flex w-[50px] justify-between pb-2 border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium tracking-[-0.14px]">
              1
            </p>
            <Image src={ic_arrow_down} alt="Search icon" />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-8 pl-8 pr-[10%] pt-4 pb-0">
        <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
          Policies
        </h3>
        <div className="flex w-[350px] justify-between items-center gap-2">
          <p className=" text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-5 tracking-[-0.14px]">
            Password expiration
          </p>
          <div className="flex gap-3 justify-between pb-2 border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium tracking-[-0.14px]">
              Never
            </p>
            <Image src={ic_arrow_down} alt="Search icon" />
          </div>
        </div>
        <div className="flex w-[350px] justify-between items-center gap-2">
          <p className=" text-[color:var(--neutral-50,#474059)] text-sm not-italic font-medium leading-5 tracking-[-0.14px]">
            Password recovery
          </p>
          <div className="flex gap-3 justify-between pb-2 border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
            <p className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium tracking-[-0.14px]">
              Email link
            </p>
            <Image src={ic_arrow_down} alt="Search icon" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Others = () => {
  return (
    <div
      id="prf_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex w-full flex-col items-start gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-12 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            School & People
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-semibold leading-8">
            Others
          </h3>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-8 pl-8 pr-[10%] pt-4 pb-0">
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <h3 className="self-stretch text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
              Messaging
            </h3>
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Medium of interaction between users via varying methods including
              text, attachments etc. Users are able to send end-to-end encrypted
              messages to one another.
            </p>
          </div>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Platform generated emails including in-app notifications,
              newsletters and announcements.
            </p>
          </div>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <h3 className="self-stretch text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
              Export
            </h3>
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Export user data for backup, migration, analysis
            </p>
          </div>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <h3 className="self-stretch text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
              Restrictions
            </h3>
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Restrict users access in cases of violation of policy or
              suspicious activities.
            </p>
          </div>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
        <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
          <div className="flex flex-col items-start gap-4 flex-[1_0_0]">
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
              Delete or temporarily deactivate user accounts and associated data
              based on their request.
            </p>
          </div>
          <div className="">
            <label class="toggle">
              <input class="toggle-input" type="checkbox" />
              <span class="toggle-label" data-off="" data-on=""></span>
              <span class="toggle-handle"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

const Settings = () => {
  const [selectedTab, setSelectedTab] = useState(8);
  const tabb0 = () => {
    setSelectedTab(0);
  };
  const tabb1 = () => {
    setSelectedTab(1);
  };
  const tabb2 = () => {
    setSelectedTab(2);
  };
  const tabb_back = () => {
    setSelectedTab(0);
  };

  let tab = {};
  switch (selectedTab) {
    case 0:
      tab = <Contacts tabb2={tabb2} />;
      break;
    case 1:
      tab = <TimeDate />;
      break;
    case 2:
      tab = <Notification tabb2={tabb0} />;
      break;
    case 3:
      tab = <Language tabb2={tabb0} />;
      break;
    case 4:
      tab = <Accounts tabb2={tabb0} />;
      break;
    case 5:
      tab = <Roles tabb2={tabb0} />;
      break;
    case 6:
      tab = <Grading tabb2={tabb0} />;
      break;
    case 8:
      tab = <Password tabb2={tabb0} />;
      break;
    case 7:
      tab = <Others tabb2={tabb0} />;
      break;
  }
  const settings_general = [
    { title: "Contacts" },
    { title: "Time & Date" },
    { title: "Notifications" },
    { title: "Language" },
  ];

  const settings_schl_ppl = [
    { title: "Accounts" },
    { title: "Roles & Permissions" },
    { title: "Grading" },
    { title: "Others" },
  ];
  const settings_security = [
    { title: "Password" },
    { title: "Authentication" },
    { title: "Session Management" },
  ];
  return (
    <div className="flex w-[80vw] min-h-[100vh] overflow-hidden flex-col bg-white">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-center gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
          Settings
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
          id="profile"
          className="flex w-[30%] flex-col items-start border-r-[color:var(--neutral-10,#DAD9DE)] pb-[52px] border-r border-solid"
        >
          <div className="flex items-center gap-2 self-stretch border-b-[color:var(--neutral-10,#DAD9DE)] pt-6 pb-4 px-6 border-b border-solid">
            <h3 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-semibold leading-6 tracking-[-0.18px]">
              Manage preferences
            </h3>
            <Image
              className="flex w-8 h-8 justify-center items-center"
              src={arrow_back_boxed}
            />
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch pt-6 pb-0 px-6">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <h3 className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-[10px] not-italic font-medium leading-4 tracking-[0.5px] uppercase">
                general
              </h3>
              <div className="w-full h-px bg-[#F6F5F6]"></div>
              <div className="flex flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-[8px] border-solid overflow-hidden">
                {settings_general.map((settings, index) => {
                  return (
                    <div
                      onClick={tabb0}
                      className={
                        selectedTab == index
                          ? "course-item-active"
                          : "course-item"
                      }
                    >
                      <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                        {settings.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <h3 className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-[10px] not-italic font-medium leading-4 tracking-[0.5px] uppercase">
                SCHOOL & people
              </h3>
              <div className="w-full h-px bg-[#F6F5F6]"></div>
              <div className="flex flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-[8px] border-solid overflow-hidden">
                {settings_schl_ppl.map((settings, index) => {
                  return (
                    <div
                      onClick={tabb0}
                      className={
                        selectedTab == index
                          ? "course-item-active"
                          : "course-item"
                      }
                    >
                      <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                        {settings.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="flex flex-col items-start gap-2 self-stretch">
              <h3 className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-[10px] not-italic font-medium leading-4 tracking-[0.5px] uppercase">
                SECURITY
              </h3>
              <div className="w-full h-px bg-[#F6F5F6]"></div>
              <div className="flex flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-[8px] border-solid overflow-hidden">
                {settings_security.map((settings, index) => {
                  return (
                    <div
                      onClick={tabb0}
                      className={
                        selectedTab == index
                          ? "course-item-active"
                          : "course-item"
                      }
                    >
                      <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                        {settings.title}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {tab}
      </div>
    </div>
  );
};

export default Settings;
