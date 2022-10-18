import { Box, useMediaQuery, Text, Button, useDisclosure, Modal as ChakraModal,
    ModalBody,
    ModalOverlay,
    ModalHeader,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    Image,
    HStack,
    Input,
    IconButton,} from '@chakra-ui/react'
import { useAPI } from '../../Hooks/API';
import { BsSearch } from "react-icons/bs";
// import { LoremIpsum } from 'react-lorem-ipsum';
import { useCallback, useEffect, useState } from "react";
// import { places } from '../../Examples';
import { useRoutes } from "../../Hooks/Routes";

function Searcher(){
    let estado;
    const [input, setInput] = useState("");
    const [error, setError] = useState("-");
    const {isOpen = false, onOpen, onClose} = useDisclosure();
    const {pontos} = useAPI();
    const [Place, setPlace] = useState({
        name: "",
        description: "",
        latitude: "",
        longitude: "",
        opening_hours: "",
        payment_kind: "",
        imagen: "",
        });
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');
    const handleChange = event => {
        setInput(event.target.value);
        setError("-");
    }
    const handleSubmit = useCallback(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        estado = pontos.data.length;
        pontos.data.map((ponto) => {
            if(ponto.name.toLocaleLowerCase().includes(input.toLocaleLowerCase())){
                estado -= 1;
                if(estado === 19){
                    setPlace(ponto);
                    onOpen();
                }
            } else {
                if(estado > 19){
                    setError("Não econtrado");
                } else {
                    setError("-");
                }            
            }
            return <></>
        })
    }, [input, onOpen, pontos.data]);
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
            h={isLargerThan1440 ? "740px" : "400px"}
            w={isLargerThan1440 ? "650px" : "375px"}
        >
            <Text
                align="center"
                fontFamily="griffy"
                fontSize={isLargerThan1440 ? "72px" : "36px"}
            >
                Procurar
            </Text>
            <HStack>
                <Input
                    bg="#000"
                    textColor="#6B0504"
                    type="text"
                    value={input}
                    placeholder="Procure pelo nome"
                    onChange={handleChange}
                />
                <IconButton
                    bg="#000"
                    icon={<BsSearch />}
                    onClick={handleSubmit}
                />
            </HStack>
            {error}
            <HStack marginLeft="10px" marginTop="5px">
            <Text align="center" borderColor="#000" borderWidth={isLargerThan1440 ? "5px" : "2px"} borderRadius="5px" _hover={{
                bg: "#002927",
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
                bg: "#002927",
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
            <Box
            marginTop="25px"
            h={isLargerThan1440 ? "500px" : "200px"}
            overflowY="scroll"
            overflowX="hidden">
            {pontos.data.map((place) => {
                return (
                <Text align="center" marginTop={isLargerThan1440 ? "15px" : "9px"} key={place.Name}>
                    <Button
                        _hover={{bg: "#002927", textColor: "#E6AF2E"}}
                        bg="#000"
                        fontFamily="griffy"
                        fontSize={isLargerThan1440 ? "25px" : "15px"}
                        textColor={"#6B0504"}
                        onClick={() => {setPlace(place); onOpen();}}
                        key={`${place.name}-button`}
                        w={isLargerThan1440 ? "500px" : "300px"}
                    >
                        {place.name}
                    </Button>
                </Text>)
            })}
            </Box>

        </Box>
        <ChakraModal isOpen={isOpen} size={isLargerThan1440 ? Box : "xl"} onClose={onClose}>
            <ModalOverlay borderRadius="10px" />
            <ModalContent w="1500px">
                <ModalHeader
                    fontSize="md"
                    borderBottom="1px solid"
                    borderColor="#E6AF2E"
                    bg="#6B0504"
                    textColor="#E6AF2E"
                    >
                    <HStack>
                    <Image boxSize={isLargerThan1440 ? "200px" : "100px"} src={Place.imagen} alt='Dan Abramov' />
                    <Text fontSize="28px">
                        {Place.name}
                    </Text>
                    </HStack>
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody borderBottom="1px solid" borderColor="#E6AF2E" bg="#6B0504" textColor="#DDDDDD">  
                    <Text fontSize={isLargerThan1440 ? "30px" : "20px"}>
                    Descrição: {Place.description} 
                    <br/>
                    <br/>
                    <hr/>
                    Horario de funcionamento: {Place.opening_hours}
                    <br/>
                    <br/>
                    <hr/>
                    Ingresso: {Place.payment_kind}<tr/>
                    </Text>
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
                        selectDestination(Place.latitude, Place.longitude);
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