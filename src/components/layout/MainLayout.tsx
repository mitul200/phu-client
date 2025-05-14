import { Layout } from "antd";
const { Header, Content } = Layout;

import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

// const items: MenuProps["items"] = [
//   {
//     key: "dashboard",
//     label: <NavLink to={"dashboard"}>"Dashboard"</NavLink>,
//   },
//   {
//     key: "User Management",
//     label: "User Management",
//     children: [
//       {
//         key: "create admin",
//         label: <NavLink to={"create-admin"}>Creat Admin</NavLink>,
//       },
//       {
//         key: "create faculty",
//         label: <NavLink to={"create-faculty"}>Create Faculty</NavLink>,
//       },
//       {
//         key: "create student",
//         label: <NavLink to={"create-student"}>Creat student</NavLink>,
//       },
//     ],
//   },
// ];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sidebar />
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
