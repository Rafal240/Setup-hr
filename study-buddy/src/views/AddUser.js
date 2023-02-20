import React, { useState, useContext } from "react";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import FormField from "components/molecules/FormField/FormField";
import { AddButton } from "components/atoms/AddButton/AddButton";
import { Title } from "components/atoms/Title.js/Title";
import { UsersContext } from "../providers/UsersProvider";

const initialFormState = {
  name: "",
  attendance: "",
  average: "",
};
const AddUser = () => {
  const [formValues, setFormValues] = useState(initialFormState);

  const { handleAddUser } = useContext(UsersContext);

  const handleInputChange = (e) => {
    setFormValues({
      ...formValues, // Wrzucamy wszystkie poprzednie wartosci tego formularza
      [e.target.name]: e.target.value,
    });

    // a jezeli dochodzi do zmiany wartoci jednego pola to ta zmiana zostanie przypisana do klucza w naszym obiekcie czyt.name attendance average
  };
  const handleSubmitUser = (e) => {
    e.preventDefault();
    handleAddUser(formValues);
    setFormValues(initialFormState);
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new Student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <AddButton type="submit">Add</AddButton>
    </ViewWrapper>
  );
};
export default AddUser;
