import React, { useContext } from "react";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import FormField from "components/molecules/FormField/FormField";
import { AddButton } from "components/atoms/AddButton/AddButton";
import { Title } from "components/atoms/Title.js/Title";
import { UsersContext } from "../providers/UsersProvider";
import { useForm } from "hooks/useForm";

const initialFormState = {
  name: "",
  attendance: "",
  average: "",
  consent: false,
  error: "",
};

const AddUser = () => {
  const { handleAddUser } = useContext(UsersContext);
  const { formValues, handleInputChange, handleClearForm, handleThrowError, handleToggleConsent } = useForm(initialFormState);

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues.consent) {
      handleAddUser(formValues);
      handleClearForm(initialFormState);
    } else {
      handleThrowError("You need to give consent");
    }
  };
  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <Title>Add new Student</Title>
      <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
      <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
      <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
      <FormField label="Consent" id="consent" name="consent" type="checkbox" value={formValues.average} onChange={handleToggleConsent} />
      <AddButton type="submit">Add</AddButton>
      {formValues.error ? <p>{formValues.error}</p> : null}
    </ViewWrapper>
  );
};
export default AddUser;
