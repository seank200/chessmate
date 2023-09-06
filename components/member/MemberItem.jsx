"use client";

import ManageMemberButton from "./ManageMemberButton";
import DeleteMemberButton from "./DeleteMemberButton";

export default function MemberItem({ member, onDelete, onManage }) {
  return (
    <div className="member__item">
      {member.name}
      <div className="member__actions">
        {onManage && <ManageMemberButton member={member} onManage={onManage} />}
        {onDelete && <DeleteMemberButton member={member} onDelete={onDelete} />}
      </div>
    </div>
  );
}
