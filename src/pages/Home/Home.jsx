import { useEffect } from "react"
import { photos } from "../../constants/index"
import Item from "../../components/Item"
import TransitionWrapper from "../../components/TransitionWrapper"

const Home = () => {
    useEffect(() => {
        document.body.style.backgroundColor = 'var(--color-bg)'
    }, [])

    return (
        <TransitionWrapper>
            <div className="content">
                {photos.map(data => {
                    return (
                        <Item key={data.id} data={data} />
                    )
                })}
            </div>
        </TransitionWrapper>
    )
}

export default Home