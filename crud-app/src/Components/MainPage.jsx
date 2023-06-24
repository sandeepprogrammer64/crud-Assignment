import { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Text,
  Skeleton,
  useToast,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { DeleteIcon } from "@chakra-ui/icons";

import EditUserForm from "./EditUserForm";

const MainPage = () => {
  const toast = useToast();

  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("https://mock-server-5oy4.onrender.com/users");
        setUsers(response.data);
      } catch (error) {
        console.error(error);

        toast({
          title: "Error",
          description: "An error occurred while fetching users.",
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, [toast]);

  const handleEditUser = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
  };

  const handleUserUpdate = (updatedUser) => {
    setUsers((prevUsers) => {
      return prevUsers.map((user) => {
        if (user.id === updatedUser.id) {
          return updatedUser;
        }
        return user;
      });
    });

    toast({
      title: "User updated",
      description: "User information has been updated.",
      status: "success",
      duration: 3000,
      isClosable: true,
    });

    setIsEditModalOpen(false);
  };

  const handleDeleteUser = async (userId) => {
    try {
      await axios.delete(`https://mock-server-5oy4.onrender.com/users/${userId}`);

      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));

      toast({
        title: "User deleted",
        description: "User has been deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(error);

      toast({
        title: "Error",
        description: "An error occurred while deleting the user.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="600px" margin="0 auto">
      {isLoading ? (
        <SimpleGrid columns={1} spacing={4} mt={4}>
          <Skeleton height="20px" />
          <Skeleton height="20px" />
          <Skeleton height="20px" />
        </SimpleGrid>
      ) : (
        <SimpleGrid columns={1} spacing={4} mt={4}>
          {users.map((user) => (
            <Box
              key={user.id}
              borderWidth="1px"
              borderRadius="md"
              p={4}
              boxShadow="md"
            >
              <Text fontWeight="bold">{user.name}</Text>
              <Text>{user.email}</Text>
              <Text>{user.phone}</Text>
              <Button colorScheme="blue" onClick={() => handleEditUser(user)}>
                Edit
              </Button>
              <Button
                colorScheme="red"
                variant="outline"
                onClick={() => handleDeleteUser(user.id)}
              >
                <DeleteIcon />
              </Button>
            </Box>
          ))}
        </SimpleGrid>
      )}

      <EditUserForm
        user={selectedUser}
        isOpen={isEditModalOpen}
        onClose={handleCloseEditModal}
        onUpdate={handleUserUpdate}
      />
    </Box>
  );
};

export default MainPage;
