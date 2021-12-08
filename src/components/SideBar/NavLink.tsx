import React, { ElementType } from "react";
import {
  Box,
  Stack,
  Text,
  Link,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, children, ...rest }) => {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};

export default NavLink;
