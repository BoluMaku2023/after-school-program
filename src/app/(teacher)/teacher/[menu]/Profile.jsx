import {
  admin_accounts_notification_prefs,
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
  filter,
  ic_arrow_down,
  ic_edit_profile,
  ic_grades,
  ic_increase,
  ic_menu,
  ic_notification,
  ic_plus,
  ic_search,
  profile_icon,
  schl_logo1,
} from "@/assets";
import Image from "next/image";
import React, { useState } from "react";

const ProfileDetails = ({ tabb2 }) => {
  return (
    <div
      id="prf_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex w-full flex-col items-start gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-12 pb-6 border-b border-solid">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-6 flex-[1_0_0]">
            <div className="flex w-[120px] h-[120px] flex-col justify-center items-center rounded-[266.667px]">
              <Image src={avatar} alt="Profile avatar" />
            </div>
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-[color:var(--grey-on-white-black,#000)] text-2xl not-italic font-semibold leading-8">
                Ayodeji Adeniji
              </h3>
              <p className="text-[color:var(--neutral-30,#918C9B)] text-lg not-italic font-normal leading-6 tracking-[-0.18px]">
                ayodejiadeniji@gmail.com
              </p>
            </div>
          </div>
          <button
            onClick={tabb2}
            className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg"
          >
            <Image src={profile_icon} />
            <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
              Edit profile
            </span>
          </button>
        </div>
      </div>
      <div className="flex flex-col items-start pl-8 pt-10 pr-[20%] gap-8">
        <div className="inline-flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            About
          </h3>
          <div className="flex w-full flex-col items-start gap-1.5">
            <div className="flex items-center gap-2 flex-[1_0_0] self-stretch border border-[color:var(--neutral-10,#DAD9DE)] px-3.5 py-2.5 rounded-lg border-solid min-h-[120px]">
              <p className="flex-[1_0_0] self-stretch text-[color:var(--neutral-50,#474059)] text-base not-italic font-normal leading-6">
                Multi-talented graphic artist who won the 2019 Carthage Award
                for artistic excellence and innovation
              </p>
            </div>
            <p className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-normal leading-5">
              A short biography about this user
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-xl not-italic font-semibold leading-6 tracking-[-0.2px]">
            Role
          </h3>
          <p className="w-[687px] text-[color:var(--neutral-50,#474059)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
            Administrators can control features for the managing account and all
            its managed accounts.
          </p>
          <button className=" hover:bg-gray-50 flex justify-center items-center gap-3 border border-[color:var(--neutral-10,#DAD9DE)] px-4 py-[11px] rounded-lg border-solid">
            <h4 className="text-[color:var(--neutral-30,#918C9B)] text-center text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              Administrator
            </h4>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="rotate-90"
            >
              <path
                d="M6 3L11 8L6 13"
                stroke="#1C1A24"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
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
            Preferences
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-semibold leading-8">
            Notifications
          </h3>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-6 pl-8 pr-[10%] pt-10 pb-0">
        <h3 className="self-stretch text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
          Accounts
        </h3>
        {admin_accounts_notification_prefs.map((prefs) => {
          return (
            <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
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
      <div className="flex w-full flex-col items-start gap-6 pl-8 pr-[10%] pt-10 pb-0">
        <h3 className="self-stretch text-[color:var(--neutral-80,#1C1A24)] text-base not-italic font-semibold leading-6 tracking-[-0.16px]">
          System
        </h3>
        {admin_system_notification_prefs.map((prefs) => {
          return (
            <div className="flex w-full flex-row items-start gap-5 justify-between self-stretch">
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
const EditProfile = ({ tabb2 }) => {
  return (
    <div
      id="prf_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex w-full flex-col items-start gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-12 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            Edit profile
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-2xl not-italic font-semibold leading-8">
            Profile
          </h3>
        </div>
      </div>
      <div className="flex w-full flex-col items-start gap-6 pl-8 pr-[5%] pt-4 pb-0">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-6 flex-[1_0_0]">
            <div className="flex w-[68px] h-[68px] flex-col justify-end cursor-pointer items-end shrink-0 rounded-[151.111px]">
              <Image src={avatar} alt="Profile avatar" />
              <Image
                className="absolute "
                src={ic_edit_profile}
                alt="Edit profile icon"
              />
            </div>
            <div className="flex flex-col items-start gap-1">
              <h3 className="text-[color:var(--grey-on-white-black,#000)] text-2xl not-italic font-semibold leading-8">
                Ayodeji Adeniji
              </h3>
              <h3 className="text-[color:var(--neutral-30,#918C9B)] text-lg not-italic font-normal leading-6 tracking-[-0.18px]">
                ayodejiadeniji@gmail.com
              </h3>
            </div>
          </div>
          <button
            onClick={tabb2}
            className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg"
          >
            <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
              Save changes
            </span>
          </button>
        </div>
        <div className="flex items-start flex-wrap gap-6 self-stretch">
          <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
            <span className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              First name
            </span>
            <input
              type="text"
              className="flex flex-col outline-none items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-lg border-solid placeholder:text-[color:var(--neutral-20,#B5B3BD)] text-ellipsis text-sm not-italic font-medium leading-[18px] tracking-[-0.14px] pl-3 pr-4 py-4"
              placeholder="First name"
            />
          </div>
          <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
            <span className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              Last name
            </span>
            <input
              type="text"
              className="flex outline-none flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-lg border-solid placeholder:text-[color:var(--neutral-20,#B5B3BD)] text-ellipsis text-sm not-italic font-medium leading-[18px] tracking-[-0.14px] pl-3 pr-4 py-4"
              placeholder="Last name"
            />
          </div>
        </div>
        <div className="flex items-start flex-wrap gap-6 self-stretch">
          <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
            <span className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              Email
            </span>
            <input
              type="email"
              className="flex outline-none flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-lg border-solid placeholder:text-[color:var(--neutral-20,#B5B3BD)] text-ellipsis text-sm not-italic font-medium leading-[18px] tracking-[-0.14px] pl-3 pr-4 py-4"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
            <span className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              Role
            </span>
            <input
              type="text"
              className="flex flex-col outline-none items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-lg border-solid placeholder:text-[color:var(--neutral-20,#B5B3BD)] text-ellipsis text-sm not-italic font-medium leading-[18px] tracking-[-0.14px] pl-3 pr-4 py-4"
              placeholder="Administrator"
            />
          </div>
          <div className="flex flex-col items-start gap-2 flex-[1_0_0]">
            <span className="text-[color:var(--neutral-40,#6C667A)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
              About
            </span>
            <textarea
              type="text"
              className="flex flex-col min-h-[100px] outline-none items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-lg border-solid placeholder:text-[color:var(--neutral-20,#B5B3BD)] text-ellipsis text-sm not-italic font-medium leading-[18px] tracking-[-0.14px] pl-3 pr-4 py-4"
              placeholder="Your response"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
const Profile = () => {
  const [selectedTab, setSelectedTab] = useState(0);
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
      tab = <ProfileDetails tabb2={tabb2} />;
      break;
    case 1:
      tab = <Notification />;
      break;
    case 2:
      tab = <EditProfile tabb2={tabb0} />;
      break;
  }

  return (
    <div className="flex w-[80vw] overflow-hidden flex-col bg-white">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-center gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        {selectedTab == 2 ? (
          <div className="flex gap-2 cursor-pointer" onClick={tabb_back}>
            <Image
              className="w-6 h-6 shrink-0"
              src={arrow_left}
              alt="Arrow left"
            />
            <h3 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-medium leading-6 tracking-[-0.18px]">
              Back to profile
            </h3>
          </div>
        ) : (
          <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
            Profile
          </h1>
        )}

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
              Account
            </h3>
            <Image
              className="flex w-8 h-8 justify-center items-center"
              src={arrow_back_boxed}
            />
          </div>
          <div className="flex flex-col items-start gap-4 self-stretch pt-6 pb-0 px-6">
            <div className="flex flex-col items-start gap-2 self-stretch">
              <h3 className="self-stretch text-[color:var(--neutral-40,#6C667A)] text-[10px] not-italic font-medium leading-4 tracking-[0.5px] uppercase">
                preferences
              </h3>
              <div className="w-[352px] h-px bg-[#F6F5F6]"></div>
              <div className="flex flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-[8px] border-solid overflow-hidden">
                <div
                  //className="course-item"
                  onClick={tabb0}
                  className={
                    selectedTab == 0 || selectedTab == 2
                      ? "course-item-active"
                      : "course-item"
                  }
                >
                  <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                    Profile
                  </span>
                </div>
                <div
                  //className="course-item"
                  className={
                    selectedTab == 1 ? "course-item-active" : "course-item"
                  }
                  onClick={tabb1}
                >
                  <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                    Notification
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

export default Profile;
