import Shuttle from "../public/icons/shuttle.png";
import Multi from "../public/icons/multi.png";
import Wallet from "../public/icons/ic_wallet.png";
import Cart from "../public/icons/purchase.png";
import Cell from "../public/icons/cell.png";
import Bank from "../public/icons/bank.png";
import Invoice from "../public/icons/ic_invoices.png";
import Reports from "../public/icons/tabler_report.png";
import Users from "../public/icons/users-group.png";
import Settings from "../public/icons/settings.png";

export const SideLinks = [
	{
		icon: Shuttle,
		title: "Welcome",
		link: "/dashboard/welcome",
	},
	{
		icon: Multi,
		title: "Dashboard",
		link: "/dashboard/dashboard",
	},
	{
		icon: Wallet,
		title: "Sales",
		drop: true,
		link: "",
		links: [{ name: "Sales", link: "/dashboard/sales" }],
	},
	{
		icon: Cart,
		title: "Purchases",
		drop: true,
		link: "",
		links: [
			{
				name: "Bills",
				link: "/dashboard/bills",
			},
			{
				name: "Vendors",
				link: "/dashboard/vendors",
			},
			{
				name: "Products & Services",
				link: "/dashboard/products",
			},
		],
	},
	{
		icon: Cell,
		title: "Accounting",
		drop: true,
		link: "",
		links: [{ name: "Accounting", link: "/dashboard/accounting" }],
	},
	{
		icon: Bank,
		title: "Banking",
		drop: true,
		link: "",
		links: [{ name: "Banking", link: "/dashboard/banking" }],
	},
	{
		icon: Invoice,
		title: "Payroll",
		drop: true,
		link: "",
		links: [{ name: "Payroll", link: "/dashboard/payroll" }],
	},
	{
		icon: Reports,
		title: "Reports",
		link: "/dashboard/reports",
	},
	{
		icon: Users,
		title: "Analytics",
		drop: true,
		link: "",
		links: [
			{
				name: "View Report",
				link: "/dashboard/reports",
			},
			{
				name: "To-Do",
				link: "/dashboard/todo",
			},
			{
				name: "Upload Docs",
				link: "/dashboard/docs",
			},
			{
				name: "Chat",
				link: "/dashboard/chat",
			},
			{
				name: "Schedule",
				link: "/dashboard/schedule",
			},
			{
				name: "Message Board",
				link: "/dashboard/message",
			},
			{
				name: "Make Payments",
				link: "/dashboard/payments",
			},
			{
				name: "Billing",
				link: "/dashboard/billing",
			},
		],
	},
	{
		icon: Settings,
		title: "Settings",
		link: "/dashboard/settings",
	},
];
