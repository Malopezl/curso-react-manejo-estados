import React from "react";

const SECURITY_CODE = 'paradigma';

function UseState({ name }) {
  const [state, setState] = React.useState({
    value: '',
    error: false,
    loading: false,
    deleted: false,
    confirmed: false,
  });

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
        } else {
          setState({
            ...state,
            loading: false,
            error: false,
            confirmed: true,
          });
        }

        console.log("Terminando la validacion");
      }, 3000);
    }

    console.log("Terminando el efecto");
  }, [state.loading]);

  if (!state.deleted && !state.confirmed) {
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
          }}
        >Comprobar</button>
      </div>
    );
  } else if (!state.deleted && !!state.confirmed) {
    return (
      <React.Fragment>
        <p>Pedimos confirmacion. ¿Tas seguro?</p>
        <button
          onClick={() => {
            setState({
              ...state,
              deleted: true,
            });
          }}
        >
          Si, eliminar
        </button>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              value: '',
            });
          }}
        >
          No, me arrepenti
        </button>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <p>Eliminado con exito</p>
        <button
          onClick={() => {
            setState({
              ...state,
              confirmed: false,
              deleted: false,
              value: '',
            });
          }}
        >
          Resetear, volver atras
        </button>
      </React.Fragment>
    );
  }
}

export { UseState };
