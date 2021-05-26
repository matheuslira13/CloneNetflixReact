import React from 'react';
import './featuredMovie.css';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

function FeaturedMovie({ item }) {

let firstDate = new Date(item.first_air_date);
let genres =[];
 for (let i in item.genres) {
   genres.push(item.genres[i].name);
 }
 let description= item.overview;
 if(description.length >200){
   description= description.substring(0,200) + '...';
 }

  return (
    <section className='featured' style={{
      backgroundSize: 'cover',
      backgroundPosition: 'cover',
      backgroundImage: `url(https://image.tmdb.org/t/p/original${item.backdrop_path})`
    }}>

      <div className="featured--vertical">
        <div className="featured--horizontal">
          <div className="featured--name">{item.name} </div>
          <div className="featured--info">
            <div className="featured--points">{item.vote_average} pontos</div>
            <div className="featured--year">{firstDate.getFullYear()} </div>
            <div className="featured--seassons"> {item.number_of_seasons} Temporada{item.number_of_seasons !== 1 ? 's' : ''}</div>
          </div>
          <div className="featured--description">{description}</div>
          <div className="featured--buttons">
            <a className='featured--watchbutton' href={`/watch/${item.id}` }> <PlayArrowIcon/>Assistir</a>
            <a className='featured--mylistbutton' href={`/list/add/${item.id}`}> + Minha Lista</a>
          </div>
          <div className="featured--genres">
            <strong>Gênero : {genres.join(', ')} </strong>
          </div>
        </div>
      </div>

    </section>
  )
}
export default FeaturedMovie;