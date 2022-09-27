import { ChangeEvent, FormEvent, useState } from "react";

type User ={
    username: string;
    email: string | number;
    password: string | number;
}

export const useMergeState = (initState = {username:"",email:"", password:""}) => {
    const [data, setData] = useState(initState);

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    };



    return { onChange,onSubmit,data }

}