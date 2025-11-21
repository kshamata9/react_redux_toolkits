"use client";
import React from "react";
import {
  deleteUsers,
  fetchUsers,
  postUsers,
  putUsers,
} from "../features/userSlice";
import { useAppDispatch, useAppSelector } from "../store/store";

export default function Users() {
  const dispatch = useAppDispatch();
  const { users, loading, error } = useAppSelector((state) => state.users.users);
  React.useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  if (loading) return <p>Loading.......</p>;
  if (error) return <p>Error: {error}</p>;
  console.log("users=>", users);
  return (
    <>
      <button
        onClick={() =>
          dispatch(
            postUsers({
              name: "Kshamata Gotekar",
              username: "Kshamata",
              email: "kg@t.c",
              address: {
                street: "immamwada",
                suite: "913. 556",
                city: "Nagpur",
                zipcode: "77090",
                geo: {
                  lat: "-37.3159",
                  lng: "81.1496",
                },
              },
              phone: "1-345-736-3451 2342",
              website: "res.org",
              company: {
                name: "valethi",
                catchPhrase: "valethi-layered valethi-server valethi-net",
                bs: "valethi real-time e-valethi",
              },
            })
          )
        }
      >
        Add User
      </button>
      <table width={"100%"} border={1}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Address</td>
            <td>Company</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user.address.street} {user.address.city}{" "}
                  {user.address.zipcode}
                </td>
                <td>{user.company.name}</td>
                <td>
                  <button
                    onClick={() =>
                      dispatch(putUsers({ ...user, name: "Mayur Patil" }))
                    }
                  >
                    Update
                  </button>
                  <button onClick={() => dispatch(deleteUsers(user.id))}>
                    Remove
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
}
