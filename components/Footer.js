import {
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsTwitter,
  BsFillArrowUpSquareFill,
} from "react-icons/bs"

import footerStyles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <footer className={footerStyles.footerContainer}>
      <div className={footerStyles.footer}>
        <span className={footerStyles.socialIcons}>
          <a href='https://www.instagram.com/?hl=en' target='blank'>
            <BsInstagram className={footerStyles.socialIcon} />
          </a>
          <a href='https://www.facebook.com/' target='blank'>
            <BsFacebook className={footerStyles.socialIcon} />
          </a>
          <a href='https://www.youtube.com/' target='blank'>
            <BsYoutube className={footerStyles.socialIcon} />
          </a>
          <a href='https://twitter.com/?lang=en' target='blank'>
            <BsTwitter className={footerStyles.socialIcon} />
          </a>
        </span>
        <span className={footerStyles.footerLinks}>
          <ul>
            <li>Careers</li>
            <li>Shops</li>
            <li>Terms of use</li>
            <li>Privacy center</li>
          </ul>
        </span>
      </div>
      <p className={footerStyles.copyright}>
        All Rights Reserved. © Luxerne 2022
      </p>
    </footer>
  )
}

export default Footer
