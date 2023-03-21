import React from "react";
import chevronLeftIcon from "../../assets/chevron_left_black.svg";
import chevronDownIcon from "../../assets/chevron_down.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import resendIcon from "../../assets/resend_icon.svg";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import SendInvite from "./SendInvite";
const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f5",
    color: "#323232",
    fontSize: 11,
    maxWidth: "10rem",
  },
}));
const Dashboard = () => {
  return (
    <div className="p-8 h-screen flex flex-col gap-8 overflow-auto">
      <div className="flex items-center gap-8 ">
        <span className="">
          <img src={chevronLeftIcon} className="w-4 h-4 cursor-pointer" />
        </span>
        <span className="text-[#323232] text-[20px]">Co-Workers</span>
      </div>
      <SendInvite />
      <div className="shadow-lg px-6 py-8 rounded-sm flex gap-4 flex-col">
        <div className="grid grid-cols-10 text-[#323232] items-center">
          <div className="col-span-3">Co Worker Emails</div>
          <div className="col-span-7">Role</div>
        </div>
        <div className="grid grid-cols-10 text-[#767676] items-center">
          <div className="col-span-3">akshay@cashwise.in</div>
          <div className="col-span-7">Owner</div>
        </div>
        <div className="grid grid-cols-10  items-center">
          <div className="col-span-3">shivanju@cashwise.in</div>
          <div className="col-span-7 flex gap-6 items-center">
            {" "}
            <button className="bg-[#F5F5F5] rounded text-[#323232]  flex items-center gap-2 p-4">
              <span className="">Admin</span>
              <span className="">
                <img src={chevronDownIcon} />
              </span>
            </button>
            <span className="">
              <LightTooltip title="Delete this role">
                <img src={deleteIcon} alt="" className="cursor-pointer" />
              </LightTooltip>
            </span>
            <span className="">
              <LightTooltip title="Resend Invite">
                <img src={resendIcon} className="cursor-pointer" />
              </LightTooltip>
            </span>
          </div>
        </div>
        <div className="grid grid-cols-10  items-center">
          <div className="col-span-3">siddhant@cashwise.in</div>
          <div className="col-span-7 flex gap-6 items-center">
            {" "}
            <button className="bg-[#F5F5F5] rounded text-[#323232]  flex items-center gap-2 p-4">
              <span className="">Admin</span>
              <span className="">
                <img src={chevronDownIcon} />
              </span>
            </button>
            <span className="">
              <LightTooltip title="Delete this  role">
                <img src={deleteIcon} alt="" className="cursor-pointer" />
              </LightTooltip>
            </span>
            <span className="">
              <LightTooltip title="Resend Invite">
                <img src={resendIcon} className="cursor-pointer" />
              </LightTooltip>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
