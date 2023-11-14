import React, { useEffect, useState } from "react";

const UserListPage = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    setUsers([
      {
        id: 7,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
        avatar: "https://reqres.in/img/faces/7-image.jpg",
      },
      {
        id: 8,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
        avatar: "https://reqres.in/img/faces/8-image.jpg",
      },
      {
        id: 9,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
        avatar: "https://reqres.in/img/faces/9-image.jpg",
      },
      {
        id: 10,
        email: "byron.fields@reqres.in",
        first_name: "Byron",
        last_name: "Fields",
        avatar: "https://reqres.in/img/faces/10-image.jpg",
      },
      {
        id: 11,
        email: "george.edwards@reqres.in",
        first_name: "George",
        last_name: "Edwards",
        avatar: "https://reqres.in/img/faces/11-image.jpg",
      },
    ]);
  }, []);

  return (
    <div style={{display: 'flex', justifyContent: 'space-around'}}>
      {users.map((user) => {
        return (
          <div>
            <div>id: {user.id}</div>
            <div>email: {user.email}</div>
            <div>name: {user.first_name + " " + user.last_name}</div>
            <img src={user.avatar} alt="사진" />
          </div>
        );
      })}
    </div>
  );
};

export default UserListPage;
