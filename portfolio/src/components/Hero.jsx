import { motion } from "framer-motion";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Hero = ({ setScrolled }) => {
  return (
    <section className='relative w-full h-screen mx-auto flex'>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div className='flex-1'>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#915EFF]'>Robert</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            DevOps | Full Stack SWE
          </p>
        </div>

        <div className='flex-[0.3] hidden sm:flex flex-col gap-4'>
          {navLinks.map((nav) => (
            <motion.div
              key={nav.id}
              className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
              whileHover={{ rotate: 2, scale: 1.05 }}
              onClick={() => window.location.href = (nav.id === 'resume' ? "https://docs.google.com/document/d/1ea8a87A0YUunKEH5PcSqNYv_KRnEiMb8/edit?usp=sharing&amp;ouid=106085705588624337979&amp;rtpof=true&amp;sd=true" : `#${nav.id}`)}
            >
              <a
                href={nav.id === 'resume' ? "https://docs.google.com/document/d/1ea8a87A0YUunKEH5PcSqNYv_KRnEiMb8/edit?usp=sharing&amp;ouid=106085705588624337979&amp;rtpof=true&amp;sd=true" : `#${nav.id}`}
                className='block text-black font-medium p-4'
              >
                {nav.title}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
