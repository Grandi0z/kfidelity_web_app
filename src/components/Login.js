import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import '../assets/plugins/fontawesome-free/css/all.min.css';
import '../assets/plugins/icheck-bootstrap/icheck-bootstrap.min.css';
import '../assets/dist/css/adminlte.min.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username && password) {
      //with redux we will check the loading status from the backent
      setIsLoading(true);

      try {
        // will update this when use redux
        const response = ""; //await fetchDataFunction(`/api/Compte/GetCompteParTelephoneEtPin?Telephone=${username}&CodePin=${password}`, "GET", null);
        // this part too
        setIsLoading(false);

        if (response.length > 0) {
          // rebuild it latter
          response.forEach((item) => {
            const compte = item;
            localStorage.setItem("isConnected", true);
            localStorage.setItem("users", JSON.stringify(compte));
            navigate('/home'); // will keep this
          });
        } else {
          setError("Mot de passe incorrect");
        }
      } catch (error) {
        setError('Error fetching data:', error);
        setIsLoading(false);
      }
    }
  };

  return (
    <>
      {error && <Alert variant="danger">{error}</Alert>}
      {/* {message && <Alert variant="info">{message}</Alert>} add later*/}
      <div className="hold-transition login-page">
        <div className="login-box">
          <div className="card card-outline card-primary">
            <div className="card-header text-center">
              <a href="/" className="h1"><b>K-</b>FIDELITY</a>
            </div>
            <div className="card-body">
              <p className="login-box-msg">Veuillez Saisir Vos Identifiant</p>

              <form onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input type="tel" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="Téléphone" required />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-phone"></span>
                    </div>
                  </div>
                </div>
                <div className="input-group mb-3">
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Mot de passe" required />
                  <div className="input-group-append">
                    <div className="input-group-text">
                      <span className="fas fa-lock"></span>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-8">
                    <div className="icheck-primary">
                      <input type="checkbox" id="remember" />
                      <label htmlFor="remember">Se souvenir de Moi</label>
                    </div>
                  </div>
                </div>

                <div className="social-auth-links text-center mt-2 mb-3">
                  <button type="submit" className="btn btn-block btn-primary">
                    <i className="fab fa-facebook mr-2"></i> Connexion
                  </button>
                  {isLoading && (
                    <div className="spinner-border text-info mt-1" id="loadingSpinneSubmit" role="status">
                      <span className="sr-only">Loading...</span>
                    </div>
                  )}
                </div>
              </form>

              <p className="mb-1">
                <a href="forgot-password.html">J'ai oublié mon mot de passe</a>
              </p>
              <p className="mb-0">
                <a href="register.html" className="text-center">Créer un nouveau compte</a>
              </p>
              <div className='message'>
                <p id='message'></p>
                <p id='alerte'></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
