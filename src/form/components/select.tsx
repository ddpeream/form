import { useContext } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { FormContext } from "../../common/context/formContext";
import { options } from "../objects/object-select";

export default function Selected() {
  const { form, selectError, handleOnChangeSelect } = useContext(FormContext);


  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="selec">Selec</InputLabel>
        <Select
          error={selectError}
          size="medium"
          name="idItemSelected"
          value={form.idItemSelected}
          type={"string"}
          label="selec"
          onChange={handleOnChangeSelect}
        >
          {options.map((opt: any) => {
            return (
              <MenuItem
                key={opt.id}
                selected={opt.id === undefined}
                disabled={opt.id === undefined}
                value={opt.id}
              >
                {opt.description}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </div>
  );
}
