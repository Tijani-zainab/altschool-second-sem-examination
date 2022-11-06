import './NotFound.scss';

const NotFound = () => {
    return (
        <div className='not-found-page'>
            <div className='not-found-desc'>
                <h3>404</h3>
                <h3>Oppps, 404 Not Found</h3>
                <p>Sorry, the page you are looking for does not exist.</p>
            </div>
        </div>
    );
}

export default NotFound;