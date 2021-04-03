import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Flex } from '@chakra-ui/react';
import CarouselItem from './CarouselItem';

SwiperCore.use([Navigation, Pagination])

const continents = [
  {
    id: 1,
    name: "Europa",
    description: "O continente mais antigo",
    carrouselImage: '/europe.png',
    jumbotronImage: '',
    countries: [
      {
        id: 1,
        name: "Áustralia",
        flagImage: '',
        galleryImage: ''
      }
    ]

  },
  {
    id: 2,
    name: "Africa",
    description: "Conheça safaris impressionantes",
    carrouselImage: '/africa.jpg',
    jumbotronImage: '',
    countries: [
      {
        id: 1,
        name: "Áustralia",
        flagImage: '',
        galleryImage: ''
      }
    ]
  },
  {
    id: 3,
    name: "Ásia",
    description: "Uma viajem imersa de tradições",
    carrouselImage: '/asia.jpg',
    jumbotronImage: '',
    countries: [
      {
        id: 1,
        name: "Áustralia",
        flagImage: '',
        galleryImage: ''
      }
    ]
  },
  {
    id: 4,
    name: "América",
    description: "Descubra paisagens incríveis",
    carrouselImage: '/america.jpg',
    jumbotronImage: '',
    countries: [
      {
        id: 1,
        name: "Áustralia",
        flagImage: '',
        galleryImage: ''
      }
    ]
  },
  {
    id: 5,
    name: "Oceania",
    description: "Um mundo de pequenos detalhes",
    carrouselImage: '/oceania.jpg',
    jumbotronImage: '',
    countries: [
      {
        id: 1,
        name: "Áustralia",
        flagImage: '',
        galleryImage: ''
      }
    ]
  },
];

export default function Carousel() {
  return (
    <Flex
      w="90%"
      justifyContent="center"
      alignItems="center"
      mb="8"
    >
      <Swiper
        wrapperTag="ul"
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay
        onInit={(swiper) => console.log("Swiper initialized", swiper)}
        onSlideChange={(swiper) => console.log('slide change', swiper.activeIndex)}
        onSwiper={(swiper) => console.log(swiper)}
        initialSlide={0}
      >
        {continents.map(continent => (<SwiperSlide key={`slide-${continent.id}`}>
          <CarouselItem
            name={continent.name}
            image={continent.carrouselImage}
            description={continent.description} />
        </SwiperSlide>))}

      </Swiper>
    </Flex>
  )
}