import { TextField } from "@mui/material";

export const InputValue = (props: any) => {
    console.log('error', props)
  return (
    <div>
      <TextField
      type="number"
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
