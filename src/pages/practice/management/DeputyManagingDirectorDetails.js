import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import { Link, useParams } from 'react-router-dom'
import { useEffect } from 'react'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import managementHeader from '../../../images/practice/management/00.jpeg'
import { deputyManagingDirectors } from '../../../data/managementInfo'

const DeputyManagingDirectorDetails = () => {
    const { id } = useParams();
    const dmd = deputyManagingDirectors.find(d => d.key === id) || deputyManagingDirectors[0];
    useEffect(() => {
        const titlePart = dmd?.title ? ` — ${dmd.title}` : '';
        document.title = `Deputy Managing Director${titlePart} | AESL`;
    }, [dmd?.title]);
    return (
        <div id=""
            className="min-vh-100 w-100">
        
            {/* <!-- Page Header --> */}
            <header>
                <SubCategoryHeaderBanner image={managementHeader} title={`Deputy Managing Director — ${dmd.title}`} />
            </header>
            {/* <!-- Page Header --> */}
            
            {/* <!-- Page Main --> */}
            <main id = "deputyManagingDirectorPagemain"
            className="bg-white"
            >
                <div id="l_3:1" 
                    className="grid gtc4 ph1-00"
                >
                    {/* <!-- AESL Deputy Managing Director Start --> */}
                    <div id="lc_gc1s3__pageMain--deputyManagingDirector"
                        className="gc1s3
                        min-vh-100
                        mb1-00"
                    >   
                        {/* <!-- Page Navigation --> */}
                        <div id="managing_director_summary"
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
                                            bg-green
                                            "
                                    >   <h3>Contact</h3> 
                                    </hgroup> 
                                </article>

                                <article id="brief_summary" 
                                    className="gr1s1 gc3s10
                                    h10-00 w-100
                                    pa1-00
                                    f1-25 bg-blue0"
                                >
                                    <div className="flex flex-column">
                                        <h3 className="mt0-00 mb0-25">{dmd.name || 'Deputy Managing Director'}</h3>
                                        <h4 className="mt0-00 mb0-50">{dmd.title}</h4>
                                        {dmd.email && (
                                            <a className="link blue0 underline" href={`mailto:${dmd.email}`}>{dmd.email}</a>
                                        )}
                                    </div>
                                </article>
                            </div>
                        </div>
                        {/* <!-- Page Navigation -->  */}

                        {/* <!-- Deputy Managing Director --> */}
                        <div id="managing_director"
                            className="grid gtc12 ggap1-00
                                mb2-00"
                        >
                            <div id="managing_directors_gallery"
                                className="gr1s1 gc1s12
                                    grid gtc12 ggap1-00
                                    mb2-00
                                    white-90"
                            >
                                <article id="people_deputy_md_gallery_1" 
                                    className="gr1s1 gc1s6
                                            pa2-00
                                            white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 bg-blue2 mb0-50">
                                        <img loading="lazy" decoding="async" src={dmd.image}
                                            alt={`Deputy Managing Director — ${dmd.title}${dmd.name ? ` — ${dmd.name}` : ''}`}
                                            className="pa0-50 bg-blue0 w-100"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        className="flex flex-column
                                            w-100 bg-blue0 
                                            white-90 pa0-50 "
                                        >
                                        <h5 className="mb0-50">
                                            Portrait
                                        </h5> 
                                        <h6 className="mt0-00 mb0-00">
                                            {dmd.title}
                                        </h6>
                                        {dmd.name && (
                                            <h6 className="mt0-25">{dmd.name}</h6>
                                        )}
                                    </hgroup> 
                                </article>
                                
                                <article id="people_deputy_md_gallery_2" 
                                    className="gr1s1 gc7s6
                                        pa2-00
                                        white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 bg-blue2 mb0-50">
                                        <img loading="lazy" decoding="async" src={dmd.image}
                                            alt={`Deputy Managing Director — ${dmd.title}${dmd.name ? ` — ${dmd.name}` : ''}`}
                                            className="pa0-50 bg-blue0 w-100"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        className="flex flex-column
                                            w-100 
                                            pa0-50
                                            bg-blue0 
                                            white-90 "
                                        >
                                        <h5 className="mb0-50">Portrait</h5>
                                        {dmd.name && (
                                            <h6 className="mt0-00">{dmd.name}</h6>
                                        )}
                                    </hgroup> 
                                </article>
                            </div>
                            {/* <!-- Deputy Managing Director Header --> */}

                            {/* <!-- Deputy Managing Director Description --> */}
                            <article id="managing_directors_description" 
                                className="gr2s1 gc1s12"
                            > 
                                <div id=""
                                    className="flex ggap1-00 w-100 tj">
                                    <div className="w-50">
                                        <p>AESL’s Deputy Managing Director for {dmd.title.toLowerCase()} supports the Managing Director and leads the directorate.</p>
                                        <p>The office works with department heads to ensure delivery quality, budgets, and client satisfaction.</p>
                                    </div>
                                    <div className="w-50">
                                        <p>Contact: {dmd.email ? <a className="link blue0 underline" href={`mailto:${dmd.email}`}>{dmd.email}</a> : '—'}</p>
                                        <p>Learn more about our services and teams on the Management page.</p>
                                    </div>
                                </div>
                                
                            </article>
                            {/* <!-- Deputy Managing Director Description --> */}
                            
                            <div id="people_managing_directors_extra"
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
                                        <Link to="/practice"
                                            className="pa0-25 white-90 f0-75 ba b--white-90 br0-25"
                                        >Read More</Link> 
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
                                        <Link to="/practice"
                                            className="pa0-25 white-90 f0-75 ba b--white-90 br0-25"
                                        >Read More</Link>
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
                                        <Link to="/practice"
                                            className="pa0-25 white-90 f0-75 ba b--white-90 br0-25"
                                        >Read More</Link>
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
                                                
                                                <Link to="/people" className="white-90">x</Link>
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
                                        ">
                                </article>
                                <article id="misc_blue_2" 
                                    className="gr1s1 gc10s3
                                        bg-green
                                        ">
                                </article>
                            </div>

                            <article id="managing_directors_description_2" 
                                className="gr4s1 gc1s12"
                            > 
                                <div id=""
                                    className="flex ggap1-00 w-100 tj"
                                >
                                    <div>
                                        <p>Deputy Managing Director’s office news and highlights can appear here when available.</p>
                                    </div>
                                    <div>
                                        <p><Link to="/practice/management" className="ba br0-25 pa0-50 white-90">Back to Management</Link></p>
                                    </div>
                                </div>
                            </article>
                        </div>

                        <SectionFooter 
                            sectionTitle = "Practice/Management/Deputy Managing Director/Title and Name"
                        />

                        {/* <!-- Page Footer --> */}
                        <footer id="pageFooter"
                            className=""
                        > 
                        {/* {% include 'website/_partials/page_footer.html' %} */}
                        </footer>
                        {/* <!-- Page Footer --> */}
                    </div>

                    {/* <!-- AESL Deputy Managing Director Aside  Start --> */}
                    <div id="lc_gc4s1__pageAside--deputyManagingDirector" 
                        className="gc4s1 
                            blue0 relative"
                    >
                        <div className="flex flex-column justify-start
                            min-vh-100 
                            pl1-00 pt2-00
                            sticky top-2"
                        >
                            <h2 className="ttu">
                                <Link to ="/practice/management/">
                                    Management
                                </Link>
                            </h2>
                            <ul className="mb1-00 bl bw4 b--green pl1-00 f0-75">
                                <h3 >On this page</h3>
                                <li className="mb1-00 i">
                                    <a href="#managing_director_summary"
                                    className="blue0"
                                    >
                                        Deputy Managing Director's Summary
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#managing_directors_gallery"
                                        className="blue0"
                                    >
                                        Deputy Managing Director's Gallery
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#managing_directors_description"
                                    className="blue0"
                                    >
                                        Deputy Managing Director's Description
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#people_managing_directors_extra"
                                        className="blue0"
                                    >
                                        Deputy Managing Director's Links
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#managing_directors_lists"
                                    className="blue0"
                                    >
                                        Deputy Managing Directors Lists
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- AESL Deputy Managing Director Aside  End --> */}
                </div>
            </main>
            {/* <!-- Page Main -->  */}
        </div>
    )
}

export default DeputyManagingDirectorDetails
