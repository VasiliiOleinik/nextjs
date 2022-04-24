import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
    return (
        <MainContainer>
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
        </MainContainer>
    );
};

export default Users;

export async function getStaticProps(context) {
    const responce = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await responce.json();
    return {
        props: { users }
    }
}