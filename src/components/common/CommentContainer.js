import { PersonRounded } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import React from "react";
import { trimText } from "../../common/utils";

function CommentContainer({ commentTitle, userEmail, commentBody }) {
  return (
    <div className="flex items-start gap-2">
      <div className="bg-[#F4F3F4] rounded-full p-2">
        <PersonRounded className="text-3xl" />
      </div>
      <div className="">
        <div className="flex flex-col gap-2 bg-[#F0F2F5] rounded-xl p-2">
          <div className="flex items-center gap-2 ">
            <Tooltip title={commentTitle}>
              <span className=" text-sm font-medium leading-tight">
                {trimText(commentTitle, 30)}
              </span>
            </Tooltip>
            <div className=" border-[2.5px] border-slate-400 rounded-full"></div>
            <span className=" text-xs font-normal text-[#858789]">
              {userEmail}
            </span>
          </div>
          <div className="text-sm leading-tight">
            <span>{commentBody}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommentContainer;
