import React, { useEffect, useState } from 'react'
import Header from '../components/Common/Header'
 import TabsComponent from '../components/Dashboard/Tabs'
import { get100Coins } from '../functions/get100Coins'
// import { useParams } from 'react-router-dom';


function WatchList() {
const [watchlistCoin,setWatchListCoin] = useState([]);
// const [star,setStar] = useState(true);
  useEffect(()=>{
      getData();
  },[watchlistCoin])
  async function getData(){
   try {
    const data = await get100Coins()
    let listArr = [];
    //console.log(data);
    let watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
    
    if(watchlist){
      listArr = data.filter((coin) => watchlist.includes(coin.id));
      //console.log(listArr);
    }
    setWatchListCoin(listArr);
   } catch (error) {
    console.log(error);
   }
  }

  return (
    <div>
      <Header />
      <TabsComponent coins={watchlistCoin} />
    </div>
  )
  }

export default WatchList
