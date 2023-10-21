import { useState } from "react";

export function useLogin() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData((data) => {
      return {
        ...data,
        [name]: value,
      };
    });
  };

  return {formData, handleInputChange}
}
