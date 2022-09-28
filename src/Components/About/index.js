import { Box, useMediaQuery, Text } from '@chakra-ui/react'

function AboutComponent(){
    const [isLargerThan1440] = useMediaQuery('(min-width: 1440px)');

    return (
        <Box
            bg="#6B0504"
            borderColor="#002927"
            borderWidth="2px"
            color="#EBFFFA"
            zIndex="3"
            pos="absolute"
            marginTop={isLargerThan1440 ? "155px" : "93px"}
            marginLeft={isLargerThan1440 ? "350px" : "250px"}
            h={isLargerThan1440 ? "740px" : "370px"}
            w={isLargerThan1440 ? "1080px" : "540px"}
        >
            <Text align="center">
                About
            </Text>
            <Text align="justify">
                Primeira versão do front-end do projeto de Engenharia de Software II <br />
                Funcionalidades: <br />
                <li>
                    Trocar abas
                </li>
                <li>
                    Mexer no mapa
                </li>
                <li>
                    Mostrar localidade atual caso permitido pelo usuario
                </li>
            </Text>
        </Box>
    );
}

export default AboutComponent;