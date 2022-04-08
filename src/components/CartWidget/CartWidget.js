import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import {useContext} from 'react'
import CartContext from '../../context/CartContext';
import '../CartWidget/CartWidget.css'
import DeleteIcon from '@mui/icons-material/Delete';
import Divider from '@mui/material/Divider';


export default function CartWidget() {
  const { cartProductos } = useContext(CartContext)

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
    return (
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 0 }}>
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <img src='/img/cartwhite.svg' alt='Carrito de compras'/>
              <p style={{color:'white'}}>{cartProductos.length}</p>
            </IconButton>
            <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <p className='tituloCartWidget'>CARRITO DE COMPRAS</p>
                <Divider>
                {cartProductos.map( (cartProducto) => {
                  return(
                    <MenuItem key={cartProducto.id} className='item-cart-modal' onClick={handleCloseUserMenu}>
                      <div className='item-cart-modal__img'>
                          <img src={`${cartProducto.img}`}  alt="imagen producto"/> 
                      </div>
                      <div className='item-cart-modal__info'>
                          <p>{cartProducto.title}</p>
                          {/* <p>{cartProducto.contador}</p> */}
                          <span>$ {cartProducto.price}</span>
                      </div>
                      <div className='item-cart-modal__action'>
                          <DeleteIcon />
                      </div>
                    </MenuItem>
                  ) } ) 
                }
                </Divider>
                <button className='botonIniciarCompra' >INICIAR COMPRA</button>
            </Menu>
        </Box>
      </Toolbar>
    );
  };

        