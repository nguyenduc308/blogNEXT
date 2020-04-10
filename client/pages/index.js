import Layout from '../components/layout'
import Link from 'next/link'
const Index = () => {
    return(
        <div className="home">
            <div className="home__box">
                <h1 className="home__title">Digital Marketing Stories</h1>
                <a href="/blogs" className="home__btn">Xem thêm</a>
            </div>
        </div>
    )
}

export default Index;