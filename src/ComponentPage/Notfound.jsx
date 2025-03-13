import { Link } from 'react-router-dom';
import '../Styles/App.css';

const NotFound = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>404 - Không tìm thấy trang</h1>
            <p>Trang bạn đang tìm kiếm không tồn tại.</p>
            <Link to="/">Quay về trang chủ</Link>
        </div>
    );
};

export default NotFound;
