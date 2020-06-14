import React from 'react';
import {
  makeStyles,
  Card,
  CardContent,
  Typography,
  TextField,
  Link,
  Button,
  Select,
  MenuItem,
  Container
} from '@material-ui/core';

// import { ReactComponent as GoogleIcon } from 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/408px-Google_2015_logo.svg.png 1.5x, https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/544px-Google_2015_logo.svg.png 2x';
// // import './DemoSigin.css';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '60px',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '10px',
    width: '448px',
    height: '500px',
    padding: '48px, 36px, 40px',
    postion: 'relative'
  },
  paper: {
    marginTop: theme.spacing(1),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  icon: {
    width: '74px',
    height: '60px'
  },
  siginText: {
    fontFamily: 'Noto Sans Myanmar UI',
    fontWeight: '400',
    fontSize: '24px',
    lineHeight: '32px',
    color: '#202124'
  },
  googleAccountText: {
    marginTop: '5px',
    fontFamily: 'Roboto',
    fontWeight: '400px',
    fontSize: '16px',
    lineHeight: '24px',
    color: '#202124',
    fontStyle: 'Normal'
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(2)
  },
  textField: {
    margin: '10px 30px',
    paddingTop: '10px',
    paddingLeft: '5px',
    paddingRight: '5px',
    paddingBottom: '0',
    marginBottom: '2px',
    width: '85%',
    height: '25%'
  },
  shrink: {
    translate: (theme.spacing(2), '1px'),
    scale: '0.75'
  },
  forgotEmail: {
    color: '#1a73e8',
    padding: '0px 36px',
    fontSize: '14px',
    fontWeight: '500'
  },
  guest: {
    paddingTop: '35px',
    paddingLeft: '35px'
  },
  guestText: {
    fontFamily: 'Roboto',
    fontSize: '14px',
    fontWeight: '400',
    color: '#5f6368',
    letterSpacing: '0.1px'
  },
  learnMore: {
    color: '#1a73e8',
    fontSize: '14px',
    fontWeight: '500'
  },
  submitBox: {
    marginTop: theme.spacing(3),
    paddingTop: theme.spacing(3),
    paddingLeft: theme.spacing(4)
  },
  createAccount: {
    color: '#1a73e8',
    fontSize: '14px',
    fontWeight: '500',
    paddingRight: '150px'
  },
  nextBtn: {
    margin: theme.spacing(1),
    backgroundColor: '#1a73e8',
    color: '#fff',
    height: '40px',
    width: '60px'
  },
  footer: {
    paddingLeft: '0px',
    paddingRight: '0px'
  },
  selectEmpty: {
    fontSize: '12px'
  },
  footerLinks: {
    display: 'inline'
  },
  linkFooter: {
    fontSize: '12px',
    paddingRight: '40px',
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#757575',
  },
  helpText: {
    paddingLeft: '108px',
    paddingRight: '40px',
    fontSize: '12px',
    fontWeight: '500',
    fontStyle: 'normal',
    color: '#757575',
  },
  termText: {
    paddingRight: '0px',
    fontSize: '12px',
    fontWeight: '500',
    color: '#757575',
    fontStyle: 'normal',
  }
}));

export default function DemoSigin() {
  const classes = useStyles();
  const preventDefault = event => event.preventDefault();
  const [age, setAge] = React.useState('');
  const handleChange = event => {
    setAge(event.target.value);
  };

  return (
    <div>
      <Card className={classes.root} variant='outlined'>
        <CardContent className={classes.paper}>
          <div>
            {/*<GoogleIcon className={classes.icon} />*/}
          </div>
          <Typography component='h1' variant='h5' className={classes.siginText}>
            Sign in
          </Typography>
          <Typography component='h4' className={classes.googleAccountText}>
            Use your Google Account
          </Typography>

          <form className={classes.form}>
            <TextField
              variant='outlined'
              margin='normal'
              required
              id='email'
              label='Email or phone'
              name='email'
              fullWidth
              autoComplete='email'
              size='medium'
              className={classes.textField}
              autoFocus
            ></TextField>
            <Typography component='h4'>
              <Link
                href='#'
                onClick={preventDefault}
                className={classes.forgotEmail}
                underline='none'
              >
                Forgot email?
              </Link>
            </Typography>
            <div className={classes.guest}>
              <Typography variant='subtitle2' className={classes.guestText}>
                Not your computer? Use Guest mode to sign in privately.
              </Typography>
              <Typography component='h4'>
                <Link
                  href='#'
                  onClick={preventDefault}
                  className={classes.learnMore}
                  underline='none'
                >
                  Learn more
                </Link>
              </Typography>
            </div>
            <div className={classes.submitBox}>
              <Typography component='h4'>
                <Link
                  href='#'
                  onClick={preventDefault}
                  className={classes.createAccount}
                  underline='none'
                >
                  Create account
                </Link>
                <Button
                  variant='contained'
                  size='large'
                  component='span'
                  className={classes.nextBtn}
                >
                  Next
                </Button>
              </Typography>
            </div>
          </form>
        </CardContent>
      </Card>
      <Container maxWidth='xs' className={classes.footer}>
        <Select
          value={age}
          onChange={handleChange}
          displayEmpty
          disableUnderline
          className={classes.selectEmpty}
        >
          <MenuItem value=''>English (United Kingdom)</MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
        <section className={classes.footerLinks}>
          <Link href='#' onClick={preventDefault} className={classes.helpText}>
            Help
          </Link>
          <Link
            href='#'
            onClick={preventDefault}
            className={classes.linkFooter}
          >
            Privacy
          </Link>
          <Link href='#' onClick={preventDefault} className={classes.termText}>
            Term
          </Link>
        </section>
      </Container>
    </div>
  );
}
