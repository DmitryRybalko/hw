type AddressType = {
  street: string;
  city: string;
};

type UserType = {
  id: number;
  name: string;
  age: number;
  address: AddressType;
};

type UserListPropsType = {
  users: Array<UserType>;
};

export const UserList = (props: UserListPropsType) => {
  return (
    <div id={"hw01-users"}>
      <h2>User List:</h2>
      <ul>
        {props.users.map((user) => (
          <li key={user.id} id={`hw01-user-${user.id}`}>
            <strong>{user.name}</strong>
            (Age: {user.age})
            <strong>
              Addres: {user.address.street}, {user.address.city}
            </strong>
          </li>
        ))}
      </ul>
      {/*<ul>*/}
      {/*  {props.users.map((user) => 
      {/*    <li key={ЭЛЕМЕНТ МАССИВА.id} id={`hw01-user-${ЭЛЕМЕНТ МАССИВА.id}`}>*/}
      {/*      <strong>{ЭЛЕМЕНТ МАССИВА.name}</strong> 
                (Age: {ЭЛЕМЕНТ МАССИВА.age})<strong> Address:</strong>*/}
      {/*      {ЭЛЕМЕНТ МАССИВА.address.street}, {ЭЛЕМЕНТ МАССИВА.address.city}*/}
      {/*    </li>*/}
      {/*  ))}*/}
      {/*</ul>*/}
    </div>
  );
};
