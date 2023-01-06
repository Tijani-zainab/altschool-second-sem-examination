import "./DisplayMenu.scss";

const DisplayMenu = ({ isOpen }) => {
    return (
        <div className={isOpen ? "display-menu" : "display-menu--close"}>
        <div className="display-menu--links">
            <a href="/">Home</a>
            <a href="/projects">Projects</a>
            <a href="/404">404</a>
            <a href="/testErrorBoundary">Test Error</a>
        </div>
        </div>
    );
};

export default DisplayMenu;
