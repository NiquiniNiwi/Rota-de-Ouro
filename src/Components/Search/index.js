import { Box, useMediaQuery, Text, Button, useDisclosure, Modal as ChakraModal,
    ModalBody,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    Image,
    HStack,} from '@chakra-ui/react'
import { useAPI } from '../../Hooks/API';
import { LoremIpsum } from 'react-lorem-ipsum';
import { useCallback, useEffect, useState } from "react";
import { places } from '../../Examples';
import { useRoutes } from "../../Hooks/Routes";

function Searcher(){
    const {isOpen = false, onOpen, onClose} = useDisclosure();
    const {pontos, APICall } = useAPI();
    const [Place, setPlace] = useState({
        Nome: "",
        Lat: "",
        Long: ""});
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const {
        generateRoute, setDState, clearRoute, setRouteState, setDestination
    } = useRoutes();

    const selectDestination = useCallback((lat, long) => {
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
        APICall();
        // console.log("foi", destination);
        // console.log(dState);
      }, [APICall]);
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
            w={isLargerThan1440 ? "650px" : "375px"}
            overflowY="scroll"
            overflowX="hidden"
        >
            <Text
                align="center"
                fontFamily="griffy"
                fontSize={isLargerThan1440 ? "72px" : "36px"}
            >
                Procurar
            </Text>
            <HStack marginLeft="10px">
            <Text align="center" borderColor="#000" borderWidth={isLargerThan1440 ? "5px" : "2px"} borderRadius="5px" _hover={{
                bg: "#fff",
            }}>
                <Button
                    bg="#f0f0"
                    _hover={{}}
                    fontFamily="griffy"
                    fontSize={isLargerThan1440 ? "36px" : "18px"}
                    textColor={"#E6AF2E"}
                    onClick={GerarRota}
                >
                    Gerar Rota
                </Button>
            </Text>
            <Text align="center" borderColor="#000" borderWidth={isLargerThan1440 ? "5px" : "2px"} borderRadius="5px" _hover={{
                bg: "#fff",
            }}>
                <Button
                    bg="#f0f0"
                    _hover={{}}
                    fontFamily="griffy"
                    fontSize={isLargerThan1440 ? "36px" : "18px"}
                    textColor={"#E6AF2E"}
                    onClick={Clear}
                >
                    Limpar Rota/Destino
                </Button>
            </Text>
            </HStack>
            {places.map((place) => {
                return (
                <Text align="center" marginTop={isLargerThan1440 ? "15px" : "9px"} key={place.Name}>
                    <Button
                        _hover={{bg: "#000", textColor: "#6B0504"}}
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "42px" : "21px"}
                        textColor={"#E6AF2E"}
                        onClick={() => {onOpen(); setPlace(place)}}
                        key={`${place.Name}-button`}
                        w={isLargerThan1440 ? "380px" : "190px"}
                    >
                        {place.Name}
                    </Button>
                </Text>)
            })}

        </Box>
        <ChakraModal isOpen={isOpen} size="xl" onClose={onClose}>
            <ModalOverlay borderRadius="10px" />
            <ModalContent>
                <ModalHeader
                    fontSize="md"
                    borderBottom="1px solid"
                    borderColor="#E6AF2E"
                    bg="#6B0504"
                    textColor="#E6AF2E"
                    >
                    <HStack>
                    <Image boxSize="100px" src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
                    <Text fontSize="28px">
                        {Place.Name}
                    </Text>
                    </HStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody borderBottom="1px solid" borderColor="#E6AF2E" bg="#6B0504" textColor="#DDDDDD">
                    {console.log(pontos)}    
                    Descrição: <LoremIpsum p={1} /><br/>
                    Horario de funcionamento: <LoremIpsum p={1} /><br/>
                    Ingresso: sim<br/>
                    Latitude: {Place.Lat} <br/>
                    Longitude: {Place.Long}
                    </ModalBody>

                    <ModalFooter bg="#6B0504">
                    <Button
                        _hover={{bg: "#000", textColor: "#6B0504"}}
                        color="#DDDDDD"
                        onClick={onClose}
                        mr={3}
                        colorScheme="black"
                        fontSize="sm"
                        variant="outline"
                        height="20px"
                        borderRadius="sm"
                        width="100px"
                    >
                        Fechar
                    </Button>
                    <Button
                    _hover={{bg: "#000", textColor: "#6B0504"}}
                    color="#DDDDDD"
                    onClick={() => {
                        selectDestination(Place.Lat, Place.Long);
                        onClose();
                    }}
                    mr={3}
                    colorScheme="black"
                    fontSize="sm"
                    variant="outline"
                    height="20px"
                    borderRadius="sm"
                    width="100px"
                    >
                        Selecionar
                    </Button>
                </ModalFooter>
            </ModalContent>
        </ChakraModal>
        </>
    );
}

export default Searcher;