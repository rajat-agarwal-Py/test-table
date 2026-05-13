// import { Box, Toolbar } from "@mui/material";
// import { Outlet } from "react-router-dom";

// import Navbar from "../navbar/Navbar";
// import Sidebar from "../sidebar/Sidebar";

// const MainLayout = () => {
//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* TOP NAVBAR */}
//       <Navbar />

//       {/* SIDEBAR */}
//       <Sidebar />

//       {/* PAGE CONTENT */}
//       <Box
//         component="main"
//         sx={{
//           flexGrow: 1,
//           p: 3,
//         }}
//       >
//         {/* SPACE BELOW NAVBAR */}
//         <Toolbar />

//         {/* ROUTE PAGE */}
//         <Outlet />
//       </Box>
//     </Box>
//   );
// };

// export default MainLayout;



import { Box, Toolbar } from "@mui/material";

import { Outlet } from "react-router-dom";

import Navbar from "../navbar/Navbar";

const MainLayout = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",

        width: "100%",

        background:
          "linear-gradient(to bottom right, #EEF2FF, #F8FAFC)",
      }}
    >
      {/* TOP NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <Box
        component="main"
        sx={{
          width: "100%",

          boxSizing: "border-box",
        }}
      >
        {/* SPACE BELOW FIXED NAVBAR */}
        <Toolbar />

        {/* ROUTE PAGE */}
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;
