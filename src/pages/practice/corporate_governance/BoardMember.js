import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import xxx from '../../../images/practice/management/management-01.jpeg'
import { Link } from 'react-router-dom'

const BoardMember = () => {
    return (
        <div id=""
            className="min-vh-100 w-100">
        
            {/* <!-- Page Header --> */}
            <header id="peope_pageHeader"
                className="grid gtc12 
                    "
            >
                <figure className="gc1s12">
                    <img src={xxx}
                        alt=""
                        className="vh-50 cover"
                    />
                </figure>
                <hgroup className="gc1s12 w-100 blue0">
                    <h2 className="w-100 h-100
                        pa1-00 pb1-00 mb0-00
                        f3-00
                        ">
                        Board Members's Title and Name
                    </h2>
                </hgroup>
            </header>
            {/* <!-- Page Header --> */}
            
            {/* <!-- Page Main --> */}
            <main id = "principal-consultant-pagemain"
                className="bg-white"
            >
                <div id="l_3:1" 
                    className="grid gtc4 ph1-00"
                >
                    {/* <!-- AESL Board Member Start --> */}
                    <div id="lc_gc1s3__pageMain--boardMember"
                        className="gc1s3
                            min-vh-100
                            mb1-00"
                    >
                        {/* <!-- Page Navigation --> */}
                        <div id="board_member_summary"
                            className="pt2-00"
                        >
                            <div id="pageNav"
                                className="grid gtc12 gc1s12 ggap1-00
                                    white-90 ph4-00 mb2-00
                                    tracked-tight"
                            >
                                <article id="people_nav1" 
                                    className="gr1s1 gc1s2
                                    h10-00 w10-00
                                    f1-00 bg-blue0"
                                >
                                    <hgroup id=""
                                        className="
                                            w-100 h-100 
                                            pa1-00
                                            bg-green"
                                    >   <h3>CV</h3> 
                                    </hgroup> 
                                </article>

                                <article id="brief_summary" 
                                    className="gr1s1 gc3s10
                                    h10-00 w-100
                                    pa1-00
                                    f1-25 bg-blue0"
                                >
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, error magnam. Impedit tempore earum debitis quae vero quo. Magnam, facere. Ea, velit ut earum voluptas commodi autem explicabo blanditiis, unde veniam architecto fuga rem quas debitis animi doloribus maiores ullam, molestias incidunt eum odit? Quod similique quae impedit accusamus nisi?
                            
                                </article>
                            </div>
                        </div>
                        {/* <!-- Page Navigation -->  */}

                        {/* <!-- Board Member --> */}
                        <div id="board_member"
                            className="grid gtc12 ggap1-00
                                mb2-00"
                        >
                            <div id="board_member_gallery"
                                className="gr1s1 gc1s12
                                    grid gtc12 ggap1-00
                                    mb2-00
                                    white-90"
                            >
                                <article id="people_board_member_gallery_3" 
                                    className="gr1s1 gc1s6
                                        pa2-00
                                        white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 bg-blue2 mb0-50">
                                        <img src={xxx}
                                            alt=""
                                            className="pa0-50 bg-blue0"
                                        />
                                    </figure>
                                    <hgroup 
                                        className="flex flex-column
                                            w-100 bg-blue0
                                            white-90 pa0-50"
                                    >
                                        <h5 className="mb0-50"
                                        >
                                            Image Title
                                        </h5> 
                                        <h6>
                                            Image Description
                                        </h6>
                                    </hgroup>
                                </article>
                                
                                <article id="people_board_member_gallery_4" 
                                    className="gr1s1 gc7s6
                                        pa2-00
                                        white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 bg-blue2 mb0-50">
                                        <img src={xxx}
                                            alt=""
                                            className="pa0-50 bg-blue0"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        className="flex flex-column
                                            w-100 
                                            pa0-50
                                            bg-blue0 
                                            white-90 "
                                        >
                                        <h5 className="mb0-50">
                                            Image Title
                                        </h5> 
                                        <h6>
                                            Image Description
                                        </h6>   
                                    </hgroup> 
                                </article>
                            </div>
                            {/* <!-- Board Member Header --> */}

                            {/* <!-- Board Member Description --> */}
                            <article id="board_member_description" 
                                className="gr2s1 gc1s12"
                            > 
                                <div id=""
                                    className="flex ggap1-00 w-100 tj">
                                    <div id="div" className="w-50">
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi minima
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis  
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt v
                                        </p>
                                    </div>
                                    <div id="div" className="w-50">
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus 
                                        </p>
                                    </div>
                                </div>
                                
                            </article>
                            {/* <!-- Board Member Description --> */}
                            
                            <div id="people_board_member_extra"
                                    className="gr3s1 gc1s12
                                        grid gtc12 ggap1-00
                                        mb2-00
                                        white-90"
                            >
                                
                                <article id="news_1" 
                                    className="gr1s1 gc1s3
                                        flex
                                        h0-00 
                                        pb-100 
                                        white-90 bg-blue0"
                                    >
                                    <hgroup className="flex justify-start items-start flex-column 
                                               h-100
                                                pa0-50"
                                    >
                                        <h5 className="flex items-center justify-start
                                            mb0-50"
                                        >
                                            News 1
                                        </h5> 
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde eius, est fugiat rerum possimus, modi eos officiis, architecto saepe cupidita
                                        </p>    
                                        <a  href="{% url 'website:practice-home' %}"
                                            className="pa0-25
                                                white-90 f0-75
                                                ba b--white-90 br0-25"
                                        >Read More</a> 
                                    </hgroup> 
                                </article>
                                
                                <article id="news_2" 
                                    className="gr1s1 gc4s3
                                        flex
                                            h0-00 
                                            pb-100 
                                            white-90 bg-blue0"
                                >
                                    <hgroup className="flex justify-start items-start flex-column 
                                                h-100
                                                pa0-50
                                                bg-blue0"
                                    >
                                        <h5 className="flex items-center justify-start
                                            w-100 mb0-50"
                                        >
                                            News 2
                                        </h5> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde eius, est fugiat rerum possimus, modi eos officiis, architecto saepe cupidita</p>    
                                        <a  href="{% url 'website:practice-home' %}"
                                            className="pa0-25
                                                white-90 f0-75
                                                ba b--white-90 br0-25"
                                        >Read More</a>
                                    </hgroup> 
                                </article>
                                
                                <article id="new_3" 
                                    className="gr1s1 gc7s3
                                    flex
                                            h0-00 
                                            pb-100 
                                            white-90 bg-blue0"
                                >
                                    <hgroup className="flex justify-start items-start flex-column 
                                                w-100 h-100 
                                                pa0-50
                                                bg-blue0
                                                ">
                                        <h5 className="flex items-center justify-start
                                            w-100 mb0-50
                                            ">
                                            News 3
                                        </h5> 
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptate unde eius, est fugiat rerum possimus, modi eos officiis, architecto saepe cupidita</p>    
                                        <a  href="{% url 'website:practice-home' %}"
                                            className="pa0-25
                                                white-90 f0-75
                                                ba b--white-90 br0-25"
                                        >Read More</a>
                                    </hgroup>  
                                </article>
                                
                                <article id="people_rank_1" 
                                    className="gr2s1 gc10s3
                                        flex
                                        h0-00 
                                        pb-100 
                                        white-90 bg-blue1"
                                >
                                    <ul id=""
                                        className="
                                            w-100 h-100
                                            pa0-50
                                            bg-blue1"
                                    >   
                                        {/* {% for x in junior_ranks %} */}
                                            <li className="">
                                                
                                                <Link  to=""
                                                    className="white-90" 
                                                > x </Link>
                                            </li>
                                        {/* {% endfor %}           */}
                                    </ul> 
                                </article>
                                                                
                                <article id="people_rank_2" 
                                    className="gr2s1 gc7s3 shadow-5
                                    flex
                                            h0-00 
                                            pb-100 
                                            white-90 bg-blue1"
                                >
                                    <ul id=""
                                        className="
                                            w-100
                                            pa0-50
                                            bg-blue1"
                                    >   
                                        {/* {% for x in senior_ranks %} */}
                                            <li className="">
                                                
                                                <a  href="{% url 'website:people-home' %}"
                                                    className="white-90" 
                                                >x</a>
                                            </li>
                                        {/* {% endfor %} */}
                                    </ul> 
                                </article>

                                <article id="misc_gold" 
                                    className="gr2s1 gc1s3
                                        pb-100
                                        bg-black-20"
                                >
                                </article>
                                <article id="misc_blue_1" 
                                    className="gr2s1 gc4s3
                                        bg-black-20
                                        "
                                >
                                </article>
                                <article id="misc_blue_2" 
                                    className="gr1s1 gc10s3
                                        bg-green
                                        "
                                >
                                </article>
                            </div>

                            <article id="board_member_description" 
                                className="gr4s1 gc1s12"
                            > 
                                <div id=""
                                    className="flex ggap1-00 w-100 tj"
                                >
                                    <div id="div"
                                    >
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi minima
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis  
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt v
                                        </p>
                                    </div>
                                    <div id="div"
                                    >
                                        <p>
                                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa quaerat, culpa pariatur, tenetur, necessitatibus nisi
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus
                                        </p>
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor incidunt dolorum, veritatis blanditiis obcaecati nesciunt voluptatibus 
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                        {/* <!-- Board Member --> */}
                        <SectionFooter 
                            sectionTitle = "Practice/Corporate Governance/Board Member's Title and Name"
                        />
                    </div>
                    {/* <!-- AESL Board Member Start --> */}

                    {/* <!-- AESL Board Member Aside  Start --> */}
                    <div id="lc_gc4s1__pageAside--boardMember" 
                        className="gc4s1 
                            blue0 relative"
                    >
                        <div className="flex flex-column justify-start
                            min-vh-100 
                            pl1-00 pt2-00
                            sticky top-2"
                        >
                            <h2 className="ttu"
                            >
                                <Link to ="/practice/corporate-governance/">
                                    Corporate Governance
                                </Link>
                            </h2>
                            <ul className="mb1-00 bl bw4 b--green pl1-00 f0-75">
                                <h3 >On this page</h3>
                                <li className="mb1-00 i">
                                    <a href="#board_member_summary"
                                    className="blue0"
                                    >
                                        Board Member Summary
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#board_member_gallery"
                                        className="blue0"
                                    >
                                        Board Member's Gallery
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#board_member_description"
                                    className="blue0"
                                    >
                                        Board Member's Description
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#people_board_member_extra"
                                        className="blue0"
                                    >
                                        Board Member's Links
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- AESL Board Member Aside  End --> */}
                </div>
            </main>
            {/* <!-- Page Main -->  */}
        </div>
    )
}

export default BoardMember
