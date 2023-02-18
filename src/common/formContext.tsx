import { createContext, useState } from "react";
import { FormUseLocalStorage } from "./formUseLocalStorage";

export const FormContext = createContext<any>({});

export function FormProvaider(props: any) {
  const { forms, saveForm, loading, error } = FormUseLocalStorage("FORM", []); 

  const addForm = (newForm: any) => {
    console.log('newForm 1', newForm, forms)
    const newForms = [...forms];
    newForms.push(newForm);
    console.log('newForm 2', newForms)
    saveForm(newForms);
  };

  return (
    <FormContext.Provider
      value={{ forms, addForm, loading, error }}
    >
        {props.children}
    </FormContext.Provider>
  );
}
