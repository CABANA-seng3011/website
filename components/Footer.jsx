import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';

function Footer() {
  return (
    <AppBar height={500} position="static" sx={{ marginTop: 'auto', width: '100%' }}>
      <Toolbar sx={{ backgroundColor: '#2d325a'}}>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;