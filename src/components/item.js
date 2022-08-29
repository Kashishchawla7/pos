import { click } from '@testing-library/user-event/dist/click';
import React, {useState} from 'react'
import { Row ,Col } from 'react-bootstrap';
import "./item.css"
import { Button,Card ,Modal,Box,Typography,Grid} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// const style = {
//   position: 'absolute' ,
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 1000,
//   height:400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow:1,
//   p: 4,
//   outline:0,
// };

export default function Item(props) {
  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [index,setIndex] = useState(0);
  // console.log(prod);
  const [quantity,setQuantity]=useState();
  const [count, setCount] = useState(1);
  let { cat , setCart , cart } =  props;
  const carts=[]
  const update=(item)=>{
    // setCart(cart.concat(item));
    console.log(item,cart)
    var temp = JSON.parse(JSON.stringify(cart))
    if(cart.length==0){
      temp.push(item)
    }
    else{
      var flag = 0
      temp.forEach((element,index) => {
        console.log(element)
        if(element.name==item.name){
          flag=1
          temp[index].price = parseInt(element.price) + parseInt(item.price)
        }
      });
      if(flag == 0){
        temp.push(item)
      }
    }
      setCart(JSON.parse(JSON.stringify(temp)))
    
  }
  return (
    
    
    <div  className='main'>
      {/* <Row style={{paddingLeft:0, paddingRight:0}}> */}
      <Grid container rowGap={1}  columnGap={0.2}>
        {cat.map((item)=>
      // <Col lg="4">
        <Grid cards lg={3.8}  >
          < Card >
          <div className ="display" key={item.index} onChange={(e, value) => setIndex(value)} >
            <div className="name">{item.name}</div>
{/*             
<Modal 
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  {/* <button onClick={handleClose}>^ </button> */}
  {/* <Box sx={style}>
    <Typography className="name" variant="h6" component="h2">
    {item.name}
    </Typography>
    <Typography  className="price" sx={{ mt: 2 }}>
    {item.price}
    </Typography>
  </Box>
</Modal> */}
            <div className="price">{item.price}</div>
</div>             
          <Button className="addButton" style={{width:"100%"}} variant="contained" color="primary"  size="lg" aria-label="add to shopping cart" onClick = {()=>update(item) }>ADD <AddShoppingCartIcon /></Button>
          </Card>

    </Grid>
        )}
        </Grid>
    </div>
  )
}
