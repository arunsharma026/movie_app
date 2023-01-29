// import React from 'react';
// import axios from 'axios';

// const Form = () => {
//   // a local state to store the currently selected file.
//   const [selectedFile, setSelectedFile] = React.useState({

//     name:"",
//     email: "",
//     sendimage: "",
//   });

//   const handleSubmit = async(event) => {
//     event.preventDefault()
//     const formData = new FormData();
//     for ( var key in selectedFile ) {
//         formData.append(key, selectedFile[key]);
//     }

//     try {
//       const response = await axios({
//         method: "post",
//         url: "https://suntechapps.com/api/online-sport/upload.php",
//         data: formData,
//         headers: { "Content-Type": "multipart/form-data" },
//       });
//     } catch(error) {
//       console.log(error)
//     }
//   //  console.log(event.target.type);
//   }

//   const handleFileSelect = (event) => {
//    // setSelectedFile(event.target.files[0])

//     setSelectedFile({
//         ...selectedFile,
//         [event.target.name] : (event.target.name==="sendimage") ? event.target.files[0] : event.target.value  ,       
//     })
   
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//         <input type="text" name="name" value={selectedFile.name} onChange={event=>handleFileSelect(event)} />
//         <input type="text" name="email" value={selectedFile.email} onChange={event=>handleFileSelect(event)} />
//       <input type="file" name="sendimage" onChange={handleFileSelect}/>
//       <input type="submit" value="Upload File" />
//     </form>
//   )
// };

// export default Form;