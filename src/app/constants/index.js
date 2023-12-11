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
  approved,
  schl_logo1,
  pending,
  schl_logo2,
  schl_logo3,
  schl_logo4,
  schl_logo5,
} = require("@/assets");

const admin_dhb_menu1 = [
  {
    title: "Dashboard",
    icon: dashboard_icon,
    active_icon: dashboard_icon,
    link: "/admin/dashboard",
  },
  {
    title: "School",
    icon: schl_icon,
    link: "/admin/school",
  },
  {
    title: "Assessment",
    icon: assessment_icon,
    link: "/admin/assessment",
  },
];
const admin_dhb_menu2 = [
  {
    title: "Profile",
    icon: profile_icon,
    link: "/admin/dashboard",
  },
  {
    title: "Inbox",
    icon: ic_inbox,
    link: "/admin/dashboard",
  },
];
const admin_dhb_menu3 = [
  {
    title: "Support",
    icon: ic_support,
    link: "/admin/dashboard",
  },
  {
    title: "Setttings",
    icon: ic_settings,
    link: "/admin/dashboard",
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
  {
    title: "Av. Session Time",
    icon: ic_decrease,
    figure: "25m",
    percentage: "-0.7",
  },
];
const school_table = [
  {
    logo: schl_logo1,
    name: "Command Secondary School, Saki",
    type: "Secondary",
    grade: "SS3",
    curriculum: "English",
    teachers: "3",
    students: "68",
    confirmation: approved,
  },
  {
    logo: schl_logo2,
    name: "Queen’s College, Lagos",
    type: "Secondary",
    grade: "SS3",
    curriculum: "Mathematics",
    teachers: "3",
    students: "73",
    confirmation: pending,
  },
  {
    logo: schl_logo3,
    name: "CMS Grammar School",
    type: "Secondary",
    grade: "SS3",
    curriculum: "English",
    teachers: "3",
    students: "54",
    confirmation: approved,
  },
];
const school_table2 = [
  {
    logo: schl_logo1,
    name: "Command Secondary School, Saki",
    type: "Secondary",
    grade: "SS3",
    curriculum: "English",
    teachers: "3",
    students: "68",
    confirmation: approved,
  },
  {
    logo: schl_logo2,
    name: "Queen’s College, Lagos",
    type: "Secondary",
    grade: "SS3",
    curriculum: "Mathematics",
    teachers: "3",
    students: "73",
    confirmation: approved,
  },
  {
    logo: schl_logo4,
    name: "Caleb British International School",
    type: "Secondary",
    grade: "SS3",
    curriculum: "Mathematics",
    teachers: "1",
    students: "-",
    confirmation: pending,
  },
  {
    logo: schl_logo5,
    name: "Mayflower School, Ikenne",
    type: "Secondary",
    grade: "SS3",
    curriculum: "English",
    teachers: "-",
    students: "22",
    confirmation: approved,
  },
  {
    logo: schl_logo3,
    name: "CMS Grammar School",
    type: "Secondary",
    grade: "SS3",
    curriculum: "English",
    teachers: "3",
    students: "54",
    confirmation: pending,
  },
];
const assessment_list = [
  {
    name: "Command Secondary School, Saki",
    course: ["English Language", "Mathematics"],
  },
  {
    name: "Queen’s College, Lagos",
    course: ["English Language", "Mathematics"],
  },
  {
    name: "Caleb British International School",
    course: ["English Language", "Mathematics"],
  },
  {
    course: ["English Language", "Mathematics"],
    name: "Mayflower School, Ikenne",
  },
  {
    name: "CMS Grammar School",
    course: ["English Language", "Mathematics"],
  },
];

export {
  admin_dhb_menu1,
  admin_dhb_menu2,
  admin_dhb_menu3,
  analytics_info,
  school_table,
  school_table2,
};
