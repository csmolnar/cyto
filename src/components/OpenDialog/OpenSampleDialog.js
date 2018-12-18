import React, { Component } from 'react';
import styles from './OpenSampleDialog.css';
import { withStyles } from '@material-ui/core/styles';
import {
  Avatar,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography
} from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CIFAR10 from './CIFAR-10.png';
import CIFAR100 from './CIFAR-100.png';
import MNIST from './MNIST.png';
import CloseIcon from '@material-ui/icons/Close';

class OpenSampleDialog extends Component {
  render() {
    const { classes, open, onClose } = this.props;

    return (
      <Dialog fullWidth={true} maxWidth="sm" open={open}>
        <DialogTitle disableTypography className={classes.dialogTitle}>
          <Typography variant="h6">&nbsp;</Typography>

          <IconButton
            aria-label="Close"
            className={classes.closeButton}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        <DialogContent classes={{ root: classes.dialogContent }}>
          <List>
            <ListItem button onClick={onClose}>
              <ListItemAvatar>
                <Avatar src={CIFAR10}>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="CIFAR-10"
                secondary="The CIFAR-10 dataset contains 60,000 32×32 color photographs in 10 different categories. There are 6,000 images of each category. The categories are completely mutually exclusive."
              />
            </ListItem>

            <ListItem button onClick={onClose}>
              <ListItemAvatar>
                <Avatar src={CIFAR100}>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="CIFAR-100"
                secondary="The CIFAR-100 dataset consists of 60,000 32 × 32 color photographs in 100 classes."
              />
            </ListItem>

            <ListItem button onClick={onClose}>
              <ListItemAvatar>
                <Avatar src={MNIST}>
                  <AddIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="MNIST"
                secondary="The MNIST dataset consists of 60,000 18 × 18 handwritten digits in 10 classes."
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions />
      </Dialog>
    );
  }
}

export default withStyles(styles, { withTheme: true })(OpenSampleDialog);
