import { ArrowRightIcon } from "@channel.io/bezier-icons";
import {
  Button,
  ButtonColorVariant,
  Text,
  TextField,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const submitLogin = (id: string, password: string) => {
    fetch(
      `${
        import.meta.env.VITE_API_BASE_URL
      }auth/login?user_name=${id}&password=${password}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => {
      if (response.status <= 200) {
        localStorage.setItem("isLogin", "true");
        window.location.href = "/home";
      }
    });
  };
  return (
    <div
      style={{
        height: "90vh",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      <VStack
        justify="center"
        align="center"
        style={{ height: "fit-content", gap: "20px" }}
      >
        <Text typo={Typography.Size24}>서비스명</Text>
        <VStack style={{ gap: "10px" }}>
          <TextField
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </VStack>
        <VStack style={{ marginTop: "20px", gap: "10px" }}>
          <Button
            text="로그인"
            colorVariant={ButtonColorVariant.Blue}
            onClick={() => {
              submitLogin(id, password);
            }}
          />
          <Link
            to={"/signup"}
            style={{ display: "flex", justifyContent: "center" }}
          >
            <Button
              text="회원가입"
              color=""
              rightContent={ArrowRightIcon}
              style={{
                background: "transparent",
                color: "#464748",
                fontWeight: 300,
              }}
            />
          </Link>
        </VStack>
      </VStack>
    </div>
  );
}

export default Login;
