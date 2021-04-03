import { Flex } from '@chakra-ui/react';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import Gallery from '../../components/Gallery';
import Header from '../../components/Header';
import Jumbotron from '../../components/Jumbotron/Jumbotron';
import TextInfo from '../../components/TextInfo';

export interface Country {
  id: number;
  image: string;
  name: string;
  capital: string;
  flag: string;
}

interface ContinentProps {
  id: number;
  name: string;
  description: string;
  text: string;
  numberOfCountries: number;
  numberOfLanguages: number;
  jumbotronImage: string;
  carrouselImage: string;
  countries: Country[];
}


const continents = [
  {
    id: 1,
    name: "Europa",
    description: "O continente mais antigo",
    text: "A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste.",
    numberOfCountries: 50,
    numberOfLanguages: 60,
    carrouselImage: '/europe.png',
    jumbotronImage: '/europeJumb.jpg',
    countries: [
      {
        id: 1,
        name: "Reino Unido",
        flag: '/reinoUnidoFlag.png',
        capital: 'Londres',
        image: '/reinoUnido.png'
      },
      {
        id: 2,
        name: "França",
        flag: '/francaFlag.png',
        capital: 'Paris',
        image: '/franca.png'
      },
      {
        id: 3,
        name: "Itália",
        flag: '/italiaFlag.png',
        capital: 'Roma',
        image: '/italia.png'
      },
      {
        id: 4,
        name: "República Tcheca",
        flag: '/republicaTchecaFlag.png',
        capital: 'Praga',
        image: '/republicaTcheca.png'
      },
      {
        id: 5,
        name: "Holanda",
        flag: '/holandaFlag.png',
        capital: 'Amsterdã',
        image: '/holanda.png'
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
    jumbotronImage: '/africaJumb.jpg',
    countries: [
      {
        id: 1,
        name: "África do Sul",
        flag: '/africaDoSulFlag.png',
        capital: 'Joanesburgo',
        image: '/africaDoSul.jpg'
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
    carrouselImage: '/asia.jpg',
    jumbotronImage: '/asiaJumb.jpg',
    countries: [
      {
        id: 1,
        name: "China",
        flag: '/chinaFlag.png',
        capital: 'Pequim',
        image: '/china.jpg'
      },
      {
        id: 2,
        name: "India",
        flag: '/indiaFlag.png',
        capital: 'Nova Delhi',
        image: '/india.jpg'
      },
      {
        id: 3,
        name: "Tailândia",
        flag: '/tailandiaFlag.png',
        capital: 'Bangkok',
        image: '/tailandia.jpg'
      },
      {
        id: 4,
        name: "Russia",
        flag: '/russiaFlag.png',
        capital: 'Moscow',
        image: '/russia.jpg'
      },
      {
        id: 5,
        name: "Japão",
        flag: '/japaoFlag.png',
        capital: 'Tóquio',
        image: '/japao.jpg'
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
    jumbotronImage: '/america.jpg',
    countries: [
      {
        id: 1,
        name: "Brasil",
        flag: '/brasilFlag.png',
        capital: 'Rio de Janeiro',
        image: '/brasil.jpg'
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
        image: '/australia.jpg'
      },
      {
        id: 2,
        name: "Indonésia",
        flag: '/indonesiaFlag.png',
        capital: 'Jacarta',
        image: '/indonesia.jpg'
      }
    ]
  },
];

export default function Continent() {

  const router = useRouter();
  const [continent, setContinent] = useState<ContinentProps | null>(null)

  const { id } = router.query;
  console.log(id)

  useEffect(() => {
    const selectedContinent = continents.find(
      continent => continent.id === Number(id)
    )
    setContinent(selectedContinent);
  }, [id])

  return (
    <Flex
      w="100%"
      alignItems="center"
      direction="column"
      justifyContent="center">
      <Header />
      {continent && <Jumbotron
        image={continent.jumbotronImage}
        name={continent.name}
      />}
      {continent && <TextInfo
        text={continent.text}
        numberOfCountries={continent.numberOfCountries}
        numberOfLanguages={continent.numberOfLanguages}
      />}
      {continent && <Gallery countries={continent.countries} />}
    </Flex>
  )
}