import Head from "next/head";
import CustomLink from "../components/CustomLink";
const MainContainer = ({ children, title }) => {
    return (
        <>
            <Head>
                <meta keywords="Hi there" />
                <title>{title}</title>
            </Head>
            <div>
                <div className="navbar">
                    <CustomLink href={'/'} text="Main" />
                    <CustomLink href={'/users'} text="Users" />
                </div>
                <div>{children}</div>
                <style jsx>
                    {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
                </style>
            </div>
        </>
    );
};

export default MainContainer;