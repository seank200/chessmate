"use client";

import {
  faBars,
  faCalendarPlus,
  faChessRook,
  faHouse,
  faUserGear,
  faUserPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useState, useEffect } from "react";
import throttle from "lodash/throttle";
import Container from "./Container";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsOpen(false);
    }, 100);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <Container>
        <Link className="logo" href="/" style={{ flexShrink: 0 }}>
          <FontAwesomeIcon
            icon={faChessRook}
            style={{ width: "1em", marginRight: "0.5em" }}
            fixedWidth
          />
          체스메이트
        </Link>
        <ul style={{ display: isOpen ? "flex" : undefined }}>
          <li
            style={{ alignSelf: "end" }}
            className="mobile-only"
            onClick={() => setIsOpen(false)}
          >
            <FontAwesomeIcon icon={faXmark} style={{ width: "1.25rem" }} />
          </li>
          <li>
            <Link href="/">
              <FontAwesomeIcon
                icon={faHouse}
                style={{ width: "1rem", marginRight: "0.75rem" }}
                className="mobile-only"
                fixedWidth
              />
              홈
            </Link>
          </li>
          <li className="">
            <Link href="/">
              <FontAwesomeIcon
                icon={faUserPlus}
                style={{ width: "1rem", marginRight: "0.75rem" }}
                className="mobile-only"
                fixedWidth
              />
              모임 추가
            </Link>
          </li>
          <li className="admin-only">
            <Link href="/">
              <FontAwesomeIcon
                icon={faCalendarPlus}
                style={{ width: "1rem", marginRight: "0.75rem" }}
                className="mobile-only"
                fixedWidth
              />
              모임 관리
            </Link>
          </li>
          <li className="admin-only">
            <Link href="/">
              <FontAwesomeIcon
                icon={faUserGear}
                style={{ width: "1rem", marginRight: "0.75rem" }}
                className="mobile-only"
                fixedWidth
              />
              멤버 관리
            </Link>
          </li>
        </ul>
        <FontAwesomeIcon
          icon={faBars}
          style={{ width: "1.25rem" }}
          className="mobile-only"
          onClick={() => setIsOpen(true)}
        />
      </Container>
    </nav>
  );
}
