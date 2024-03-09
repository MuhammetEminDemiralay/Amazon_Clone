import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UserInfo, getAuth, signInWithEmailAndPassword } from 'firebase/auth'


interface user {
    userName: "",
    password: ""
}

export const login = createAsyncThunk('user/login', async (userInfo: user) => {
    try {
        const auth = getAuth();
        const userCredentials = await signInWithEmailAndPassword(auth, userInfo.userName, userInfo.password)

        const user = userCredentials.user;
        const token = user.getIdToken();

        const userData = {
            token,
            user: user
        }

        return userData;

    } catch (error) {

        console.log("Login işleminde hata",error);
        throw error
    }
})







const initialState = {
    email: null,
    password: null,
    isLoading: false,
    isAuth: false,
    users: {
        userEmail: "test@test.com",
        userPassword: "12345678"
    }
}


export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers : {
        setEmail: (state, action) => {

        },
        setPassword: (state, action) => {

        },
        setIsLoading: (state, action) => {

        },
        setLogin : (state, action) => {

        }
    },
    extraReducers : (builder) => {
        builder.
            addCase()
    }
})



export const {setEmail, setPassword, setIsLoading, setLogin} = userSlice.actions
export default userSlice.reducer;
