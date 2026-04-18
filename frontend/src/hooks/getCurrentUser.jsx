import axios from 'axios'
import React, { useEffect } from 'react'
import { serverUrl } from '../App'
import { useDispatch } from 'react-redux'
import { setUserData } from '../redux/userSlice'
import { setCurrentUserStory } from '../redux/storySlice'

function getCurrentUser() {
    const dispatch=useDispatch()
  useEffect(()=>{
const fetchUser=async ()=>{
    try {
        const result=await axios.get(`${serverUrl}/api/user/current`,{withCredentials:true})
         dispatch(setUserData(result.data))
         dispatch(setCurrentUserStory(result.data.story))
    } catch (error) {
        console.log(error)
    }
}
fetchUser()
  },[dispatch])
}

export default getCurrentUser
