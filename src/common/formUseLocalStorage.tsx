import { useState, useEffect } from "react"; 

export function FormUseLocalStorage(nameForm: string, objectForm: any) {
  const [loading, setLooading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [forms, setForm] = useState<Array<[]>>([]);

  useEffect(() => { 
      try {
        const formLocalStorage = localStorage.getItem(nameForm);
        let parseForm: Array<[]>;

          console.log('newForm 456', formLocalStorage, forms)
        if (!formLocalStorage) {
          localStorage.setItem(nameForm, JSON.stringify(objectForm));
          parseForm = objectForm;
        } else {
          parseForm = JSON.parse(formLocalStorage || "[]");
        }

        setLooading(false);
        setForm(parseForm);
      } catch (error:any) {
        setError(error);
      } 
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ]);

  const saveForm = (newForm: Array<[]>): void => {
    console.log('save 1', newForm)
    try {
      const stringifyForm = JSON.stringify(newForm);
      console.log('save 2', stringifyForm)
      localStorage.setItem(nameForm, stringifyForm);
      setForm(newForm)
    } catch (error: any) {
        setError(error)
    }
  };
  console.log('newForm ates', forms)

  return {
    forms,
    saveForm,
    loading,
    error
  };
}
