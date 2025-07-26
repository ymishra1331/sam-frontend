import React, { useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import FloorPlanTemplate from "../components/FloorPlanTemplate";
import FirstFloor from "../assets/FloorPlan/first.webp";
import SecondFloor from "../assets/FloorPlan/second.webp";
import ThirdFloor from "../assets/FloorPlan/first.webp";
import ArtiumFloor from "../assets/FloorPlan/artium.webp";
import GroundFloor from "../assets/FloorPlan/gfloor.webp";

const FloorPlan = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const brands1 = [
    "smart bazaar",
    "max",
    "pantaloons",
    "cafe coffee day",
    "The Chai Square"
  ];
  const brands2 = [
    "SMART BAZAAR",
    "KFC",
    "uniter colors of benetton",
    "levis",
    "domino's",
    "zodiac",
    "skechers",
    "puma (krysh retail)",
    "mufti (credo)",
    "body shop",
    "mama earth",
  ];
  const brands3 = [
    "reliance digital",
    "reliance trends",
    "pizza hut",
    "laraib",
    "pantaloons kids",
    "finer threads",
    "go clour",
    "vijay laxmi",
    "crocs (metro)",
    "LAVIE",
    "meena bazar",
    "i next (APPLE AUTHORISED STORE)",
    "kiaasa",
    "jockey",
    "Liquid (Kiosk)"
  ];
  const brands4 = [
    "dazling desire",
    "movie magic",
    "hungama"
  ];
  const brands5 = [
    "CANDY WORLD",
    "bellavita",
    "nykaa/fsn brand",
  ];
  const contact1 = [
    "",
    "0761-2665566",
    "8657549149",
    "8435922408",
    "9617197714"
  ];
  const contact2 = [
    "7389304645",
    "0761-2663677",
    "9977003417",
    "9981124191",
    "9136902776",
    "0761-4102599",
    "0761-4924591",
    "0761-4113373",
    "0761-2661999",
    "9589910580"
  ];
  const contact3 = [
    "0761-2661777",
    "9039521050",
    "7440925607",
    "8516885106",
    "8657959938",
    "0761-2663601",
    "0761-4900409",
    "7000707701",
    "8591493406",
    "0761-4106309",
    "0761-2662737",
    "0761-2660020",
    "0761-4109367",
    "9993533633"
  ];
  const contact4 = [
    "9826358300",
    "0761-2665566",
    "8657549149"
  ];
  const contact5 = [
    "8871193226",
    "7047108092",
    "8770348763"
  ];

  return (
    <>
      <header className="header-space h-20 sm:h-20"></header>
      <motion.div
        className="mt-10 sm:mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-full bg-white flex flex-col justify-center items-center gap-4 px-4 md:px-10">
          <h1 className="text-2xl md:text-3xl lg:text-4xl uppercase text-center">Level Plan</h1>
          <p className="text-sm md:text-lg text-center max-w-screen-md">
            Easily explore our mall—locate shops, dining, and entertainment with our level plan.
          </p>
        </div>
        <motion.div
          className="w-full bg-white flex flex-col justify-center items-center gap-10 md:gap-16 sm:my-16 py-10 sm:px-4 md:px-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FloorPlanTemplate
            title="Atrium Level"
            brands={brands1}
            contacts={contact1}
            image={ArtiumFloor}
          />

          <FloorPlanTemplate
            title="Ground Level"
            brands={brands2}
            contacts={contact2}
            image={GroundFloor}
          />

          <FloorPlanTemplate
            title="First Level"
            brands={brands3}
            contacts={contact3}
            image={FirstFloor}
          />

          <FloorPlanTemplate
            title="Second Level"
            brands={brands4}
            contacts={contact4}
            image={SecondFloor}
          />

          <FloorPlanTemplate
            title="Kiosk (Atrium Level)"
            brands={brands5}
            contacts={contact5}
            image={ThirdFloor}
          />
        </motion.div>
      </motion.div>
    </>
  );
}

export default FloorPlan;
