// import React from "react";
// import { addArticle } from "../actions/index";

// export const AddArticleForm = () => {
//   const [newArticle, setNewArticle] = useState({
//     title: "",
//     content: "",
//     category: "",
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     props.addArticle(newArticle);
//   };
//   const handleChange = (e) => {
//     setNewArticle({
//       ...newArticle,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <div className="form">
//       <form onSubmit>
//         <input
//           type="text"
//           placeholder="Title"
//           name="title"
//           value={props.title}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Content"
//           name="content"
//           value={props.content}
//           onChange={handleChange}
//         />
//         <input
//           type="text"
//           placeholder="Category"
//           name="category"
//           value={props.category}
//           onChange={handleChange}
//         />

//         <input type="submit" />
//       </form>
//     </div>
//   );
// };

// export default connect(mapStateToProps, { addArticle })(AddArticleForm);
