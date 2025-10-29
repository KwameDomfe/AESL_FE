import React from 'react';
import { Link } from 'react-router-dom';

const AESLProjectDetailsNav = ({ project }) => {
    if (!project) return null;
  return (
    <div id="project_summary"
    className="gc1s12 grid gtc12 ggap1-00
    items-center justify-center
    ph1-00 min-h14-00
    "
    >
    <article id="consultants_info" 
        className="gc1s6 gr1s1 
            gc1s4-s 
            gc1s3-m
            gc1s3-l
            gc1s1-xl
            "
    >
        <div
            className="w12-00-xl h12-00-xl pb0-00-xl h0-00 pb-100 pa0-50
                bg-blue0 flex flex-column
                br0-50 white-90"
        >
            <hgroup className="mb1-00">
                <h2 className="mb0-50 f0-75 white-60">
                    Project Coordinator
                </h2>
                <p className="mb0-25">
                    {project.projectCoordinator}
                </p>
            </hgroup>
            <hgroup className="mb0-00">
                <h2 className="mb0-50 f0-75 white-60">
                    Project Leads
                </h2>
                <ul className="mb0-25"
                >
                                        {project.projectLeads && Object.values(project.projectLeads).map((lead, idx) => (
                                            <li key={idx}>{lead}</li>
                                        ))}
                </ul>
            </hgroup>
        </div>
    </article>

    <article id="project_info" 
        className="gc7s6 gr2s1 
        gc9s4-s
        gc10s3-m gr1s1-m
        gc4s3-l
        gc2s1-xl
        "
    >
        <div className="w12-00-xl h12-00-xl pb0-00-xl h0-00 pb-100 pa0-50 
            bg-blue0 white-90
            br0-50"
        >
            <hgroup 
                className="mb1-00"
            >
                <h2 className="mb0-50 f0-75 white-60">
                    Client
                </h2>
                <p className="mb0-25">
                {project.client}
                </p>     
            </hgroup>
            <hgroup 
                className="mb0-50"
            >
                <h2 className="mb0-50 f0-75 white-60">
                    Total Floor Area
                </h2>
                <p className="mb0-25">
                {project.grossFloorArea} m<sup>2</sup>
                </p>     
            </hgroup>
            <hgroup 
                className="mb0-00"
            >
                <h2 className="mb0-50 f0-75 white-60">
                    Cost
                </h2>
                <p className="mb0-25">
                {project.cost} million
                </p>     
            </hgroup>
        </div> 
    </article>
    
    <article id="project_dates" 
        className=" gc7s6 gr1s1 
            gc5s4-s
            gc7s3-m
            gc7s3-l
            gc3s1-xl
            "
    >
        <div 
            className="w12-00-xl h12-00-xl pb0-00-xl h0-00 pb-100 pa0-50 
            bg-blue2 white-90
            br0-50"
        >
           
            <hgroup className="mb1-00">
                <h2 className="mb0-50 f0-75 white-60">
                    Start Date
                </h2>
                <p className="mb0-25">
                {project.dates && project.dates.start}
                </p>
            </hgroup>
            <hgroup className="mb1-00">
                <h2 className="mb0-50 f0-75 white-60">
                    Completed Date
                </h2>
                <p className="mb0-25">
                {project.dates && project.dates.completed}
                </p>     
            </hgroup>
        
        </div> 
    </article>

    <article id="project_jobsheet" 
        className="gc1s6 gr2s1 
        gc5s4-s
        gc4s3-m gr1s1-m 
        gc10s3-l
        gc10s1-xl 
        "
    >
       <div 
            className="w12-00-xl h12-00-xl pb0-00-xl h0-00 pb-100 pa0-50
            bg-blue1 white-90
            br0-50"
        >
            <hgroup 
                className="mb1-00"
            >
                <h2 className="mb0-50 f0-75 white-60">
                    Job Sheets 
                </h2>
                <Link to="/"
                    className="white-90"
                >
                    <p className="mb0-25">
                        English
                    </p>
                </Link>
            </hgroup>
            <hgroup 
                className="mb0-00"
            >
                <h2 className="mb0-50 f0-75 white-60">
                    Certifications
                </h2>
                <ul className="mb0-25">
                    <li>{project.certifications && project.certifications.certification1}</li>
                    <li>{project.certifications && project.certifications.certification2}</li>
                </ul>  
            </hgroup>
            
        </div> 
    </article>

    <article id="blank_1" 
        className="gc9s4 gc9s1-xl gr1s1-xl"
    >
        <div 
            className="dn dib-s dn-m w-100-s w12-00-l h12-00-l pb0-00-m h0-00 pb-100
            bg-blue4 white-90 pa0-50
            br0-50 ba"
        >
        </div> 
    </article>

    <article id="blank_2" 
        className=" gc1s4 gr2s1
            "
    >
        <div 
            className="dn dib-s dn-m w12-00-l h12-00-l pb0-00-s w-100-s h0-00-s pb-100-s
            bg-blue0 white-90 pa0-50
            br0-50 ba bw1 b--white-90"
        >
        </div> 
    </article>
</div>
  )
}

export default AESLProjectDetailsNav
