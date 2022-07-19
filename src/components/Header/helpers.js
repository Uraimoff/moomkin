import { Link } from "react-router-dom";
import { DownOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import MenuItem from "antd/lib/menu/MenuItem";

const services = [
  {
    link: "/services/business-analysis-services",
    label: "Business Analysis",
  },
  {
    link: "",
    label: "UI/UX Desing",
  },
  {
    link: "",
    label: "Frontend & Backend Development",
  },
  {
    link: "",
    label: "QA and Testing",
  },
  {
    link: "",
    label: "IT Staff Augmentation",
  },
];
const expertise = [
  {
    link: "",
    label: (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "50px",
          padding: "20px",
        }}
      >
        <div>
          <ul style={{ display: "grid", gap: "20px", fontSize: "16px" }}>
            <li style={{ fontSize: "14px", color: "gray", cursor: "auto" }}>
              EXPERTISE
            </li>
            <li>Enterprise Apps</li>
            <li>Startups Apps</li>
            <li>Internet of Things</li>
            <li>Mobile Apps</li>
            <li>SaaS Development</li>
          </ul>
        </div>
        <div>
          <ul style={{ display: "grid", gap: "20px", fontSize: "16px" }}>
            <li style={{ fontSize: "14px", color: "gray", cursor: "auto" }}>
              INDUSTRIES
            </li>
            <li>AdTech & Marketing</li>
            <li>EdTech & eLearning</li>
            <li>eCommerce</li>
            <li>Logistics & Transportation</li>
            <li>Blockchain</li>
          </ul>
        </div>
      </div>
    ),
  },
];
const clients = [
  {
    link: "",
    label: "Case Studies",
  },
  {
    link: "",
    label: "Testimonials",
  },
];
const about = [
  {
    link: "",
    label: "Team",
  },
  {
    link: "",
    label: "Engagement Models",
  },
  {
    link: "",
    label: "Development Process",
  },
  {
    link: "",
    label: "Development Life Cycle",
  },
  {
    link: "",
    label: "Contacts",
  },
  {
    link: "",
    label: "Careers",
  },
];
const insights = [
  {
    link: "",
    label: "Blog",
  },
  {
    link: "",
    label: "Whitepapers",
  },
];

export const data = [
  {
    menu: (
      <Menu style={{ padding: "20px 0",marginTop:"10px",}}>
        {services.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            <Link to={a.link}>{a.label}</Link>
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "SERVICES",
    link: "/services",
    icon: <DownOutlined />
  },
  {
    menu: <Menu items={[...expertise]} style={{marginTop:"10px"}} />,
    title: "EXPERTISE & INDUSTRIES",
    link: "",
    icon: <DownOutlined />
  },
  {
    menu: (
      <Menu style={{ padding: "20px 0",marginTop:"10px", }}>
        {clients.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            {a.label}
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "CLIENTS",
    link: "",
    icon: <DownOutlined />
  },
  {
    menu: (
      <Menu style={{ padding: "20px 0",marginTop:"10px", }}>
        {about.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            {a.label}
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "ABOUT US",
    link: "",
    icon: <DownOutlined />
  },
  { menu: "", title: "CONTACTS", link: "" },
  {
    menu: (
      <Menu style={{ padding: "20px 0",marginTop:"10px", }}>
        {insights.map((a) => (
          <MenuItem style={{ fontSize: "16px", padding: "10px 20px" }}>
            {a.label}
          </MenuItem>
        ))}
      </Menu>
    ),
    title: "INSIGHTS",
    link: "",
    icon: <DownOutlined />
  },
];
