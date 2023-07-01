import React from "react";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import Zoom from "@mui/material/Zoom";
import { styled } from "@mui/material/styles";

const TooltipCustom = styled(({ className, ...props }) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "#ff4141",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#fff",
    fontSize: theme.typography.pxToRem(14),
    border: "2px solid #ff4141",
    maxWidth: 220,
    fontFamily: "poppins",
    color: "#000",
    padding: "7px",
  },
}));

const CustomTooltip = ({
  children,
  title,
  placement,
  disableHoverListener,
}) => {
  return (
    <TooltipCustom
      title={title}
      placement={placement}
      arrow
      TransitionComponent={Zoom}
      disableHoverListener={disableHoverListener}
    >
      {children}
    </TooltipCustom>
  );
};

export default CustomTooltip;
