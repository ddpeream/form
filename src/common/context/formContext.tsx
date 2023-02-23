import { createContext, useState, ChangeEvent } from "react";
import { FormInterfase } from "../../form/interfaces/interfase";
import { FormUseLocalStorage } from "../storage/formUseLocalStorage";
import { PostForm } from "../services/services";
import { SelectChangeEvent } from "@mui/material";

export const FormContext = createContext<any>({});

export function FormProvaider(props: any) {

  // LocalStorage hooks
  const { forms, saveForm, loading, error, setLoading, setError } = 
  FormUseLocalStorage(
    "FORM",
    []
  );

  // Form State
  const [form, setForm] = useState<FormInterfase>({
    Valor: 0,
    idItemSelected: 0,
    TMR: 0,
  });
  const [valueError, setValueError] = useState(false);
  const [selectError, setSelectError] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [messageError, setMessageError] = useState('')

  // LocalStorage Method
  const addForm = (newForm: any) => {
    const newForms = [...forms];
    newForms.push(newForm);
    saveForm(newForms);
  };


  // Form Method
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    event.preventDefault();
    
    if (!!Number(form.Valor) && form.idItemSelected !==0) {
      try {
        console.log('data send cote', form)
        const data = await PostForm(form);
      if(data?.status===200) {
        addForm(data.data.json);
        setForm({ Valor: 0, idItemSelected: 0, TMR: 0 });
        setLoading(false);
      }
      } catch (error) {
        setError(true)
      }
    }

    setValueError(Number(form.Valor) === 0 );
    setSelectError(form.idItemSelected === 0);
    setLoading(false);
  };

  const onChangeForm = (event: React.FormEvent<HTMLFormElement>): void => {
    const target = event.target as HTMLInputElement;
    setForm({
      ...form,
      [target.name]: target.value,
    });
  };

  const handleOnChaneValue = (event: ChangeEvent): void => {
    const target = event.target as HTMLInputElement;
    setValueError(!Number(target.value));
  };

  const handleOnChangeSelect = (event: SelectChangeEvent): void => {
    setForm({
      ...form,
      idItemSelected: Number(event.target.value),
    });
    setSelectError(!Number(event.target.value))
  };

  const handleOnClick = (): void => {
    setForm({ Valor: 0, idItemSelected: 0, TMR: 0 });
    setValueError(false);
    setSelectError(false);
  };


  // Table Method
  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };


  return (
    <FormContext.Provider
      value={{
        forms,
        addForm,
        loading,
        error,
        form,
        setForm,
        valueError,
        setValueError,
        selectError,
        setSelectError,
        onSubmit,
        onChangeForm,
        handleOnChaneValue,
        handleOnClick,
        handleChangePage,
        handleChangeRowsPerPage,
        rowsPerPage, 
        page,
        handleOnChangeSelect,
        setError,
        messageError,
        setMessageError
      }}
    >
      {props.children}
    </FormContext.Provider>
  );
}
