import React, { useRef, useState ,useEffect} from "react";
//const data = [{id:1}, {id:2},{id:3}]
export const Home = () => {
  const [data, setData] = useState([
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
    { id: 7 },
    { id: 8 },
    { id: 9 },
    { id: 10 },
  ]);
  //const [rightData, setRightData] = useState([]);
  const [rightData,setRightData] = useState();
  const handleClick = (el) => {
    //console.log(id)

    setRightData(el)
    console.log(rightData);
  };
  
  
  return (
    <>
      <div>
        <input type="checkbox" />
        <label>COPY</label>
        <input type="checkbox" />
        <label>MOVE</label>
      </div>
      <div style={{display:"flex" ,margin:"10px"}}>
        <div
          style={{
            height: "300px",
            marginLeft: "60px",
            border: "0.5px solid",
            width: "20%",
            overflow: "scroll",
          }}
        >
          {data.map((el) => (
            <div key={el.id} onClick={() => handleClick(el)}>
              <div
                style={{
                  border: ".3px solid",
                  height: "120px solid",
                  margin: "auto",
                  width: "80%",
                  marginBottom: "15px",
                }}
              >
                bipin
              </div>
            </div>
          ))}
        </div>
        <div>
         
        
        </div>
        
      </div>
     <button></button>
    </>
  );
};
