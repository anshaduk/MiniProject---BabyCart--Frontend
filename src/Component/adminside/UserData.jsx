import React, { useContext } from "react";
import { Userside } from "../../App";
import {
  MDBBadge,
  MDBBtn,
  MDBTable,
  MDBTableHead,
  MDBTableBody,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";

const UserData = () => {
  const nav = useNavigate();
  const { data, setData, user, setUser, render, setRender } =
    useContext(Userside);
  console.log(data, "userdata");

  // const handleDelete = (data) => {
  //   // Confirm deletion (optional)
  //   if (!window.confirm(`Are you sure you want to delete ${data[0].username}?`)) {
  //     return;
  //   }

  //   // Update the data state and backend (if applicable)
  //   try {
  //     const newData = data.filter((item) => item === data);
  //     setData(newData);
  //     nav('/userdata')
  //     // Send deletion request to backend (if applicable)
  //     // handle errors and update UI accordingly
  //   } catch (error) {
  //     // Handle error gracefully
  //     console.error("Error deleting data:", error);
  //     // Display error message to user
  //   }
  // };

  const DeleteUser = (Index) => {
    const UpdatedUserData = [...data];
    UpdatedUserData.splice(Index, 1);
    setData(UpdatedUserData);
  };

  return (
    <MDBTable align="middle">
      <MDBTableHead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Title</th>
          <th scope="col">Status</th>
          <th scope="col">Action</th>
          <th scope="col">Actions</th>
        </tr>
      </MDBTableHead>
      <MDBTableBody>
        {data.map((element, Index) => {
          return (
            <tr key={Index.id}>
              <td>
                <div className="d-flex align-items-center">
                  <img
                    src="https://mdbootstrap.com/img/new/avatars/8.jpg"
                    alt=""
                    style={{ width: "45px", height: "45px" }}
                    className="rounded-circle"
                  />
                  <div className="ms-3">
                    <p className="fw-bold mb-1">{element.username}</p>
                    <p className="text-muted mb-0">{element.email}</p>
                  </div>
                </div>
              </td>
              <td>
                <p className="fw-normal mb-1">Software engineer</p>
                <p className="text-muted mb-0">IT department</p>
              </td>
              <td>
                <MDBBadge color="success" pill>
                  Active
                </MDBBadge>
              </td>
              <td>
                <MDBBtn
                  color="link"
                  rounded
                  size="sm"
                  onClick={() => DeleteUser()}
                >
                  Delete
                </MDBBtn>
              </td>
              <td>
                <MDBBtn color="link" rounded size="sm">
                  Edit
                </MDBBtn>
              </td>
            </tr>
          );
        })}
      </MDBTableBody>
      <Link to={"/admin"}>
        <h1>← Back to Admin</h1>
      </Link>
    </MDBTable>
  );
};

export default UserData;
