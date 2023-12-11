"use client";

import {
  admin_dhb_menu1,
  admin_dhb_menu2,
  admin_dhb_menu3,
} from "@/app/constants";
import { dashboard_icon, logo_w } from "@/assets";
import Image from "next/image";
import Dashboard from "./Dashboard";
import School from "./School";
const Menu = ({ menu }) => {
  return (
    <div className="flex w-[273px] flex-col items-start gap-2.5 px-6 py-0">
      <div
        tabIndex="1"
        className="flex cursor-pointer flex-col items-start gap-2.5 self-stretch pl-3 pr-0 py-3 rounded-lg dash-menu-item"
      >
        <div className="flex items-center gap-3 self-stretch">
          <Image src={menu.icon} className="iconn" />
          <p className="flex-[1_0_0] text-[color:var(--neutral-10,#DAD9DE)] font-inter not-italic font-medium leading-[18px] tracking-[-0.14px]">
            {menu.title}
          </p>
        </div>
      </div>
    </div>
  );
};
const menu1 = admin_dhb_menu1.map((menu, index) => {
  return <Menu key={index} menu={menu} />;
});
const menu2 = admin_dhb_menu2.map((menu, index) => {
  return <Menu key={index} menu={menu} />;
});
const menu3 = admin_dhb_menu3.map((menu, index) => {
  return <Menu key={index} menu={menu} />;
});
export default function Page({ params }) {
  //const menu = () => {};
  let menu = {};
  switch (params.menu) {
    case "school":
      menu = <School />;
      break;
    case "assessment":
      // code block
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
