import { Box, Button, Flex,Spacer } from "@chakra-ui/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

export default function Navbar(){
    const bgColor=useRef(null);
    var i = 0;
function change() {
  var doc = bgColor.current;
  var color = ["pink", "violet", "brown", "green"];
  doc.style.backgroundColor = color[i];
  i = (i + 1) % color.length;
}
setInterval(change, 2000);
    return (
    <Box>
    <Flex ref={bgColor} p="1rem" mb="5rem" >
        <Link to="/">Home</Link>
        <Spacer/>
        <Flex gap={4}>
        <Button><Link to="/test" >Test</Link></Button>
        <Button>Sign Out</Button>
        </Flex>
    </Flex>
    </Box>
    )
}