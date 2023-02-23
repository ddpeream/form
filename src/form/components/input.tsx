import { ChangeEvent } from "react";
import { TextField } from "@mui/material";

export const Input = (props: { error?: boolean; value: string; field: string; onChange?: ((event: ChangeEvent) => void) }) => {
  
  return (
    <div>
      <TextField
      type="number"
      value={props.value}
        error={props.error}
        name={props.field}
        color="secondary"
        onChange={props.onChange}
        label={props.field}
        InputLabelProps={{
          shrink: true,
        }}
      />
    </div>
  );
};
