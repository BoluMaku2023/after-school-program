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
  ic_gradebook_active,
  gradebook_icon,
  TextIndent,
  Link,
  assignment,
  poor,
  good,
  excellent,
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
const teacher_dhb_menu1 = [
  {
    title: "Dashboard",
    icon: dashboard_icon,
    active_icon: dashboard_icon_active,
    link: "/teacher/dashboard",
  },
  {
    title: "Course",
    icon: schl_icon,
    active_icon: ic_schl_active,
    link: "/teacher/course",
  },
  {
    title: "Assessment",
    active_icon: ic_assess_active,
    icon: assessment_icon,
    link: "/teacher/assessment",
  },
];
const student_dhb_menu1 = [
  {
    title: "School",
    icon: schl_icon,
    active_icon: ic_schl_active,
    link: "/student/school",
  },
  {
    title: "Assessment",
    icon: assessment_icon,
    active_icon: ic_assess_active,
    link: "/student/assessment",
  },
  {
    title: "Gradebook",
    active_icon: ic_gradebook_active,
    icon: gradebook_icon,
    link: "/student/gradebook",
  },
];
const parent_dhb_menu1 = [
  {
    title: "School",
    icon: schl_icon,
    active_icon: ic_schl_active,
    link: "/parent/school",
  },

  {
    title: "Gradebook",
    active_icon: ic_gradebook_active,
    icon: gradebook_icon,
    link: "/parent/gradebook",
  },
];
const teacher_student_profile = [
  {
    name: "Jennifer Okafor",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702444058/Avatar_a2xp74.png",
  },
  {
    name: "Aisha Ibrahim",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702444553/Avatar_xyjyjo.png",
  },
  {
    name: "Zainab Mohammed",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-4_qhalpv.png",
  },
  {
    name: "Adesola Afolabi",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-3_jbqn1g.png",
  },
  {
    name: "Obinna Ezeani",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-1_h9nmbs.png",
  },
  {
    name: "Zainab Mohammed",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-5_upqtxr.png",
  },
  {
    name: "Yusuf Aliyu",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-2_xtxqnl.png",
  },
  {
    name: "Ngozi Onyekachi",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-6_lrgywv.png",
  },
  {
    name: "Ifeoma Okonkwo",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar_3_rqodvn.png",
  },
  {
    name: "Ngozi Onyekachi",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar-6_lrgywv.png",
  },
  {
    name: "Ifeoma Okonkwo",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar_3_rqodvn.png",
  },
  {
    name: "Ayodeji Adeniji",
    icon: "https://res.cloudinary.com/djogev23i/image/upload/v1702459130/Avatar_2_hohqgu.png",
  },
];
const teacher_dhb_menu2 = [
  {
    title: "Profile",
    active_icon: ic_profile_active,
    icon: profile_icon,
    link: "/teacher/profile",
  },
  {
    title: "Inbox",
    active_icon: ic_inbox_active,
    icon: ic_inbox,
    link: "/teacher/inbox",
  },
];
const parent_dhb_menu2 = [
  {
    title: "Profile",
    active_icon: ic_profile_active,
    icon: profile_icon,
    link: "/parent/profile",
  },
  {
    title: "Inbox",
    active_icon: ic_inbox_active,
    icon: ic_inbox,
    link: "/parent/inbox",
  },
];
const student_dhb_menu2 = [
  {
    title: "Profile",
    active_icon: ic_profile_active,
    icon: profile_icon,
    link: "/student/profile",
  },
  {
    title: "Inbox",
    active_icon: ic_inbox_active,
    icon: ic_inbox,
    link: "/student/inbox",
  },
];
const teacher_dhb_menu3 = [
  {
    title: "Support",
    active_icon: ic_support_active,
    icon: ic_support,
    link: "/teacher/support",
  },
  {
    title: "Settings",
    active_icon: ic_settings_active,
    icon: ic_settings,
    link: "/teacher/settings",
  },
];
const parent_dhb_menu3 = [
  {
    title: "Support",
    active_icon: ic_support_active,
    icon: ic_support,
    link: "/parent/support",
  },
  {
    title: "Settings",
    active_icon: ic_settings_active,
    icon: ic_settings,
    link: "/parent/settings",
  },
];
const student_dhb_menu3 = [
  {
    title: "Support",
    active_icon: ic_support_active,
    icon: ic_support,
    link: "/student/support",
  },
  {
    title: "Settings",
    active_icon: ic_settings_active,
    icon: ic_settings,
    link: "/student/settings",
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
const teacher_analytics_info = [
  {
    title: "Course",
    icon: ic_increase,
    figure: "01",
    percentage: "+1.0",
  },
  {
    title: "School",
    icon: ic_increase,
    figure: "01",
    percentage: "+1.0",
  },
  {
    title: "Students",
    icon: ic_increase,
    figure: "86",
    percentage: "+0.0",
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
const maths_content = [
  {
    name: "Numerical Processes 1: Surds",
    part: [
      {
        color: "#704AC9",
        title: "Addition and Subtraction of Surds",
        icon: TextIndent,
      },
      {
        color: "#704AC9",
        title: "Multiplication and Division of Surds",
        icon: TextIndent,
      },
      {
        color: "#039855",
        title: "New School Mathematics for SSS3.pdf",
        icon: Link,
      },
      {
        color: "#F04438",
        title: "Assignment: Surds",
        icon: assignment,
      },
    ],
  },
  {
    name: "Numerical Processes 2: Theory of Logarithms",
    part: [
      {
        color: "#704AC9",
        title: "Addition and Subtraction of Surds",
        icon: TextIndent,
      },
      {
        color: "#704AC9",
        title: "Multiplication and Division of Surds",
        icon: TextIndent,
      },
      {
        color: "#039855",
        title: "New School Mathematics for SSS3.pdf",
        icon: Link,
      },
      {
        color: "#F04438",
        title: "Assignment: Surds",
        icon: assignment,
      },
    ],
  },
  {
    name: "Algebra Processes 1: Linear and Quadratic Equations",
    part: [
      {
        color: "#704AC9",
        title: "Addition and Subtraction of Surds",
        icon: TextIndent,
      },
      {
        color: "#704AC9",
        title: "Multiplication and Division of Surds",
        icon: TextIndent,
      },
      {
        color: "#039855",
        title: "New School Mathematics for SSS3.pdf",
        icon: Link,
      },
      {
        color: "#F04438",
        title: "Assignment: Surds",
        icon: assignment,
      },
    ],
  },
  {
    name: "Mensuration: Length, Area, Volume",
    part: [
      {
        color: "#704AC9",
        title: "Addition and Subtraction of Surds",
        icon: TextIndent,
      },
      {
        color: "#704AC9",
        title: "Multiplication and Division of Surds",
        icon: TextIndent,
      },
      {
        color: "#039855",
        title: "New School Mathematics for SSS3.pdf",
        icon: Link,
      },
      {
        color: "#F04438",
        title: "Assignment: Surds",
        icon: assignment,
      },
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
const english_assessment = [
  {
    name: "Part of Speech",
    score: "45",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: poor,
  },
  {
    name: "Vocabulary Development",
    score: "67",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: good,
  },
  {
    name: "Active and Passive Voice",
    score: "89",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: excellent,
  },
  {
    name: "Assessment name",
    score: "82",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: excellent,
  },
];
const unit_list2 = [
  {
    name: "Numerical Processes 1: Surds",
    questions: "60",
    points: "30",
    teacher: "Bosun",
    duration: "30",
    date: "18/12/23",
    time: "6:00 PM",
  },
  {
    name: "Numerical Processes 2: Theory of Logarithms",
    questions: "60",
    points: "60",
    teacher: "Odun",
    duration: "40",
    date: "18/12/23",
    time: "2:00 PM",
  },
  {
    name: "Algebra Processes 1: Linear and Quadratic Equations",
    questions: "60",
    points: "60",
    teacher: "Odun",
    duration: "40",
    date: "18/12/23",
    time: "2:00 PM",
  },
  {
    name: "Mensuration: Length, Area, Volume",
    questions: "60",
    points: "60",
    teacher: "Odun",
    duration: "40",
    date: "18/12/23",
    time: "2:00 PM",
  },
];
const maths_assessment = [
  {
    name: "Numerical Processes 1: Surds",
    score: "42",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: poor,
  },
  {
    name: "Numerical Processes 2: Theory of Logarithms",
    score: "70",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: excellent,
  },
  {
    name: "Algebra Processes 1: Linear and Quadratic Equations",
    score: "60",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: good,
  },
  {
    name: "Mensuration: Length, Area, Volume",
    score: "20",
    attainable: "100",
    points: "15pts",

    date: "18/12/23",
    status: poor,
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
  student_dhb_menu2,
  student_dhb_menu3,
  parent_dhb_menu1,
  parent_dhb_menu2,
  parent_dhb_menu3,
  teacher_dhb_menu1,
  teacher_dhb_menu2,
  teacher_dhb_menu3,
  teacher_analytics_info,
  analytics_info,
  school_table,
  school_table2,
  assessment_list,
  maths_content,
  unit_list,
  english_assessment,
  maths_assessment,
  unit_list2,
  student_dhb_menu1,
  admin_accounts_notification_prefs,
  ticket_list,
  admin_system_notification_prefs,
  teacher_student_profile,
  admin_notification_prefs,
};
