import React from "react";
import { Flex, HStack, Icon, Text, Box, Avatar } from "@chakra-ui/react";
import { RiNotificationLine, RiUserAddLine } from "react-icons/ri";

const Profile: React.FC = () => {
  return (
    <Flex>
      <Box mr="4" textAlign="right">
        <Text>Hiago Leão</Text>
        <Text color="gray.300" fontSize="small">
          hiagolof@gmail.com
        </Text>
      </Box>
      <Avatar
        size="md"
        name="Hiago Leão"
        src="https://github.com/hiagolf.png"
      />
    </Flex>
  );
};

export default Profile;
