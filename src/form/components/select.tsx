import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const options = [
  { descrption: "seleccione" },
  { id: 1, descrption: "selected 1" },
  { id: 2, descrption: "selected 2" },
  { id: 3, descrption: "selected 3" },
];

export default function Selected(props: any) {
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="selec">Selec</InputLabel>
        <Select
        size="medium"
          name="idItemSelected"
          value={props.value}
          label="selec"
          onChange={props.onChange}
        >
          {options.map((opt: any) => {
            console.log("selected", props, opt);
            return (
              <MenuItem
                key={opt.id}
                selected={opt.id === undefined}
                disabled={opt.id === undefined}
                value={opt.id}
              >
                {opt.descrption}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
