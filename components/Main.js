import Image from "next/image"

import { main1, main2, main3, main4, main5, main6 } from "../public/images"
import mainStyles from "../styles/Main.module.css"
const Main = () => {
  return (
    <div>
      <div className={mainStyles.main}>
        <div>
          <div className={mainStyles.mainImgWrapper}>
            <Image src={main1} layout='fill' objectFit='cover' />
          </div>
          <h2>Discover something</h2>
          <p>
            Kale chips offal flannel ennui tilde vinyl deep v XOXO put a bird on
            it. Church-key praxis meggings, offal typewriter snackwave chambray.
            Salvia ugh artisan poke, letterpress.
          </p>
        </div>
        <section>
          <div className={mainStyles.mainImgWrapper}>
            <Image src={main2} layout='fill' objectFit='cover' />
          </div>
          <h2>Explore the Universe</h2>
          <p>
            Brooklyn vegan edison bulb sriracha adaptogen yes plz hell of trust
            fund irony pabst unicorn praxis raclette literally sustainable.
            Helvetica single-origin coffee pop-up blog, vice tumeric sriracha
            iceland.
          </p>
        </section>
      </div>
      <section className={mainStyles.singleImg}>
        <div>
          <h2>DISCOVER THE BEAUTY OF ASIA PACIFIC</h2>
          <p>
            Vibecession humblebrag flexitarian poke. Put a bird on it 3 wolf
            moon drinking vinegar retro iceland paleo. Selvage gastropub sus
            master cleanse, praxis small batch hammock fashion axe church-key
            roof party tacos pour-over.
          </p>
        </div>
        {/* <div className={mainStyles.mainImgWrapper}> */}
        <Image src={main3} layout='intrinsic'></Image>
        {/* </div> */}
      </section>
      <div className={mainStyles.main}>
        <section>
          <div className={mainStyles.mainImgWrapper}>
            <Image src={main4} layout='fill' objectFit='cover' />
          </div>
          <h2>Explore something</h2>
          <p>
            Swag vexillologist forage cronut cliche occupy thundercats you
            probably haven't heard of them pug +1 jianbing banjo gatekeep.
            Quinoa venmo williamsburg chambray. Big mood pitchfork
          </p>
        </section>
        <section>
          <div className={mainStyles.mainImgWrapper}>
            <Image src={main5} layout='fill' objectFit='cover' />
          </div>
          <h2>Discover the Universe</h2>
          <p>
            Copper mug. Tacos kale chips pinterest neutra trust fund jean shorts
            whatever hammock raclette organic retro hashtag viral. XOXO
            church-key small batch vice prism neutra.
          </p>
        </section>
      </div>
      <div className={mainStyles.singleImgLeftContainer}>
        <section className={mainStyles.singleImgLeft}>
          <Image src={main6}></Image>
          <div>
            <h2>EXPERIENCE THE BEAUTY OF ANTARCTICA</h2>
            <p>
              Vibecession humblebrag flexitarian poke. Put a bird on it 3 wolf
              moon drinking vinegar retro iceland paleo. Selvage gastropub sus
              master cleanse, praxis small batch hammock fashion axe church-key
              roof party tacos pour-over.
            </p>
            <button>BOOK A ROOM</button>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Main
