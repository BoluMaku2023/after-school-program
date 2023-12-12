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
  pending_review,
  reviewed,
  dashboard_icon_active,
  ic_settings_active,
  ic_support_active,
  ic_inbox_active,
  ic_profile_active,
  ic_assess_active,
  ic_schl_active,
} = require("@/assets");

const admin_dhb_menu1 = [
  {
    title: "Dashboard",
    icon: dashboard_icon,
    active_icon: dashboard_icon_active,
    link: "/admin/dashboard",
  },
  {
    title: "School",
    icon: schl_icon,
    active_icon: ic_schl_active,
    link: "/admin/school",
  },
  {
    title: "Assessment",
    active_icon: ic_assess_active,
    icon: assessment_icon,
    link: "/admin/assessment",
  },
];
const admin_dhb_menu2 = [
  {
    title: "Profile",
    active_icon: ic_profile_active,
    icon: profile_icon,
    link: "/admin/profile",
  },
  {
    title: "Inbox",
    active_icon: ic_inbox_active,
    icon: ic_inbox,
    link: "/admin/inbox",
  },
];
const admin_dhb_menu3 = [
  {
    title: "Support",
    active_icon: ic_support_active,
    icon: ic_support,
    link: "/admin/support",
  },
  {
    title: "Settings",
    active_icon: ic_settings_active,
    icon: ic_settings,
    link: "/admin/settings",
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
const ticket_list = [
  {
    ticket_id: "A8901-G7SP",
    type: "General",
    assignor: "You",
    assignee: "Ayodeji Adeniji",
    date: "06/11/2023",
    time: "10:37 PM",
    status: pending_review,
  },
  {
    ticket_id: "A8901-G7SP",
    type: "Assessments",
    assignor: "You",
    assignee: "Ayodeji Adeniji",
    date: "06/11/2023",
    time: "10:37 PM",
    status: pending_review,
  },
  {
    ticket_id: "A8901-G7SP",
    type: "Login/Registration",
    assignor: "You",
    assignee: "Erica Emmanuel",
    date: "06/11/2023",
    time: "10:37 PM",
    status: reviewed,
  },
  {
    ticket_id: "A8901-G7SP",
    type: "Profile",
    assignor: "You",
    assignee: "Folake Ogunleye",
    date: "06/11/2023",
    time: "10:37 PM",
    status: reviewed,
  },
  {
    ticket_id: "A8901-G7SP",
    type: "Assessments",
    assignor: "You",
    assignee: "Ayodeji Adeniji",
    date: "06/11/2023",
    time: "10:37 PM",
    status: pending_review,
  },
  {
    ticket_id: "A8901-G7SP",
    type: "Login/Registration",
    assignor: "You",
    assignee: "Erica Emmanuel",
    date: "06/11/2023",
    time: "10:37 PM",
    status: reviewed,
  },
  {
    ticket_id: "A8901-G7SP",
    type: "Profile",
    assignor: "You",
    assignee: "Folake Ogunleye",
    date: "06/11/2023",
    time: "10:37 PM",
    status: reviewed,
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
    course: [
      { id: "saki-eng", title: "English Language" },
      { id: "saki-maths", title: "Mathematics" },
    ],
  },
  {
    name: "Queen’s College, Lagos",
    course: [
      { id: "queens-eng", title: "English Language" },
      { id: "queens-maths", title: "Mathematics" },
    ],
  },
  {
    name: "Caleb British International School",
    course: [
      { id: "caleb-eng", title: "English Language" },
      { id: "caleb-maths", title: "Mathematics" },
    ],
  },
  {
    course: [
      { id: "mayflower-eng", title: "English Language" },
      { id: "mayflower-maths", title: "Mathematics" },
    ],
    name: "Mayflower School, Ikenne",
  },
  {
    name: "CMS Grammar School",
    course: [
      { id: "cms-eng", title: "English Language" },
      { id: "cms-maths", title: "Mathematics" },
    ],
  },
];
const unit_list = [
  {
    name: "Part of Speech",
    questions: "60",
    points: "30",
    teacher: "Bosun",
    duration: "30",
    date: "18/12/23",
    time: "6:00 PM",
  },
  {
    name: "Vocabulary Development",
    questions: "60",
    points: "60",
    teacher: "Odun",
    duration: "40",
    date: "18/12/23",
    time: "2:00 PM",
  },
  {
    name: "Active and Passive Voice",
    questions: "60",
    points: "60",
    teacher: "Odun",
    duration: "40",
    date: "18/12/23",
    time: "2:00 PM",
  },
];
const admin_accounts_notification_prefs = [
  {
    title: "Allow account activity notifications",
    desc: "Enable users receive push notifications about their account including password reset, account deletion/deactivations, specifications etc.",
    checked: true,
  },
  {
    title: "Opt-out and Unsubscribe options",
    desc: "Allow users unsubscribe for promotional newsletters on their email or mobile numbers.",
    checked: true,
  },
  {
    title: "General notifications",
    desc: "Allow notifications sent to users’ emails, displayed on the platform, sent to users’ mobile phones.",
    checked: true,
  },
  {
    title: "Promotional notifications",
    desc: "Allow users receive promotional notifications such as marketing/promotion messages from the platform.",
    checked: true,
  },
];
const admin_notification_prefs = [
  {
    title: "Email Notifications",
    desc: "Allow users get the latest new and updates directly on their mail.",
    checked: true,
  },
  {
    title: "In-App Notifications",
    desc: "Allow users get in-app updates and notifications about their activities.",
    checked: true,
  },
  {
    title: "SMS Notifications",
    desc: "Allow users get the latest new and updates via SMS.",
    checked: false,
  },
];
const admin_system_notification_prefs = [
  {
    title: "Enable system notifications",
    desc: "Critical updates, system maintenance notices, or platform-wide announcements",
    checked: true,
  },
];

export {
  admin_dhb_menu1,
  admin_dhb_menu2,
  admin_dhb_menu3,
  analytics_info,
  school_table,
  school_table2,
  assessment_list,
  unit_list,
  admin_accounts_notification_prefs,
  ticket_list,
  admin_system_notification_prefs,
  admin_notification_prefs,
};
