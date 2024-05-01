'use client'
import React, { useEffect, useState } from 'react';
import { User, UserApiResponse } from '@/app/types/user.types';

function UsersComponent() {
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await fetch('/api/fetch_user');
                const data: UserApiResponse = await response.json();
                setUsers(data.users);
                setLoading(false);
            } catch (error) {
                console.error("Failed to fetch users:", error);
                setLoading(false);
            }
        }

        fetchUsers();
    }, []);

    if (isLoading) return <span className="loading loading-spinner loading-lg"></span>;
    if (!users.length) return <p>No users found.</p>;

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user: User) => (
                    <li key={user.id}>
                        {user.name} - {user.email} - {user.github_username} - {user.slack_username}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default UsersComponent;
