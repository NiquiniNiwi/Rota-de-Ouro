import { Box, Text, HStack, useMediaQuery, Button } from "@chakra-ui/react";
import { useCallback, useState } from "react";

function Header(){
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const [Home, setHome] = useState(true);
    const [Search, setSearch] = useState(false);
    const [About, setAbout] = useState(false);

    const UpdateHome = useCallback(() => {
        setHome(true);
        setSearch(false);
        setAbout(false);
    }, []);
    
    const UpdateSearch = useCallback(() => {
        setHome(false);
        setSearch(true);
        setAbout(false);
    }, []);
    
    const UpdateAbout = useCallback(() => {
        setHome(false);
        setSearch(false);
        setAbout(true);
    }, []);
    return (
        <HStack
            bg="#6B0504"
            borderColor="#002927"
            borderWidth="2px"
            overflow="unset"
            pos="absolute"
            zIndex="2"
            w="100%"
            h={isLargerThan1440 ? "150px" : "90px"}
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
                    <Button   
                        bg={Home ? "#A3320B" : ""}
                        _hover={{}}                  
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor={Home ? "#E6AF2E" : "#EBFFFA"}
                        onClick={UpdateHome}
                    >
                        Home
                    </Button>
                    <Button   
                        bg={Search ? "#A3320B" : ""}
                        _hover={{}}                  
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor={Search ? "#E6AF2E" : "#EBFFFA"}
                        onClick={UpdateSearch}
                    >
                        Procurar
                    </Button>
                    <Button   
                        bg={About ? "#A3320B" : ""}
                        _hover={{}}                  
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor={About ? "#E6AF2E" : "#EBFFFA"}
                        onClick={UpdateAbout}
                    >
                        Sobre
                    </Button>
                </HStack>
            </Box>
        </HStack>
    );
}

export default Header;