import React from "react";
import { ViewWrapper } from "components/molecules/ViewWrapper/ViewWrapper";
import FormField from "components/molecules/FormField/FormField";
import { AddButton } from "components/atoms/AddButton/AddButton";
import { Title } from "components/atoms/Title.js/Title";

const AddUser = ({ handleAddUser, formValues, handleInputChange }) => {
  return (
    <>
      <ViewWrapper as="form" onSubmit={handleAddUser}>
        <Title>Add new Student</Title>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <AddButton type="submit">Add</AddButton>
      </ViewWrapper>
    </>
  );
};
export default AddUser;
