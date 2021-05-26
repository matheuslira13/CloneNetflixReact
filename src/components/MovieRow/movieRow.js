import React,{useState} from 'react';
import './movieRow.css';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

export default ({ title, items }) => {
  const [scrollX, setScrollX] = useState(0)
  const clickLeft = () =>{
    let x = scrollX +Math.round(window.innerWidth /2);
    if(x >0){
        x=0;
    }
    setScrollX(x);
  }
  const clickRight = () =>{
    let x = scrollX -Math.round(window.innerWidth /2);
    let listW = items.results.length *150;
    if((window.innerWidth - listW) > x){
      x=(window.innerWidth - listW) -60;
    }
    setScrollX(x);
  }
  
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movieRow--left" onClick={clickLeft}>
        <NavigateBeforeIcon style={{fontSize:50}}/>
      </div>
      <div className="movieRow--right" onClick={clickRight} >
        <NavigateNextIcon style={{fontSize:50}}/>
      </div>
      <div className="movieRow--listarea">
        <div className="movieRow--list" 
        style={{width:items.results.length * 150,
         marginLeft:scrollX
        }} >
          {items.results.length > 0 && items.results.map(function (item, key) {
            return (
              <div className="movieRow--item">
                <img alt={item.original_title} src={`https://image.tmdb.org/t/p/w300${item.poster_path}`} />
              </div>
            )

          })}
        </div>
      </div>
    </div>
  )
}