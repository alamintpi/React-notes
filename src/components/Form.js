const Form = ({ title, setTitle, desc, setDesc, notes, setNotes }) => {

    const inputHandler = (e) => {
        if (e.target.id === 'title') {
            setTitle(e.target.value);
        }
        else {
            setDesc(e.target.value)
        }

    }
    // Single note Add 
    const notesHandler = (e) => {
        e.preventDefault();
        setNotes((note) => {
            return ([...note, {
                title: title,
                desc: desc,
                id: new Date().getTime()
            }]);
        });
        setTitle("");
        setDesc("");
    }
    return <>
        <div className="container my-3">
            <div className="row justify-content-center">
                <div className="col-md-10">
                    <form style={{ border: "2px solid #000", padding: "30px", borderRadius: "10px" }}>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">Title</label>
                            <input type="text" className="form-control" name='title' id="title" value={title} placeholder="Enter Your Title" onChange={inputHandler} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="desc" className="form-label">Description</label>
                            <textarea className="form-control" name='desc' id="desc" rows="3" placeholder='Enter your description' value={desc} onChange={inputHandler}></textarea>
                        </div>
                        <button type='submit' className='btn btn-primary' onClick={notesHandler}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    </>
}
export default Form;