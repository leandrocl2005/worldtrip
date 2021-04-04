import { Divider, Flex, Heading } from '@chakra-ui/react';

import Banner from '../components/Banner';
import Carousel from '../components/Carousel';
import Header from '../components/Header';
import TravelTypes from '../components/TravelTypes';


const continents = [
  {
    id: 1,
    name: "Europa",
    description: "O continente mais antigo",
    text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
    numberOfCountries: 50,
    numberOfLanguages: 60,
    carrouselImage: '/europe.png',
    jumbotronImage: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    countries: [
      {
        id: 1,
        name: "Reino Unido",
        flag: '/reinoUnidoFlag.png',
        capital: 'Londres',
        image: 'https://images.unsplash.com/photo-1454537468202-b7ff71d51c2e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=749&q=80'
      },
      {
        id: 2,
        name: "França",
        flag: '/francaFlag.png',
        capital: 'Paris',
        image: 'https://images.unsplash.com/photo-1507666664345-c49223375e33?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=753&q=80'
      },
      {
        id: 3,
        name: "Itália",
        flag: '/italiaFlag.png',
        capital: 'Roma',
        image: 'https://images.unsplash.com/photo-1604580864964-0462f5d5b1a8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      },
      {
        id: 4,
        name: "República Tcheca",
        flag: '/republicaTchecaFlag.png',
        capital: 'Praga',
        image: 'https://images.unsplash.com/photo-1562624475-96c2bc08fab9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80'
      },
      {
        id: 5,
        name: "Holanda",
        flag: '/holandaFlag.png',
        capital: 'Amsterdã',
        image: 'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      },
    ]
  },
  {
    id: 2,
    name: "Africa",
    description: "Conheça safaris impressionantes",
    text: "Na sua lista de coisas para fazer antes de morrer, inclua um safari. A sensação de estar na frente de animais selvagens é inenarrável!",
    numberOfCountries: 54,
    numberOfLanguages: 7,
    carrouselImage: '/africa.jpg',
    jumbotronImage: 'https://images.unsplash.com/photo-1433770082169-c9bfaf2c323f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    countries: [
      {
        id: 1,
        name: "África do Sul",
        flag: '/africaDoSulFlag.png',
        capital: 'Joanesburgo',
        image: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80'
      }
    ]
  },
  {
    id: 3,
    name: "Ásia",
    description: "Uma viajem imersa de tradições",
    text: "A Ásia é o maior dos continentes, tanto em área como em população. Abrange um terço das partes sólidas da superfície da Terra e é responsável por abrigar quase três quintos da população mundial.",
    numberOfCountries: 50,
    numberOfLanguages: 70,
    carrouselImage: 'https://images.unsplash.com/photo-1594474716318-9c4d3bacf94b?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80',
    jumbotronImage: 'https://images.unsplash.com/photo-1509023464722-18d996393ca8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    countries: [
      {
        id: 1,
        name: "China",
        flag: '/chinaFlag.png',
        capital: 'Shangai',
        image: 'https://images.unsplash.com/photo-1517309230475-6736d926b979?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      },
      {
        id: 2,
        name: "India",
        flag: '/indiaFlag.png',
        capital: 'Agra',
        image: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=751&q=80'
      },
      {
        id: 3,
        name: "Tailândia",
        flag: '/tailandiaFlag.png',
        capital: 'Bangkok',
        image: 'https://images.unsplash.com/photo-1548577637-bc7691b1deb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      },
      {
        id: 4,
        name: "Russia",
        flag: '/russiaFlag.png',
        capital: 'Moscow',
        image: 'https://images.unsplash.com/photo-1580228686482-d6b575761a29?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
      },
      {
        id: 5,
        name: "Japão",
        flag: '/japaoFlag.png',
        capital: 'Tóquio',
        image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
      },
    ]
  },
  {
    id: 4,
    name: "América",
    description: "Descubra paisagens incríveis",
    text: "Praias e histórias de civilizações antigas. Descubra culturas, comidas e paisagens e aguce todos seus sentidos. ",
    numberOfCountries: 35,
    numberOfLanguages: 8,
    carrouselImage: '/america.jpg',
    jumbotronImage: 'https://images.unsplash.com/photo-1555363209-11a72e372ccc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80',
    countries: [
      {
        id: 1,
        name: "Brasil",
        flag: '/brasilFlag.png',
        capital: 'Rio de Janeiro',
        image: 'https://images.unsplash.com/photo-1593854586136-2edae149504c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=889&q=80'
      }
    ]
  },
  {
    id: 5,
    name: "Oceania",
    description: "Um mundo de pequenos detalhes",
    text: "Um continente sem fronteiras, isso mesmo! Nenhum de seus países tem fronteiras terrestres, apenas aquáticas.s",
    numberOfCountries: 16,
    numberOfLanguages: 18,
    carrouselImage: '/oceania.jpg',
    jumbotronImage: '/oceaniaJumb.jpg',
    countries: [
      {
        id: 1,
        name: "Áustralia",
        flag: '/australiaFlag.png',
        capital: 'Sidney',
        image: 'https://images.unsplash.com/photo-1548296404-93c7694b2f91?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=750&q=80'
      },
      {
        id: 2,
        name: "Indonésia",
        flag: '/indonesiaFlag.png',
        capital: 'Labuan Bajo',
        image: 'https://images.unsplash.com/photo-1589309736404-2e142a2acdf0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=667&q=80'
      }
    ]
  },
];

export default function Home() {

  return (
    <Flex
      w="100%"
      alignItems="center"
      direction="column"
      justifyContent="center">
      <Header />
      <Banner />
      <TravelTypes />
      <Divider as="hr" w="20%" borderWidth="2px" borderColor="gray.500" bg="gray.500" />
      <Heading
        w="100%"
        textAlign="center"
        mt="16"
        mb="8"
        fontSize="36px"
        color="gray.700"
        fontWeight="500"
      >
        Vamos nessa? <br />
        Então escolha seu continente
      </Heading>
      <Carousel continents={continents} />
    </Flex>
  );
}
