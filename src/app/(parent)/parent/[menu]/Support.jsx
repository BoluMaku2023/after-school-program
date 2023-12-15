import {
  analytics_info,
  school_table,
  school_table2,
  ticket_list,
} from "@/app/constants";
import {
  approved,
  arrow_left,
  avatar,
  filter,
  ic_arrow_down,
  ic_grades,
  ic_img_file,
  ic_increase,
  ic_menu,
  ic_notification,
  ic_plus,
  ic_search,
  pending_review,
  schl_logo1,
} from "@/assets";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Support = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTicket, setSelectedTicket] = useState(0);
  //const tk_list = ticket_list;
  const tabb0 = () => {
    setSelectedTab(0);
  };
  const tabb1 = (id) => {
    setSelectedTab(1);
  };
  return (
    <div className="flex w-[80vw] overflow-hidden flex-col bg-white">
      <div
        id="dashboard_header"
        className="flex w-full justify-between items-center gap-2.5 border-b-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-6 pb-4 border-b border-solid"
      >
        {selectedTab == 0 ? (
          <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
            Support
          </h1>
        ) : (
          <>
            <Link className="flex flex-row gap-2" href="/admin/dashboard">
              <Image src={arrow_left} alt="Arrow left" />
              <h1 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-[30px] not-italic font-semibold leading-[38px] tracking-[-0.6px]">
                Dashboard
              </h1>
            </Link>
          </>
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
      {selectedTab == 0 ? (
        <>
          <div
            id="schl_options"
            className="flex w-full items-start gap-6 border-b-[color:var(--neutral-10,#DAD9DE)] px-8 py-6 border-b border-solid"
          >
            <div className="flex items-end gap-6 flex-[1_0_0]">
              <div className="flex items-center gap-3 pb-2 self-stretch border-b-2 border-b-[color:var(--grey-on-white-10,#E5E5E5)]">
                <Image src={ic_search} alt="Search icon" />
                <input
                  className="px-1 outline-none placeholder:text-[color:var(--grey-on-white-40,#999)] text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]"
                  placeholder="Search"
                />
              </div>
              <button className=" hover:bg-gray-50 flex cursor-pointer items-center gap-2 border border-[color:var(--neutral-10,#DAD9DE)] p-2 rounded-lg border-solid">
                <Image src={filter} alt="" />
                <h4 className="text-[color:var(--neutral-80,#1C1A24)] text-center text-sm not-italic font-normal leading-[14px]">
                  Filter
                </h4>
              </button>
            </div>
            <button className="flex bg-[#1C1A24] justify-center items-center gap-1 pl-3.5 pr-[15px] py-[11px] rounded-lg">
              <Image src={ic_plus} alt="" />
              <span className="text-[color:var(--grey-on-black-white,#FFF)] text-center text-sm not-italic font-normal leading-[14px]">
                New support ticket
              </span>
            </button>
          </div>
          <div id="dnb_table" className="flex w-full flex-col items-start">
            <div className="flex items-center justify-between w-full self-stretch px-8 py-6">
              <h3 className="text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-semibold leading-6 tracking-[-0.18px]">
                Tickets
              </h3>
              <button className=" hover:bg-gray-50 flex cursor-pointer items-center gap-2 border border-[color:var(--neutral-10,#DAD9DE)] p-2 rounded-lg border-solid">
                <h4 className="text-[color:var(--neutral-80,#1C1A24)] text-center text-sm not-italic font-normal leading-[14px]">
                  All tickets
                </h4>
                <Image src={ic_arrow_down} alt="" />
              </button>
            </div>
            <div className="flex items-start self-stretch px-8 py-0">
              <div class="relative overflow-x-auto sm:rounded-lg border border-solid border-[color:var(--neutral-10,#DAD9DE)]">
                <table class="w-full text-sm text-left ">
                  <thead class="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]  bg-[#F6F5F6] ">
                    <tr>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b- border-l-[color:var(--neutral-10,#DAD9DE)] px-4 py-2.5  border-solid border-b border-l">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Ticket ID
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
                            Assignor
                          </span>
                        </div>
                      </th>
                      <th scope="col">
                        <div className="flex h-10 items-center gap-[5px] self-stretch  border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Assignee
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
                        <div className="flex h-10 items-center gap-[5px] self-stretch border-b-[color:var(--neutral-10,#DAD9DE)]  px-4 py-2.5  border-solid border-b ">
                          <span className="text-[color:var(--neutral-50,#474059)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            Status
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
                    {ticket_list.map((val, key) => {
                      return (
                        <tr
                          key={key}
                          class="bg-white border-b  hover:bg-gray-50 "
                        >
                          <td class="px-6 py-4 border-l-[color:var(--neutral-10,#DAD9DE)] border-solid flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            {val.ticket_id}
                          </td>
                          <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            {val.type}
                          </td>
                          <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            {val.assignor}
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
                                <circle cx="3" cy="3" r="3" fill="#FDB022" />
                              </svg>
                              <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                                {val.assignee}
                              </span>
                            </div>
                          </td>
                          <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            {val.date}
                          </td>
                          <td class="px-6 py-4 flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-xs not-italic font-medium leading-4 tracking-[-0.15px]">
                            {val.time}
                          </td>
                          <td class="px-6 py-4">
                            <Image src={val.status} alt="" />
                          </td>
                          <td class="px-6 py-4">
                            <button
                              onClick={tabb1}
                              className=" hover:bg-gray-50 flex cursor-pointer items-center gap-2 border border-[color:var(--neutral-10,#DAD9DE)] p-2 rounded-lg border-solid"
                            >
                              <h4 className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-normal leading-[14px]">
                                View
                              </h4>
                            </button>
                          </td>
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
        </>
      ) : (
        <>
          <div className="flex w-full flex-col items-start gap-6 border-b-[color:var(--neutral-10,#DAD9DE)] py-6 border-b border-solid">
            <div
              onClick={tabb0}
              className="flex px-8 items-center gap-2 cursor-pointer"
            >
              <Image src={arrow_left} alt="Arrow left" />
              <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-base not-italic font-normal leading-[14px]">
                Back
              </span>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full">
              <div className="flex items-center gap-2 self-stretch border-r-[color:var(--neutral-10,#DAD9DE)] border-b-[color:var(--neutral-10,#DAD9DE)] pt-6 pb-4 px-6 border-r border-solid border-b">
                <h3 className="flex-[1_0_0] text-[color:var(--neutral-80,#1C1A24)] text-lg not-italic font-semibold leading-6 tracking-[-0.18px]">
                  Support ticket
                </h3>
              </div>
              <div className="flex w-full min-h-[648px] flex-col items-start gap-8 border-r-[color:var(--neutral-10,#DAD9DE)] pl-8 pr-12 pt-8 pb-12 border-r border-solid">
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-center self-stretch justify-between">
                    <h3 className="flex-[1_0_0] text-[color:var(--G-600,#8F8F8F)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      Author
                    </h3>
                    <p className="flex justify-center items-center gap-2 px-3 py-1.5 rounded-3xl bg-[#F8F6FC] text-[color:var(--primary-accent-3,#5A3BA1)] text-center text-sm not-italic font-medium leading-[18px] tracking-[-0.14px]">
                      {ticket_list[selectedTicket].assignor}
                    </p>
                  </div>
                  <div className="w-full h-px bg-[#DAD9DE]"></div>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-center self-stretch justify-between">
                    <h3 className="flex-[1_0_0] text-[color:var(--G-600,#8F8F8F)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      Ticket ID
                    </h3>
                    <p className="self-stretch text-[color:var(--neutral-80,#1C1A24)] text-right text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      {ticket_list[selectedTicket].ticket_id}
                    </p>
                  </div>
                  <div className="w-full h-px bg-[#DAD9DE]"></div>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-center self-stretch justify-between">
                    <h3 className="flex-[1_0_0] text-[color:var(--G-600,#8F8F8F)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      Category
                    </h3>
                    <p className="self-stretch text-[color:var(--neutral-80,#1C1A24)] text-right text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      {ticket_list[selectedTicket].type}
                    </p>
                  </div>
                  <div className="w-full h-px bg-[#DAD9DE]"></div>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-center self-stretch justify-between">
                    <h3 className="flex-[1_0_0] text-[color:var(--G-600,#8F8F8F)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      Assignee
                    </h3>
                    <div className="flex justify-center items-center gap-1 border border-[color:var(--neutral-10,#DAD9DE)] px-2 py-[5px] rounded-3xl border-solid">
                      <svg
                        width="6"
                        height="6"
                        viewBox="0 0 6 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <circle cx="3" cy="3" r="3" fill="#FDB022" />
                      </svg>
                      <span className="text-[color:var(--neutral-80,#1C1A24)] text-center text-xs not-italic font-medium leading-3">
                        {ticket_list[selectedTicket].assignee}
                      </span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#DAD9DE]"></div>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-center self-stretch gap-4 justify-between">
                    <h3 className="text-[color:var(--G-600,#8F8F8F)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      Description
                    </h3>
                    <p className="pl-4 text-[color:var(--neutral-80,#1C1A24)] text-right text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      I logged on to my account now and found that I wasn’t
                      graded.
                    </p>
                  </div>
                  <div className="w-full h-px bg-[#DAD9DE]"></div>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-center self-stretch gap-4 justify-between">
                    <h3 className="text-[color:var(--G-600,#8F8F8F)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      Attachment
                    </h3>
                    <div className="flex items-start gap-2">
                      <Image src={ic_img_file} alt="Icon image" />
                      <h3 className="self-stretch text-[color:var(--primary-accent-3,#5A3BA1)] text-right text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                        FileName-01.jpg
                      </h3>
                    </div>
                  </div>
                  <div className="w-full h-px bg-[#DAD9DE]"></div>
                </div>
                <div className="flex w-full flex-col items-start gap-4">
                  <div className="flex items-center self-stretch gap-4 justify-between">
                    <h3 className="text-[color:var(--G-600,#8F8F8F)] text-base not-italic font-medium leading-6 tracking-[-0.16px]">
                      Status
                    </h3>
                    <Image
                      src={ticket_list[selectedTicket].status}
                      alt="Review status"
                    />
                  </div>
                  <div className="w-full h-px bg-[#DAD9DE]"></div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Support;
