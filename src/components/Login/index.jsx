import React, { PropTypes } from 'react'
import styles from './login.css'

const propTypes = {
  onAuth: PropTypes.func.isRequired
}

function Login ({ onAuth }) {
  return (
    <div className={styles.root}>
      <p className={styles.text}>
        Necesitamos que inicies sesión con tu cuenta de gitHub,
        para que puedas leer y escribir mensajes
      </p>
      <button
        className={styles.button}
        onClick={onAuth}
      >
        <span className='fa fa-github'> Login on GitHub </span>
      </button>
    </div>
  )
}

Login.propTypes = propTypes

export default Login
