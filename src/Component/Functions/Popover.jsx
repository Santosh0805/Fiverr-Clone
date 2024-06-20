import { Button, HStack,Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverTrigger, Stack,} from "@chakra-ui/react";
import '../text.css'
export default function Pop(){
  
return(<Popover>
  <PopoverTrigger>
    <Button varian='ghost' colorScheme='none'>Expore</Button>
  </PopoverTrigger>
  <PopoverContent>
    <PopoverArrow />
    <PopoverCloseButton/>
    <PopoverBody>
        <HStack textAlign='left' p='1rem' gap={4}>
            <Stack>
<ul className="hover" style={{marginTop:"-1rem"}}>
  <li><a href='https://discover.fiverr.com/?source=explore-tab'>Discover<br/>Inspiring projects made on Fiverr</a></li>
  <li><a href='https://www.fiverr.com/resources/guides?source=explore-tab'>Guides<br/>In-depth guides covering business topics</a></li>
  <li><a href='https://learn.fiverr.com/?source=explore-tab'>Learn<br/>Professional online courses, led by experts</a></li>
  <li><a href='https://www.fiverr.com/logo-maker?source=explore-tab'>Logo Maker<br/>Create your logo instantly</a></li>
</ul>
            </Stack>
            <Stack>
<ul className='hover'>
  <li><a href='https://events.fiverr.com/?source=explore-tab'>Community<br/>Connect with Fiverr’s team and community</a></li>
  <li><a href='https://play.acast.com/s/ninetwentynine?source=explore-tab'>Podcast<br/>Inside tips from top business minds</a></li>
  <li><a href='https://blog.fiverr.com/?source=explore-tab'>Blog<br/>News,information and community stories</a></li>
  <li><a href='https://workspace.fiverr.com/?utm_source=fiverr&utm_medium=marketing_site&utm_content=menu_visitor'>Fiverr Workspace<br/>One place to manage your business</a></li>
</ul>               
            </Stack>
        </HStack>
    </PopoverBody>
  </PopoverContent>
</Popover>)
}