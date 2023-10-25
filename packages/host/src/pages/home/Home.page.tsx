import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { CountedResource } from '../../redux/features/popular/types/CountedResource';

import type { RootState } from '../../redux/store';

import TrainingBall from './assets/jedi-training-ball.png';
import { home, featuredImage } from './Home.style';
import { PopularDisplayer } from './PopularDisplayer';

const sorter = (a: CountedResource, b: CountedResource) => {
  if (a.count < b.count) {
    return 1;
  }

  if (a.count > b.count) {
    return -1;
  }

  return 0;
};

const HomePage: FC = () => {
  const views = useSelector((state: RootState) => state.popular.views);

  return (
    <div css={home}>
      <div css={featuredImage}>
        <motion.div
          whileHover={{ scale: 1.2, rotate: 90 }}
          whileTap={{
            scale: 0.6,
            rotate: -90
          }}
          initial={{
            transform: 'translateY(0px)'
          }}
          animate={{
            transform: 'translateY(70px)'
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
      <div>
        <h2>Popular</h2>
        <ul>
          {views
            .sort(sorter)
            .slice(0, 3)
            .map((view: CountedResource) => (
              <PopularDisplayer key={`${view.resourceType}-${view.id}`} pageView={view} />
            ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
