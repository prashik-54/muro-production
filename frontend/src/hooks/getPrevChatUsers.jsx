import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch, useSelector } from 'react-redux'
import { setPrevChatUsers } from '../redux/messageSlice'

function getPrevChatUsers() {
    const dispatch=useDispatch()
    const {userData}=useSelector(state=>state.user)
  useEffect(()=>{
    if(!userData) return
const fetchUser=async ()=>{
    try {
        const result=await axios.get(`${serverUrl}/api/message/prevChats`,{withCredentials:true})
         dispatch(setPrevChatUsers(result.data))
    } catch (error) {
        console.log(error)
    }
}
fetchUser()
  },[dispatch,userData])
}

export default getPrevChatUsers
