import { Flex, Text, Input, Icon, HStack, Box, Avatar } from "@chakra-ui/react";
import Logo from "../Header/Logo";
import NotificationsNav from "../Header/NotificationsNav";
import Profile from "../Header/Profile";

const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile />
      </Flex>
    </Flex>
  );
};

export default Header;
