import { motion,  Variants } from "framer-motion";
import MenuItem from "./MenuItem";

const navs =[
  {
  name:'Home',
  link:'/',
  enabled:true
},
  {
  name:'Place to stay',
  link:'/place-to-stay',
  enabled:true
},
  {
  name:'NFTs',
  link:'/nfts',
  enabled:false
},
  {
  name:'Community',
  link:'/community',
  enabled:false
},
]

const variants:Variants = {
  open: {
    y: "calc(0%)",
    transition: {
      x: { duration: 0.5 },
      type: "ease",
      staggerChildren: 0.25,
      delayChildren: 0.75,
    },
  },
  closed: {
    y: "calc(-200%)",
    transition: { x: { duration: 0.5 }, type: "ease", staggerChildren: 0.250, staggerDirection: -1, delay:1.5},
  },
};
type Props = {};

export const Navigation = (props: Props) => {
  return (
    <motion.div
      variants={variants}
      className="absolute overflow-clip flex h-screen w-full bg-green-400 flex-col gap-[50px] left-0 justify-center items-center "
    >
      {navs.map((icon, i) => (
        <MenuItem
          key={i}
          link={icon.link}
          enabled={icon.enabled}
          name={icon.name}
        />
      ))}
    </motion.div>
  );
};
