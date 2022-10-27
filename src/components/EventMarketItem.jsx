import { useNavigate } from "react-router-dom";
import MarketItem from "./MarketItem";

const EventMarketItem = (props) => {
    const router = useNavigate()

    return (
        <div className='market-item'>
            <div style={{textAlign: 'center'}}>
                <strong onClick={() => router(`/sports/${props.data.sport_id}/events/${props.data.id}`)}>{props.data.desc}</strong>
            </div>
            {props.data.markets.length
                ? props.data.markets.map(market => <MarketItem key={market.id} marketData={market}/>)
                : (<p>Bets will be available soon :)</p>)
            }
        </div>
    );
};

export default EventMarketItem;