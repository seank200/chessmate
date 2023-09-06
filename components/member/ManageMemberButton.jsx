"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";

export default function ManageMemberButton({ member, onManage }) {
  return (
    <button onClick={() => onManage(member)}>
      <FontAwesomeIcon
        icon={faGear}
        style={{ height: "0.875rem", color: "#94a3b8" }}
      />
    </button>
  );
}
