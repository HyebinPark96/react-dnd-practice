import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserListPage from "./user/userListPage";

function App() {
  const Router = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserListPage />} />
        </Routes>
      </BrowserRouter>
    );
  };

  return <Router />;
}

export default App;
