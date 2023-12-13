"use client";

import {
  admin_dhb_menu1,
  admin_dhb_menu2,
  admin_dhb_menu3,
  teacher_dhb_menu1,
  teacher_dhb_menu2,
  teacher_dhb_menu3,
} from "@/app/constants";
import { dashboard_icon, logo_w } from "@/assets";
import Image from "next/image";
import Dashboard from "./Dashboard";
import School from "./Course";
import Assessment from "./Asessment";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Profile from "./Profile";
import Inbox from "./Inbox";
import Support from "./Support";
import Settings from "./Settings";
import Course from "./Course";

const Menu = ({ menu }) => {
  const pathname = usePathname();

  const pathh = "" + menu.title;

  return (
    <Link href={menu.link}>
      <div className="flex w-[273px] flex-col items-start gap-2.5 px-6 py-0">
        <div
          className={
            pathname.includes(pathh.toLowerCase())
              ? "dash-menu-item-active"
              : "dash-menu-item"
          }
        >
          <div className="flex items-center gap-3 self-stretch">
            <Image
              src={
                pathname.includes(pathh.toLowerCase())
                  ? menu.active_icon
                  : menu.icon
              }
              className="iconn"
            />
            <p className="flex-[1_0_0] text-[color:var(--neutral-10,#DAD9DE)] font-inter not-italic font-medium leading-[18px] tracking-[-0.14px]">
              {menu.title}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};
const menu1 = teacher_dhb_menu1.map((menu, index) => {
  return <Menu key={index} menu={menu} />;
});
const menu2 = teacher_dhb_menu2.map((menu, index) => {
  return <Menu key={index} menu={menu} />;
});
const menu3 = teacher_dhb_menu3.map((menu, index) => {
  return <Menu key={index} menu={menu} />;
});
export default function Page({ params }) {
  //const menu = () => {};
  let menu = {};
  switch (params.menu) {
    case "course":
      menu = <Course />;
      break;
    case "profile":
      menu = <Profile />;
      break;
    case "assessment":
      menu = <Assessment />;
      break;
    case "inbox":
      menu = <Inbox />;
      break;
    case "support":
      menu = <Support />;
      break;
    case "settings":
      menu = <Settings />;
      break;
    default:
      menu = <Dashboard />;
  }

  return (
    <div className="inline-flex items-start  w-full h-full bg-neutral-80 ">
      <div className="flex w-[273px] flex-row justify-center items-start bg-neutral-80">
        <div className="flex flex-col items-start gap-4">
          <div className="flex w-[273px] flex-col items-start gap-2.5 px-9 py-8">
            <div className="flex items-start gap-2">
              <Image src={logo_w} />
              <div className="flex flex-col items-start gap-0.5">
                <h2 className="text-[color:var(--grey-on-black-white,#FFF)] text-base font-mabry-pro not-italic font-medium leading-[normal]">
                  AFTER-SCHOOL
                </h2>
                <h2 className="text-[color:var(--grey-on-black-white,#FFF)] text-base font-mabry-pro not-italic font-medium leading-[normal]">
                  PROGRAM
                </h2>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">{menu1}</div>
          <div className="w-[273px] h-px bg-[#2B2635]"></div>
          <div className="flex flex-col items-start gap-2">{menu2}</div>
          <div className="w-[273px] h-px bg-[#2B2635]"></div>
          <div className="flex flex-col items-start gap-2">{menu3}</div>
        </div>
      </div>
      <div className="flex w-full h-[100%] flex-row justify-center items-start pb-10 bg-white overflow-hidden">
        {menu}
      </div>
    </div>
  );
}
