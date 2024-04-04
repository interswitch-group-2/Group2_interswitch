import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container">
      <section className="left-panel">
        <nav>
          <ul>
            <li><a href="/add-new-user">Add New User</a></li>
            <li><a href="/blacklisted-items">Blacklisted Items</a></li>
            <li><a href="/manage-users">Manage Users</a></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default AdminDashboard;
