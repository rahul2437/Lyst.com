import React from "react";
import "./Sale.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Sale = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="whole">
      <div className="head">
        <img
          src="https://png.pngtree.com/thumb_back/fh260/background/20220216/pngtree-product-scene-hand-painted-clothing-shoe-bag-background-image_929896.jpg"
          alt=""
        />
        <p className="tag">Men's sale</p>
      </div>
      <div className="main2">
        <div>
          <p>CLOTHING</p>
          <p>Shop the sale &gt;</p>
        </div>
        <div>
          <p>SHOES</p>
          <p>Shop the sale &gt;</p>
        </div>
        <div>
          <p>ACCESSORIES</p>
          <p>Shop the sale &gt;</p>
        </div>
        <div>
          <p>BAGS</p>
          <p>Shop the sale &gt;</p>
        </div>
        <div>
          <p>JEWELERY</p>
          <p>Shop the sale &gt;</p>
        </div>
      </div>
      <Carousel responsive={responsive} style={{ Width: "60%" }}>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_gucci_eca9e74796.jpg"
            alt=""
          />
          <p>GUCCI ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_saint_laurent_2031eb80f7.jpeg"
            alt=""
          />
          <p>SAINT LAURENT ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_off_white_co_virgil_abloh_d8c6b37a9f.jpeg"
            alt=""
          />
          <p>OFF-WHITE C/O VIRGIL ABLOH ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_balenciaga_215cbc0fe0.jpeg"
            alt=""
          />
          <p>BALENCIAGA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_nike_c3045162ba.png"
            alt=""
          />
          <p>NIKE ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_dolce_gabbana_bcb7049bb0.jpeg"
            alt=""
          />
          <p>DOLCE & GABBANA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_moncler_bcdcdc131d.jpeg"
            alt=""
          />
          <p>MONCLER ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_valentino_421c18fab0.jpeg"
            alt=""
          />
          <p>VALENTINO ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_versace_5f2f4e9477.jpeg"
            alt=""
          />
          <p>VERSACE ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_fendi_da65336610.jpeg"
            alt=""
          />
          <p>FENDI ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_prada_9953c217c5.jpeg"
            alt=""
          />
          <p>PRADA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_burberry_1537e982c3.jpeg"
            alt=""
          />
          <p>BURBERRY ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_alexander_mcqueen_eb90454798.jpeg"
            alt=""
          />
          <p>ALEXANDER MCQUEEN ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_bottega_veneta_c61652d379.jpeg"
            alt=""
          />
          <p>BOTTEGA VENTA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_givenchy_1de96638c1.jpeg"
            alt=""
          />
          <p>GIVENCHY ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_tory_burch_31a8086732.jpeg"
            alt=""
          />
          <p>TORY BURCH ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_golden_goose_deluxe_brand_62d89a36e2.jpeg"
            alt=""
          />
          <p>GOLDEN GOOSE ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_acne_5edd3bde50.jpeg"
            alt=""
          />
          <p>ACNE STUDIOS ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_christian_louboutin_6fb12bb326.jpeg"
            alt=""
          />
          <p>CHRIDTIAN LOUBOUTIN ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_dooney_bourke_620dbbe318.jpeg"
            alt=""
          />
          <p>DOONEY & BOURKE ON SALE</p>
        </div>
      </Carousel>
      ;
      <Carousel responsive={responsive} style={{ Width: "60%" }}>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/category_rail_mens_belts_99c1111bdb.jpeg"
            alt=""
          />
          <p>GUCCI ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/category_rail_mens_sneakers_75540ce9a8.jpeg"
            alt=""
          />
          <p>SAINT LAURENT ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/category_rail_mens_sandals_229a90cbe8.jpeg"
            alt=""
          />
          <p>OFF-WHITE C/O VIRGIL ABLOH ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/category_rail_mens_backpacks_0ea2a1967e.jpeg"
            alt=""
          />
          <p>BALENCIAGA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_nike_c3045162ba.png"
            alt=""
          />
          <p>NIKE ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_dolce_gabbana_bcb7049bb0.jpeg"
            alt=""
          />
          <p>DOLCE & GABBANA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_moncler_bcdcdc131d.jpeg"
            alt=""
          />
          <p>MONCLER ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_valentino_421c18fab0.jpeg"
            alt=""
          />
          <p>VALENTINO ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_versace_5f2f4e9477.jpeg"
            alt=""
          />
          <p>VERSACE ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_fendi_da65336610.jpeg"
            alt=""
          />
          <p>FENDI ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_prada_9953c217c5.jpeg"
            alt=""
          />
          <p>PRADA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_burberry_1537e982c3.jpeg"
            alt=""
          />
          <p>BURBERRY ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_alexander_mcqueen_eb90454798.jpeg"
            alt=""
          />
          <p>ALEXANDER MCQUEEN ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_bottega_veneta_c61652d379.jpeg"
            alt=""
          />
          <p>BOTTEGA VENTA ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_givenchy_1de96638c1.jpeg"
            alt=""
          />
          <p>GIVENCHY ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_tory_burch_31a8086732.jpeg"
            alt=""
          />
          <p>TORY BURCH ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_golden_goose_deluxe_brand_62d89a36e2.jpeg"
            alt=""
          />
          <p>GOLDEN GOOSE ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_acne_5edd3bde50.jpeg"
            alt=""
          />
          <p>ACNE STUDIOS ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_christian_louboutin_6fb12bb326.jpeg"
            alt=""
          />
          <p>CHRIDTIAN LOUBOUTIN ON SALE</p>
        </div>
        <div className="one">
          <img
            src="https://cdna.lystit.com/cms/designer_rail_dooney_bourke_620dbbe318.jpeg"
            alt=""
          />
          <p>DOONEY & BOURKE ON SALE</p>
        </div>
      </Carousel>
      <div className="carding">
        <p>OFFERS OF THE WEEK</p>
        <Carousel responsive={responsive} style={{ Width: "60%" }}>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/ef968d13/valentino-Black-Leather-Blazer.jpeg"
              alt=""
            />
            <p>VALENTINO</p>
            <p>Leather Blazer - Black</p>
            <p>$1,731(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/gilt/f6f26c9a/cole-haan-Black-Quilted-Vest.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/716914d6/effy-designer-Silver-18k-Goldplated-Sterling-Leather-Pendant-Necklace.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/b5be47e3/mcq-Green-Mcq-By-Alexander-Mcqueen-Mq0273s-59mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/03ece507/effy-designer-Silver-Sterling-White-Sapphire-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/85b548b8/gucci-Black-Black-Red-GG0467S-62mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/4d42fc4e/effy-designer-Silver-Sterling-Cross-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/ef968d13/valentino-Black-Leather-Blazer.jpeg"
              alt=""
            />
            <p>VALENTINO</p>
            <p>Leather Blazer - Black</p>
            <p>$1,731(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/gilt/f6f26c9a/cole-haan-Black-Quilted-Vest.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/716914d6/effy-designer-Silver-18k-Goldplated-Sterling-Leather-Pendant-Necklace.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/b5be47e3/mcq-Green-Mcq-By-Alexander-Mcqueen-Mq0273s-59mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/03ece507/effy-designer-Silver-Sterling-White-Sapphire-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/85b548b8/gucci-Black-Black-Red-GG0467S-62mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/4d42fc4e/effy-designer-Silver-Sterling-Cross-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/ef968d13/valentino-Black-Leather-Blazer.jpeg"
              alt=""
            />
            <p>VALENTINO</p>
            <p>Leather Blazer - Black</p>
            <p>$1,731(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/gilt/f6f26c9a/cole-haan-Black-Quilted-Vest.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/716914d6/effy-designer-Silver-18k-Goldplated-Sterling-Leather-Pendant-Necklace.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/b5be47e3/mcq-Green-Mcq-By-Alexander-Mcqueen-Mq0273s-59mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/03ece507/effy-designer-Silver-Sterling-White-Sapphire-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/85b548b8/gucci-Black-Black-Red-GG0467S-62mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/4d42fc4e/effy-designer-Silver-Sterling-Cross-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/ef968d13/valentino-Black-Leather-Blazer.jpeg"
              alt=""
            />
            <p>VALENTINO</p>
            <p>Leather Blazer - Black</p>
            <p>$1,731(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/gilt/f6f26c9a/cole-haan-Black-Quilted-Vest.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/716914d6/effy-designer-Silver-18k-Goldplated-Sterling-Leather-Pendant-Necklace.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/b5be47e3/mcq-Green-Mcq-By-Alexander-Mcqueen-Mq0273s-59mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/03ece507/effy-designer-Silver-Sterling-White-Sapphire-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/ruelala/85b548b8/gucci-Black-Black-Red-GG0467S-62mm-Sunglasses.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
          <div className="raj">
            <img
              src="https://cdna.lystit.com/200/250/tr/photos/saksoff5th/4d42fc4e/effy-designer-Silver-Sterling-Cross-Ring.jpeg"
              alt=""
            />
            <p>COLE HAAN</p>
            <p>Leather Blazer - Black</p>
            <p>$38(70% off)</p>
          </div>
        </Carousel>
      </div>
      <div className="card">
        <div className="card1">
          <h1>1</h1>
          <h2>THE BIGGEST SELECTION</h2>
          <p>
            Shop over 12,000 brands and stores in one place. <br />
            <br /> Find exactly what you want with powerful search and personal
            recommendations.
          </p>
        </div>
        <div className="card2">
          <h1>2</h1>
          <h2>THE HOTTEST PRODUCT</h2>
          <p>
            See what's new and what's trending. <br />
            <br /> Hit the heart to recieve alerts on the latest drops from your
            favourite brands.
          </p>
        </div>
        <div className="card3">
          <h1>3</h1>
          <h2>THE BEST PRICES</h2>
          <p>
            Compare preces and shipping options across thousands of stores.{" "}
            <br />
            <br />
            Lyst members are notified when an item goes on sale.
          </p>
        </div>
        <div className="card4">
          <h2>SIGN UP FOR SMARTER SHOPPING</h2>
          <button>Join =&gt; </button>
        </div>
      </div>
      <Carousel responsive={responsive}>
        <div className="four">
          <img
            src="https://cdna.lystit.com/1020/608/r/banners/2017/11/07/1107-470910885.jpeg"
            alt=""
          />
          <p>COATS THAT WILL KEEP YOU WARM FOR LESS</p>
          <p>Shop now &gt;</p>
        </div>
        <div className="four">
          <img
            src="https://cdna.lystit.com/1020/608/r/banners/2017/11/07/1108-470921895.jpeg"
            alt=""
          />
          <p>HIGH-END DESIGNERS FOR HIGH STREET PRICES</p>
          <p>Shop now &gt;</p>
        </div>
        <div className="four">
          <img
            src="https://cdna.lystit.com/1020/608/r/banners/2017/11/07/1109-478010068.jpeg"
            alt=""
          />
          <p>TOP PICKS FROM SALE SPECIALE OCCASION SHIRTS</p>
          <p>Shop now &gt;</p>
        </div>
        <div className="four">
          <img
            src="https://cdna.lystit.com/1020/608/r/banners/2017/11/07/1110-470952354.jpeg"
            alt=""
          />
          <p>MOST-WANTED DESIGNER ACCESSORIES ON SALE RN</p>
          <p>Shop now &gt;</p>
        </div>
      </Carousel>
      ;
    </div>
  );
};

export default Sale;
