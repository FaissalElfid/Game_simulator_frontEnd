import {
    NavLink as RouterLink,
    matchPath,
    useLocation
  } from 'react-router-dom';
  import PropTypes from 'prop-types';
  import { Button, ListItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

  const useStyles = makeStyles((theme) => ({
    buttonLink: {
        color: theme.palette.text.secondary,
        fontWeight: 'medium',
        justifyContent: 'flex-start',
        letterSpacing: 0,
        textTransform: 'none',
        width: '100%',
        
        // ...(active && {
        //   color: 'primary.main'
        // }),
        '& svg': {
          mr: 1
      }
    },
    buttonLinkActive: {
      color: theme.palette.primary.main,
     
  },
  title: {
    fontSize: 17,
    marginLeft: 10,
  }
  }));
  const NavItem = ({
    href,
    icon: Icon,
    title,
    ...rest
  }) => {
    const location = useLocation();
  
    const active = matchPath(location.pathname, {
      path: href,
      exact: true
    });
    const classes = useStyles();
    return (
      <ListItem
        disableGutters
        sx={{
          display: 'flex',
          py: 0
        }}
        {...rest}
      >
        <Button
          component={RouterLink}
          className={clsx({[classes.buttonLinkActive]: active}, classes.buttonLink)}
          to={href}
        >
          {Icon && (
            <Icon size="20" />
          )}
          <span className={classes.title}>
            {title}
          </span>
        </Button>
      </ListItem>
    );
  };
  
  NavItem.propTypes = {
    href: PropTypes.string,
    icon: PropTypes.elementType,
    title: PropTypes.string
  };
  
  export default NavItem;
  