import { useNavigate } from "react-router-dom";

const AboutmePage = () => {
  const navigate = useNavigate();

  return (
    <div className="page">
      <h1 className="aboutme-title">Eric Xiao</h1>
      <p className="aboutme-text">
        My name is Eric. I am a 14 year old student and programmer. I have been
        working on many different projects, mainly by myself. I use a variety of
        languages such as Typescript, Javascript, C++, C, Java, and Python. You
        can see some of my projects on my github, or the project page of this
        website!
      </p>
      <img className="aboutme-photo" src="selfie.jpg" alt="eric_xiao" />
      <div className="main-page-redirect" onClick={() => navigate("/")}>
        <h1>Return</h1>
      </div>
    </div>
  );
};

export default AboutmePage;
