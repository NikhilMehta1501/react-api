import React, {useEffect, useState} from 'react';
import { Avatar, CircularProgress } from '@mui/material'

function ProfileImg({ alt, src, sx, size }) {

  const [imgLoaded, setImgLoaded] = useState(false)

  useEffect(()=>{
    setImgLoaded(false)
  },[src])

  return (
    <>
      { !imgLoaded && <CircularProgress size={size}/> }
      <Avatar
        src={src}
        alt={alt}
        className={ (imgLoaded) ? '' : 'hidden' }
        onLoad={()=>setImgLoaded(true)}
        onError={()=>setImgLoaded(true)}
        sx={sx}
      />
    </>
  )
}

export default ProfileImg
