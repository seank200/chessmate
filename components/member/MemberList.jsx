"use client";

import { useState } from "react";
import { AddMemberButton } from "./AddMemberButton";
import MemberItem from "./MemberItem";

export default function MemberList({
  members,
  onAdd,
  addLoading,
  onManage,
  manageLoading,
  onDelete,
  deleteLoading,
}) {
  return (
    <>
      <div className="member__list">
        {members.map((member) => (
          <MemberItem
            key={member.id}
            member={member}
            onDelete={onDelete}
            onManage={onManage}
          />
        ))}
      </div>
      {onAdd && <AddMemberButton onAdd={onAdd} loading={addLoading} />}
    </>
  );
}
