import React, { useState } from "react";

export default function Admin() {
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "John Doe", // initializing the user you will get them from backend
      email: "john@example.com",
      destination: "Paris",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane@example.com",
      destination: "London",
    },
  ]);

  const [modalData, setModalData] = useState({
    id: null,
    name: "",
    email: "",
    destination: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleAddOrUpdate = () => {
    if (modalData.id) {
      // Update user
      setUsers(
        users.map((user) =>
          user.id === modalData.id ? { ...modalData } : user
        )
      );
    } else {
      // Add user
      setUsers([...users, { ...modalData, id: Date.now() }]);
    }
    closeModal();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id)); // filter out the users which are not equall to id
  };

  const openModal = (
    user = { id: null, name: "", email: "", destination: "" } // will open a modal and send users data
  ) => {
    setModalData(user);
    setShowModal(true); // both add user and update utilizing the same function
  };

  const closeModal = () => {
    setModalData({ id: null, name: "", email: "", destination: "" });
    setShowModal(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="bg-white p-4 rounded shadow">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold">Admin Dashboard</h1>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={() => openModal()}
          >
            Add User
          </button>
        </div>

        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-4 py-2 text-left">
                Name
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Email
              </th>
              <th className="border border-gray-300 px-4 py-2 text-left">
                Destination
              </th>
              <th className="border border-gray-300 px-4 py-2 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">
                  {user.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.email}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {user.destination}
                </td>
                <td className="border border-gray-300 px-4 py-2 text-center">
                  <button
                    className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 mr-2"
                    onClick={() => openModal(user)}
                  >
                    Update
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(user.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow w-1/3">
            <h3 className="text-lg font-bold mb-4">
              {modalData.id ? "Update User" : "Add User"}
            </h3>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={modalData.name}
                onChange={(e) =>
                  setModalData({ ...modalData, name: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={modalData.email}
                onChange={
                  (e) => setModalData({ ...modalData, email: e.target.value }) // copies all the data to modelData and then just  updates the email field
                }
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1">
                Destination
              </label>
              <input
                type="text"
                value={modalData.destination}
                onChange={(e) =>
                  setModalData({ ...modalData, destination: e.target.value })
                }
                className="w-full border border-gray-300 p-2 rounded"
                placeholder="Enter destination"
              />
            </div>
            <div className="flex justify-end">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mr-2"
                onClick={handleAddOrUpdate}
              >
                Save
              </button>
              <button
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                onClick={closeModal}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
