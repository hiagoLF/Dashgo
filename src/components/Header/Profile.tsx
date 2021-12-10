import React from "react";
import { Flex, Text, Box, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ showProfileData }) => {
  return (
    <Flex>
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Hiago Leão</Text>
          <Text color="gray.300" fontSize="small">
            hiagolof@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Hiago Leão"
        src="https://github.com/hiagolf.png"
      />
    </Flex>
  );
};

export default Profile;
