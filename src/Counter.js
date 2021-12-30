import { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

export function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  useEffect(()=> {
    console.log("like is changed: ", like)
  }, [like]);

  return (
    <div class="counter-container">
      <IconButton
        className="lkes-dislikes"
        onClick={() => setLike(like + 1)}
        color="primary"
        aria-label="upload picture"
      >
        <Badge badgeContent={like} color="primary">
          👍
        </Badge>
      </IconButton>

      <IconButton
        className="lkes-dislikes"
        onClick={() => setDisLike(disLike + 1)}
        color="primary"
        aria-label="upload picture"
      >
        <Badge badgeContent={disLike} color="error">
          👎
        </Badge>
      </IconButton>
    </div>
  );
}
