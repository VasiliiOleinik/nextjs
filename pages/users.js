import { useState } from "react";
import Link from "next/link";

const Users = () => {
    const [users, setUsers] = useState([
        { id: 1, name: 'John' },
        { id: 2, name: 'Bob' }
    ])
    return (
        <div>
            <h1>List of users</h1>
            <ul>
                {users.map(item =>
                    <li key={item.id}>
                        <Link href={`/users/${item.id}`}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Users;