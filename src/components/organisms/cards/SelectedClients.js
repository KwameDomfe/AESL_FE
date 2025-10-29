import client_01 from '../../../images/index/clients/1.jpg'
import client_02 from '../../../images/index/clients/2.jpg'
import client_03 from '../../../images/index/clients/3.jpg'
import client_04 from '../../../images/index/clients/4.jpg'
import client_05 from '../../../images/index/clients/5.jpg'
import client_06 from '../../../images/index/clients/6.jpg'

const SelectedClients = () => {
    return (
        <figure id=""
            className="grid gtc6 ggap1-00 items-center justify-center
                w-100 h-100 
                pv4-00-s"
        >
            <img src={client_01} 
                alt=""
                className="gr1s1 gc1s3 gc1s2-s gc1s1-m
                    w-100 "
            />
            <img src={client_02} 
                alt=""
                className="gr1s1 gc4s3 gc3s2-s gc2s1-m
                    w-100"
            />
            <img src={client_03} 
                alt=""
                className="gr2s1 gc1s3 gr1s1-s gc5s2-s gc3s1-m
                    w-100"
            />
            <img src={client_04}
                alt=""
                className="gr2s1 gc4s3 gc1s2-s gr1s1-m gc4s1-m
                    w-100"
            />
            <img src={client_05}
                alt=""
                className="gr3s1 gc1s3 gc3s2-s gr2s1-s gr1s1-m gc5s1-m
                    w-100"
            />
            <img src={client_06} 
                alt=""
                className="gr3s1 gc4s3 gr2s1-s gc5s2-s gr1s1-m gc6s1-m
                    w-100"
            />
        </figure>
    )
}

export default SelectedClients
