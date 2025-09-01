import React from 'react'
import { Link, useParams } from 'react-router-dom'
import Data from '../Components/Data';
import DetailCollection from '../Components/DetailCollection';

const DetailedPage = () => {

    const { id } = useParams()
    const movie = Data.find(movie => movie.id === parseInt(id))
if (!movie) return <h1>Movie not found</h1>
 let ExtraComponent = null;

/*switch (movie.id) {
  case 1:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 2:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 3:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 4:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 5:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 6:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 7:
ExtraComponent = />;
    break;
    case 8:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 9:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 10:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    case 11:
ExtraComponent = <DetailCollection movie={movie} />;
    break;
    
    

  default:
    console.log('bye');
    break;
}

*/

  return (
    <>

<DetailCollection movie={movie} />
    </>
    


  )
}

export default DetailedPage
