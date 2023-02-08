import React from "react";

import UsersListItem from "components/molecules/UsersListItem/UsersListItem";
import { Wrapper, StyledList } from "./UserList.styles";

// const initialFormState = {
//   name: "",
//   attendance: "",
//   average: "",
// };

// const mockAPI = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (usersData) {
//         resolve([...usersData]);
//       } else {
//         reject({ message: "Error" });
//       }
//     }, 2000);
//   });
// };

const UsersList = ({ users, deleteUser }) => {
  // const [users, setUsers] = useState([]);
  // const [isLoading, setIsLoading] = useState([]);
  // const [formValues, setFormValues] = useState(initialFormState);

  // useEffect(() => {
  //   setIsLoading(true);
  //   mockAPI().then((data) => {
  //     console.log(data);
  //     setIsLoading(false);
  //     setUsers(data);
  //   });
  // }, []);

  // useEffect(() => {
  //   console.log("Is loading has changed");
  // }, [isLoading]);
  //w takiej formie useEffect dziala jak komponentd didMount czyli po załądowaniu jakas funckaj sie wykonuje
  // const deleteUser = (name) => {
  //   const filtredUser = users.filter((user) => user.name !== name);
  //   setUsers(filtredUser); //w funkcji urzywamy drugiego argumentu z tablicy do któego wkladamy nowy stan w tym przypadku filtred user
  // };
  // const handleInputChange = (e) => {
  //   console.log(formValues);
  //   setFormValues({
  //     ...formValues, // Wrzucamy wszystkie poprzednie wartosci tego formularza
  //     [e.target.name]: e.target.value,
  //   });

  //   // a jezeli dochodzi do zmiany wartoci jednego pola to ta zmiana zostanie przypisana do klucza w naszym obiekcie czyt.name attendance average
  // };
  // const handleAddUser = (e) => {
  //   e.preventDefault();
  //   const newUser = {
  //     name: formValues.name,
  //     attendance: formValues.attendance,
  //     average: formValues.average,
  //   };
  //   setUsers([newUser, ...users]);
  //   setFormValues(initialFormState);
  // };
  return (
    <>
      {/* <Wrapper as="form" onSubmit={handleAddUser}>
        <StyledTitle>Add new Student</StyledTitle>
        <FormField label="Name" id="name" name="name" value={formValues.name} onChange={handleInputChange} />
        <FormField label="Attendance" id="attendance" name="attendance" value={formValues.attendance} onChange={handleInputChange} />
        <FormField label="Average" id="average" name="average" value={formValues.average} onChange={handleInputChange} />
        <AddButton type="submit">Add</AddButton>
      </Wrapper> */}
      <Wrapper>
        <StyledList>
          {users.map((userData) => (
            <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
          ))}
        </StyledList>
      </Wrapper>
    </>
  );
};

export default UsersList;
