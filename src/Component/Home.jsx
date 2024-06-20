import {Box, Button, Flex, Grid, GridItem, HStack, Image, Input,InputGroup,InputLeftAddon,List,ListIcon,ListItem,Spacer, Stack, Text, VStack} from "@chakra-ui/react";
import React from 'react';
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import {SearchIcon,CheckCircleIcon} from '@chakra-ui/icons';
import { market, service } from "./Service";
import Pop from "./Functions/Popover";

export default function Home(){

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5
      };

const bgBox=useRef(null);
const social=["https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook.31d5f92.png",
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png',
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png',
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg.8b7310b.png',
'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png']

var i=0;
function change() {
    var doc = bgBox.current;
    var color = ["pink","rgb(58, 247, 58)","orange"];
    doc.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
  }
  setInterval(change,5000);

return (<Box>
<Box height='600px' ref={bgBox} bg='burlywood'>
<Flex width='90%' m='auto' >
<Link to="/"><Image width="20%" src="https://1000logos.net/wp-content/uploads/2021/11/Fiverr-Logo-500x281.png" /></Link>
<Spacer/>
<Stack direction='row' gap={2} alignItems='center' color='white'>
    <Button variant="ghost" colorScheme='none' >
<a href='https://www.fiverr.com/business?source=top_nav'>Fiverr Business</a>
      </Button>
    <Pop/>
    <Button variant='ghost' colorScheme='none'>
      <a href='https://www.fiverr.com/categories/business?source=category_tree'>Business</a></Button>
<Button variant='ghost' colorScheme='none'>
<a href='https://www.fiverr.com/start_selling?source=top_nav'>Become a Seller</a>
  </Button>
<Button variant='ghost' colorScheme='none'>
<a href='https://www.fiverr.com/login?source=top_nav'>Sign In</a>
  </Button>
<Button variant='outline' colorScheme='green'>
  Join
  </Button>
</Stack>
</Flex>

<Stack width='60%' m='auto' mt='7rem'>
    <Text fontSize='6xl' fontWeight='extrabold' color='white' lineHeight='5rem'>
        Find the perfect <Text as='i'>freelance</Text> services for your business</Text>
        <Box>
        <InputGroup>
    <InputLeftAddon as={SearchIcon} bg='none' />
    <Input type='text' placeholder='Try "building mobile app"' border='1px solid white' />
    <Button colorScheme='gray'>Search</Button>
  </InputGroup>

<Flex gap='3rem' fontSize='3xl' fontWeight='bold' mt='1rem' alignItems='center'>
    <Text color='white'>Papular  :</Text>
<Button variant='outline'><a href='https://www.fiverr.com/categories/graphics-design/web-plus-mobile-design?source=hplo_search_tag&pos=1&name=web-plus-mobile-design'>Website Design</a></Button>
<Button variant='outline'><a href='https://www.fiverr.com/categories/programming-tech/wordpress-services?source=hplo_search_tag&pos=2&name=wordpress-services'>Wordpress</a></Button>
<Button variant='outline'><a href='https://www.fiverr.com/categories/graphics-design/creative-logo-design?source=hplo_search_tag&pos=3&name=creative-logo-design'>LogoDesign</a></Button>
<Button variant='outline'><a href='https://www.fiverr.com/search/gigs?source=hplo_search_tag&pos=4&query=NFT%20Art'>NFT Art</a></Button>
</Flex>
</Box>
</Stack>
    </Box>
    <Flex gap='12' justifyContent='center' alignItems='center' mb='1rem'>
        <Text fontWeight='bold' color='grey'>Trusted By :</Text>
    {social.map((item,index)=><Image src={item} key={index}/>)}
    </Flex>
    <Stack>
<Text textAlign='left' fontSize='3xl' fontWeight='medium' color='black'>
    Popular professional services</Text>
   <Slider {...settings}>
   
    {service.map((el,i)=>{
    return<div key={i} style={{position:"relative"}}>
    <div key={i+1} style={{position:"absolute",marginLeft:'10px',textAlign:"left"}}>
      <Text fontWeight='medium' color='white'>{el.p}</Text>
      <Text fontWeight='extrabold' color='white'>{el.h}</Text>
      </div>
<a href={el.a}><Image display='block' m='auto' alt='err' src={el.img}/></a>
      </div>})}
    </Slider>
   </Stack>
<HStack bgColor='rgb(223, 250, 250)' mt='3rem' mb='3rem' p='3rem'>
    <VStack width='48%' textAlign='left' fontSize='1.5xl' fontWeight='bold'>
        <Text fontSize='5xl' fontWeight='bold'>A whole world of freelance talent at your fingertips</Text>
    <List spacing={3}>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    The best for every budget
  </ListItem>
  <Text>Find high-quality services at every price point. No hourly rates,just project-based pricing</Text>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    Quality work done quickly
  </ListItem>
  <Text>Find the right freelancer to begin working on your project within minutes.</Text>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    Protected payments, every time
  </ListItem>
  <Text>Always know what you'll pay upfront. Your payment isn't released until you approve the work.</Text>
  <ListItem>
    <ListIcon as={CheckCircleIcon} color='green.500' />
    24/7 support
  </ListItem>
  <Text>Questions? Our round-the-clock support team is available to help anytime, anywhere.</Text>
</List>
    </VStack>
    <VStack>
<video controls poster="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_700,dpr_1.0/v1/attachments/generic_asset/asset/089e3bb9352f90802ad07ad9f6a4a450-1599517407052/selling-proposition-still-1400-x1.png">
<source src='https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/vmvv3czyk2ifedefkau7' 
type="video/mp4"/>
</video>
   </VStack>
</HStack>
<Box>
    <Text ml='10' mb='4' fontSize='3xl' textAlign='left' fontWeight='medium'>Explore the marketplace</Text>
    <Grid templateColumns='repeat(5, 1fr)' gap={10} mb='4rem'>
        {market.map((el,i)=>{return<GridItem key={i}>
           <a href={el.a}>
            <Image alt='error' display='block' height='5rem' margin="auto" width='27%'  src={el.img} />
            <Text fontSize='1xl'>{el.title}</Text>
            </a>
            </GridItem>})}
    </Grid>
</Box>
<Stack bgColor='blue' mb='3rem' height='400px'>
  <Stack position='absolute' color='white' width='40%' textAlign='left' p='3rem'>
<Text fontSize='2xl'>fiverr logo maker.</Text>
<Text fontSize='5xl' fontWeight='bold'>Make an incredible logo <span style={{fontStyle:'italic'}}>in minutes</span></Text>
<Text>Pre-designed by top talent.Just add your touch.</Text>
<Button color='blue' width='60'>
 <a href='https://www.fiverr.com/logo-maker?source=LOHP_banner'>Try fiver logo maker </a>
  </Button>
  </Stack>
<Stack position='relative'>
<img alt='Error' src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1160,dpr_1.0/v1/attachments/generic_asset/asset/b49b1963f5f9008f5ff88bd449ec18f7-1608035772453/logo-maker-banner-wide-desktop-1352-2x.png'/>
</Stack>
</Stack>
<Text fontSize='3xl' fontWeight='bold' textAlign='left'>Fiverr Guides</Text>
<HStack mb='3rem'>
  <Stack textAlign='left' p='1rem'>
    <a href="https://www.fiverr.com/resources/guides/business/start-online-business-and-work-from-home">
    <Image src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560157/guide-start-online-business-552-x2.png'/>
  <Text fontWeight='bold'>Start an online business and work from home</Text>
  <p>A complete guide to starting a small online business</p>
  </a>
  </Stack>

  <Stack textAlign='left' p='1rem'>
    <a href="https://www.fiverr.com/resources/guides/digital-marketing/what-is-digital-marketing">
    <Image src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560168/guide-digital-marketing-552-x2.png'/>
  <Text fontWeight='bold'>Digital marketing made easy</Text>
  <p>A practical guide to understand what is digital marketing</p>
  </a>
  </Stack>

  <Stack textAlign='left' p='1rem'>
    <a href="https://www.fiverr.com/resources/guides/graphic-design/how-to-create-business-logo">
    <Image src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_450,dpr_1.0/v1/attachments/generic_asset/asset/d532c0ad4feed007b3899cebad595286-1599611560155/guide-create-a-logo-552-x2.png'/>
  <Text fontWeight='bold'>Create a logo for your business</Text>
  <p>A step-by-step guide to create a memorable business logo</p>
  </a>
  </Stack>
</HStack>

<Box position='relative' textAlign='left' p='1rem' mb='2rem'>
  <Stack position='absolute' ml='4rem'>
  <Text p='2rem' width='40%' fontSize='5xl' color='white' fontWeight='extrabold'>
    Find the <span style={{fontStyle:'italic'}}>talent</span> needed to get your business <span style={{fontStyle:'italic'}}>growing.</span></Text>
   <Stack><Button colorScheme='green' width='40' ml='1rem'>
<a href='https://www.fiverr.com/join?source=hplo_get_started'>Get Started</a>
    </Button></Stack>
    </Stack>
  <Image src='https://fiverr-res.cloudinary.com/q_auto,f_auto,w_1400,dpr_1.0/v1/attachments/generic_asset/asset/50218c41d277f7d85feeaf3efb4549bd-1599072608122/bg-signup-1400-x1.png'/>
</Box>

</Box>
    )   
}