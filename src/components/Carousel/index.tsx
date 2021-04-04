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
  },
  {
    id: 2,
    name: "Africa",
    description: "Conheça safaris impressionantes",
    carrouselImage: 'https://images.unsplash.com/photo-1481435471848-a5f4293c601b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=736&q=80',
  },
  {
    id: 3,
    name: "Ásia",
    description: "Uma viajem imersa de tradições",
    carrouselImage: 'https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
  },
  {
    id: 4,
    name: "América",
    description: "Descubra paisagens incríveis",
    carrouselImage: '/america.jpg'
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