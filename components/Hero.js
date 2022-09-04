import { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import { Navigation, EffectFade, Autoplay, Pagination } from "swiper"
import "swiper/css/navigation"
import "swiper/css/effect-fade"
import "swiper/css/pagination"
import { GiHamburgerMenu } from "react-icons/gi"
import { BsMoonStarsFill } from "react-icons/bs"
import heroStyles from "../styles/Hero.module.css"
// import { CSSTransition } from "react-transition-group"
import Image from "next/image"
// import "../index.css"

import { hero1, hero2, hero3, hero4, hero5, hero6 } from "../public/images"

const images = [hero1, hero2, hero3, hero4, hero5, hero6]

const Hero = () => {
  const [sidebar, setSidebar] = useState(false)
  return (
    <div>
      <div id='home'>
        <nav className={heroStyles.navbar}>
          <h1 className={heroStyles.logo}>
            <a href='#home'>
              <span className={heroStyles.logoIcon}>
                <BsMoonStarsFill />
              </span>
              Luxerne
            </a>
          </h1>
          <span className={heroStyles.toggleSidebar}>
            <GiHamburgerMenu onClick={() => setSidebar(!sidebar)} />
          </span>

          <ul className={heroStyles.navLinks}>
            <li>
              <a>Restaurant</a>
            </li>
            <li>
              <a>Yachts</a>
            </li>
            <li>
              <a>SPA</a>
            </li>
            <li>
              <a>Concerts</a>
            </li>
          </ul>
        </nav>
        <div>
          <aside
            className={
              sidebar
                ? `${heroStyles.sidebar} ${heroStyles.active}`
                : `${heroStyles.sidebar}`
            }
            onMouseLeave={() => setSidebar(false)}
          >
            <ul className={heroStyles.sidebarLinks}>
              <li>
                <a>Restaurant</a>
              </li>
              <li>
                <a>Yachts</a>
              </li>
              <li>
                <a>SPA</a>
              </li>
              <li>
                <a>Concerts</a>
              </li>
            </ul>
          </aside>
        </div>
        <Swiper
          navigation
          pagination={{
            clickable: true,
          }}
          effect={"fade"}
          speed={800}
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          slidesPerView={1}
          loop
          className={heroStyles.swiper}
        >
          {images.map((img, i) => {
            return (
              <SwiperSlide key={i} className={heroStyles.swiperSlide}>
                <Image src={img} layout='fill' objectFit='cover'></Image>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <h2 className={heroStyles.heroTitle}>Welcome</h2>
      <p className={heroStyles.heroText}>To a new world of comfort</p>
    </div>
  )
}

export default Hero
