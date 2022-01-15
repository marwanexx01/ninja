// ffc ====> cmnd
import Bloglist from './Bloglist';
import Nav from './Nav';
import Blogs from './Blogs';
function App() {
  const blogObj = [{title: 'My new web' , body: 'lorem ipsum ....', authore : 'mario', id: 1},{title: 'My new web 2' , body: 'lorem ipsum 2 ....', authore : 'mario', id: 2}];
  return (
<div className="container">
    <Nav />
    <Blogs blogObj={blogObj} title="HOME" />
    {/* <Bloglist blogObj={blogObj} secProp="Dynamic Title" /> */}
</div>
  );
}

export default App;
