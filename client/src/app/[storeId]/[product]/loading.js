import LoaderGray from '@/public/assets/loader-gray'
import React from 'react'

const loading = () => {
  return (
    <div style={{textAlign: "center", display: "flex", justifyContent: "center", margin: "100px 0"}}>
      <LoaderGray />
    </div>
  )
}

export default loading