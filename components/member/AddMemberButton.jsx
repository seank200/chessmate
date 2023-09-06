"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus, faXmark } from "@fortawesome/free-solid-svg-icons";
import Loader from "../Loader";
import { useState, useEffect } from "react";
import { getApiUrl } from "@/utils";

export function AddMemberButton({ label = "멤버 추가", loading, onAdd }) {
  const [members, setMembers] = useState([]);
  const [memberId, setMemberId] = useState(undefined);
  const selectedMember = members.find((member) => member.id === memberId);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch(getApiUrl("/api/members"));
        if (!response.ok) return;
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        setMembers([]);
      }
    };
    fetchMembers();
  }, []);

  useEffect(() => {
    if (members.length) setMemberId(members[0].id);
  }, [members]);

  return (
    <div className="member__button-add">
      {isExpanded && (
        <select value={memberId} onChange={(e) => setMemberId(e.target.value)}>
          {members.map((member) => {
            return (
              <option key={member.id} value={member.id}>
                {member.name}
              </option>
            );
          })}
        </select>
      )}
      <button
        className={`member__button-add ${loading ? "loading" : ""}`}
        onClick={() =>
          isExpanded ? onAdd(selectedMember) : setIsExpanded(true)
        }
        disabled={loading}
      >
        <FontAwesomeIcon
          icon={faUserPlus}
          style={{
            height: "1em",
            marginRight: "0.5em",
          }}
          className="button-icon"
        />
        <Loader size="1rem" style={{ marginRight: "0.5em" }} />
        {label}
      </button>
      {isExpanded && (
        <button
          className="member__button-cancel-add"
          onClick={() => setIsExpanded(false)}
        >
          <FontAwesomeIcon
            icon={faXmark}
            style={{ height: "1em", marginRight: "0.5em" }}
          />
          취소
        </button>
      )}
    </div>
  );
}
