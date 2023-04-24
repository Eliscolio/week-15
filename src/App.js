import logo from './logo.svg';
import './App.css';
import GetPost from './component/GetPost';
import CreatePost from './component/CreatePost';
import UpdatePost from './component/UpdatePost';
import DeletePost from './component/DeletePost';

function App() {
  return (
    <div className="App">
    <h1>Post Api</h1>
    <GetPost />
    <CreatePost />
    <UpdatePost />
    <DeletePost />
    </div>
  );
}

export default App;
