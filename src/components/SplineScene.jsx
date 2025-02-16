import React from 'react'
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <Spline scene="https://prod.spline.design/o2G8aWJ8CWtSSx88/scene.splinecode" />
    </div>
  )
}

export default SplineScene;