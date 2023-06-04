import { Box, Typography } from '@mui/material';

const Footer = () => (
  <Box sx={{ mt: 'auto' }}>
    <Typography
      variant="caption"
      sx={{
        p: 2,
        display: 'block',
        textAlign: 'center',
      }}
    >
      All right reserved 2023
    </Typography>
  </Box>
);

export default Footer;
