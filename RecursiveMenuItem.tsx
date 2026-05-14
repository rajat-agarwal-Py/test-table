import {
  Menu,
  MenuItem,
} from "@mui/material";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import {
  useState,
  MouseEvent,
  memo,
} from "react";

import { useNavigate } from "react-router-dom";

import { MenuNode } from "../../types/menu.types";

type Props = {
  item: MenuNode;
};

function RecursiveMenuItemComponent({
  item,
}: Props) {
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] =
    useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const hasChildren =
    item.children &&
    item.children.length > 0;

  const handleOpen = (
    event: MouseEvent<HTMLElement>
  ) => {
    if (hasChildren) {
      setAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // DASHBOARD
  if (!hasChildren) {
    return (
      <MenuItem
        onClick={() => {
          navigate(
            `/dashboard/${item.dashboardId}`
          );

          handleClose();
        }}
      >
        {item.name}
      </MenuItem>
    );
  }

  // CATEGORY WITH SUBMENU
  return (
    <>
      <MenuItem
        onMouseEnter={handleOpen}
      >
        {item.name}

        <ChevronRightIcon
          fontSize="small"
          sx={{ ml: "auto" }}
        />
      </MenuItem>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        {item.children?.map((child) => (
          <RecursiveMenuItem
            key={child.id}
            item={child}
          />
        ))}
      </Menu>
    </>
  );
}

export const RecursiveMenuItem = memo(
  RecursiveMenuItemComponent
);
