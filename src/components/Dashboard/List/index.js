import React, { useState } from 'react'
import "./styles.css"
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import TrendingDownRoundedIcon from '@mui/icons-material/TrendingDownRounded';
import { Tooltip } from '@mui/material';
import { convertNumbers } from '../../../functions/convertNumbers';
import { Link } from 'react-router-dom';
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from '@mui/icons-material/Star';
import { addToLocalStorage } from '../../../functions/addToLocalStorge';
import { removeFromWatchlist } from '../../../functions/removeFromWatchlist';

function List({coin}) {
 // console.log("coin",coin);
 const [star,setStar] = useState(false);

 function saveInLocalStorage(e,coin){
   e.preventDefault();
   setStar(!star)
   if(!star){
     addToLocalStorage(coin.id);
   }else{
     removeFromWatchlist(coin.id)
   }

 }
  return (
    <Link to={`/coin/${coin.id}`}>
    <tr className='list-row'>
      <Tooltip title="Coin Logo" placement='bottom-start'>
      <td className="td-image">
        <img src={coin.image} className='coin-logo' alt='crypto'/>
      </td>
      </Tooltip>

      <Tooltip title="Coin Info" placement='bottom-start'>
        <td>
        <div className='name-col'>
          <p className='coin-symbol'>{coin.symbol}</p>
          <p className='coin-name'>{coin.name}</p>
        </div>
      </td>
      </Tooltip>

      <Tooltip title="Price Change in 24Hrs" placement='bottom-start'>
      {/*Conditional rendering 1*/}
       {coin.price_change_percentage_24h>0? (
      <td className="chip-flex">
          <div className="price-chip">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip td-icon">
            <TrendingUpRoundedIcon />
          </div>
      </td>
      ) : (
        <td className="chip-flex ">
          <div className="price-chip chip-red">
            {coin.price_change_percentage_24h.toFixed(2)}%
          </div>
          <div className="icon-chip chip-red td-icon">
            <TrendingDownRoundedIcon />
          </div>
        </td>
      )
      } 
      </Tooltip>
      <Tooltip title="Current Price" placement='bottom-end'>
      <td>
       <h3 className='coin-price td-center-align' style={{color:coin.price_change_percentage_24h<0?"var(--red)":"var(--green)"}}>${coin.current_price.toLocaleString()}</h3>
      </td>
      </Tooltip>
      <Tooltip title="Total Volume" placement='bottom-end'>
      <td>
         <p className='total-volume td-right-align td-total-volume'>{coin.total_volume.toLocaleString()}</p>
      </td>
      </Tooltip >
      <Tooltip title="Market Cap" placement='bottom-end'>
      <td className='desktop-td-mkt '>
         <p className='market-cap td-right-align'>{coin.market_cap.toLocaleString()}</p>
      </td>
      </Tooltip> 
      <Tooltip title="Watch Later" placement='bottom-end'>
      <td>
      <div
            className="star-item-list"
            style={{
              border:
                coin.price_change_percentage_24h < 0
                  ? "2px solid var(--red)"
                  : "2px solid var(--green)",
              color:
                coin.price_change_percentage_24h < 0
                  ? "var(--red)"
                  : "var(--green)",
            }}
            onClick={(e)=>{saveInLocalStorage(e,coin)}}
          >
            {star?<StarIcon />:<StarBorderIcon />}
          </div>
          </td>
     
      </Tooltip>
    </tr>
    </Link>
  )
}

export default List;
