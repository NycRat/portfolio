import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="main-page-redirect" onClick={() => navigate("/")}>
        <h1>Return</h1>
      </div>
      <h1>404, page not found.</h1>
    </div>
  );
};

export default ErrorPage;
