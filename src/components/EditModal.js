const EditModal = ({ editId, notes, setNotes }) => {

    const upDateHandler = () => {
        const updateNotes = notes.map((item) => {
            if (editId === item.id) {
                return (
                    {
                        ...notes, title: document.getElementById("editTitle").value,
                        desc: document.getElementById("editDesc").value
                    }
                )
            }
            else {
                return item;
            }
        });
        setNotes(updateNotes);
    }

    return <>
        <div className="modal fade" id="editNotes" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Edit Notes</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="editTitle" className="form-label">Title</label>
                                <input type="text" className="form-control" name='editTitle' id="editTitle" placeholder="Enter Your Title" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="editDesc" className="form-label">Description</label>
                                <textarea className="form-control" name='editDesc' id="editDesc" rows="3" placeholder='Enter your description'></textarea>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={upDateHandler}>Edit Notes</button>
                    </div>
                </div>
            </div>
        </div>
    </>
}
export default EditModal;