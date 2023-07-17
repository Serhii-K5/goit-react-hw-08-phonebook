import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './notFound.module.css';


function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate('/', { replace: true });
        }, 3000);
    }, []);

    return <>
        <div className={css.NotFoundContainer}>Page not found</div>
    </>
}

export default NotFound;