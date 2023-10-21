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

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`email: ${formData.username} password: ${formData.password}`)
  }

  return {formData, handleInputChange, handleSubmit}
}
