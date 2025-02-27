import { create } from "zustand";
import { axsiosInstance } from "../lib/axios";
import { data } from "react-router-dom";

export const useAuthStore = create((set) => ({
    authUser: null,
    isSginingUp: false,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: true,

    checkAuth: async () => {
        try {
            const res = await axsiosInstance.get('/get/check')
            set({ authUser: res.data })
        } catch (err) {
            set({ authUser: null })
            console.log('error in check auth fr', err)
        } finally {
            set({ isCheckingAuth: false })
        }
    },

    signup: async (data) => {
        set({ isSigningUp: true });
        try {
            const res = await axiosInstance.post("/auth/signup", data);
            set({ authUser: res.data });
            toast.success("Account created successfully");
            get().connectSocket();
        } catch (error) {
            toast.error(error.response.data.message);
        } finally {
            set({ isSigningUp: false });
        }

    }
}))

