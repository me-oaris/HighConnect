import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import './profile.css';

function Profile() {
  const [editField, setEditField] = useState(null);

  const profileData = {
    name: "John Doe",
    username: "john_doe",
    email: "john@example.com"
  };

  useEffect(() => {
    document.title = "Profile - HConnect";
  }, []);

  const openEditModal = (field) => setEditField(field);
  const closeModal = () => setEditField(null);

  return (
    <>
      <Navbar />
      <div className="profile-page">
        <h1 className="profile-heading">My Profile</h1>

        <div className="profile-image-wrapper">
          <img
            src="https://avatar.iran.liara.run/public/boy"
            alt="Profile"
            className="profile-image"
          />
          <div className="overlay">Choose Image</div>
        </div>

        <div className="profile-fields">
          <div className="profile-field">
            <label>Name:</label>
            <div className="profile-value">
              {profileData.name}
              <i
                className="fa-solid fa-pen-to-square edit-icon"
                onClick={() => openEditModal('name')}
              ></i>
            </div>
          </div>

          <div className="profile-field">
            <label>Username:</label>
            <div className="profile-value">
              {profileData.username}
              <i
                className="fa-solid fa-pen-to-square edit-icon"
                onClick={() => openEditModal('username')}
              ></i>
            </div>
          </div>

          <div className="profile-field">
            <label>Email:</label>
            <div className="profile-value">
              {profileData.email}
              <i
                className="fa-solid fa-pen-to-square edit-icon"
                onClick={() => openEditModal('email')}
              ></i>
            </div>
          </div>
        </div>

        <button className="auth-button" onClick={() => openEditModal('password')}>
          Change Password
        </button>

        <button className="auth-button secondary">Sign Out</button>

        {editField && (
          <div className="modal-backdrop">
            <div className="modal">
              <h2>
                {editField === 'password'
                  ? "Change Password"
                  : `Edit ${editField.charAt(0).toUpperCase() + editField.slice(1)}`}
              </h2>

              {editField === 'password' ? (
                <>
                  <input className="auth-input" type="password" placeholder="Current Password" />
                  <input className="auth-input" type="password" placeholder="New Password" />
                  <input className="auth-input" type="password" placeholder="Confirm New Password" />
                </>
              ) : (
                <input
                  className="auth-input"
                  type="text"
                  placeholder={`Enter new ${editField}`}
                />
              )}

              <div className="modal-actions">
                <button className="auth-button secondary" onClick={closeModal}>Cancel</button>
                <button className="auth-button">Save</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
