import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [notes,setnotes]=React.useState([]);
    function addnote(note){
        setnotes(preval=>{
            return [...preval,note];
        });
    };
    function deletenote(id){
        setnotes(prenote=>{
            return prenote.filter((noteitem,index)=>{
                return index !== id;
            })
        })
    }


  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={addnote}
      />
      {
        notes.map((x,index)=>{
            return <Note key={index} id={index} title={x.title} content={x.content} onDelete={deletenote} />
        })
      }
      
      <Footer />
    </div>
  );
}

export default App;
