import React from 'react'
import Feed from "./Feed";
import QuoraHeaders from './QuoraHeaders'
import Sidebar from "./Sidebar";
import Widget from './Widget'
import './css/Quora.css'

function Quora() {
    return (
      <div className="quora">
        <QuoraHeaders />
        <div className="quora__contents">
          <div className="quora__content">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </div>
      </div>
    );
}

export default Quora
