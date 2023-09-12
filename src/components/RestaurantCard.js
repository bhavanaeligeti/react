import { IMG_CDN_URL } from "../config";

const RestaurantCard = ({cloudinaryImageId, name, cuisines, areaName, avgRating}) => {
  
    return (
        <div className="card">
            <img src={ IMG_CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <p>{cuisines.join(", ")}</p>
            <p>{areaName}</p>
            <p>{avgRating} star</p>
        </div>
    );
}

export default RestaurantCard;