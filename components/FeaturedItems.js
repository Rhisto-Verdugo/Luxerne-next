import { featured1, featured2, featured3, featured4 } from "../public/images"
import Image from "next/image.js"

import featuredStyles from "../styles/Featured.module.css"

const FeaturedItems = () => {
  return (
    <div className={featuredStyles.featured}>
      <div className={featuredStyles.featuredCard}>
        <div className={featuredStyles.featuredImgWrapper}>
          <Image src={featured1} layout='fill' objectFit='cover' />
        </div>
        <h2>Restaurant</h2>
        <p>
          Praxis literally VHS, normcore flannel mustache trust fund. Listicle
          post-ironic kinfolk
        </p>
        <button>FIND YOUR TABLE</button>
      </div>
      <div className={featuredStyles.featuredCard}>
        <div className={featuredStyles.featuredImgWrapper}>
          <Image src={featured2} layout='fill' objectFit='cover' />
        </div>
        <h2>Yachts</h2>
        <p>
          Ascot austin air plant YOLO, lo-fi mlkshk polaroid humblebrag ugh
          coloring book.
        </p>
        <button>LEARN MORE</button>
      </div>

      <div className={featuredStyles.featuredCard}>
        <div className={featuredStyles.featuredImgWrapper}>
          <Image src={featured3} layout='fill' objectFit='cover' />
        </div>
        <h2>Spa</h2>
        <p>
          Readymade chia post-ironic celiac subway tile. Pop-up yr tote bag
          plaid. Bitters live-edge.
        </p>
        <button>LEARN MORE</button>
      </div>
      <div className={featuredStyles.featuredCard}>
        <div className={featuredStyles.featuredImgWrapper}>
          <Image src={featured4} layout='fill' objectFit='cover' />
        </div>
        <h2>Concert Hall</h2>
        <p>
          Air plant knausgaard subway tile austin palo santo next level,
          stumptown meh direct trade.
        </p>
        <button>BOOK NOW</button>
      </div>
    </div>
  )
}

export default FeaturedItems
