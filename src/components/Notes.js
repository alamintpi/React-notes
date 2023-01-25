const Notes = ({ note, notes, setNotes, setEditId }) => {

    const { title, desc, id } = note;

    // Notes Edit Handler 
    const editHandler = (id) => {
        setEditId(id);
        notes.filter((item) => {
            if (id === item.id) {
                document.getElementById("editTitle").value = item.title;
                document.getElementById("editDesc").value = item.desc;

            }
        });
    }

    // Notes Remove Handler 
    const removeHandler = (id) => {
        const newNotes = notes.filter((item) => {
            if (id !== item.id) {
                return item;
            }
        });
        setNotes(newNotes);
    }

    return <>
        <div className="card mb-3">
            <div className="card-body" style={{ textTransform: "capitalize" }}>
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{desc}</p>
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editNotes" onClick={() => { editHandler(id) }}>edit</button>
                <button className='btn btn-danger mx-2' onClick={() => { removeHandler(id) }}>Remove</button>
            </div>
        </div>
    </>
}
export default Notes;