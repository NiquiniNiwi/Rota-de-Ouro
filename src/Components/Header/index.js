import { Box, Text, HStack, useMediaQuery, Button } from "@chakra-ui/react";
import { useCallback } from "react";
import useHeader from "../../Hooks/Header/index,";
import Searcher from "../Search";
import AboutComponent from "../About";

function Header(){
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const {Search, setSearch, Home, setHome, About, setAbout} = useHeader();

    const UpdateHome = useCallback(() => {
        setHome(true);
        setSearch(false);
        setAbout(false);
    }, [setAbout, setHome, setSearch]);
    
    const UpdateSearch = useCallback(() => {
        setHome(false);
        setSearch(true);
        setAbout(false);
    }, [setAbout, setHome, setSearch]);
    
    const UpdateAbout = useCallback(() => {
        setHome(false);
        setSearch(false);
        setAbout(true);
    }, [setAbout, setHome, setSearch]);
    return (
        <>
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
                <Box
                    cursor="pointer"
                    marginLeft="5vw"
                    w={isLargerThan1440 ? "300px" : "150px"}
                    onClick={UpdateHome}
                >
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
            <>
                {Search && (<Searcher />)}
                {About && (<AboutComponent />)}
            </>
        </>
        
    );
}

export default Header;