import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
  });

  // const [value, setValue] = React.useState('');
  // const [error, setError] = React.useState(false);
  // const [loading, setLoading] = React.useState(false);

  console.log(state);

  React.useEffect(() => {
    console.log("Empezando el efecto");

    if (!!state.loading) {
      setTimeout(() => {
        console.log("Haciendo la validacion");

        if (state.value !== SECURITY_CODE) {
          setState({
            ...state,
            error: true,
            loading: false,
          });
          // setError(true);
        } else {
          setState({
            ...state,
            loading: false,
            error: false,
          });
        }
        // setLoading(false);

        console.log("Terminando la validacion");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [state.loading]);

  return (
    <div>
      <h2>Eliminar {name}</h2>
      <p>Por favor, escribe el codigo de seguridad.</p>

      {(state.error && !state.loading) && (<p>Error: el codigo es incorrecto</p>)}
      {state.loading && (<p>Cargando...</p>)}

      <input
        placeholder="Codigo de seguridad"
        value={state.value}
        onChange={(event) => {
          // setError(false);
          // setValue(event.target.value);
          setState({
            ...state,
            value: event.target.value,
          });
        }}
      />
      <button
        onClick={() => {
          setState({
            ...state,
            loading: true,
          });
          // setLoading(true);
          // setError(false);
        }}
      >Comprobar</button>
    </div>
  );
}

export { UseState };
