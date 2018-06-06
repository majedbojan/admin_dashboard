// import React,{Component} from 'react'
// import axios from "axios";
//
// class ShowCategory extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       category: []
//     }
//     // debugger
//   };
//   componentDidMount() {
//     const {match} = this.props
//     // debugger
//     // axios({
//     //
//     // }).them((res) => {
//     //   this.setState({
//     //     categories : res
//     //   })
//     // })
//     axios.get(`http://localhost:3001/v1/categories/${match.params.id}`)
//     .then(res => {
//       const categories = res.data.data.data.map(obj =>
//         ({
//           id: obj.id,
//           title_ar: obj.title_ar,
//           title_en: obj.title_en,
//           status: obj.status,
//           created_at: obj.created_at,
//           updated_at: obj.updated_at
//         }));
//         this.setState({ categories });
//       });
//     };
//   render() {
//     return(
//       <div>
//         {
//           this.state.category
//         }
//       </div>
//     );
//   };
// };
//
// export default ShowCategory;
