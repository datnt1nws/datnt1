import Vue from "vue";
import axios from "axios";
import { UserRequest } from "@/models/user";
import { UserResponse } from "@/models/user";

class UserService extends Vue{
    private ROOT_API = 'https://60f6447918254c00176e01d8.mockapi.io/api/users';

    public getAllUser(){
        return axios.get(this.ROOT_API);
    }

    public saveUser(userInfo: any){
        return axios.post<any>(this.ROOT_API,userInfo);
    }

    public updateUser(userInfo: any){
        return axios.put<any>(this.ROOT_API + '/' + userInfo.id, userInfo);
    }

    public getUser(id: number){
        return axios.get(this.ROOT_API + '/' + id);
    }

    public deleteUser(id: number){
        return axios.delete(this.ROOT_API + '/' +id);
    }
}
export const userService = new UserService();