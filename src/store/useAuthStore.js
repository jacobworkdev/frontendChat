import { create } from "zustand";
import { axsiosInstance } from "../lib/axios";

export const useAuthStore = create((set)=>({
    authUser:null,
    isSginingUp:false,
    isLoggingIn:false,
    isUpdatingProfile:false,
    isCheckingAuth:true,
    checkAuth:async ()=>{
        try{
            const res = await axsiosInstance.get('/get/check')
            set({authUser:res.data})
        }catch(err){
            set({authUser:null})
            console.log('error in check auth fr',err)
        }finally{
            set({isCheckingAuth:false})
        }
    }
}))