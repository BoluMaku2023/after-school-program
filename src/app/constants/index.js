const {
  dashboard_icon,
  schl_icon,
  assessment_icon,
  profile_icon,
  ic_inbox,
  ic_support,
  ic_settings,
  ic_increase,
  ic_decrease,
} = require("@/assets");

const admin_dhb_menu1 = [
  {
    title: "Dashboard",
    icon: dashboard_icon,
  },
  {
    title: "Schools",
    icon: schl_icon,
  },
  {
    title: "Assessments",
    icon: assessment_icon,
  },
];
const admin_dhb_menu2 = [
  {
    title: "Profile",
    icon: profile_icon,
  },
  {
    title: "Inbox",
    icon: ic_inbox,
  },
];
const admin_dhb_menu3 = [
  {
    title: "Support",
    icon: ic_support,
  },
  {
    title: "Setttings",
    icon: ic_settings,
  },
];
const analytics_info = [
  {
    title: "Total users",
    icon: ic_increase,
    figure: "28721",
    percentage: "+6.7",
  },
  {
    title: "Teachers",
    icon: ic_decrease,
    figure: "1024",
    percentage: "-9.2",
  },
  {
    title: "Students",
    icon: ic_increase,
    figure: "13945",
    percentage: "+10.9",
  },
  {
    title: "Parents",
    icon: ic_decrease,
    figure: "789",
    percentage: "-5.4",
  },
];

export { admin_dhb_menu1, admin_dhb_menu2, admin_dhb_menu3, analytics_info };
