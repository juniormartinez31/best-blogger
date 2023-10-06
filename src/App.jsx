import { Route, Routes } from 'react-router-dom'
import Home from "./pages/Home"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PostDetail from './pages/PostDetail'

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/posted/posts/:id" element={<PostDetail />} />
      </Routes>
    </div>
  )
}

export default App