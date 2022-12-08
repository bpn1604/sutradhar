import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { SingleData } from "./SingleData";
const Homevendo = () => {
  const [data, setData] = useState([]);
  const [text, setText] = useState("");
  const [page, setPage] = useState(1);

  console.log(text);
  useEffect(() => {
    axios
      .get(
        `https://apitest.vendosmart.com//seller/seller_rfq_list?user_id=714830764&start_date=&end_date=&search_key=&page_number=${page}&page_size=10&rfq_status=Published`
      )
      .then((res) => setData(res.data.rfq_list))
      .then((res) => setPage(res.data.total_rows));
  }, [page]);
  console.log(data);
  const handlesearch = () => {
    axios
      .get(
        `https://apitest.vendosmart.com//seller/seller_rfq_list?user_id=714830764&start_date=&end_date=&search_key=${text}&page_number=1&page_size=10&rfq_status=Published`
      )
      .then((res) => setData(res.data.rfq_list));
  };
  return (
    <div style={{margin:"20px" }}>
        <Flex gap="10px" marginTop="20px" marginBottom="20px">
      <Input
        htmlSize={4}
        width="auto"
        onChange={(e) => setText(e.target.value)}
        placeholder="Type your text"
      />
      <Input
        placeholder="Select Date and Time"
        size="sm"
        type="datetime-local"
        width="500px"
        height="40px"
      />
      <Input
        placeholder="Select Date and Time"
        size="sm"
        type="datetime-local"
        width="500px"
        height="40px"
      />
      <Button onClick={handlesearch}>Search</Button>
      </Flex>
      {/* <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Thead>
        </Table>
      </TableContainer>
      { */}
      <TableContainer>
        <Table size="sm">
          <Thead>
            <Tr>
              <Th>Project</Th>
              <Th>RFQ</Th>
              <Th>Item</Th>
              <Th>Total Item</Th>
              <Th>Location</Th>
              <Th>date</Th>
            </Tr>
          </Thead>
          <Tbody>
            
              {data && data.map((el) => 
               <Tr>
               <Td>{el.project_name}</Td>
               <Td>{el.rfq_name}</Td>
               <Td>{el.total_items}</Td>
               <Td isNumeric>{el.total_quantity}</Td>
               <Td>{el.city}</Td>
               <Td>{new Date(el.created_at).toUTCString()}</Td>
             </Tr>
              )}
            
          </Tbody>
        </Table>
      </TableContainer>
      <Flex justifyContent="flex-end" marginRight="10px" marginTop="10px">
      <Button disabled={page===1} onClick={(e)=>setPage((page)=>page-1)}>Prev</Button>
        ...
        
        <Button disabled={page===1} onClick={(e)=>setPage((page)=>page-1)} >{page-1}</Button>
        .
        <Button>{page}</Button>
        .
        <Button onClick={(e)=>setPage((page)=>page+1)}>{page+1}</Button>
        ... <Button disabled={page===50} onClick={(e)=>setPage((page)=>page+1)}>Next</Button>
        </Flex>
    </div>
  );
};

export default Homevendo;
