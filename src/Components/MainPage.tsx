import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface Vector2<T> {
  x: T;
  y: T;
}

interface PageInfo {
  position: Vector2<number>;
  size: Vector2<number>;
  pageName: string;
}

const BASE_SCREEN_SIZE = 1000; // values are 0.1% of width/height of screen

const MainPage = () => {
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

  const navigate = useNavigate();

  const handleMouseDown = (event: MouseEvent) => {
    const screenSize = {
      x: document.getElementById("root")?.clientWidth ?? BASE_SCREEN_SIZE,
      y: document.getElementById("root")?.clientHeight ?? BASE_SCREEN_SIZE,
    };

    for (let page of pages) {
      const scaledPagePos = {
        x: page.position.x * (screenSize.x / BASE_SCREEN_SIZE),
        y: page.position.y * (screenSize.y / BASE_SCREEN_SIZE),
      };
      const scaledPageSize = {
        x: page.size.x * (screenSize.x / BASE_SCREEN_SIZE),
        y: page.size.y * (screenSize.y / BASE_SCREEN_SIZE),
      };
      if (
        event.x >= scaledPagePos.x &&
        event.y >= scaledPagePos.y &&
        event.x <= scaledPagePos.x + scaledPageSize.x &&
        event.y <= scaledPagePos.y + scaledPageSize.y
      ) {
        // if mouse click is within bounds of selection
        navigate("/" + page.pageName);
        break;
      }
    }
  };

  const handleMouseMove = (event: MouseEvent) => {
    // add logic and animation for hovering over selection for page
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  });

  return (
    <div>
      <h1>Eric Xiao</h1>
      <p>woaosdjo asodjasodja dajsoidja s</p>
    </div>
  );
};

export default MainPage;
