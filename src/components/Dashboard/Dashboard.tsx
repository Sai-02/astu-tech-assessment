import React from "react";
import chevronLeftIcon from "../../assets/chevron_left_black.svg";
import chevronDownIcon from "../../assets/chevron_down.svg";
import infoIcon from "../../assets/info_outline.svg";
import deleteIcon from "../../assets/deleteIcon.svg";
import resendIcon from "../../assets/resend_icon.svg";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
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
          <img src={chevronLeftIcon} className="w-4 h-4" />
        </span>
        <span className="text-[#323232] text-[20px]">Co-Workers</span>
      </div>
      <div className="shadow-lg px-6 py-8 rounded-sm flex gap-4 flex-col">
        <div className="flex justify-between items-center">
          <p className="text-[#323232]">
            Invite your co-workers to collaborate on Cashwise.
          </p>
          <LightTooltip
            title={
              "Invited co-workers would have all the permissions except the option to delete the company"
            }
          >
            <img src={infoIcon} alt="" className="cursor-pointer" />
          </LightTooltip>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="bg-[#F5F5F5] rounded placeholder:text-gray-400 p-4 outline-none w-[30rem]"
            placeholder="Email"
          />
          <button className="bg-[#F5F5F5] rounded text-[#323232]  flex items-center gap-2 p-4">
            <span className="">Admin</span>
            <span className="">
              <img src={chevronDownIcon} />
            </span>
          </button>
        </div>
        <div className="flex gap-4">
          <input
            type="text"
            className="bg-[#F5F5F5] rounded placeholder:text-gray-400 p-4 outline-none w-[30rem]"
            placeholder="Email"
          />
          <button className="bg-[#F5F5F5] rounded text-[#323232]  flex items-center gap-2 p-4">
            <span className="">Select</span>
            <span className="">
              <img src={chevronDownIcon} />
            </span>
          </button>
        </div>
        <div className="flex  items-center justify-between">
          <button className="text-[#1161D6]">+ Add More</button>
          <button className="text-white px-4 py-2 rounded bg-[#1161D6]">
            Send Invite
          </button>
        </div>
      </div>
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
