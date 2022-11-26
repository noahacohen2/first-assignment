import Item from "./Item";
import './Items.css';

function Items(props) {

    return (
        <div className='all-items'>
            {
                props.items.map(item => (
                    <Item name={item.name} price={item.price} img={item.img}></Item>
                ))
            }
        </div>
    );

}

export default Items;