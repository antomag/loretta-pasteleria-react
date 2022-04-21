import React, {useContext} from 'react';
import {Link} from 'react-router-dom'
//mui
import {Box, Toolbar, IconButton, Divider, Menu, MenuItem } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
//components
import CartContext from '../../context/CartContext';
//css
import '../CartWidget/CartWidget.css'

export default function CartWidget() {
    const { cartProductos, deleteProducto, clearCart, calcularTotal} = useContext(CartContext)
    
    //logica modal cart
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
                <div>
                  <p className='tituloCartWidget'>CARRITO DE COMPRAS</p>
                  {
                  (cartProductos.length === 0)
                  &&
                  (<div>
                      <p style={{textAlign: 'center', margin:10}}>Vacio :(</p>
                      <button className='botonIniciarCompra'><Link to={`/productos`}>INICIAR COMPRA</Link></button>
                  </div>)
                  }
                  {
                      <div className='modalCart'>
                          {cartProductos.map( (cartProducto, i) => {
                            return(
                              <div key={i}>
                                <Divider></Divider>
                                <MenuItem onClick={handleCloseUserMenu}>
                                  <div>
                                      <img className='detalleImg' src={`/img/${cartProducto.img}`}  alt="imagen producto"/> 
                                  </div>
                                  <div className='detalleProducto'>
                                      <p>{cartProducto.title}</p>
                                      <p>Cant:{cartProducto.quantity}</p>
                                      <p>${cartProducto.price}</p>
                                  </div>
                                  <button style={{margin:20}} onClick={() => deleteProducto(cartProducto.id)}>
                                    <DeleteIcon/>
                                  </button>
                                </MenuItem>
                              </div>
                            ) } ) 
                          }
                      </div>
                  }
                  {
                  (cartProductos.length >= 1)
                  &&
                  (<> 
                      <h4 style={{textAlign: 'center'}}>TOTAL DE LA COMPRA: $ {calcularTotal()}</h4>
                      <button className='botonIniciarCompra' onClick={clearCart}>VACIAR CARRITO</button>
                      <button className='botonIniciarCompra' ><Link to={`/productos`}>SEGUIR COMPRANDO</Link></button>
                  </>)
                  }
                </div>  
            </Menu>
        </Box>
      </Toolbar>
    );
  };