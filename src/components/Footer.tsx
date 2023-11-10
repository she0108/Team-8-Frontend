import { PersonIcon, SearchIcon } from "@channel.io/bezier-icons";
import { HStack, Text, Icon, IconSize } from "@channel.io/bezier-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div
      style={{
        position: "fixed",
        bottom: "0",
        borderTop: "1px solid #D9D9D9",
        width: "100%",
        padding: "12px 30px",
        backgroundColor: "white",
      }}
    >
      <HStack style={{ justifyContent: "space-around" }}>
        <Link to={"/"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              color: "#464748",
              width: "50px",
            }}
          >
            <Icon source={SearchIcon} size={IconSize.S} />
            <Text>탐색</Text>
          </div>
        </Link>
        <Link to={"/mypage"}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "5px",
              color: "#464748",
            }}
          >
            <Icon source={PersonIcon} size={IconSize.S} />
            <Text>마이페이지</Text>
          </div>
        </Link>
      </HStack>
    </div>
  );
}

export default Footer;
