import React, { useEffect, useState } from 'react'

function Notes() {
  const [notes,setNotes]=useState([])
  const [title,setTitle]=useState("")
  const [description,setDescription]=useState("")
  const [updescripption,setUpdescription]=useState("")
  const [uptitle, setUptitle] = useState("");
  const [show,setShow]=useState(false)
  const [id,setId]=useState("")

  async function getAllNote(){
    let token= localStorage.getItem("token")

    try {
      let res=await fetch("https://fullstackp-2backend.onrender.com/note/",{
        method:"GET",
        headers:{
          authorization:`bearer ${token}`
        }
      })
      let res2=await res.json()
      console.log(res2)
      setNotes(res2.note)
     
    } catch (error) {
      console.log(error);
    }
  }

  async function handleadd(){
    let token=localStorage.getItem("token")

    try {
      let res=await fetch("https://fullstackp-2backend.onrender.com/note/create",{
        method:"POST",
        headers:{
          authorization:`bearer ${token}`,
          "Content-Type":"application/json"
        },
        body:JSON.stringify({title,description}),
      })
      let res2=await res.json()
      console.log(res2)
      getAllNote()
      setTitle("")
      setDescription("")

    } catch (error) {
      console.log(error);
    }
  }
  async function handleUpdate(){
    let token=localStorage.getItem("token")
    console.log(id)
    try {
      let res=await fetch(`https://fullstackp-2backend.onrender.com/note/update/${id}`,{
        method:"PATCH",
        headers:{
          authorization:`bearer ${token}`,
          "Content-type":"application/json"

        },
        body:JSON.stringify({title:uptitle,description:updescripption})
      })
      let res2=await res.json()
      console.log(res2);
      getAllNote()
      setShow(false)
      setUptitle("")
      setUpdescription("")
    } catch (error) {
      console.log(error)
    }
  }

  async function handledelete(id){
    let token=localStorage.getItem("token")
    try {
      let res=await fetch(`https://fullstackp-2backend.onrender.com/note/delete/${id}`,{
        method:"DELETE",
        headers:{authorization:`bearer ${token}` }
      })
      let res2 = await res.json();
      console.log(res2);
      getAllNote()
    } catch (error) {
      console.log(error)
    }
  }
  function handleShow(val1,val2,val3){
    setShow(true)
    setUptitle(val1)
    setDescription(val2)
    setId(val3)
  }
  useEffect(()=>{
    getAllNote()
  },[])

  return (
    <div><h2>Add Note</h2>
      <input type="text" placeholder='title' value={title} onChange={(e)=>setTitle(e.target.value)} />
      <br />
      <input type="text" placeholder='description' value={description} onChange={(e)=>setDescription(e.target.value)} />
      <button onClick={handleadd}>Add Note</button>
      {
        show && (
          <div>
            <h2>Update Note</h2>
            <input type="text" placeholder='title' value={uptitle} onChange={(e)=>setUptitle(e.target.value)} />
            <br />
            <input type="text" placeholder='description' value={updescripption} onChange={(e)=>setUpdescription(e.target.value)} />
            <button onClick={handleUpdate}>Update Note</button>
          </div>
        )
      }

      {
        notes.length>0?(
          notes.map((ele)=>{
            return (
              <div key={ele.id} style={{border:"1px solid black", padding:"14px",marginTop:"14px"}} >
              <h3>{ele.title}</h3>
              <h4>{ele.description}</h4>
              <button onClick={()=>{handledelete(ele._id)}}>Delete</button>
              <button style={{marginLeft:"20px"}} onClick={()=>{handleShow(ele.title,ele.description,ele._id)}}>Update Note</button>
              </div>
            )
          })
        ):(
          <h1>No notes</h1>
        )
      }
    </div>
  )
}

export default Notes