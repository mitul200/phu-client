const adminPaths2 = [
  {
    name: "dashboard",
    path: "dashboard",
    element: " <AdminDashboard />",
  },
  {
    name: "User Management",
    children: [
      {
        name: "create Admin",
        path: "create-admin",
        element: "<CreateAdmin />",
      },
      {
        name: "Create Student",
        path: "create-Student",
        element: "<CreateStudent />",
      },
      {
        name: "Create Faculty",
        path: "create-faculty",
        element: "<CreateFaculty />",
      },
    ],
  },
];

const newArray = adminPaths2.reduce((acc, item) => {
  // acc.push(item);
  if (item.path && item.name) {
    acc.push({
      path: item.name,
      label: "Nav LInk",
    });
  }

  if (item.children) {
    acc.push({
      key: item.name,
      label: item.name,
      children: item.children.map((child) => ({
        key: child.name,
        label: "Navelnk",
      })),
    });
  }

  return acc;
}, []);

console.log(newArray);
