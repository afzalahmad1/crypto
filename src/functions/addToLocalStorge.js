export const addToLocalStorage = (id)=>{
    let arr = JSON.parse(localStorage.getItem("watchlist")) || [];
      arr.push(id)
       //console.log(e,"e",coin,"coin")
       //setWatchlist(arr);
       localStorage.setItem("watchlist",JSON.stringify(arr));
}