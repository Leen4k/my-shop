import React from 'react'
import {FaTelegram} from "react-icons/fa"
import {AiFillFacebook} from "react-icons/ai"
import "./avatar.css"
import AVATAR from "../assets/images/avatar.jpg"

const Avatar = () => {
  return (
    <div>
        <div className="avatar__container">
            <article className="avatar__content">
                <div className="avatar__image">
                    <img src={AVATAR} alt="" />
                </div>
                <div className="avatar__data">
                    <div className="avatar__data-wrapper">
                        <h3><AiFillFacebook className="avatar__icon"/> Chhay San Lyath</h3>
                        <p><FaTelegram className="avatar__icon"/> 099 987 115</p>        
                    </div>
                </div>
            </article>
        </div>
    </div>
  )
}

export default Avatar