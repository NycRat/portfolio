import { useEffect, useState } from "react";
import { BASE_SCREEN_SIZE, Vector2 } from "../App";

export interface ClickListenerProps {
  position: Vector2;
  size: Vector2;
  onClick: () => void;
}

const ClickListener = (props: ClickListenerProps) => {
  
  // const [lastMousePos, setLastMousePos] = useState<Vector2>({x: 0, y: 0});

  const handleMouseDown = (event: MouseEvent) => {
    const screenSize = {
      x: document.getElementById("root")?.clientWidth ?? BASE_SCREEN_SIZE,
      y: document.getElementById("root")?.clientHeight ?? BASE_SCREEN_SIZE,
    };

    const scaledPos = {
      x: props.position.x * (screenSize.x / BASE_SCREEN_SIZE),
      y: props.position.y * (screenSize.y / BASE_SCREEN_SIZE),
    };
    const scaledSize = {
      x: props.size.x * (screenSize.x / BASE_SCREEN_SIZE),
      y: props.size.y * (screenSize.y / BASE_SCREEN_SIZE),
    };
    if ( // if mouse click is within bounds of selection
      event.x >= scaledPos.x &&
      event.y >= scaledPos.y &&
      event.x <= scaledPos.x + scaledSize.x &&
      event.y <= scaledPos.y + scaledSize.y
    ) {
      props.onClick();
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", handleMouseDown);
    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  });

  return null;
};

export default ClickListener;
