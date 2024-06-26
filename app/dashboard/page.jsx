'use client'
import { useState } from "react";
import DashCard from "../components/dashboard/DashCard";
import axios from "axios";

const Page = () => {

  const [quiz, setQuiz] = useState([]);

  // const categories=[
  //   {
  //     category:'19',
  //     value:'mathemematics',
  //     difficulties:[{
  //       difficulty1:'easy',
  //       difficulty2:'medium',
  //       difficulty3:'hard',
  //     }]
  //   },
  //   {
  //     category:'21',
  //     value:'sports',
  //     difficulties:[{
  //       difficulty1:'easy',
  //       difficulty2:'medium',
  //       difficulty3:'hard',
  //     }]
  //   },
  //   {
  //     category:'18',
  //     value:'computer',
  //     difficulties:[{
  //       difficulty1:'easy',
  //       difficulty2:'medium',
  //       difficulty3:'hard',
  //     }]
  //   },
  //   {
  //     category:'23',
  //     value:'history',
  //     difficulties:[{
  //       difficulty1:'easy',
  //       difficulty2:'medium',
  //       difficulty3:'hard',
  //     }]
  //   },
  // ]
  // const url = `https://opentdb.com/api.php?amount=10&category=${category}8&difficulty=${difficulty}&type=multiple`;
  const url = `https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple`;

  

  axios.get(url)
  .then(function (response) {
      setQuiz(response.data.results)

    })
    .catch(function (error) {
      console.log(error);
    });

  return (
    <div className="bg-[#141414] min-h-[100vh] text-white">
      <h1 className="text-[45px] text-center font-bold">My Quiz</h1>
        <div className="p-4 grid grid-col-2 gap-4 lg:grid-cols-5 ">
      {/* Card 1 */}
      
      <DashCard locked={false} data={quiz}/>
      {/* <DashCard/>
      <DashCard/>
      <DashCard/>
      <DashCard/> */}
    </div>
    </div>
    
  );
};

export default Page;
