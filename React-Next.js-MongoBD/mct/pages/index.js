import React, {useState} from 'react'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head'
import Result from '../components/Result'
import MCTForm from '../components/MCTForm'


const Home = ({data}) => {
  const [results, setResults] = useState(data);

  const onChange = (e) => {
    const data = { ...results };

    let name = e.target.name;
    console.log(name, 'name')

    let resultType = name.split(" ")[0].toLowerCase();
    let resultMacro = name.split(" ")[1].toLowerCase();

    data[resultMacro][resultType] = e.target.value;

    setResults(data);
  }

  return (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css" rel="stylesheet" />
    </Head>

    <div className="container mx-auto">

      <div className="flex text-center">
        <div className="w-full m-4">
          <h1 className="text-4xl">Macro Compliance Tracker</h1>
        </div>
      </div>

      <div className="flex text-center">
        <div className="w-1/3 bg-gray-200 p-4">Previous Day</div>
        <div className="w-1/3 p-4">1/23/2020</div>
        <div className="w-1/3 bg-gray-200 p-4">Next Day</div>
      </div>

      <div className="flex mb-4 text-center">
        <Result results={results.calories} />
        <Result results={results.carbs} />
        <Result results={results.fat} />
        <Result results={results.protein} />
      </div>

      <div className="flex">
        <MCTForm  item="Total" onChange={onChange} />
        <MCTForm item="Target" onChange={onChange} />
        <MCTForm item="Variant" onChange={onChange} />
      </div>

      <div className="flex text-center">
        <div className="w-full m-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Save
          </button>
        </div>
      </div>
    </div>
  </div>
)}

export async function getStaticProps(context) {
  const res = await fetch("http://localhost:3000/api/daily");
  const json = await res.json();
  return {
    props: {
      data: json,
    },
  };
}


export default Home
