import React, { ElementType } from "react";
import {
  Text,
  Link as ChakraLink,
  Icon,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: ElementType;
  href: string;
}

const NavLink: React.FC<NavLinkProps> = ({ icon, children, href, ...rest }) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};

export default NavLink;
