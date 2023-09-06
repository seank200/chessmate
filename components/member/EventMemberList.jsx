"use client";

import { useState } from "react";
import { getApiUrl, sleep } from "@/utils";
import MemberList from "./MemberList";

export default function EventMemberList({ event, members }) {
  const eventId = event.id;

  const [isAddLoading, setIsAddLoading] = useState(false);
  const [isDeleteLoading, setIsDeleteLoading] = useState(false);

  const handleMemberAdd = async (member) => {
    if (!confirm(`"${member.name}"님을 모임 멤버로 추가하시겠습니까?`)) return;
    try {
      setIsAddLoading(true);
      // const response = await fetch(
      //   getApiUrl(`/api/events/${eventId}/members`),
      //   {
      //     method: "PATCH",
      //     body: {
      //       id: member.id,
      //       name: member.name,
      //       notes: member.notes,
      //     },
      //   }
      // );

      // if (!response.ok) return null;
      // return await response.json();
      await sleep();
      alert("추가 API 미구현");
    } catch (error) {
      return null;
    } finally {
      setIsAddLoading(false);
    }
  };

  const handleMemberDelete = async (member) => {
    if (!confirm(`멤버 "${member.name}"를 삭제하시겠습니까?`)) return;
    try {
      setIsDeleteLoading(true);
      // const response = await fetch(
      //   getApiUrl(`/api/events/${eventId}/members/${member.id}`),
      //   { method: "DELETE" }
      // );
      // if (!response.ok) return null;
      // return await response.json();
      await sleep();
      alert("삭제 API 미구현");
      return true;
    } catch (error) {
      return null;
    } finally {
      setIsDeleteLoading(false);
    }
  };

  return (
    <MemberList
      onAdd={handleMemberAdd}
      onDelete={handleMemberDelete}
      addLoading={isAddLoading}
      deleteLoading={isDeleteLoading}
      members={members}
    />
  );
}
