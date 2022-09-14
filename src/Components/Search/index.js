import { Box, useMediaQuery, Text } from '@chakra-ui/react'

function Searcher(){
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Box
            borderRightRadius="10px"
            bg="#6B0504"
            borderColor="#002927"
            borderWidth="2px"
            color="#EBFFFA"
            zIndex="3"
            pos="absolute"
            marginTop={isLargerThan1440 ? "150px" : "90px"}
            h={isLargerThan1440 ? "740px" : "370px"}
            w={isLargerThan1440 ? "550px" : "275px"}
        >
            <Text align="center">
                Search
            </Text>
        </Box>
    );
}

export default Searcher;