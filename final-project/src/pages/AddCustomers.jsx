import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const AddCustomers =({addCustomers})=>{
    const [open, setOpen] = useState(false);
    const [customers, setCustomers] = useState([{
        city: '',
        email: '',
        lastname: '',
        firstname: '',
        phone: '',
        postcode: '',
        streetaddress: ''
    }]);
    const handleClickOpen = () => {
        setOpen(true);
      };
    
      const handleClose = () => {
        setOpen(false);
      };
    
      const handleSave = () => {
        addCustomers(customers);
        handleClose();
      }
    return(
        <>
            <Button variant="outlined" onClick={handleClickOpen}>
        Add Customers
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        >
        <DialogTitle>New Customers</DialogTitle>
        <DialogContent>
            <TextField
            margin="dense"
            label="city"
            value={customers.city}
            onChange={e => setCustomers({...customers, city: e.target.value})}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="email"
            value={customers.email}
            onChange={e => setCustomers({...customers, email: e.target.value})}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="lastname"
            value={customers.lastname}
            onChange={e => setCustomers({...customers, lastname: e.target.value})}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="firstname"
            value={customers.firstname}
            onChange={e => setCustomers({...customers, firstname: e.target.value})}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="phone"
            value={customers.phone}
            onChange={e => setCustomers({...customers, phone: e.target.value})}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="postcode"
            value={customers.postcode}
            onChange={e => setCustomers({...customers, postcode: e.target.value})}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            label="streetaddress"
            value={customers.streetaddress}
            onChange={e => setCustomers({...customers, streetaddress: e.target.value})}
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
        </>
    )
}