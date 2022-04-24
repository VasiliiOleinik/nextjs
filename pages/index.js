import CustomLink from "../components/CustomLink";

const Index = () => {
    return (
        <div>
            <div className="navbar">
                <CustomLink href={'/'} text="Main" />
                <CustomLink href={'/users'} text="Users" />
            </div>
            <h1>Main page</h1>
            <style jsx>
                {`
                    .navbar {
                        background: orange;
                        padding: 15px;
                    }
                `}
            </style>
        </div>
    );
};

export default Index;