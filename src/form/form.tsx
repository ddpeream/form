import { SelectChangeEvent } from "@mui/material";
import { useState, useContext } from "react";
import { FormContext } from "../common/formContext";
import { fetchData } from "../common/services";
import { InputValue } from "./components/input";
import Selected from "./components/select";
import { FormContainer, Form } from "./form.styled";
import { FormInterfase } from "./interfase";
import Button from "@mui/material/Button";

export function FormComponent() {
  const { addForm } = useContext(FormContext);
  const [form, setForm] = useState<FormInterfase>({ Valor: '', idItemSelected: 0, TMR: '' });
  const [valueError, setValueError] = useState(false);
  const [tmrError, setTmrError] = useState(false);
  const [send, setSend] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    const data = await fetchData(form);
    console.log("form valid", form, data);
    addForm(data)
    setForm({ Valor: '', idItemSelected: 0, TMR: '' });
  };

  const onChangeForm = (event: any) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnChaneValue = (event: any) => {
    setValueError(!event.target.value);
  };

  const handleOnChaneSelect = (event: SelectChangeEvent) => {
    console.log("material", event.target);
    let valid = event.target.value.length !== 0;
    setForm({
      ...form,
      idItemSelected: Number(event.target.value),
    });
  };

  const handleOnChaneTmr = (event: any) => {
    setTmrError(!event.target.value);
  };

  const handleOnClick = (event: any) => {
    setForm({ Valor: '', idItemSelected: 0, TMR: '' });
  };
  return (
    <FormContainer>
      <Form onSubmit={onSubmit} onChange={onChangeForm}>
        <InputValue
          error={valueError}
          field="Valor"
          onChange={handleOnChaneValue}
          value={form.Valor}
        />
        <Selected onChange={handleOnChaneSelect} value={form.idItemSelected} />
        <InputValue
          error={tmrError}
          onChange={handleOnChaneTmr}
          field="TMR"
          value={form.TMR}
        />
        <div>
          <Button
            variant="outlined"
            href="#contained-buttons"
            color="info"
            type="button"
            onClick={handleOnClick}
          >
            limpiar
          </Button>
          <Button variant="contained" type="submit">
            Enviar
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
}
