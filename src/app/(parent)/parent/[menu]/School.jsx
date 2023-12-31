import {
  analytics_info,
  maths_content,
  school_table,
  school_table2,
  teacher_student_profile,
} from "@/app/constants";
import {
  approved,
  arrow_back_boxed,
  arrow_left,
  avatar,
  english_card,
  english_div,
  filter,
  ic_arrow_down,
  ic_drag,
  ic_grades,
  ic_increase,
  ic_menu,
  ic_notification,
  ic_plus,
  ic_search,
  maths_card,
  maths_div,
  plus,
  rank,
  schl_logo1,
  schl_logo2,
  schl_logo4,
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
            Your course
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            English Language
          </h3>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 gap-6">
        {maths_content.map((content, index) => {
          return (
            <div className="flex flex-col w-full" key={index}>
              <div className="flex w-full self-stretch justify-between items-center bg-[#F7F6F7] gap-2 border border-[color:var(--neutral-10,#DAD9DE)] px-3 py-[19px] rounded-lg border-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={index == 0 ? "rotate-90" : ""}
                >
                  <path
                    d="M9.93672 6.68883L5.56172 2.31382C5.49846 2.25447 5.4197 2.21424 5.33453 2.19779C5.24937 2.18134 5.16128 2.18934 5.08047 2.22086C5.00085 2.25433 4.93291 2.31062 4.88522 2.38263C4.83753 2.45465 4.81223 2.53917 4.8125 2.62554V11.3755C4.81223 11.4619 4.83753 11.5464 4.88522 11.6185C4.93291 11.6905 5.00085 11.7468 5.08047 11.7802C5.13444 11.8017 5.19194 11.8128 5.25 11.813C5.36618 11.8126 5.47774 11.7675 5.56172 11.6873L9.93672 7.31226C10.0189 7.22932 10.065 7.11729 10.065 7.00054C10.065 6.8838 10.0189 6.77177 9.93672 6.68883Z"
                    fill="#1C1A24"
                  />
                </svg>
                <p className="flex-[1_0_0] text-[color:var(--neutral-90,#0E0D12)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                  {content.name}
                </p>
              </div>
              {index == 0 ? (
                <div className="flex flex-col w-full">
                  {content.part.map((val, key) => {
                    return (
                      <div
                        key={key}
                        className="flex w-full items-center gap-2 border-r-[color:var(--Neutral-5,#F6F5F6)] border-b-[color:var(--Neutral-5,#F6F5F6)] pr-3 border-r border-solid border-b"
                      >
                        <div className="w-0.5 h-14 shrink-0 bg-[#704AC9]"></div>
                        <Image src={val.icon} alt="icon" />
                        <p className="flex-[1_0_0] text-[color:var(--Neutral-90,#0E0D12)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                          {val.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const Mathematics = () => {
  return (
    <div
      id="course_details"
      className="inline-flex flex-col items-start gap-[22px] w-[70%]"
    >
      <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-[color:var(--neutral-40,#6C667A)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
            Your course
          </h3>
          <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
            {selectedCourse}
          </h3>
        </div>
      </div>
      <div className="flex flex-col w-full px-10 gap-6">
        {maths_content.map((content, index) => {
          return (
            <div className="flex flex-col w-full" key={index}>
              <div className="flex w-full self-stretch justify-between items-center bg-[#F7F6F7] gap-2 border border-[color:var(--neutral-10,#DAD9DE)] px-3 py-[19px] rounded-lg border-solid">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={index == 0 ? "rotate-90" : ""}
                >
                  <path
                    d="M9.93672 6.68883L5.56172 2.31382C5.49846 2.25447 5.4197 2.21424 5.33453 2.19779C5.24937 2.18134 5.16128 2.18934 5.08047 2.22086C5.00085 2.25433 4.93291 2.31062 4.88522 2.38263C4.83753 2.45465 4.81223 2.53917 4.8125 2.62554V11.3755C4.81223 11.4619 4.83753 11.5464 4.88522 11.6185C4.93291 11.6905 5.00085 11.7468 5.08047 11.7802C5.13444 11.8017 5.19194 11.8128 5.25 11.813C5.36618 11.8126 5.47774 11.7675 5.56172 11.6873L9.93672 7.31226C10.0189 7.22932 10.065 7.11729 10.065 7.00054C10.065 6.8838 10.0189 6.77177 9.93672 6.68883Z"
                    fill="#1C1A24"
                  />
                </svg>
                <p className="flex-[1_0_0] text-[color:var(--neutral-90,#0E0D12)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                  {content.name}
                </p>
              </div>
              {index == 0 ? (
                <div className="flex flex-col w-full">
                  {content.part.map((val, key) => {
                    return (
                      <div
                        key={key}
                        className="flex w-full items-center gap-2 border-r-[color:var(--Neutral-5,#F6F5F6)] border-b-[color:var(--Neutral-5,#F6F5F6)] pr-3 border-r border-solid border-b"
                      >
                        <div className="w-0.5 h-14 shrink-0 bg-[#704AC9]"></div>
                        <Image src={val.icon} alt="icon" />
                        <p className="flex-[1_0_0] text-[color:var(--Neutral-90,#0E0D12)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                          {val.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
const CourseModule = ({ tabb0 }) => {
  const [selectedCMTab, setSelectedCMTab] = useState(0);

  const tab0 = () => {
    setSelectedCMTab(0);
  };
  const tab1 = () => {
    setSelectedCMTab(0);
    1;
  };
  let tabb = {};
  switch (selectedCMTab) {
    case 0:
      tabb = <EnglishLanguage />;
      break;
    case 1:
      tabb = <Mathematics />;
      break;
  }
  return (
    <div className="flex w-[80vw] min-h-screen overflow-hidden flex-col bg-white overscroll-contain">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-end gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        <div className="flex flex-row gap-2 cursor-pointer" onClick={tabb0}>
          <Image src={arrow_left} alt="Arrow left" />
          <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
            School
          </h1>
        </div>
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
              Class
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
                courses
              </h3>
              <div className="w-[352px] h-px bg-[#F6F5F6]"></div>
              <div className="flex flex-col items-start self-stretch border border-[color:var(--neutral-10,#DAD9DE)] rounded-[8px] border-solid overflow-hidden">
                <div
                  onClick={tab0}
                  className={
                    selectedCMTab == 0 ? "course-item-active" : "course-item"
                  }
                >
                  <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                    English Language
                  </span>
                </div>
                <div
                  className={
                    selectedCMTab == 1 ? "course-item-active" : "course-item"
                  }
                  onClick={tab1}
                >
                  <span className="w-[140px] text-xs not-italic font-medium leading-4 tracking-[-0.12px]">
                    Mathematics
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {tabb}
      </div>
    </div>
  );
};

const CourseDetails = ({ tabb1 }) => {
  return (
    <div className="flex w-[80vw] min-h-screen overflow-hidden flex-col bg-white">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-end gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
          School
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
        id="course_details"
        className="inline-flex flex-col items-start gap-[22px] w-full"
      >
        <div className="flex items-start w-full justify-between border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-[51px] pt-8 pb-6 border-b border-solid">
          <div className="flex flex-col items-start gap-4">
            <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-[24px] not-italic font-semibold leading-8">
              Linked student(s)
            </h3>
          </div>
        </div>
        <div className="flex flex-row mx-8 gap-4">
          <div className="flex w-[343px] flex-col items-start border border-[color:var(--Neutral-10,#DAD9DE)] rounded-lg border-solid">
            <div className="flex items-center bg-[#F6F5F6] gap-1 self-stretch border-b border-b-[color:var(--Neutral-10,#DAD9DE)] pl-4 pr-5 py-4 rounded-[8px_8px_0px_0px] border-solid">
              <div className="flex items-center gap-4 flex-[1_0_0]">
                <Image
                  src="https://res.cloudinary.com/djogev23i/image/upload/v1702444058/Avatar_a2xp74.png"
                  alt="avatar"
                  width={32}
                  height={32}
                />
                <h3 className="flex-[1_0_0] text-[color:var(--Neutral-80,#1C1A24)] text-lg not-italic font-medium leading-7">
                  Adebola Adeniji
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch px-4 py-6">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[color:var(--Gray-500,#667085)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                  Courses
                </h3>
                <div className="flex items-start gap-2">
                  <Image src={english_div} alt="Course indicator" />
                  <Image src={maths_div} alt="Course indicator" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[color:var(--Gray-500,#667085)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                  School
                </h3>
                <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                  <Image
                    src={schl_logo4}
                    className="w-[18px] h-[18px]"
                    alt="avatar"
                  />
                  <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                    Mayflower School, Ikenne
                  </span>
                </div>
              </div>
              <button
                onClick={tabb1}
                className="flex w-full bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg"
              >
                <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
                  View account
                </span>
              </button>
            </div>
          </div>
          <div className="flex w-[343px] flex-col items-start border border-[color:var(--Neutral-10,#DAD9DE)] rounded-lg border-solid">
            <div className="flex items-center bg-[#F6F5F6] gap-1 self-stretch border-b border-b-[color:var(--Neutral-10,#DAD9DE)] pl-4 pr-5 py-4 rounded-[8px_8px_0px_0px] border-solid">
              <div className="flex items-center gap-4 flex-[1_0_0]">
                <Image
                  src="https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-1_h9nmbs.png"
                  alt="avatar"
                  width={32}
                  height={32}
                />
                <h3 className="flex-[1_0_0] text-[color:var(--Neutral-80,#1C1A24)] text-lg not-italic font-medium leading-7">
                  Adebisi Adeniji
                </h3>
              </div>
            </div>
            <div className="flex flex-col items-start gap-6 self-stretch px-4 py-6">
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[color:var(--Gray-500,#667085)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                  Courses
                </h3>
                <div className="flex items-start gap-2">
                  <Image src={english_div} alt="Course indicator" />
                  <Image src={maths_div} alt="Course indicator" />
                </div>
              </div>
              <div className="flex flex-col items-start gap-2">
                <h3 className="text-[color:var(--Gray-500,#667085)] text-base not-italic font-normal leading-6 tracking-[-0.16px]">
                  School
                </h3>
                <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                  <Image
                    src={schl_logo4}
                    className="w-[18px] h-[18px]"
                    alt="avatar"
                  />
                  <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                    Mayflower School, Ikenne
                  </span>
                </div>
              </div>
              <button
                onClick={tabb1}
                className="flex w-full bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg"
              >
                <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
                  View account
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const School = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  //const [selectedCourse, setSelectedCourse] = useState("English Language");
  const tabb0 = () => {
    setSelectedTab(0);
  };
  const tabb1 = () => {
    setSelectedTab(1);
    //setSelectedCourse("Mathematics");
  };
  let tab = {};
  switch (selectedTab) {
    case 0:
      tab = <CourseDetails tabb1={tabb1} />;
      break;
    case 1:
      tab = <CourseModule tabb0={tabb0} />;
      break;
  }
  return <div>{tab}</div>;
};

export default School;
