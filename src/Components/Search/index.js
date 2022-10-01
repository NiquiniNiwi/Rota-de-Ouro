import { Box, useMediaQuery, Text, Button } from '@chakra-ui/react'
import { useCallback, useEffect } from "react";
import { places } from '../../Examples';
import { useRoutes } from "../../Hooks/Routes";

function Searcher(){
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const {
        generateRoute, setDestination, setDState, clearRoute, setRouteState,
    } = useRoutes();

    const setPlace = useCallback((lat, long) => {
        setDestination([String(long), String(lat)]);
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

            {places.map((place) => {
                return (
                <Text align="center" marginTop={isLargerThan1440 ? "15px" : "9px"} key={place.Name}>
                    <Button
                        _hover={{}}
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor={"#E6AF2E"}
                        onClick={() => {setPlace(place.Lat, place.Long)}}
                        key={`${place.Name}-button`}
                        w={isLargerThan1440 ? "380px" : "190px"}
                    >
                        {place.Name}
                    </Button>
                </Text>)
            })}
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
        </>
    );
}

export default Searcher;