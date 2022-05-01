import { useNavigate } from "react-router-dom";
import { Vector2 } from "../App";
import ClickListener from "./ClickListener";

interface PageInfo {
  position: Vector2;
  size: Vector2;
  pageName: string;
}

const MainPage = () => {
  const navigate = useNavigate();

  const pages: Array<PageInfo> = [
    {
      position: { x: 0, y: 700 },
      size: { x: 300, y: 300 },
      pageName: "projects",
    },
    {
      position: { x: 700, y: 700 },
      size: { x: 300, y: 300 },
      pageName: "skills",
    },
  ];

  return (
    <div>
      <h1>Eric Xiao</h1>
      <p>woaosdjo asodjasodja dajsoidja s</p>
      {pages.map((page, index) => {
        return (
          <ClickListener
            key={index}
            position={page.position}
            size={page.size}
            onClick={() => navigate("/" + page.pageName)}
          />
        );
      })}
    </div>
  );
};

export default MainPage;
