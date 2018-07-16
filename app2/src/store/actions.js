
import {
    VIEW_HD,INFO,MYTO,LOADING
} from './type';
export default {
    [VIEW_HD]:({commit,state},payload)=>{
        commit(VIEW_HD,payload)
    },
    [INFO]:({commit,state},payload)=>{
        commit(INFO,payload)
    },
    [MYTO]:({commit,state},payload)=>{
        commit(MYTO,payload)
    },
    [LOADING]:({commit,state},payload)=>{
        commit(LOADING,payload)
    }

}