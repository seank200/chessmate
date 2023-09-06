"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

export default function DeleteMemberButton({ member, onDelete }) {
  return (
    <button onClick={() => onDelete(member)}>
      <FontAwesomeIcon
        icon={faXmark}
        style={{ height: "0.875rem", color: "red" }}
      />
    </button>
  );
}
