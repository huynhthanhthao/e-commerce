'use client';

import Stack from '@mui/material/Stack';

import { BackToTop } from 'src/components/animate/back-to-top';
import { ScrollProgress, useScrollProgress } from 'src/components/animate/scroll-progress';

import { HomeNews } from '../home-news';
import { HomeBanners } from '../home-banners';
import { HomeProducts } from '../home-products';
import { HomeIntroduce } from '../home-introduce';
import { HomeTestimonials } from '../home-testimonials';

// ----------------------------------------------------------------------

export function HomeView() {
  const pageProgress = useScrollProgress();

  return (
    <>
      <ScrollProgress
        variant="linear"
        progress={pageProgress.scrollYProgress}
        sx={{ position: 'fixed' }}
      />

      <BackToTop />

      <Stack sx={{ position: 'relative', bgcolor: 'background.default' }}>
        <HomeBanners />

        <HomeIntroduce />

        <HomeProducts />

        <HomeNews />

        <HomeTestimonials />
      </Stack>
    </>
  );
}
