import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';

export const  EditCustomers =({ data, updateCustomers })=> {
  const [open, setOpen] = useState(false);
  const [customers, setCustomers] = useState({
    city: '',
    email: '',
    lastname: '',
    firstname: '',
    phone: '',
    postcode: '',
    streetaddress: ''
  });
  const handleClickOpen = () => {
    setOpen(true);
    setCustomers({
        city: data.city,
        email: data.email,
        lastname: data.lastname,
        firstname: data.firstname,
        phone: data.phone,
        postcode: data.postcode,
        streetaddress: data.streetaddress
    })
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    updateCustomers(data._links.customer.href, customers);
    handleClose();
  }

        return (
    <>
        <Button size="small" onClick={handleClickOpen}>
        Edit
        </Button>
        <Dialog
        open={open}
        onClose={handleClose}
        > 
        <DialogTitle>Update customers</DialogTitle>
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
    );
}