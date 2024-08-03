import React from 'react';
import  error404 from '../assets/error.svg'

function NotFound() {
  <>
    return <h2 className="text-center mt-5">Error 404, Page not found.</h2>;
    <img src={error404} alt="error" />

  </>

}

export default NotFound;

