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
import {Link} from 'react-router-dom'


export default function CartWidget() {
    const { cartProductos, deleteProducto, clearCart, calcularTotal, cantProdCarrito } = useContext(CartContext)
    
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
              <p style={{color:'white'}}>{cartProductos.length > 0 && cantProdCarrito()}</p>
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
                        {cartProductos.map( (cartProducto) => {
                          return(
                            <div>
                              <Divider></Divider>
                              <MenuItem key={cartProducto.id} className='item-cart-modal' onClick={handleCloseUserMenu}>
                                <div>
                                    <img className='detalleImg' src={`${cartProducto.img}`}  alt="imagen producto"/> 
                                </div>
                                <div className='detalleProducto'>
                                    <p>{cartProducto.title}</p>
                                    <p>Cant:{cartProducto.quantity}</p>
                                    <span>${cartProducto.price}</span>
                                </div>
                                <button style={{margin:20}} onClick={() => deleteProducto(cartProducto)}>
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
                (<div> 
                    <h4 style={{textAlign: 'center'}}>TOTAL DE LA COMPRA: $ {calcularTotal()}</h4>
                    <button className='botonIniciarCompra' onClick={clearCart}>VACIAR CARRITO</button>
                    <button className='botonIniciarCompra' ><Link to={`/productos`}>SEGUIR COMPRANDO</Link></button>
                </div>)
            }   
            </Menu>
        </Box>
      </Toolbar>
    );
  };