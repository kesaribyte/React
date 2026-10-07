import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom'

import './index.css'

import Layout from './Layout.jsx'
import Home from './compnets/home/home.jsx'
import About from './compnets/about/about.jsx'
import Contact from './compnets/contact/contact.jsx'
import User from './compnets/user/user.jsx'
import Github, { githubInfoLoader } from './compnets/Github/Github.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>

      {/* Home */}
      <Route path="" element={<Home />} />

      {/* About */}
      <Route path="about" element={<About />} />

      {/* Contact */}
      <Route path="contact" element={<Contact />} />

      {/* User */}
      <Route path="user/:userid" element={<User />} />

      {/* GitHub */}
      <Route
        path="github"
        loader={githubInfoLoader}
        element={<Github />}
      />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)