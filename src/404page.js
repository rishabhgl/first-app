import {Link} from 'react-router-dom';

const NotFound = () => {
    return ( 
        <div className="404">
            <h1>Page not found</h1>
            <button><Link to="/hobbies">Back to application...</Link></button>
        </div>
     );
}
 
export default NotFound;