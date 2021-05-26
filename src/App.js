import React,{useEffect,useState} from 'react';
import Tmds from './tmdb';
import MovieRow from './components/MovieRow/movieRow';
import FeaturedMovie from './components/FeaturedMovie/featuredMovie';
import Header from './components/Header/header';
import  './App.css';

export default function App ()  {

  const [movieList, setMovieList] =useState([]);
  const [featureData, setFeatureData]= useState([]);
  const [blackHeader, setBlackHeader] = useState(false);

  useEffect(()=>{
    const loadAll = async () =>{
      //pegando a lista total
      let list = await Tmds.getHomeList();
      setMovieList(list);
      //pegando o filme em destaque
      let originals = list.filter(
        function (i){
          return(i.slug==='originals')
      })
      let aleatorioChosen = Math.floor(Math.random() * (originals[0].items.results.length -1))
      let escolhido= originals[0].items.results[aleatorioChosen];
      let escolhidoInfo = await Tmds.getMovieInfo(escolhido.id, 'tv');
      setFeatureData(escolhidoInfo);
    }
    loadAll();
  },[]);

  useEffect (()=>{
    const scroll = () =>{
      if(window.scrollY >10){
        setBlackHeader(true);
      }else {
        setBlackHeader(false);
      }
    }
    window.addEventListener('scroll',scroll);
    return () =>{
      window.removeEventListener('scroll',scroll);
    }
  },[])

  return(
    <div className="page">

      <Header black={blackHeader} />

      {featureData && 
      <FeaturedMovie item={featureData}/>
      }
      

      <section className="lists">
        {movieList.map(function(item,key){
          return (
            
             <MovieRow key={key} title={item.title} items={item.items}/>
            
          )
        })}
      </section>
      <footer >
        Feito com B7web e Matheus Lira Barbosa <br/>
        Direitos de imagem Netflix<br/>
        Api consumida do site Themoviedb.org
      </footer>
      {movieList.length <=0 && 
      <div className="loading">
        <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif"/>
      </div>
      }
    </div>
  );
}
