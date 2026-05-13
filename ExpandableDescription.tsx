import {
  Box,
  Button,
  Typography,
} from "@mui/material";

import { useState } from "react";

interface Props {
  text: string;
}

const ExpandableDescription = ({
  text,
}: Props) => {
  const [expanded, setExpanded] =
    useState(false);

  return (
    <Box
      sx={{
        py: 0.5,
      }}
    >
      {/* DESCRIPTION */}
      <Typography
        variant="body2"
        sx={{
          color: "#4B5563",

          display: "-webkit-box",

          WebkitLineClamp: expanded
            ? "unset"
            : 2,

          WebkitBoxOrient: "vertical",

          overflow: "hidden",

          textOverflow: "ellipsis",

          lineHeight: 1.4,
        }}
      >
        {text}
      </Typography>

      {/* SEE MORE */}
      {text.length > 80 && (
        <Button
          size="small"
          onClick={() =>
            setExpanded(!expanded)
          }
          sx={{
            p: 0,

            mt: 0.5,

            minWidth: "unset",

            textTransform: "none",

            fontSize: "12px",

            fontWeight: 600,
          }}
        >
          {expanded
            ? "See Less"
            : "See More"}
        </Button>
      )}
    </Box>
  );
};

export default ExpandableDescription;
