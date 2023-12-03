import { Box, Button } from '@chakra-ui/react'
import {Image,Badge,Text} from '@chakra-ui/react'
// import {DatePicker} from 'chakra-ui-date-input'
import React,{useEffect, useState} from "react";
import Calendar from 'moedim';
import {
  Table,Thead,Tbody,Tfoot,Tr,Th,Td,TableCaption,TableContainer,Alert,AlertIcon,AlertTitle,AlertDescription,} from '@chakra-ui/react'
function Homepage() {
  const [value, setValue] = useState(new Date());
  const [time,setTime] = useState("8:00 AM");
  const [alert,setALert] = useState(false);
  function setdate(d){
    setValue(d);
    console.log(d.toString().slice(0,15));
  }
//   const hov=(e)=>{
//      e.target.style.backgroundColor="rgb(26,115,232)";
//      e.target.style.color="white";
//   }
//   const dehov=(e)=>{
//     e.target.style.backgroundColor="white";
//     e.target.style.color="black";
//  }
 const settimeFun=(e)=>{
  console.log(e.target.innerText);
  setTime(time=>e.target.innerText);
  setALert(true);
  setTimeout(() => {
      setALert(false);
  }, 1000);
 }
  return (
    <div className="App">
    <Box border="1px solid black" display="flex" flexDirection={{base:"column",sm:"column",md:"column",lg:"row"}}  borderWidth='1px' borderRadius='lg' margin="auto"  overflow='hidden' padding="10px" width={{base:"400px",sm:"500px",md:"600px",lg:"700px"}} >
        <Box justifyContent="center" margin="auto">
        <Calendar value={value} onChange={(d)=>{setdate(d)}}
          />
        </Box>
        <Box  width={{base:"300px",sm:"300px",md:"600px",lg:"700px"}} margin="auto"  justifyContent="center" > 
          {alert&&<Alert status='success' variant='subtle'>
    <AlertIcon />
    Time selected!
  </Alert>}
          <Box height="50px" display="flex" flexDirection="row" marginRight="-100px" marginBottom="15px">
          <Button id="colorid" isDisabled={value.toString().slice(0,3)=='Sun'?true:false} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"100px",md:"150px",lg:"100px"}} border="1px solid black">8:00 AM</Button>
          <Button id="colorid" isDisabled={value.toString().slice(0,3)=='Sun'?true:false} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"100px",md:"150px",lg:"100px"}} padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} border="1px solid black">8:30 AM</Button >
          <Button id="colorid" isDisabled={value.toString().slice(0,3)=='Sun'?true:false} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" textAlign="center" justifyContent="center" padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} border="1px solid black">8:45 AM</Button>
          </Box>
          <Box  height="50px" display="flex" flexDirection="row" marginRight="-100px" marginBottom="15px">
          <Button id="colorid" isDisabled={value.toString().slice(0,3)=='Sun'?true:false} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" padding="15px" textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"100px",md:"150px",lg:"100px"}} border="1px solid black">9:00 AM</Button>
          <Box fontSize="12px" textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"100px",md:"150px",lg:"100px"}} padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} >-------</Box>
          <Button id="colorid" isDisabled={value.toString().slice(0,3)=='Sun'?true:false} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" textAlign="center" justifyContent="center" padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} border="1px solid black">12 NOON</Button>
          </Box>
          <Box  height="50px" display="flex" flexDirection="row" marginRight="-100px" marginBottom="15px">
          <Button id="colorid" isDisabled={value.toString().slice(0,3)=='Mon'?true:false||value.toString().slice(0,3)=='Tue'?true:false||value.toString().slice(0,3)=='Wed'?true:false||value.toString().slice(0,3)=='Thu'?true:false||value.toString().slice(0,3)=='Sun'?true:false||value.toString().slice(0,3)=='Fri'?true:false||value.toString().slice(0,3)=='Sat'?true:false} onClick={(e)=>{settimeFun(e)}}  fontSize="12px" cursor="pointer" padding="15px" textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"100px",md:"150px",lg:"100px"}} border="1px solid black">12:30 PM</Button>
          <Box fontSize="12px" textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"100px",md:"150px",lg:"100px"}} padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} >-------</Box>
          <Button id="colorid" isDisabled={value.toString().slice(0,3)=='Sun'?true:false} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" textAlign="center" justifyContent="center" padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} border="1px solid black">5:00 PM</Button>
          </Box>
          <Box  height="50px" display="flex" flexDirection="row" marginRight="-100px">
          <Button id="colorid" isDisabled={true} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" padding="15px" textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"100px",md:"150px",lg:"100px"}} border="1px solid black">5:30 PM</Button>
          <Box fontSize="12px" textAlign="center" justifyContent="center" marginRight={{base:"20px",sm:"50px",md:"150px",lg:"100px"}} padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} >-------</Box>
          <Button id="colorid" isDisabled={true} onClick={(e)=>{settimeFun(e)}} fontSize="12px" cursor="pointer" textAlign="center" justifyContent="center" padding={{base:"2px",sm:"5px",md:"10px",lg:"15px"}} border="1px solid black">8:00 PM</Button>
          </Box>
        </Box>
    </Box>
    <Text margin="20px" textAlign="left"  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} marginLeft={{base:"100px",sm:"200px",md:"300px",lg:"500px"}}>Time avalaility varies on different days as follows:</Text>
    <TableContainer padding="10px" border="1px solid black" margin="auto" fontSize={{base:"10px",sm:"12px",md:"13px",lg:"14px"}} width={{base:"200px",sm:"400px",md:"600px",lg:"700px"}}>
  <Table variant='simple' >
    <Thead>
      <Tr>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Day</Th>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Start time</Th>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px" isNumeric>End time</Th>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px" isNumeric>Unavailable time(ranges)</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
      <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Monday</Th>
        <Td padding="2px">8 AM</Td>
        <Td padding="2px" isNumeric>5 PM</Td>
        <Td padding="2px" isNumeric>12:30 PM to 1 PM</Td>
      </Tr>
      <Tr>
      <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Tuesday</Th>
      <Td padding="2px">8 AM</Td>
        <Td padding="2px" isNumeric>5 PM</Td>
        <Td padding="2px" isNumeric>12:30 PM to 1 PM</Td>
      </Tr>
      <Tr>
      <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Wednesday</Th>
      <Td padding="2px">8 AM</Td>
        <Td padding="2px" isNumeric>5 PM</Td>
      <Td padding="2px" isNumeric>12:30 PM to 1 PM & 3:30 PM to 4:30 PM</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Thursday</Th>
        <Td padding="2px">8 AM</Td>
        <Td padding="2px" isNumeric>5 PM</Td>
        <Td padding="2px" isNumeric>12:30 PM to 1 PM</Td>
      </Tr>
      <Tr>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Friday</Th>
        <Td padding="2px">8 AM</Td>
        <Td padding="2px" isNumeric>5 PM</Td>
        <Td padding="2px" isNumeric>12:30 PM to 1 PM</Td>
      </Tr>
      <Tr>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Saturday</Th>
        <Td padding="2px">8 AM</Td>
        <Td padding="2px" isNumeric>NOON</Td>
        <Td padding="2px" isNumeric>12:30 PM to 1 PM</Td>
      </Tr>
      <Tr>
        <Th  fontSize={{base:"10px",sm:"12px",md:"16px",lg:"20px"}} padding="2px">Sunday</Th>
        <Td padding="2px">--</Td>
        <Td padding="2px" isNumeric>--</Td>
        <Td padding="2px" isNumeric>Holiday</Td>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </div>
  );
}

export default Homepage;