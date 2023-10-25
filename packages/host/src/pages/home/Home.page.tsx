import { motion } from 'framer-motion';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';

import { CountedResource } from '../../redux/features/popular/types/CountedResource';
import type { RootState } from '../../redux/store';
import TrainingBall from './assets/jedi-training-ball.png';
import { home, featuredImage, popularViews } from './Home.style';
import { PopularDisplayer } from './PopularDisplayer';

const AMOUNT_OF_POPULAR_ITEMS_ON_SCREEN = 3;

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
  const sortedViews = [...views].sort(sorter).slice(0, AMOUNT_OF_POPULAR_ITEMS_ON_SCREEN);

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
            translateY: '0',
            scale: 0.2,
            rotate: -90
          }}
          animate={{
            translateY: '70px',
            scale: 0.6,
            rotate: 90
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
      <div css={popularViews}>
        {sortedViews.length > 0 && <h2>Popular visits from you:</h2>}
        <ul>
          {sortedViews.map((view: CountedResource) => (
            <PopularDisplayer key={`${view.resourceType}-${view.id}`} pageView={view} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
