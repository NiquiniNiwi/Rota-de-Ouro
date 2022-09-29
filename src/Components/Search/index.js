import { Box, useMediaQuery, Text, Button } from '@chakra-ui/react'
import { useCallback, useEffect } from "react";
import useRoutes from "../../Hooks/Routes";
import SearchMap from '../Map/SearchMap'; 

function Searcher(){
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const {
        generateRoute, setDestination, destination, routeState, 
        polyline, dState, setDState, clearRoute, setRouteState,
    } = useRoutes();

    const SP = useCallback(() => {
        setDestination([-46.7862276,-23.6526024]);
        setRouteState(false);
        setDState(true);
    }, [setDestination, setRouteState, setDState]);

    const ITA = useCallback(() => {
        setDestination([-43.8043936,-20.2481745]);
        setRouteState(false);
        setDState(true);
    }, [setDestination, setRouteState, setDState]);

    const GerarRota = useCallback(() => {
        generateRoute();
    }, [generateRoute]);

    const Clear = useCallback(() => {
        setDState(false);
        clearRoute();
    }, [clearRoute, setDState]);
    
    useEffect(() => {
        // console.log("foi", destination);
        // console.log(dState);
      }, []);
    return (
        <>
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
            <Text
                align="center"
                fontFamily="griffy"
                fontSize={isLargerThan1440 ? "42px" : "21px"}
            >
                Procurar
            </Text>

            <Text align="center" marginTop={isLargerThan1440 ? "15px" : "9px"}>
                <Button
                    _hover={{}}
                    fontFamily="griffy"
                    fontSize={isLargerThan1440 ? "42px" : "21px"}
                    textColor={"#E6AF2E"}
                    onClick={ITA}
                >
                    Itabirito
                </Button>
            </Text>
            <Text align="center" marginTop={isLargerThan1440 ? "15px" : "9px"}>
                <Button
                    _hover={{}}
                    fontFamily="griffy"
                    fontSize={isLargerThan1440 ? "42px" : "21px"}
                    textColor={"#E6AF2E"}
                    onClick={SP}
                >
                    Sao Paulo
                </Button>
            </Text>
            <Text align="center" marginTop={isLargerThan1440 ? "15px" : "9px"}>
                <Button
                    bg="#f0f0"
                    _hover={{}}
                    fontFamily="griffy"
                    fontSize={isLargerThan1440 ? "42px" : "21px"}
                    textColor={"#E6AF2E"}
                    onClick={GerarRota}
                >
                    Gerar
                </Button>
            </Text>
            <Text align="center" marginTop={isLargerThan1440 ? "15px" : "9px"}>
                <Button
                    bg="#f0f0"
                    _hover={{}}
                    fontFamily="griffy"
                    fontSize={isLargerThan1440 ? "42px" : "21px"}
                    textColor={"#E6AF2E"}
                    onClick={Clear}
                >
                    Limpar
                </Button>
            </Text>
        </Box>
        <SearchMap teste={destination} polyline={polyline} routeState={routeState} dState={dState}/> 
        </>
    );
}

export default Searcher;