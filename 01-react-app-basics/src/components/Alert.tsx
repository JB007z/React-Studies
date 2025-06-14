import {type ReactNode } from "react";

interface Props{
    children:ReactNode;
    onButtonClick:()=>void
}
const Alert = ({children,onButtonClick}:Props) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
    <button type="button" className="btn-close" onClick={onButtonClick}></button>
    </div>
  )
}

export default Alert