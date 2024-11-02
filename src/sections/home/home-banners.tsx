import type { BoxProps } from '@mui/material/Box';

// eslint-disable-next-line import/no-extraneous-dependencies
import Slider from "react-slick";

import Box from '@mui/material/Box';
import { CardMedia } from '@mui/material';
import Container from '@mui/material/Container';

import { MotionViewport } from 'src/components/animate';

// ----------------------------------------------------------------------

export function HomeBanners({ sx, ...other }: BoxProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Box component="section" sx={{ position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        <Container >
          <Slider {...settings}>
            {
              BANNERS.map(banner => (
                <CardMedia
                  component="img"
                  image={ banner.photoURL }
                  alt={ banner.description }
                />
              ))
            }
          </Slider>
        </Container>
      </MotionViewport>
    </Box>
  );
}

const BANNERS = [
    {
      photoURL: 'https://marketplace.canva.com/EAGLaWLteqY/1/0/1600w/canva-%E1%BA%A3nh-b%C3%ACa-facebook-sale-8.8-khuy%E1%BA%BFn-m%C3%A3i-%E1%BA%A5n-t%C6%B0%E1%BB%A3ng-hi%E1%BB%87n-%C4%91%E1%BA%A1i-%C4%91%E1%BB%8F-cam-6rydwGgZXv4.jpg',
      description: `Banner 1`,
      linkTo: `/`,
    },
    {
      photoURL: 'https://marketplace.canva.com/EAGNL33DhP4/1/0/800w/canva-cam-r%E1%BB%B1c-r%E1%BB%A1-%C4%91%C6%A1n-gi%E1%BA%A3n-ch%E1%BB%AF-khuy%E1%BA%BFn-m%C3%A3i-facebook-banner-sXCpHBRPvLU.jpg',
      description: `Banner 2`,
      linkTo: `/`,
    },
    {
      photoURL: 'https://marketplace.canva.com/EAD0a31QZj8/1/0/800w/canva-tr%C3%A1i-c%C3%A2y-%E1%BA%A3nh-%E1%BA%A3nh-gh%C3%A9p-th%E1%BB%A9c-%C4%83n-%E1%BA%A3nh-b%C3%ACa-facebook-BhntfQov1kw.jpg',
      description: `Banner 2`,
      linkTo: `/`,
    },
];
