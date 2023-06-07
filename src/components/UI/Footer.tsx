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
      Open-source project by kar-codes on{' '}
      <a className="githubLink" href="https://github.com/kar-codes/cat-facts-app" target="_blank">
        github
      </a>
    </Typography>
  </Box>
);

export default Footer;
