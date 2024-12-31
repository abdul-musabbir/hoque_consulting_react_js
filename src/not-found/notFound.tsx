import Header from "@/components/Header";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
export default function NotFound() {
  return (
    <motion.div>
      <Header />
      <div className="w-full h-screen flex items-center justify-center flex-col space-y-4">
        <motion.h2
          initial="hidden"
          variants={fadeIn("right", 0.5)}
          animate={"visible"}
          className="font-bold text-5xl"
        >
          404 Not Found
        </motion.h2>
        <motion.div
          initial="hidden"
          variants={fadeIn("left", 0.5)}
          animate={"visible"}
        >
          <NavLink
            to={"/"}
            className="bg-greens text-blacks text-lg font-medium px-6 py-2 rounded-xl cursor-pointer"
          >
            Go to Home
          </NavLink>
        </motion.div>
      </div>
    </motion.div>
  );
}
