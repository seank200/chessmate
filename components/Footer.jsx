import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessRook } from "@fortawesome/free-regular-svg-icons";

export default function Footer() {
  return (
    <footer>
      <Link href="/" className="logo">
        <FontAwesomeIcon
          icon={faChessRook}
          style={{ width: "1em", marginRight: "0.5em" }}
          fixedWidth
        />
        체스메이트 경기관리시스템
      </Link>
      <p>2023 &copy; Chessmate</p>
    </footer>
  );
}
