import "./Suscription.css";

function Suscription() {
  return (
    <>
      {/* Contenedor de productos */}
      <div className="container" id="contenedor-productos">
        <div className="container-cards">
          <div className=".container-py-6">
            <main>
              {/* Planes de suscripción */}
              <div className="row row-cols-1 row-cols-md-2 mb-2 text-center">
                <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm">
                    <div className="card-header py-3">
                      <h4 className="my-0 fw-normal">Mensual</h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $20.000
                        <small className="text-body-secondary fw-light">
                          /Cop
                        </small>
                      </h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>Producto promocionado</li>
                        <li>Verificación en la cuenta</li>
                        <li>‎ </li>
                        <li>‎</li>
                      </ul>
                      <button
                        type="button"
                        className="boton-c w-100 btn btn-lg mensualcompra"
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card mb-4 rounded-3 shadow-sm border-anualcompra">
                    <div className="card-header py-3 anualcompra">
                      <h4 className="my-0 anualcompra">Anual</h4>
                    </div>
                    <div className="card-body">
                      <h1 className="card-title pricing-card-title">
                        $201.600
                        <small className="text-body-secondary fw-light">
                          /Cop
                        </small>
                      </h1>
                      <ul className="list-unstyled mt-3 mb-4">
                        <li>Producto promocionado</li>
                        <li>Verificación en la cuenta</li>
                        <li>Descuento en la suscripción</li>
                        <li>Atención prioritaria</li>
                      </ul>
                      <button
                        type="button"
                        className="b-anualcompra boton-c w-100 btn btn-lg anualcompra"
                      >
                        Comprar
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Comparar planes */}
              <h2 className="display-6 text-center mb-3">Comparar Planes</h2>
              <div className="table-responsive">
                <table className="table text-center">
                  <thead>
                    <tr>
                      <th style={{ width: "34%" }}></th>
                      <th style={{ width: "22%" }}>Mensual</th>
                      <th style={{ width: "22%" }}>Anual</th>
                    </tr>
                  </thead>
                  <tbody>
                  <tr>
                        <th scope="row" className="text-start">Producto promocionado</th>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">Verificacion en la cuenta</th>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">Descuento en la suscripcion</th>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref=""/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text-start">Atencion prioritaria</th>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref=""/></svg></td>
                        <td><svg className="bi" width="24" height="24"><use xlinkHref="#check"/></svg></td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
    
  );
}

export default Suscription;
