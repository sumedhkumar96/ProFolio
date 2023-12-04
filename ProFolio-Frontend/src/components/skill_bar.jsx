import React from "react";
import "./ProgressBar.css"
import "./style.css"
var ProgressBar = ({ width, percent, level}) => {

    const [value, setValue] = React.useState(0);
  
    React.useEffect(() => {
      setValue(percent * width/100);
    },[]);
  
    return (
      <div>
        <div className="progress-div" style={{ width: `${width}%`}}>
          <div style={{ width: `${value}%` }} className="progress grad-progress"> {level}</div>
        </div>
      </div>
    );
  };

export default ProgressBar;