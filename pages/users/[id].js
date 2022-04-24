import { useRouter } from "next/router";
import styles from '../../styles/User.module.scss';
import MainContainer from "../../components/MainContainer";

export default function User({ user }) {
    const { query } = useRouter();
    return (
        <MainContainer title={user.name}>
            <div className={styles.user}>
                <h1>User with id {query.id}</h1>
                <div>User name - {user.name}</div>
            </div>
        </MainContainer>
    )
};

export async function getServerSideProps({ params }) {
    const responce = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const user = await responce.json();
    return {
        props: { user }
    }
}