import React from "react";
import './Brochure.scss';

export const Brochure: React.FC<{}> = props => {
  return (
    <div className={"layout"}>
      <div className={"sidebar"}>sidebar</div>
      <div>
        { props.children }
      </div>
    </div>
  )
}