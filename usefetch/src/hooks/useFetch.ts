import { useEffect, useState } from 'react'
import axios from 'axios';

export const useFetch =<A> (url: string, params: Record<string, unknown>) => {

const [loading, setLoading]= useState<boolean>(false);
const [error, setError]=useState<boolean>(false)
const [data, setData]= useState<A[]>([])

  useEffect(()=>{
    setLoading(true)
    axios.get(url,{
    params:{
        ...params
    },
}).then(({ data })=>{
    // console.log(data)
    setLoading(false);
    setData(data.items);
}).catch(()=>{
    setLoading(false);
    setError(true)
})
  }, [])
    
  return {loading, data, error};
};