import SectionFooter from '../../../components/organisms/footers/SectionFooter'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import SubCategoryHeaderBanner from '../../../components/molecules/banners/SubCategoryHeaderBanner'
import managementHeader from '../../../images/practice/management/00.jpeg'
import { managingDirector } from '../../../data/managementInfo'

const ManagingDirectorDetails = () => {
    const currentMD = managingDirector;
    useEffect(() => {
        if (currentMD?.name && currentMD?.title) {
            document.title = `${currentMD.title} — ${currentMD.name} | AESL`;
        } else {
            document.title = 'Managing Director | AESL';
        }
    }, [currentMD?.name, currentMD?.title]);
    return (
        <div id=""
            className="min-vh-100 w-100">
        
            {/* <!-- Page Header --> */}
            <header id="people_pageHeader">
                <SubCategoryHeaderBanner image={managementHeader} title="Managing Director" />
            </header>
            {/* <!-- Page Header --> */}
            
            {/* <!-- Page Main --> */}
            <main id = "managing-director-pagemain"
            className="bg-white"
            >
                <div id="l_3:1" 
                    className="grid gtc4 ph1-00"
                >
                    {/* <!-- AESL History Start --> */}
                    <div id="lc_gc1s3__pageMain--managingDirector"
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
                                    >   <h3>CV</h3> 
                                    </hgroup> 
                                    </article>

                                    <article id="brief_summary" 
                                        className="gr1s1 gc3s10
                                        h10-00 w-100
                                        pa1-00
                                        f1-25 bg-blue0
                                        ">
                                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, error magnam. Impedit tempore earum debitis quae vero quo. Magnam, facere. Ea, velit ut earum voluptas commodi autem explicabo blanditiis, unde veniam architecto fuga rem quas debitis animi doloribus maiores ullam, molestias incidunt eum odit? Quod similique quae impedit accusamus nisi?
                                
                                </article>
                            </div>
                        </div>
                        {/* <!-- Page Navigation -->  */}

                        {/* <!-- Managing Director --> */}
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
                                <article id="people_managing_director_gallery_1" 
                                    className="gr1s1 gc1s6
                                            pa2-00
                                            white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 bg-blue2 mb0-50">
                                        <img loading="lazy" decoding="async" src={currentMD.gallery?.[0]?.image || currentMD.image}
                                            alt={currentMD.gallery?.[0]?.alt || `${currentMD.name} — ${currentMD.title}`}
                                            className="pa0-50 bg-blue0 w-100"
                                        /> 
                                    </figure>
                                    <hgroup 
                                        className="flex flex-column
                                            w-100 bg-blue0 
                                            white-90 pa0-50 "
                                        >
                                        <h5 className="mb0-50">{currentMD.gallery?.[0]?.title || 'Portrait'}</h5> 
                                        <h6>{currentMD.gallery?.[0]?.subtitle || currentMD.name}</h6>   
                                    </hgroup> 
                                </article>
                                
                                <article id="people_managing_director_gallery_2" 
                                    className="gr1s1 gc7s6
                                        pa2-00
                                        white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 bg-blue2 mb0-50">
                                        <img loading="lazy" decoding="async" src={currentMD.gallery?.[1]?.image || currentMD.image}
                                            alt={currentMD.gallery?.[1]?.alt || `${currentMD.name} — ${currentMD.title}`}
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
                                        <h5 className="mb0-50">{currentMD.gallery?.[1]?.title || 'Event'}</h5> 
                                        <h6>{currentMD.gallery?.[1]?.subtitle || ''}</h6>   
                                    </hgroup> 
                                </article>

                                <article id="people_managing_director_gallery_3" 
                                    className="gr2s1 gc1s6
                                        flex flex-column
                                        pa2-00 
                                        white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 mb0-50">
                                        <img loading="lazy" decoding="async" src={currentMD.gallery?.[2]?.image || currentMD.image}
                                            alt={currentMD.gallery?.[2]?.alt || `${currentMD.name} — ${currentMD.title}`}
                                            className="pa0-50 w-100"
                                        /> 
                                    </figure>
                                    <hgroup 
                                    className="flex flex-column
                                        w-100 bg-blue0 
                                        white-90 pa0-50 "
                                    >
                                                <h5 className="mb0-50">{currentMD.gallery?.[2]?.title || 'Portrait'}</h5> 
                                                <h6>{currentMD.gallery?.[2]?.subtitle || currentMD.title}</h6>   
                                </hgroup> 
                                </article>
                                
                                <article id="people_managing_director_gallery_4" 
                                    className="gr2s1 gc7s6
                                        flex flex-column
                                        pa2-00
                                        white-90 bg-blue1"
                                >
                                    <figure className="shadow-5 mb0-50">
                                        <img loading="lazy" decoding="async" src={currentMD.gallery?.[3]?.image || currentMD.image}
                                            alt={currentMD.gallery?.[3]?.alt || `${currentMD.name} — ${currentMD.title}`}
                                            className="pa0-50 w-100"
                                        /> 
                                    </figure>
                                    <hgroup 
                                    className="flex flex-column
                                        w-100 bg-blue0 
                                        white-90 pa0-50 "
                                    >
                                                <h5 className="mb0-50">{currentMD.gallery?.[3]?.title || 'Portrait'}</h5> 
                                                <h6>{currentMD.gallery?.[3]?.subtitle || currentMD.name}</h6>   
                                </hgroup> 
                                </article>
                            </div>
                            {/* <!-- Managing Director Header --> */}

                            {/* <!-- Managing Director Description --> */}
                            <article id="managing_directors_description" 
                                className="gr2s1 gc1s12"
                            > 
                                <div className="flex ggap1-00 w-100 tj">
                                    {(() => {
                                        const bio = currentMD.bio || {};
                                        const left = [
                                            bio.section1L?.p1,
                                            bio.section1L?.p2,
                                            bio.section1L?.p3,
                                            bio.section2L?.p1,
                                            bio.section2L?.p2,
                                            bio.section2L?.p3,
                                        ].filter(Boolean);
                                        const right = [
                                            bio.section1R?.p1,
                                            bio.section1R?.p2,
                                            bio.section1R?.p3,
                                            bio.section2R?.p1,
                                            bio.section2R?.p2,
                                            bio.section2R?.p3,
                                        ].filter(Boolean);
                                        return (
                                            <>
                                                <div className="w-50">
                                                    {left.map((p, i) => (
                                                        <p key={`bio-left-${i}`}>{p}</p>
                                                    ))}
                                                </div>
                                                <div className="w-50">
                                                    {right.map((p, i) => (
                                                        <p key={`bio-right-${i}`}>{p}</p>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </article>
                            {/* <!-- Managing Director Description --> */}
                            
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

                            <article id="managing_directors_description_2" className="gr4s1 gc1s12"> 
                                <div className="flex ggap1-00 w-100 tj">
                                    {(() => {
                                        const bio = currentMD.bio || {};
                                        const left = [
                                            bio.section1L?.p1,
                                            bio.section1L?.p2,
                                            bio.section1L?.p3,
                                            bio.section2L?.p1,
                                            bio.section2L?.p2,
                                            bio.section2L?.p3,
                                        ].filter(Boolean);
                                        const right = [
                                            bio.section1R?.p1,
                                            bio.section1R?.p2,
                                            bio.section1R?.p3,
                                            bio.section2R?.p1,
                                            bio.section2R?.p2,
                                            bio.section2R?.p3,
                                        ].filter(Boolean);
                                        return (
                                            <>
                                                <div>
                                                    {left.map((p, i) => (
                                                        <p key={`bio2-left-${i}`}>{p}</p>
                                                    ))}
                                                </div>
                                                <div>
                                                    {right.map((p, i) => (
                                                        <p key={`bio2-right-${i}`}>{p}</p>
                                                    ))}
                                                </div>
                                            </>
                                        );
                                    })()}
                                </div>
                            </article>
                        </div>

                        <SectionFooter 
                            sectionTitle = "Practice/Management/Managing Director's Title and Name"
                        />
                        {/* <!-- Managing Director Gallery -->  */}
                        <hgroup id="managing_directors_lists"
                            className="gc1s12 w-100 blue0">
                            <h2 className="w-100 h-100
                                pv1-00 pb1-00 mb0-00
                                f3-00 ttu
                                ">
                                Managing Director Alumni
                            </h2>
                        </hgroup>

                        <div id="3x3_Grid_managingDirectors" className="grid gc1s12 ggap0-50 mb1-00 ttu">   
                            {(() => {
                                const classes = [
                                    'gr1s1 gc1s4',
                                    'gr1s1 gc5s4',
                                    'gr1s1 gc9s4',
                                    'gr2s1 gc1s4',
                                    'gr2s1 gc5s4',
                                    'gr2s1 gc9s4',
                                    'gr3s1 gc1s4',
                                    'gr3s1 gc5s4',
                                    'gr3s1 gc9s4',
                                ];
                                return (currentMD.alumni || []).map((al, idx) => (
                                    <article key={al.id || idx} id={`managingDirectors_${String(idx+1).padStart(2,'0')}`} 
                                        className={`${classes[idx] || 'gr1s1 gc1s4'} flex items-center justify-center pa0-50 relative`}>
                                        <figure>
                                            <img loading="lazy" decoding="async" src={al.image || currentMD.image} alt="" className="w-100 h-100 ba b--gold cover" />
                                        </figure>
                                        <hgroup className="flex flex-column items-center justify-center w-100 h-100 bg-black-40 white-90 z-5 absolute">
                                            <h5>{al.name || 'Managing Director Alumni Details'}</h5>
                                            <h4>{al.start} - {al.end}</h4>
                                        </hgroup>
                                    </article>
                                ));
                            })()}
                        </div> 
                        <SectionFooter 
                            sectionTitle = "Practice/Management/Managing Director Alumni"
                        />
                        {/* <!-- Managing Director Gallery --> */}

                        {/* <!-- Page Footer --> */}
                        <footer id="pageFooter"
                            className=""
                        > 
                        {/* {% include 'website/_partials/page_footer.html' %} */}
                        </footer>
                        {/* <!-- Page Footer --> */}
                    </div>

                    {/* <!-- AESL History Aside  Start --> */}
                    <div id="lc_gc4s1__pageAside--managingDirector" 
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
                                        Managing Director Summary
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#managing_directors_gallery"
                                        className="blue0"
                                    >
                                        Managing Director's Gallery
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#managing_directors_description"
                                    className="blue0"
                                    >
                                        Managing Director's Description
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#people_managing_directors_extra"
                                        className="blue0"
                                    >
                                        Managing Director's Links
                                    </a>
                                </li>
                                <li className="mb1-00 i">
                                    <a href="#managing_directors_lists"
                                    className="blue0"
                                    >
                                        Managing Directors Lists
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- AESL History Aside  End --> */}
                </div>
            </main>
            {/* <!-- Page Main -->  */}
        </div>
    )
}

export default ManagingDirectorDetails
