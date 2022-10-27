
import { useNavigate } from "react-router-dom";
import MarketItem from "./MarketItem";
import MyButton from "./UI/Button/MyButton";

const EventsItem = (props) => {
    const router = useNavigate()

    return (
        <div className='event-item'>
            <div style={{textAlign: 'center'}}>
                <strong>{props.data.desc}</strong>
                
                {props.data.markets.length
                    ? props.data.markets.map(market => <MarketItem key={market.id} marketData={market}/>)
                    : (<p>Bets will be available soon :)</p>)
                }

                <MyButton onClick={() => router(`/sports/${props.data.sport_id}/events/${props.data.id}`)}>
                    More info
                </MyButton>
            </div>
        </div>
    );
};

export default EventsItem;