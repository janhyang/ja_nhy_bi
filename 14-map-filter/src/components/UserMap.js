//#1. map & filter 실습
import React, { useState } from 'react';

const UserRegistration = () => {
  const initialUsers = [
    { name: '코디', email: 'codi@gmail.com' },
    { name: '윤소희', email: 'yoonsohee@gmail.com' }
  ];

  const [users, setUsers] = useState(initialUsers);
  const [newName, setNewName] = useState('');
  const [newEmail, setNewEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName && newEmail) {
      setUsers([...users, { name: newName, email: newEmail }]);
      setNewName('');
      setNewEmail('');
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="mb-6">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            placeholder="이름"
            className="border p-2 rounded"
          />
          <input
            type="email"
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
            placeholder="이메일"
            className="border p-2 rounded"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            등록
          </button>
        </div>
      </form>

      <div>
        {users.map((user, index) => (
          <div key={index} className="mb-2">
            {user.name}: {user.email}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserRegistration;

//#2. map & filter 실습
//#3. map & filter 실습
//#4. map & filter 실습