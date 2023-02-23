import { useState, useEffect } from "react";

export function FormUseLocalStorage(nameForm: string, objectForm: Array<[]>) {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [forms, setForm] = useState<Array<[]>>([]);

  useEffect(() => {
    try {
      const formLocalStorage = localStorage.getItem(nameForm);
      let localForm: Array<[]>;

      if (!formLocalStorage) {
        localStorage.setItem(nameForm, JSON.stringify(objectForm));
        localForm = objectForm;
      } else {
        localForm = JSON.parse(formLocalStorage || "[]");
      }

      setLoading(false);
      setForm(localForm);
    } catch (error: any) {
      setError(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const saveForm = (newForm: Array<[]>): void => {
    try {
      const stringifyForm = JSON.stringify(newForm);
      localStorage.setItem(nameForm, stringifyForm);
      setForm(newForm);
    } catch (error: any) {
      setError(error);
    }
  };

  return {
    forms,
    saveForm,
    loading,
    setLoading,
    error,
    setError,
  };
}
