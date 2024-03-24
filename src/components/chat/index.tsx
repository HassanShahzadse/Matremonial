"use client"

import { Fragment, useState, useEffect } from 'react'
import Chat from '../../utils/chatUtils/Chat'
import Sidebar from '../../utils/chatUtils/SideBarLeft'
import UserProfileSidebar from '../../utils/chatUtils/UserProfileSideBar'
// import { useDispatch, useSelector } from 'react-redux'
// import { getUserProfile, getChatContacts } from './store'
// import '@styles/base/pages/app-chat.css'  

const IndexChat = () => {
//   const dispatch = useDispatch()
//   const store = useSelector((state: any) => state.chat)
  const [user, setUser] = useState({})
  const [sidebar, setSidebar] = useState(false)
  const [userSidebarRight, setUserSidebarRight] = useState(false)
  const [userSidebarLeft, setUserSidebarLeft] = useState(false)

  const handleSidebar = () => setSidebar(!sidebar)
  const handleUserSidebarLeft = () => setUserSidebarLeft(!userSidebarLeft)
  const handleUserSidebarRight = () => setUserSidebarRight(!userSidebarRight)
  const handleOverlayClick = () => {
    setSidebar(false)
    setUserSidebarRight(false)
    setUserSidebarLeft(false)
  }

  const handleUser = (obj: any) => setUser(obj)

//   useEffect(() => {
//     dispatch(getChatContacts())
//     dispatch(getUserProfile())
//   }, [dispatch])

  return (
    <Fragment>
      <Sidebar
        // store={store}
        sidebar={sidebar}
        handleSidebar={handleSidebar}
        userSidebarLeft={userSidebarLeft}
        handleUserSidebarLeft={handleUserSidebarLeft}
      />
      {/* <div className='content-right'> */}
      <div className=' flex-1 flex-col  focus:outline-none'>
        <div className='content-wrapper'>
          <div className='content-body'>
            <div
              className={`body-content-overlay ${
                userSidebarRight || sidebar || userSidebarLeft ? 'show' : ''
              }`}
              onClick={handleOverlayClick}
            ></div>
            <Chat
            //   store={store}
              handleUser={handleUser}
              handleSidebar={handleSidebar}
              userSidebarLeft={userSidebarLeft}
              handleUserSidebarRight={handleUserSidebarRight}
            />
            <UserProfileSidebar
              user={user}
              userSidebarRight={userSidebarRight}
              handleUserSidebarRight={handleUserSidebarRight}
            />
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default IndexChat
