import {useEffect, useState} from 'react'

const useTimeout = (delayTime: number) => {
    const [ready, setReady]= useState<boolean>(false)

    useEffect(()=>{
    
        let id= setTimeout(()=>{
        setReady(true)
      },delayTime)
  
      return ()=>clearTimeout(id)
    },[delayTime])

  return {ready};
}
export default useTimeout