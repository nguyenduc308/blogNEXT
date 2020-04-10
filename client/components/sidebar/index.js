const Sidebar = () => {
    return(
        <div className="sidebar">
            <div className="widget">
                <h5 className="widget__title"><span>Chuyên mục</span></h5>
                <div className="widget__content">
                    <div className="widget__categories">
                        <ul className="cat-list">
                            <li className="cat__item">
                                <a href="#" className="cat__link">Digital Marketing</a>
                            </li>
                            <li className="cat__item">
                                <a href="" className="cat__link">Đọc sách mỗi ngày</a>
                            </li>
                            <li className="cat__item">
                                <a href="" className="cat__link">Kinh tế học</a>
                            </li>
                            <li className="cat__item">
                                <a href="" className="cat__link">Kinh doanh thời nay</a>
                            </li>
                            <li className="cat__item">
                                <a href="" className="cat__link">Đầu tư</a>
                            </li>
                            <li className="cat__item">
                                <a href="" className="cat__link">Tản mạn</a>
                            </li>
                            <li className="cat__item">
                                <a href="" className="cat__link">Chia sẻ</a>
                            </li>
                            <li className="cat__item">
                                <a href="" className="cat__link">Phát triển bản thân</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="widget">
                    <h5 className="widget__title"><span>Your link here ?</span></h5>
                    <div className="widget__content">
                        <div className="sidebar__ads">
                            Liên hệ: admin@duclux.com
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default Sidebar