import { ArrowLeftIcon } from "@channel.io/bezier-icons";
import {
  Button,
  Text,
  TextField,
  TextFieldType,
  Typography,
  VStack,
} from "@channel.io/bezier-react";
import { useState } from "react";
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
    // console.log(import.meta.env.VITE_API_BASE_URL);
    fetch(`${import.meta.env.VITE_API_BASE_URL}auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user_name: id,
        password: password,
      }),
    }).then((response) => {
      if (response.status <= 200) {
        alert("회원가입이 완료되었습니다!");
        window.location.href = "/login";
      } else {
        console.log(response.json());
      }
    });
  };
  return (
    <div
      style={{
        height: "90vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <VStack align="center" justify="center" style={{ gap: "20px" }}>
        <Text typo={Typography.Size24}>서비스명</Text>
        {/* <VStack style={{ gap: "10px" }}> */}
        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <TextField
            placeholder="아이디"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <TextField
            placeholder="비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type={TextFieldType.Password}
          />
          <TextField
            placeholder="비밀번호 확인"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
            type={TextFieldType.Password}
          />
        </div>
        {/* </VStack> */}
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
