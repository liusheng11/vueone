import * as types from './type';
export default {
    [types.VIEW_HD]:(state,payload)=>{
        state.hd_title=payload;
    },
    [types.INFO]:(state,payload)=>{
        state.uname=payload;     
    },
    [types.MYTO]:(state,payload)=>{
        state.my_to=payload;     
    },
    [types.LOADING]:(state,payload)=>{
        state.loading=payload;     
    }
}