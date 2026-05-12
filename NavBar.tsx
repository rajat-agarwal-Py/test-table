import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Button,
} from "@mui/material";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

const Navbar = () => {
  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#0B1F4D",
        boxShadow: "none",
        zIndex: 1201,
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          minHeight: "64px",
        }}
      >
        {/* LEFT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 4 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
            }}
          >
            MPM Portal
          </Typography>

          <Button color="inherit">MAMLS</Button>
          <Button color="inherit">MIDAS</Button>
          <Button color="inherit">DATACATALOG</Button>
          <Button color="inherit">ChatBot</Button>
        </Box>

        {/* RIGHT */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>

          <Avatar sx={{ width: 32, height: 32 }} />

          <Typography variant="body2">Admin</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
