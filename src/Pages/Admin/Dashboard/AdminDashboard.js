import React from 'react';

const AdminDashboard = () => {
  return (
    <div className="container">
      <section className="left-panel">
        <nav>
          <ul>
            <li><a href="/add-new-user">Add New User</a></li>
            <li><a href="/items">List of Items</a></li>
            <li><a href="/create-blacklisted-items">Create Items to be Blacklisted</a></li>
            <li><a href="/blacklisted-items">Blacklisted Items</a></li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default AdminDashboard;
