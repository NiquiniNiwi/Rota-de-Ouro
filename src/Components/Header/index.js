import { Box, Text, HStack, useMediaQuery } from "@chakra-ui/react";

function Header(){
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)')
    return (
        <HStack
            bg="#6B0504"
            borderColor="#002927"
            borderWidth="2px"
            overflow="unset"
            pos="absolute"
            zIndex="2"
            w="100%"
            >
            <Box marginLeft="5vw" w={isLargerThan1440 ? "300px" : "150px"}>
                <Text
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "51px" : "25.5px"}
                        textColor="#E6AF2E"
                    >
                    Rota de ouro
                </Text>
            </Box>
            <Box>
                <HStack
                    marginLeft={isLargerThan1440 ? "120px" : "60px"}
                    marginTop={isLargerThan1440 ? "76px" : "38px"}
                    spacing={isLargerThan1440 ? "130px" : "75px"}
                >
                    <Text
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor="#EBFFFA"
                    >
                        Home
                    </Text>
                    <Text
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor="#EBFFFA"
                    >
                        Procurar
                    </Text>
                    <Text
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor="#EBFFFA"
                    >
                        Sobre
                    </Text>
                </HStack>
            </Box>
        </HStack>
    );
}

export default Header;