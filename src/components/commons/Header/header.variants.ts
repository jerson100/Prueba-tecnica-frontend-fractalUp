import { Variants } from "framer-motion";

const HeaderVariants: Variants = {
  inactive: {
    opacity: 0,
    x: 0,
  },
  active: {
    opacity: 1,
    x: "-200px",
  },
};

export { HeaderVariants };
