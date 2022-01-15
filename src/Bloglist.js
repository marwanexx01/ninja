const Blog = ({blogObj,secProp}) => {
// const blogObj = props.blogObj;
// const secProp = props.secProp;

// console.log(props,blogObj)

    return ( 
 <div className="App" style={{textAlign:"center"}}>
     <h1><strong>{secProp}</strong></h1>
      {blogObj.map((list) => (
        <div className="blog" key={list.id}>
          <h2>{list.title}</h2>
          <q>{list.body}</q><br />
          <cite>{list.authore}</cite>
        </div>
))}
    </div>
     );
}
 
export default Blog;