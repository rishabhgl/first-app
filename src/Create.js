import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Create = () => {

    const [name,setName] = useState('');
    const [description,setDesc] = useState('');
    const [brief,setSummary] = useState('');
    const history = useHistory();

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        const hobby = { name, description, brief };
        fetch('http://localhost:8000/hobbies', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(hobby)
        }).then(() => {
            history.push('/hobbies');
        })
    }


    return (
        <div className="create-form">
            <h1>Add a new hobby:</h1>
            <form onSubmit={handleSubmit}>
                <div className = "form-input"><label htmlFor="input-1">Name of Hobby </label>
                    <input type="text" id="input-1" required value = {name} onChange = {(e) => setName(e.target.value)}/></div>
                <div className = "form-input" ><label htmlFor="input-2">Description of Hobby</label>
                    <textarea id="input-2" required value = {description} onChange = {(e) => setDesc(e.target.value)}/></div>
                <div className = "form-input"><label htmlFor="input-3">Brief Summary</label>
                    <textarea  id="input-3" required value = {brief} onChange = {(e) => setSummary(e.target.value)}/></div>
                <div className="form-submit"><input type="submit"/> </div>
            </form>
        </div>
    );
}

export default Create;