import * as Styled from "@/App.styled";

import Login from "./pages/LoginPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUpPage";
import SearchPage from "./pages/SearchPage";

import DetailPage from "./pages/DetailPage";

import MyPage from "./pages/MyPage";

function App() {
  return (
    <Styled.Container>
      <Styled.Content>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/home" element={<SearchPage />} />

            <Route path="/detail/:id" element={<DetailPage />} />

            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </BrowserRouter>
      </Styled.Content>
    </Styled.Container>
  );
}

export default App;
