import React, { useState } from "react";
import "./App.css";

function App() {
    const [userInfo, setUserInfo] = useState({
        name: "Shivam Kumar",
        email: "krshivam998@gmail.com",
    });

    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo({
            ...userInfo,
            [name]: value,
        });
    };

    return (
        <div className="container">
            <div className="profile-card">
                <h1>User Profile</h1>
                <div className="profile-info">
                    <div className="field">
                        <label>Name:</label>
                        {isEditing ? (
                            <input
                                type="text"
                                name="name"
                                value={userInfo.name}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{userInfo.name}</span>
                        )}
                    </div>
                    <div className="field">
                        <label>Email:</label>
                        {isEditing ? (
                            <input
                                type="email"
                                name="email"
                                value={userInfo.email}
                                onChange={handleInputChange}
                            />
                        ) : (
                            <span>{userInfo.email}</span>
                        )}
                    </div>
                </div>
                <div className="buttons">
                    {isEditing ? (
                        <button onClick={handleSaveClick}>Save</button>
                    ) : (
                        <button onClick={handleEditClick}>Edit</button>
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
