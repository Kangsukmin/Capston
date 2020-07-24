import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { useFirebase, isLoaded } from 'react-redux-firebase';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import SaveIcon from '@material-ui/icons/Save';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddressForm() {
  const classes = useStyles();
  const firebase = useFirebase();
  const profile = useSelector(state => state.firebase.profile);

  const [lastNameValue, setLastName] = useState(profile.lastName);
  const [firstNameValue, setFirstName] = useState(profile.firstName);
  const [addressValue, setAddressName] = useState(profile.address);
  const [phoneValue, setPhoneName] = useState(profile.phone);

  function updateUserProfile() {
    return firebase.updateProfile({
      lastName: lastNameValue,
      firstName: firstNameValue,
      address: addressValue,
      phone: phoneValue
    })
  }

  const handleChange = ({ currentTarget: { name, value } }) => {
    switch(name){
      case "firstName":
        setFirstName(value)
        break;
      case "lastName":
        setLastName(value)
        break;
      case "address":
        setAddressName(value)
        break;
      case "phone":
        setPhoneName(value)
        break;
    }
  };


  const handleSubmit = () => {
    updateUserProfile();
    alert("수정되었습니다.");
  }

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        관리자 정보 수정
      </Typography>
      <form onSubmit={(event) => {
            event.preventDefault();
            handleSubmit();
        }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={2}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="성"
              fullWidth
              autoComplete="family-name"
              value={lastNameValue}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="이름"
              fullWidth
              autoComplete="given-name"
              value={firstNameValue}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={7}>
            <TextField
              required
              id="phone"
              name="phone"
              label="전화 번호"
              fullWidth
              autoComplete="phone number"
              value={phoneValue}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address"
              name="address"
              label="주소"
              fullWidth
              autoComplete="shipping address-line"
              value={addressValue}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              className={classes.button}
              startIcon={<SaveIcon />}
            >
              수정
            </Button>
          </Grid>
        </Grid>
      </form>
    </React.Fragment>
  );
}