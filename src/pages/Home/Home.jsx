import { photos } from "../../constants/index"
import Item from "../../components/Item"

const Home = () => {
    return (
        <main>
            <div className="frame">
                <div className="frame__title">
                </div>
            </div>
            <div className="content">
                {photos.map(data => {
                    return (
                        <Item key={data.id} data={data} />
                    )
                })}
            </div>
        </main>
    )
}

export default Home