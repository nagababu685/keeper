import React,{useState} from "react";

function CreateArea(props) {
    const [note,setnote]=useState({
        title:"",
        content:""
    });
    
    function handlechange(event){
        const {name,value}=event.target;
        setnote(prevalue=>{
            return {
                ...prevalue,
                [name]:value
            };
        });
    };
    function submitnote(event){
        props.onAdd(note);
        event.preventDefault();
        setnote({
            title:"",
            content:""
        });
    };
    
  return (
    <div>
      <form>
        <input onChange={handlechange} name="title" placeholder="Title" value={note.title} />
        <textarea onChange={handlechange} name="content" placeholder="Take a note..." rows="3" value={note.content} />
        <button onClick={submitnote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
