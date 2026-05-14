import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Avatar,
  IconButton,
  Button,
  Menu,
} from "@mui/material";

import { useState } from "react";

import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

import { useNavigate } from "react-router-dom";

import { useMenu } from "../../hooks/useMenu";

import { MenuNode } from "../../types/menu.types";

import { RecursiveMenuItem } from "./RecursiveMenuItem";

const Navbar = () => {
  const navigate = useNavigate();

  const { menu } = useMenu();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const [selectedMenu, setSelectedMenu] =
    useState<MenuNode | null>(null);

  const handleOpenMenu = (
    event: React.MouseEvent<HTMLElement>,
    menuItem: MenuNode
  ) => {
    setAnchorEl(event.currentTarget);

    setSelectedMenu(menuItem);
  };

  const handleClose = () => {
    setAnchorEl(null);

    setSelectedMenu(null);
  };

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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            MPM Portal
          </Typography>

          {/* DYNAMIC MENUS */}
          {menu.map((module) => (
            <Button
              key={module.id}
              color="inherit"
              onClick={(event) =>
                handleOpenMenu(event, module)
              }
            >
              {module.name}
            </Button>
          ))}

          {/* EXISTING BUTTONS */}
          <Button
            color="inherit"
            onClick={() =>
              navigate("/datacatalog")
            }
          >
            DATACATALOG
          </Button>

          <Button
            color="inherit"
            onClick={() =>
              navigate("/chatbot")
            }
          >
            ChatBot
          </Button>
        </Box>

        {/* RIGHT */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 2,
          }}
        >
          <IconButton color="inherit">
            <NotificationsOutlinedIcon />
          </IconButton>

          <Avatar
            sx={{
              width: 32,
              height: 32,
            }}
          />

          <Typography variant="body2">
            Admin
          </Typography>
        </Box>
      </Toolbar>

      {/* MAIN MENU */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {selectedMenu?.children?.map((child) => (
          <RecursiveMenuItem
            key={child.id}
            item={child}
          />
        ))}
      </Menu>
    </AppBar>
  );
};

export default Navbar;
