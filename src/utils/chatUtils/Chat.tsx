"use client"

import ReactDOM from 'react-dom';
import { useState, useEffect, useRef } from 'react';
import Avatar from '../avatar/avatar';
// import { sendMsg } from './store';
// import { useDispatch } from 'react-redux';
import classnames from 'classnames';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { MessageSquare, Menu, PhoneCall, Video, Search, MoreVertical, Mic, Image, Send } from 'react-feather';
import {
  Form,
  Label,
  Input,
  Button,
  InputGroup,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  InputGroupText,
  UncontrolledDropdown,
} from 'reactstrap';

const ChatLog = (props: any) => {
  const { handleUser, handleUserSidebarRight, handleSidebar, store, userSidebarLeft } = props;
  const { userProfile, selectedUser } = store;
  const chatArea:any = useRef(null);
//   const dispatch = useDispatch();
  const [msg, setMsg] = useState('');
  
  const scrollToBottom = () => {
    if (chatArea.current) {
      chatArea.current.scrollTop = chatArea.current.scrollHeight;
    }
  };

  useEffect(() => {
    const selectedUserLen = Object.keys(selectedUser).length;
    if (selectedUserLen) {
      scrollToBottom();
    }
  }, [selectedUser]);

  const formattedChatData = () => {
    let chatLog = [];
    if (selectedUser.chat) {
      chatLog = selectedUser.chat.chat;
    }

    const formattedChatLog: any[] = [];
    let chatMessageSenderId = chatLog[0] ? chatLog[0].senderId : undefined;
    let msgGroup = {
      senderId: chatMessageSenderId,
      messages: [],
    };
    // chatLog.forEach((msg: any, index: any) => {
    //   if (chatMessageSenderId === msg.senderId) {
    //     msgGroup.messages.push({
    //       msg: msg.message,
    //       time: msg.time,
    //     });
    //   } else {
    //     chatMessageSenderId = msg.senderId;
    //     formattedChatLog.push(msgGroup);
    //     msgGroup = {
    //       senderId: msg.senderId,
    //       messages: [
    //         {
    //           msg: msg.message,
    //           time: msg.time,
    //         },
    //       ],
    //     };
    //   }
    //   if (index === chatLog.length - 1) formattedChatLog.push(msgGroup);
    // });
    return formattedChatLog;
  };

  const renderChats = () => {
    return formattedChatData().map((item, index) => {
      return (
        <div
          key={index}
          className={classnames('chat', {
            'chat-left': item.senderId !== 11,
          })}
        >
          <div className='chat-avatar'>
            <Avatar
              imgWidth={36}
              imgHeight={36}
              className='box-shadow-1 cursor-pointer'
              img={item.senderId === 11 ? userProfile.avatar : selectedUser.contact.avatar}
            />
          </div>

          <div className='chat-body'>
            {item.messages.map((chat: any) => (
              <div key={chat.msg} className='chat-content'>
                <p>{chat.msg}</p>
              </div>
            ))}
          </div>
        </div>
      );
    });
  };

  const handleAvatarClick = (obj: any) => {
    handleUserSidebarRight();
    handleUser(obj);
  };

  const handleStartConversation = () => {
    if (!Object.keys(selectedUser).length && !userSidebarLeft && window.innerWidth < 992) {
      handleSidebar();
    }
  };

  const handleSendMsg = (e: any) => {
    e.preventDefault();
    // if (msg.trim().length) {
    //   dispatch(sendMsg({ ...selectedUser, message: msg }));
    //   setMsg('');
    // }
  };

  const ChatWrapper = Object.keys(selectedUser).length && selectedUser.chat ? PerfectScrollbar : 'div';

  return (
    <div className='chat-app-window'>
      <div className={classnames('start-chat-area', { 'd-none': Object.keys(selectedUser).length })}>
        <div className='start-chat-icon mb-1'>
          <MessageSquare />
        </div>
        <h4 className='sidebar-toggle start-chat-text' onClick={handleStartConversation}>
          Start Conversation
        </h4>
      </div>
      {Object.keys(selectedUser).length ? (
        <div className={classnames('active-chat h-full', { 'd-none': selectedUser === null })}>
          <div className='chat-navbar'>
            <header className='chat-header flex justify-between h-chat-head-footer-height bg-white px-4 border-b border-border-color'>
              <div className='d-flex align-items-center'>
                <div className='sidebar-toggle d-block d-lg-none me-1' onClick={handleSidebar}>
                  <Menu size={21} />
                </div>
                <Avatar
                  imgHeight='36'
                  imgWidth='36'
                  img={selectedUser.contact.avatar}
                  status={selectedUser.contact.status}
                  className='avatar-border user-profile-toggle m-0 me-1'
                  onClick={() => handleAvatarClick(selectedUser.contact)}
                />
                <h6 className='mb-0'>{selectedUser.contact.fullName}</h6>
              </div>
              <div className='d-flex align-items-center'>
                <PhoneCall size={18} className='cursor-pointer d-sm-block d-none me-1' />
                <Video size={18} className='cursor-pointer d-sm-block d-none me-1' />
                <Search size={18} className='cursor-pointer d-sm-block d-none' />
                <UncontrolledDropdown className='more-options-dropdown'>
                  <DropdownToggle className='btn-icon' color='transparent' size='sm'>
                    <MoreVertical size='18' />
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem href='/' onClick={(e: any) => e.preventDefault()}>
                      View Contact
                    </DropdownItem>
                    <DropdownItem href='/' onClick={(e: any) => e.preventDefault()}>
                      Mute Notifications
                    </DropdownItem>
                    <DropdownItem href='/' onClick={(e: any) => e.preventDefault()}>
                      Block Contact
                    </DropdownItem>
                    <DropdownItem href='/' onClick={(e: any) => e.preventDefault()}>
                      Clear Chat
                    </DropdownItem>
                    <DropdownItem href='/' onClick={(e: any) => e.preventDefault()}>
                      Report
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </header>
          </div>

          <ChatWrapper ref={chatArea} className='user-chats bg-chat-image-back-color p-4 relative' options={{ wheelPropagation: false }}>
            {selectedUser.chat ? <div className='chats'>{renderChats()}</div> : null}
          </ChatWrapper>

          <Form className='chat-app-form h-chat-head-footer-height px-4 bg-white flex items-center border-t border-border-color' onSubmit={(e: any) => handleSendMsg(e)}>
            <InputGroup className='input-group-merge me-1 form-send-message'>
              <InputGroupText>
                <Mic className='cursor-pointer' size={14} />
              </InputGroupText>
              <Input
                value={msg}
                onChange={(e: any) => setMsg(e.target.value)}
                placeholder='Type your message or use speech to text'
              />
              <InputGroupText>
                <Label className='attachment-icon mb-0' for='attach-doc'>
                  <Image className='cursor-pointer text-secondary' size={14} />
                  <input type='file' id='attach-doc' hidden />
                </Label>
              </InputGroupText>
            </InputGroup>
            <Button className='send' color='primary'>
              <Send size={14} className='d-lg-none' />
              <span className='d-none d-lg-block'>Send</span>
            </Button>
          </Form>
        </div>
      ) : null}
    </div>
  );
};

export default ChatLog;
