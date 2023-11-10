import { ArrowLeftIcon } from "@channel.io/bezier-icons";
import {
  Button,
  Text,
  TextField,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function SignUp() {
  const [id, setId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordCheck, setPasswordCheck] = useState<string>("");

  const submitSignUp = (
    id: string,
    password: string,
    passwordCheck: string
  ) => {
    if (password !== passwordCheck) {
      alert("비밀번호가 다릅니다. \n다시 입력해주세요");
      setPassword("");
      setPasswordCheck("");
      return;
    }
    console.log(id, password, passwordCheck);
  };
  return (
    <div>
      <VStack align="center" style={{ gap: "20px" }}>
        <Text typo={Typography.Size24}>서비스명</Text>
        <VStack style={{ gap: "10px" }}>
          <TextField
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
          />
          <TextField
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            type="password"
          />
        </VStack>
        <Button
          text="회원가입"
          style={{ width: "100%" }}
          onClick={() => {
            submitSignUp(id, password, passwordCheck);
          }}
        />
        <Link to={"/login"}>
          <Button
            text="로그인"
            leftContent={ArrowLeftIcon}
            style={{
              backgroundColor: "transparent",
              color: "#464748",
              fontWeight: "100",
            }}
          />
        </Link>
      </VStack>
    </div>
  );
}

export default SignUp;
