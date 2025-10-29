import AESLPageFooter from '../../../components/organisms/footers/AESLPageFooter'
import AESLPracticeNav from '../../../components/organisms/navs/AESL_PracticeNav'
import corporateGovernance from '../../../images/practice/corporate-governance/AESL-Board.jpg'
import boardMember01 from '../../../images/practice/corporate-governance/board-member-01.jpeg'
import boardMember02 from '../../../images/practice/corporate-governance/board-member-02.jpeg'
import boardMember03 from '../../../images/practice/corporate-governance/board-member-03.jpeg'
import boardMember04 from '../../../images/practice/corporate-governance/board-member-04.jpg'
import boardMember05 from '../../../images/practice/corporate-governance/board-member-05.jpg'
import boardMember06 from '../../../images/practice/corporate-governance/board-member-06.jpg'
import boardChairman from '../../../images/practice/corporate-governance/board-chairman.jpeg'
import bod01 from '../../../images/practice/corporate-governance/bod-01.jpg'
import bod02 from '../../../images/practice/corporate-governance/bod-02.jpeg'
import bod03 from '../../../images/practice/corporate-governance/bod-03.jpeg'
import bod04 from '../../../images/practice/corporate-governance/bod-04.jpeg'
import { Link } from 'react-router-dom'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import BoardMemberCard from '../../../components/organisms/cards/BoardMemberCard'
import BoardMemberCardReverse from '../../../components/organisms/cards/BoardMemberCardReverse'
const CorporateGovernance = () => {
    return (
        <div>
             {/* Page Header Start */}
            <header>
                <SubCategoryHeaderBanner
                    image = {corporateGovernance}
                    title = 'Corporate Governance'
                />
                <AESLPracticeNav />
            </header>
            {/* Page Header End */}

            {/* Page Main Start */}
            <main className="ph1-00">
                <div className="grid gtc4">

                    <div id="pageDetails"
                        className="gc1s3
                            mb1-00 min-vh-100"
                    >   
                        
                        <div id="cg--overview"
                            className="grid gtc12 ggap1-00 
                                mb4-00"
                        >
                            <article id="" 
                                className="gr2s1 gc2s10"
                            >   
                                <div className="flex ggap1-00 lh-copy mv4-00 f1-25 blue0"
                                >
                                    <div>
                                        <p>
                                            AESL's corporate governance upholds ethical standards and promotes integrity and professionalism through a comprehensive code of conduct and a well-structured Board of Directors.
                                        </p>
                                    </div>
                                </div>
                            
                                <div id=""
                                    className="gr3s1 gc1s12
                                            grid gtc12 ggap1-00
                                            white-90">
                                    
                                    <article id="" 
                                        className="gr1s2 gc1s6
                                        flex items-center justify-center
                                        relative">
                                        
                                        <figure className="shadow-5">
                                            <img src={bod01}
                                                alt=""
                                                className="pa0-50
                                                    w-100 h-100
                                                    cover"
                                                /> 
                                        </figure>
                                    </article>
                                    
                                    <article id="" 
                                        className="gr1s1 gc7s6
                                            flex items-center justify-center
                                            relative"
                                    >
                                        <figure className="shadow-5">
                                            <img src={bod02}
                                                alt=""
                                                className="pa0-50"
                                            /> 
                                        </figure>
                                    </article>
                                
                                    <article id="" 
                                        className="gr4s2 gc1s6
                                        flex items-center justify-center
                                        relative">

                                        <figure className="shadow-5">
                                            <img src={bod03}
                                                alt=""
                                                className="w-100
                                                    pa0-50"
                                                /> 
                                        </figure>
                                    </article>
                                
                                    <article id="" 
                                        className="gr4s2 gc7s6
                                            flex items-center justify-center
                                            relative"
                                    >                 
                                        <figure className="shadow-5">
                                            <img src={bod04}
                                                alt=""
                                                className="pa0-50"
                                                /> 
                                        </figure>
                                    </article>
                                
                                    <article id="" 
                                        className="gr2s2 gc10s2
                                            flex items-center justify-center
                                            bg-gray
                                            ">
                                    </article>
                                
                                    <article id="" 
                                        className="gr3s1 gc7s3 h8-00
                                            flex items-center justify-center
                                            bg-black-90
                                            ">
                                    </article>
                                    {/* <!-- Practice --> */}
                                </div>
                            </article>
                            <footer className="gr3s1 gc1s12 pa1-00 bg-gray white-90 i w-100">
                                Practice || Corporate Governance || Overview
                            </footer>
                        </div>

                        <div id="cg--boardChairman"
                            className="grid gtc12 ggap1-00 mb4-00
                            "         
                        >   
                            <header className="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    className=""
                                >
                                    <h2 className="mv1-00 pl1-00
                                        f2-00 ttu white-90"
                                    >
                                        Board Chairman
                                    </h2>     
                                </hgroup> 
                            </header>
                            <div id="corporate-governance-board-chairman" 
                                className="gr2s1 gc1s12
                                    grid gtc12
                                    white-90"
                            >
                                
                                <article id="tr" 
                                    className="gr1s2 gc1s6
                                        flex flex-column justify-between
                                        relative 
                                        w-100 h-100
                                        pa2-00 ph2-00
                                        bg-blue0"
                                >
                                    <div>
                                        <h2 className="mb1-00">Prof. Kwasi Asamoah</h2>
                                        <h3 className="mb1-00">Board Chairman</h3>
                                        <div className="red">
                                            <p>non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam</p>
                                            <p>non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam</p>
                                            <p>non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex f0-75">
                                        <a className="ma0-50 ba br0-50 pa0-50 white-90"  
                                            href="www.linkedin.com"
                                        >
                                            LinkedIn
                                        </a>
                                        <a className="ma0-50 ba br0-50 pa0-50 white-90"  
                                            href="www.twitter.com"
                                        >
                                            Twitter
                                        </a>
                                        <Link className="ma0-50 ba br0-50 pa0-50 white-90" 
                                        to ="/practice/corporate-governance/board-chairman"
                                        >
                                            Read More
                                        </Link>
                                    </div>
                                </article>
                                
                                <article id="" className="gr1s2 gc7s6
                                        flex items-center justify-center
                                        relative">
                                    <figure className="">
                                        <img src={boardChairman} 
                                            alt="" 
                                            className="pa0-50"
                                        /> 
                                    </figure>
                                </article>
                            </div>
                            <footer className="gr3s1 gc1s12 pa1-00 bg-gray white-90 w-100 i">
                                Practice || Corporate Governance || Board Chairman
                            </footer>
                        </div>

                        <div id="cg--boardMembers"
                            className="grid gtc12 ggap1-00"
                        >
                            <header className="gr1s1 gc1s12 bg-gray w-100">
                                <hgroup id=""
                                    className=""
                                >
                                    <h2 className="mv1-00 pl1-00
                                        f2-00 ttu white-90"
                                    >
                                        Board Members
                                    </h2>
                                </hgroup> 
                            </header>

                            <div id="/corporate-governance/board-member-01" 
                                className="gr2s1 gc1s4
                                    "
                            >
                                <BoardMemberCard 
                                    name ='Rev. Osei Yaw Stephen'
                                    title = 'Board Member'
                                    overview = 'non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam'
                                    liknedInURL ='www.linkedin.com'
                                    twitterURL ='www.twitter.com'
                                    url = '/practice/corporate-governance/board-member'
                                    image = {boardMember01}
                                />
                            </div>

                            <div id="/corporate-governance/board-member-02" 
                                className="gr2s1 gc5s4"
                            >
                                <BoardMemberCardReverse 
                                    name ='Prof. De- Graft Owusu Manu'
                                    title = 'Board Member'
                                    overview = 'non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam'
                                    liknedInURL ='www.linkedin.com'
                                    twitterURL ='www.twitter.com'
                                    url = '/practice/corporate-governance/board-member'
                                    image = {boardMember02}
                                />
                            </div>

                            <div id="/corporate-governance/board-member-03" 
                                className="gr2s1 gc9s4"
                            >
                                <BoardMemberCard 
                                    name ='Arc. Agyei Marfo Isaac'
                                    title = 'Board Member/MD'
                                    overview = 'non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam'
                                    liknedInURL ='www.linkedin.com'
                                    twitterURL ='www.twitter.com'
                                    url = '/practice/corporate-governance/board-member'
                                    image = {boardMember03}
                                />
                            </div>

                            <div id="/corporate-governance/board-member-04" 
                                className="gr3s1 gc1s4"
                            >
                                <BoardMemberCard 
                                    name ='Mad. Asamoah Susana'
                                    title = 'Board Member'
                                    overview = 'non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam'
                                    liknedInURL ='www.linkedin.com'
                                    twitterURL ='www.twitter.com'
                                    url = '/practice/corporate-governance/board-member'
                                    image = {boardMember04}
                                />
                            </div>

                            <div id="/corporate-governance/board-member-05" 
                                className="gr3s1 gc5s4"
                            >
                                <BoardMemberCardReverse 
                                    name ='Mr. Basco A. Kante'
                                    title = 'Board Member'
                                    overview = 'non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam'
                                    liknedInURL ='www.linkedin.com'
                                    twitterURL ='www.twitter.com'
                                    url = '/practice/corporate-governance/board-member'
                                    image = {boardMember05}
                                />
                            </div>

                            <div id="/corporate-governance/board-member-06" 
                                className="gr3s1 gc9s4">
                                <BoardMemberCard 
                                    name ='Hon. Dakoa Newman (MP)'
                                    title = 'Board Member'
                                    overview = 'non vitae ducimus molestias dolorum ratione odit cumque harum inventore fugit dignissimos aliquam alias perspiciatis maxime reiciendis tenetur debitis magnam'
                                    liknedInURL ='www.linkedin.com'
                                    twitterURL ='www.twitter.com'
                                    url = '/practice/corporate-governance/board-member'
                                    image = {boardMember06}
                                />
                            </div> 

                            <footer className="gr4s1 gc1s12 pa1-00 bg-gray white-90 w-100 i">
                                Practice || Corporate Governance || Board Members
                            </footer>
                        </div>
                    
                    </div>

                    <div id="pageNav" 
                        className="gc4s1 
                            w-100 blue0 relative"
                    >
                        <div className="flex flex-column justify-between
                            min-vh-100 
                            ph1-00 pb1-00
                            pt5-00
                            sticky top-0"
                        >
                            <div>
                                <Link to = '/practice'
                                    className="dib mb1-00 
                                        f1-25 blue0 ttu fw6"
                                >
                                    Back to Practice
                                </Link>
                                <ul className="mb1-00 pa1-00 
                                    bl bw4 b--gray 
                                    gray f0-75"
                                >
                                    <h3 >Corporate Governance</h3>
                                    <li className="mb1-00 i"
                                    >
                                        <a href='#cg--overview'
                                            className="gray"
                                        >
                                            Corporate Governance
                                        </a>
                                    </li>
                                    <li className="mb1-00 i"
                                    >
                                        <a href = '#cg--boardChairman'
                                            className="gray"
                                        >
                                            Board Chairman
                                        </a>
                                    </li>
                                    <li className="mb1-00 i"
                                    >
                                        <a href = '#cg--boardMembers'
                                            className="gray"
                                        >
                                            Board Members
                                        </a>
                                    </li>
                                </ul>
                            </div> 

                            <div className="h6-00 gray">
                                <small></small><br/>
                                <Link to = '/practice/sector-ministry' 
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL sector Ministry
                                </Link> <br/><br/>
                                <small>Next</small><br/>
                                <Link to ='/practice/management'
                                    className="mb1-00 f0-75 gray b"
                                >
                                    AESL Management
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            {/* Page Main End */}
            
            {/* Page Footer Start */}
            <AESLPageFooter pageTitle="Corporate Governance"/>
            {/* Page Footer End */}
        </div>
    )
}

export default CorporateGovernance