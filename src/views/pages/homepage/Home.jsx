import React from "react";

import "../../../@core/styles/home.css";

const textParts = [
  {
    title: "Electric Vehicle Technology",
    content:
      "Our full battery electric EV79 is an industry leader, offering a wide range of battery capacity options, ranging from a substantial 65 kW to an impressive 165 kW.",
    color: "#39d98a",
  },
  {
    title: "Robust Manufacturing Process",
    content:
      "Covering everything from the power plug to the axles. Our manufacturing process includes top-notch frame strengthening, robust industrial corrosion protection, and the use of high-quality major OEM supplied components. This approach ensures the durability and longevity of our vehicles, with spare and service parts readily available, even in remote locations.",
    color: "#FDAC42",
  },
  {
    title: "Customization and Safety",
    content:
      "Our trucks offer complete customization options and come equipped with industry-standard safety features, making them suitable for performance on any site around the world.",
    color: "#74DFE7",
  },
  {
    title: "Ease of Operation and Transition",
    content:
      "What sets us apart is the ease of operation, with user-friendly controls and an intuitive design. Switching from diesel-powered vehicles to our electric trucks is a quick and safe transition. The inclusion of large, easy-to-read gauges provides operators with vital information at a glance.",
    color: "#FF5C5C",
  },
];

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const TiltCard = ({ data }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  );

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
        minHeight: "600px",
        background: "rgba(255, 255, 255, 0.26)",
      }}
      className="tilt-card"
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
          // backgroundColor: data.color,
        }}
        className="card-content bg-white"
      ></div>
    </motion.div>
  );
};

const Home = () => {
  const Cards = ({ data }) =>
    data.map((data, i) => <TiltCard key={i} data={data} />);

  return (
    <>
      <div className="banner-1 d-flex align-items-center justify-content-center">
        <div className="text-center">
          <h1 className="">Industrial Strength Electric Vehicles</h1>
          <p className="subtitle">
            Industrial EV Commercial Vehicles for heavy duty use
          </p>
        </div>
      </div>

      <div
        className="d-flex py-4"
        style={{
          // background:
          //   "linear-gradient(90deg, #1D976C 100%, #93F9B9 100%)",
        }}
      >
        <div className="fluid-container">
          <div>
            <h1>It's Not a Conversion</h1>
          </div>
          <div className="divider"/>
          <div className="d-flex gap-3">
            <Cards data={textParts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

/*

*/
