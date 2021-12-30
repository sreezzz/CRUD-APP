import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { ColorBox } from './ColorBox';

export function ColorList() {
  const [color, setColor] = useState("orange");
  const styles = { backgroundColor: color, color: "black" };
  const Intial_colors = ["crimson", "orange", "skyblue"];
  const [colors, setColors] = useState(Intial_colors);

  return (
    <div>
      <TextField
        value={color}
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        label="Enter a color"
        variant="outlined" />
      <Button onClick={() => setColors([...colors, color])} variant="contained">
        Add Color
      </Button>
      {/* <button onClick={() => setColors([...colors, color])}>Add color</button> */}
      {colors.map((clr, index) => (
        <ColorBox key={index} color={clr} />
      ))}
    </div>
  );
}
