import { useContext } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';

const LeftSideNav = () => {
    const {categories, setCatName} = useContext(AuthContext);
    const getCategoryHandler = (name) =>{
        setCatName(name)
        console.log(name);
    }
    return (
        <div>
            <h5 className='d-none d-md-block'>All Categories</h5>
            <h5 className='d-sm-block d-md-none text-light'>All Categories</h5>
                {
                    categories.map(category =>
                        <ListGroup variant="flush" className='w-100 border-bottom d-none d-md-block' key={category.id}>
                            <ListGroup.Item as={Link} to={`/category/${category.id}`} onClick={()=>getCategoryHandler(category.name)}>{category.name}</ListGroup.Item>
                        </ListGroup>
                    )
                }
        </div>
    );
};

export default LeftSideNav;