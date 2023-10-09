import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetail from './pages/PostDetail'
import CreatePosted from './pages/CreatePosted'
import EditedPost from './pages/EditedPost'
import Profile from './pages/Profile'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/addpost" element={<CreatePosted />} />
        <Route exact path="/posted/posts/:id" element={<PostDetail />} />
        <Route exact path="/update/:id" element={<EditedPost />} />
        <Route exact path="/profiles/:id" element={<Profile />} />
      </Routes>
    </div>
  )
}

export default App