import React from "react";

function Alert_Component(props) {
  return (
    <div className="alert alert-primary" role="alert" id="Alert" hidden>
      {props.Alert_Message}
    </div>
  );
}

export default Alert_Component;
