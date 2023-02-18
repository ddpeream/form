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
  const [form, setForm] = useState<FormInterfase>({ idItemSelected: 0 });
  const [validForm, setvalidForm] = useState({});
  const [valueError, setValueError] = useState(false);
  const [tmrError, setTmrError] = useState(false);
  const [send, setSend] = useState(false);

  const onSubmit = async (event: any) => {
    event.preventDefault();
    console.log("form valid", validForm, form);
    fetchData(form);
    // addForm(data)
    setForm({ idItemSelected: 0 });
    setvalidForm({});
  };

  const onChangeForm = (event: any) => {
    console.log("form cga 2", event.target.value);
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleOnChaneValue = (event: any) => {
    setValueError(!event.target.value);
    // console.log('form cga', new Intl.NumberFormat('en-US').format(event.target.value), event)
  };

  const handleOnChaneSelect = (event: SelectChangeEvent) => {
    console.log("material", event.target);
    let valid = event.target.value.length !== 0;
    setvalidForm({ ...validForm, idItemSelected: valid });
    setForm({
      ...form,
      idItemSelected: Number(event.target.value),
    });
  };

  const handleOnChaneTmr = (event: any) => {
    setTmrError(!event.target.value);
  };

  const handleOnClick = (event: any) => {
    setForm({ idItemSelected: 0 });
  };
  return (
    <FormContainer>
      <Form onSubmit={onSubmit} onChange={onChangeForm}>
        <InputValue
          error={valueError}
          field="Valor"
          onChange={handleOnChaneValue}
          value={form.value}
        />
        <Selected onChange={handleOnChaneSelect} value={form.idItemSelected} />
        <InputValue
          error={tmrError}
          onChange={handleOnChaneTmr}
          field="TMR"
          value={form.trm}
        />
        <div>
          {/* <Button variant="contained" component="label"> */}
          {/* enviar 
      </Button> */}
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
export { Form };
