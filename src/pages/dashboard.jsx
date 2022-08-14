import { useState, useEffect } from 'react'


const Dashboard = () => {

  const BASE_URL = `${process.env.REACT_APP_DYNDNS}`
  const PORT = 8000
  const IMAGE_STREAM_URL = `${BASE_URL}:${PORT}/stream.mjpg`

  return (
    <>
      <p>Hello!</p>
      <img src={IMAGE_STREAM_URL} alt="streaming-pi-server" width="640" height="480" />
    </>
  );
}

export default Dashboard;