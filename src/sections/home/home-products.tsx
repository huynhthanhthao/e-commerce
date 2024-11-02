import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

import { useGetProducts } from 'src/actions/product';

import { varFade, MotionViewport } from 'src/components/animate';
import { ProductItem } from 'src/components/product/product-item';
// ----------------------------------------------------------------------

export function HomeProducts({ sx, ...other }: BoxProps) {
  const { products } = useGetProducts();

  const renderList = products.map((product) => <ProductItem key={product.id} product={product} />);

  return (
    <Box component="section" sx={{ position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        <Container>
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3, textAlign: "center" }}>
              Sản phẩm bán chạy
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary', textAlign: "center", marginBottom: 2 }}>
                Khám phá những sản phẩm được yêu thích nhất của chúng tôi, được chọn lọc dựa trên đánh giá và sự
                tin tưởng của khách hàng.
            </Typography>
          </m.div>
          <Box
            gap={3}
            display="grid"
            gridTemplateColumns="repeat(4, 1fr)"
          >
            { renderList }
          </Box>
        </Container>
      </MotionViewport>
    </Box>
  );
}