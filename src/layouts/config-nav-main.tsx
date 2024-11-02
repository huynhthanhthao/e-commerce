import { paths } from 'src/routes/paths';

import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export const navData = [
  { title: 'Trang chủ', path: '/', icon: <Iconify width={22} icon="solar:home-2-bold-duotone" /> },
  { title: 'Về chúng tôi', path: paths.about, icon: <Iconify width={22} icon="mdi:about" /> },
  { title: 'Sản phấm', path: paths.product.root, icon: <Iconify width={22} icon="ant-design:product-filled" /> },
  { title: 'Tin tức', path: paths.post.root, icon: <Iconify width={22} icon="material-symbols:news-sharp" /> },
  { title: 'Liên hệ', path: paths.contact, icon: <Iconify width={22} icon="bxs:contact" /> },
];
