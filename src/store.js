import { configureStore } from "@reduxjs/toolkit"
import UserSlice from './toolkit/UserSlice'

export default configureStore ({
    reducer :{
        user : UserSlice
    }
})