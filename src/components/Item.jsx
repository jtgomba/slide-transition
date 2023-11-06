import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Item = ({ data }) => {
    const { meta, title, img, desc, id } = data
    return (
        <div className="item">
            <span className="item__meta">{meta}</span>
            <h2 className="item__title">{title}</h2>
            <div className="item__img"><div className="item__img-inner" style={{ backgroundImage: img }}></div></div>
            <p className="item__desc">{desc}</p>
            <Link to={`photo/${id}`} className="item__link">view</Link>
        </div>
    )
}

Item.propTypes = {
    data: {
        meta: PropTypes.string,
        title: PropTypes.string,
        img: PropTypes.string,
        desc: PropTypes.string,
        id: PropTypes.string,
    }
}

export default Item