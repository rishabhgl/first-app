import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from "react-router-dom";

const Details = () => {

    const { id } = useParams();
    const { data: hobby, error, loading } = useFetch('http://localhost:8000/hobbies/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8000/hobbies/' + id, {
            method: 'DELETE'
        }).then(() => history.push('/hobbies'))
    }



    return (
        <>
            <div className="details-heading">
                <h1>
                    Hobby Details Page
                </h1>
                <div className="temp">
                    {loading && <div>Loading</div>}
                    {error && <div> Cannot fetch data from resource!! </div>}
                    {hobby && <div><h3> {hobby.name}</h3><div className="details"> {hobby.description} </div></div>}
                </div>
                <button classname="click_event" onClick={handleDelete}>Delete</button>
            </div>
        </>
    );
}

export default Details;