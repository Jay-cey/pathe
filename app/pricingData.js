const pricingData = [
    {
        id: 1,
        title: "Free",
        desc: "For small projects",
        userNo: "Up to 10 users",
        discount: "Save 20%",
        price: "0",
        period: "per user per mo. billed yearly",
        button: "Buy Plan",
        heading: "Included In Free",
        sub: ["10 Users", "1 Project", "100 MB Storage", "Unlimited Tasks", "Collaborative Docs", "Two-Factor Authentication", "Gift Subversion", "iOS and Android mobile app", "Sprint Management", "24/7 Support"]
    },
    {
        id: 2,
        title: "Standard",
        desc: "For growing teams",
        userNo: "Up to 30 users",
        discount: "Save 22%",
        price: "5",
        period: "per user per mo. billed yearly",
        button: "Buy Plan",
        heading: "Included In Free, Plus",
        sub: ["30 Users", "5 Projects", "5GB Storage", "Advanced Checklists", "Goals and Portfolios", "Unlimited Boards", "Agile Reporting", "Resource Management"]
    },
    {
        id: 3,
        title: "Premium",
        desc: "For mid-sized companies",
        userNo: "Unlimited Users",
        discount: "Save 23%",
        price: "10",
        period: "per user per mo. billed yearly",
        button: "Buy Plan",
        btnRecommended: true,
        heading: "Included In Standard, Plus",
        sub: ["Unlimited Users", "100 Projects", "30 GB Storage", "Unlimited Workspace", "Priority Support", "Admin and Security Features", "Views: Calender, Dashboard", "Workload Management", "Goal Folders"]
    },
    {
        id: 4,
        title: "Enterprise",
        desc: "For larger companies",
        userNo: "Unlimited Users and Projects",
        img: "/enterprise.svg",
        button: "Contact Sales",
        heading: "Included In Premium, Plus",
        sub: ["Enterprise-grade Security & Governance", "Organization-wide Permissions", "Public board Management", "Attachment Permissions", "Power-Up Administration", "Enterprise API", "Dedicated Success Manger", "Live Onboarding Training"]
    }
];

export default pricingData;