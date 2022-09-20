import React from 'react'
import { FaFacebookSquare, FaInstagram,FaTiktok } from "react-icons/fa"
const Footer = () => {
  return (
    <footer>
          <div>
              <a href="/">Kubapic</a>
              <p>©2022. Silvana Vega</p>
          </div>   
          
          <div>
          <h4>Seguinos en Redes </h4>
            <ul>
              <li><FaFacebookSquare/> Facebook</li>
              <li><FaInstagram/> Instagram</li>
              <li><FaTiktok/> TikTok</li>
            </ul>
          </div>
  
          <ul>   
            <li>Sobre nuestros productos</li>
            <li>Politicas de privacidad</li>
            <li>Terminos y condiciones</li>
            <li>Preguntas frecuentes</li>
          </ul>              
      </footer>
  )
}

export default Footer