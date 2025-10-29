import AESLPageFooter from '../../components/organisms/footers/AESLPageFooter'
import CategoryHeaderBanner from '../../components/molecules/banners/CategoryHeaderBanner'
import xxx from '../../images/placeholders/landscape_Images/landscape_01.png'
import { IoNewspaperOutline } from 'react-icons/io5'

const News = () => {
     const title = 'News'
    return (
        <div id="NewsPage"
            className=""
        >
            {/* Page Header Start */}
            <header id = "NewsPageHeader"
                className="
                bg-white"
            >
                <CategoryHeaderBanner 
                    image = {xxx}
                    title = 'news'
                    Icon = {<IoNewspaperOutline />}
                />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="NewsPageMain"
            >
                {/* News Start */}
                    <div className="grid gtc12 ggap1-00
                        pa1-00"
                    >
                        <article className="gr1s3 gc1s12"
                        >
                            <hgroup className="flex justify-around items-start flex-column"
                            >
                                <h2 className="
                                    w-100 h-100
                                    mt0-75"
                                >
                                    Please, we are sorry our <span className="blue0 bb bw2">{title} Page</span>  is under development
                                </h2>
                                <h4 className="
                                    w-100 h-100
                                    mt0-75 
                                    red"
                                >
                                    It would be up and running very soon
                                </h4>
                            </hgroup>
                        </article>
                    </div>
                {/* News End */}
            </main>
            {/* Page Main End */}

            {/* Page Footer Start */}
            <footer id = "NewsPageFooter"
                className="w-100 mv1-00"
            >
                <AESLPageFooter />
            </footer>
            {/* Page Footer End */}
        </div>
    )
}

export default News