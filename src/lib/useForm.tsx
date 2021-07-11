import { useEffect, useState } from "react";
import { match } from "react-router-dom";
import { confirm_password } from './confirmPassWord';

interface Input {
  email?: string,
  firstName?: string,
  lastName?: string,
  gender?: string,
  password?: string,
  confirmPassword?: string,
  error?: boolean,
  message?: string,
}

export default function useForm(initial: Input) {
  const [inputs, setInputs] = useState(initial);
  const initialValues = Object.values(initial).join("");
  const [errors, setErrors] = useState();

  useEffect(() => {
    setInputs(initial);
    // eslint-disable-next-line
  }, [initialValues]);

  function handleChange(e: any) {
    let { value, name, type } = e.target;
    if (type === "number") {
      value = parseInt(value);
    }
    if (type === "file") {
      [value] = e.target.files;
    }  
    setInputs({
      // copy existing state
      ...inputs,
      [name]: value,
    });
  }

  function resetForm() {
    setInputs(initial);
  }

  function clearForm() {
    const blankState = Object.fromEntries(
      Object.entries(inputs).map(([key, value]) => [key, ""])
    );
    setInputs(blankState);
  }

  return {
    inputs,
    handleChange,
    resetForm,
    clearForm,
  };
}
