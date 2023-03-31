import { Variants } from "framer-motion";

const NavAppContainerVariants: Variants = {
  inactive: {
    opacity: 0,
    x: "-100%",
  },
  active: {
    opacity: 1,
    x: 0,
  },
};

const NavAppBgVariants: Variants = {
  inactive: {
    opacity: 0,
  },
  active: {
    opacity: 1,
  },
};

export { NavAppContainerVariants, NavAppBgVariants };
