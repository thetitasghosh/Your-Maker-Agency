import React, { useEffect, useRef, useState } from "react";

const Cursor = ({ ref ,isMove}) => {
  // const [mEnter, setMEnter] = useState(false);
  // const mouse = useRef({x:0,y:0});
  // const MouseMove=(e)=>{
  //   const {clientX,clientY} = e;
  //   mouse.current ={
  //     x:clientX,
  //     y:clientY
  //   }
  // }

  useEffect(() => {}, []);
  return (
    <div
      // onMouseOver={() => setMEnter(!mEnter)}
      style={{ scale: isMove ? "1.1" : "0" }}
      className="absolute z-[999] transition-all duration-300"
    >
      <div className="flex h-10 w-28 items-center justify-center rounded-2xl border backdrop-blur-sm">
        <h1 className="flex w-full items-center justify-center text-2xl text-white">
          view ↗
        </h1>
      </div>
    </div>
  );
};

export default Cursor;
