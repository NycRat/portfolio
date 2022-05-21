import { useNavigate } from "react-router-dom";

const AboutmePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <div className="main-page-redirect" onClick={() => navigate("/")}>
        <h1>Return</h1>
      </div>
      <h1 className="aboutme-title">Eric Xiao</h1>
      <p className="aboutme-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A minus
        reiciendis nisi veritatis facilis, sequi provident cupiditate, qui
        deserunt doloribus fugit dignissimos aliquam nobis consectetur, fuga
        debitis sit? Corporis, minus. Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Quo molestiae dolor ipsa, nam quae qui cumque vitae
        dolores nisi, neque possimus excepturi pariatur molestias earum velit
        quos fugit numquam asperiores?
      </p>
      <img className="aboutme-photo" src="selfie.jpg" alt="eric_xiao" />
    </div>
  );
};

export default AboutmePage;
