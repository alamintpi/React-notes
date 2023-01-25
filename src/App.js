import { useState } from 'react'
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Notes from './components/Notes';
import EditModal from './components/EditModal';
function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [notes, setNotes] = useState(getNotes());
  const [editId, setEditId] = useState("");
  localStorage.setItem("notes", JSON.stringify(notes));
  return <>
    <EditModal editId={editId} notes={notes} setNotes={setNotes} />
    <Navbar />
    <Form title={title} setTitle={setTitle} desc={desc} setDesc={setDesc} notes={notes} setNotes={setNotes} />
    <div className="container my-3">
      <div className="row justify-content-center">
        <div className="col-md-10">
          {notes.length === 0 ? <>
            <div className="card mb-3">
              <div className="card-body">
                <h5 className="card-title">Message</h5>
                <p className="card-text">Notes Reading not Available</p>
              </div>
            </div>
          </>
            : notes.map((note) => {
              return <Notes key={note.id} note={note} notes={notes} setNotes={setNotes} setEditId={setEditId} />
            })}
        </div>
      </div>
    </div>
  </>

  function getNotes() {
    const note = JSON.parse(localStorage.getItem("notes"));
    if (note) {
      return note;
    }
    else {
      return [];
    }

  }
}

export default App;
