import React from "react";

class Loading extends React.Component {
  componentWillUnmount() {
    console.log("ComponentWillUnmount");
  }

  render() {
    return (
      <p>Cargando...</p>
    );
  }
}

export { Loading };
