import { Layout, Menu } from "antd";
const { Header, Content, Footer, Sider } = Layout;

import { Outlet } from "react-router-dom";
import { adminSidebarItems } from "../../routes/admin.routes";

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
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div
          style={{
            color: "white",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="demo-logo-vertical"
        >
          <h1>PH Uni</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={adminSidebarItems}
        />
      </Sider>
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
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
