import { motion } from 'framer-motion';
import React from 'react';

import TrainingBall from './assets/jedi-training-ball.png';
import { home, featuredImage } from './Home.style';

function HomePage() {
  return (
    <div css={home}>
      <div css={featuredImage}>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.8,
            rotate: -90,
            borderRadius: '100%'
          }}
          initial={{
            marginTop: '0px'
          }}
          animate={{
            marginTop: '50px'
          }}
          transition={{
            repeat: Infinity,
            repeatType: 'mirror',
            duration: 2,
            ease: 'easeInOut'
          }}
        >
          <img src={TrainingBall} alt="Jedi Training Ball" />
        </motion.div>
      </div>
    </div>
  );
}

export default HomePage;
