import { useEffect, useState } from "react";
import Link from "next/link";
import Button from "@components/Button";
import * as S from "./styles";
import defaultChildren from "./Defaults/children";

export default function Footer({
  title = "",
  link = "",
  children = defaultChildren(),
  onClick = () => (window.location.href = "https://linkedin.com/in/coutinhomm"),
  props = {},
}) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth <= 800
  );

  useEffect(() => {
    typeof window !== "undefined" &&
      window.addEventListener("resize", () =>
        setIsMobile(typeof window !== "undefined" && window.innerWidth <= 800)
      );
    return () => {
      typeof window !== "undefined" &&
        window.removeEventListener("resize", () =>
          setIsMobile(typeof window !== "undefined" && window.innerWidth <= 800)
        );
    };
  }, []);

  return (
    <>
      <S.Container {...props}>
        <Button
          onClick={onClick}
          props={{ style: { width: isMobile ? "90%" : "50%" } }}
        >
          {children}
        </Button>
      </S.Container>
      <Link href={link}>
        <S.Text>{title}</S.Text>
      </Link>
    </>
  );
}
