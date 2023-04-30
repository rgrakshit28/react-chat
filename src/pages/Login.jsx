import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  Link,
  useToast,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const body = { email, password };
      await axios.post("/api/user/login", body);
      navigate("/");
    } catch (error) {
      toast({ title: error.response.data?.message, status: "error", duration: 3000 });
    }
  };

  return (
    <Flex height={"100vh"} align={"center"} justify={"center"} bg={"#1B1C24"}>
      <Stack width={{ base: "70vw", md: "50vw", lg: "30vw" }} spacing="5">
        <Stack align={"center"} py="5">
          <Heading fontSize={"4xl"} color={"white"}>Login</Heading>
        </Stack>
        <Box rounded={"xl"} bg={"white"} p={8}>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" isRequired value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>

              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" isRequired value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
            </Stack>
            <Stack mt={5}>
              <Button type="submit" bg={"blue.500"} color={"white"} _hover={{ bg: "blue.900" }}>
                Login
              </Button>
            </Stack>
          </form >
          <Stack spacing={4} mt={5}>
            <Text fontSize={"md"} color={"gray.500"} align={"center"}>
              Dont have an account?{" "}
              <Link as={RouterLink} to="/signup" color={"blue.500"}>
                Signup
              </Link>
            </Text>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Login;
