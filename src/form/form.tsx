import { useContext } from "react";
import { FormContext } from "../common/context/formContext";
import { Input } from "./components/input";
import Selected from "./components/select";
import { FormContainer, Form, BottomContainer } from "./form.styled";
import Button from "@mui/material/Button";

export function FormComponent() {
  const {
    form,
    valueError,
    onSubmit,
    onChangeForm,
    handleOnChaneValue,
    handleOnClick,
  } = useContext(FormContext);

  return (
    <FormContainer>
      <Form onSubmit={onSubmit} onChange={onChangeForm}>
        <div>
          <Input
            error={valueError}
            field="Valor"
            onChange={handleOnChaneValue}
            value={form.Valor}
          />
        </div>
        <div>
          <Selected />
        </div>
        <div>
          <Input field="TMR" value={form.TMR} />
        </div>
        <BottomContainer>
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
        </BottomContainer>
      </Form>
    </FormContainer>
  );
}
