import React from "react";
import infoIcon from "../../assets/info_outline.svg";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";
import { styled } from "@mui/material/styles";
import chevronDownIcon from "../../assets/chevron_down.svg";

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
const SendInvite = () => {
  return (
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
  );
};

export default SendInvite;
