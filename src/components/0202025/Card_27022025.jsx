import './Card_27022025.scss' 
import visual1_flower from '../../assets/Card_27022025/visual1_flower.png'
import visual1_cloud from '../../assets/Card_27022025/visual1_cloud.png'
import visual1_leaf_green from '../../assets/Card_27022025/visual1_leaf_green.png'
import visual1_leaf_yellow from '../../assets/Card_27022025/visual1_leaf_yellow.png'
import visual1_flower_dark from '../../assets/Card_27022025/visual1_flower_dark.png'

function Card_2702025 () {



return (
    
    <section className="visual">
        <div className="visual__container">
            <div className="visual__top">
                <button className="visual__top--menu">
                    <p className="text">Home</p>
                </button>
                <button className="visual__top--menu">
                    <p className="text">Menu</p>
                </button>
            </div>
            <img src={visual1_flower} alt="flower icon" className="icon icon-flower" />
            <img src={visual1_cloud} alt="cloud icon" className="icon icon-cloud" />
            <img src={visual1_leaf_green} alt="leaf green icon" className="icon icon-leaf-green" />
            <img src={visual1_leaf_yellow} alt="leaf yellow icon" className="icon icon-leaf-yellow" />
            <img src={visual1_flower_dark} alt="leaf yellow icon" className="icon icon-flower-dark"/>
            <div className="visual__hero">
                <h2 className='visual--title'>
                    Action is the cure
                </h2>
            </div>
            <div className="visual__footer">
                <div className="visual__footer--date">
                    <p className='footer-text'>✱</p>
                    <p className='footer-text'>27 February 2025</p>
                </div>
                <div className="visual__footer--name">
                    <p className='footer-text'>Visual practice 1</p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Card_2702025;