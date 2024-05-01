import React from 'react';
import UserTable from '@/components/user_table';
import NavBar from '@/components/navbar'
import UsersComponent from '@/components/users_component'

const App: React.FC = () => {
    return (
        <div>
            <NavBar />
            <div>
              <UserTable />
              <UsersComponent />
            </div>
        </div>
    );
};

export default App