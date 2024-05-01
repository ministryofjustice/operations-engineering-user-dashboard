import React from 'react';

const UserTable: React.FC = () => {
    return (
        <div className="overflow-x-auto" style={{ margin: '20px auto', maxWidth: '960px' }}>
            <table className="table">
                <thead>
                    <tr>
                        <th>
                            <label>
                                <input type="checkbox" className="checkbox" />
                            </label>
                        </th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>GitHub Username</th>
                        <th>Slack Username</th>
                        <th>Docker</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => (
                        <tr key={index}>
                            <th>
                                <label>
                                    <input type="checkbox" className="checkbox" />
                                </label>
                            </th>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle w-12 h-12">
                                            <img src={row.image} alt="Avatar" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{row.name}</div>
                                        <div className="text-sm opacity-50">{row.location}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {row.company}
                                <br/>
                                <span className="badge badge-ghost badge-sm">{row.jobTitle}</span>
                            </td>
                            <td>{row.favoriteColor}</td>
                            <th>
                                <button className="btn btn-ghost btn-xs">details</button>
                            </th>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

// Sample data for the table
const rows = [
    {
        image: "/tailwind-css-component-profile-2@56w.png",
        name: "Hart Hagerty",
        location: "United States",
        company: "Zemlak, Daniel and Leannon",
        jobTitle: "Desktop Support Technician",
        favoriteColor: "Purple"
    },
    {
        image: "/tailwind-css-component-profile-3@56w.png",
        name: "Brice Swyre",
        location: "China",
        company: "Carroll Group",
        jobTitle: "Tax Accountant",
        favoriteColor: "Red"
    },
    {
        image: "/tailwind-css-component-profile-4@56w.png",
        name: "Marjy Ferencz",
        location: "Russia",
        company: "Rowe-Schoen",
        jobTitle: "Office Assistant I",
        favoriteColor: "Crimson"
    },
    {
        image: "/tailwind-css-component-profile-5@56w.png",
        name: "Yancy Tear",
        location: "Brazil",
        company: "Wyman-Ledner",
        jobTitle: "Community Outreach Specialist",
        favoriteColor: "Indigo"
    }
];

export default UserTable;
