import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { auth } from "../../../firebase/firebase.utils";
import CartIcon from "../../cart/icon/index";
import CartDropdown from "../../cart/dropdown/index";
import { ReactComponent as Logo } from "../../../assets/logo.svg";
import { selectCurrentUser } from "../../../config/redux/reducers/user/user-selectors";
import { selectCartHidden } from "../../../config/redux/reducers/cart/cart-selectors";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
  OptionDiv,
} from "./style";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to='/'>
      <Logo className='logo' />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to='/shop'>Shop</OptionLink>
      <OptionLink to='/shop'>CONTACT</OptionLink>
      {currentUser ? (
        <OptionDiv onClick={() => auth.signOut()}>Sign Out</OptionDiv>
      ) : (
        <OptionLink to='signin'>Sign In</OptionLink>
      )}
      <CartIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
