import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Props = {
  enabled: boolean;
  name: string;
  link: string;
};

const variants = {
  open: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    scale: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function MenuItem({ enabled, link, name }: Props) {
  return (
    <motion.div variants={variants} className='flex  gap-[27px]'>
      {enabled?
      <Link to={link}>
        <div className='navText '>{name}</div>
      </Link>:<div className='navText '>{name}</div>}
      
    </motion.div>
  );
}
