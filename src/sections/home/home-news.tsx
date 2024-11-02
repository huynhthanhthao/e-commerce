import type { BoxProps } from '@mui/material/Box';

import { m } from 'framer-motion';

import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';

import { useGetPosts } from 'src/actions/blog';

import { varFade, MotionViewport } from 'src/components/animate';

import { PostItem } from '../blog/post-item';
// ----------------------------------------------------------------------

export function HomeNews({ sx, ...other }: BoxProps) {
  const { posts } = useGetPosts();

  const renderList = posts.map((post) => <PostItem key={post.id} post={post} />);

  return (
    <Box component="section" sx={{ position: 'relative', ...sx }} {...other}>
      <MotionViewport>
        <Container>
          <m.div variants={varFade().inUp}>
            <Typography variant="h2" sx={{ my: 3, textAlign: "center" }}>
             Tin tức mới nhất
            </Typography>
          </m.div>
          <m.div variants={varFade().inUp}>
            <Typography sx={{ mx: 'auto', maxWidth: 640, color: 'text.secondary', textAlign: "center", marginBottom: 2 }}>
              Cập nhật những thông tin, xu hướng và sự kiện nổi bật mới nhất dành cho bạn. Đừng bỏ lỡ bất kỳ tin tức nào!
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