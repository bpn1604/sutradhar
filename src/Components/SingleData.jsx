import React from "react";
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
} from "@chakra-ui/react";
export const SingleData = (props) => {
  console.log(props);
  const { project_name, total_items, total_quantity, city, created_at ,rfq_name } =
    props.el;
  return (
    <div>
      
          
          
          
            <Tr>
              <Td>{project_name}</Td>
              <Td>{rfq_name}</Td>
              <Td>{total_items}</Td>
              <Td isNumeric>{total_quantity}</Td>
              <Td>{city}</Td>
              <Td>{created_at}</Td>
            </Tr>
           
            
         
          
        
    </div>
  );
};
