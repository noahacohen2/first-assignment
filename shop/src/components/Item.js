import './Item.css';
import Card from './UI/Card';

function Item(props) {

    return (
        <Card className='item-card'>
            <div className="item-basic-data">
                <div className="item-name">{props.name}</div>
                <div className="item-price">{props.price}</div>
            </div>
            <img className='item-img' src={props.img} />
        </Card>
    );

}

export default Item;