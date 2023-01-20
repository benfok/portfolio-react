import React from 'react';
import { IconContext } from 'react-icons';
import { HiOutlinePresentationChartLine, HiOutlinePencilAlt, HiOutlineViewGrid } from 'react-icons/hi';
import TabContent from './TabContent';
import {useParams, useNavigate} from "react-router-dom"

const Tabs = () => {
    
    // sets the default tab content
    const defaultTab = 'project-management';

    // if params exist in the URL load that tab content
    let {active_tab} = useParams();

    if (!active_tab) { active_tab = defaultTab }

    const navigate = useNavigate();

    const toggleTab = (tab) => {
        if (active_tab !== tab) {
            navigate(`/services/${tab}`);
            console.log(active_tab);
        }
    };

    return (
        <>
            <div className="tab-cont">
                <div className={active_tab === "project-management" ? "tab tab-active" : "tab"} id="serv-tab-1" data-tab="projectManagement" onClick={() => toggleTab("project-management")}>
                    <IconContext.Provider value={{ className: "tab-icon", title:"test"}}>
                        <HiOutlinePresentationChartLine title="Tab-1 Project Management" desc="Description and example of Project Management Services offered"/>
                    </IconContext.Provider>
                </div>
                <div className={active_tab === "content" ? "tab tab-active" : "tab"} id="serv-tab-2" data-tab="content" onClick={() => toggleTab("content")}>
                    <IconContext.Provider value={{ className: "tab-icon" }}>
                        <HiOutlineViewGrid title="Tab-2 Website Content" desc="Description and example of Website Content services offered"/>
                    </IconContext.Provider>
                </div>
                <div className={active_tab === "copywriting" ? "tab tab-active" : "tab"} id="serv-tab-3" data-tab="copywriting" onClick={() => toggleTab("copywriting")}>
                    <IconContext.Provider value={{ className: "tab-icon" }}>
                        <HiOutlinePencilAlt title="Tab-3 Copywriting" desc="Description and example of Copywriting Services offered"/>
                    </IconContext.Provider>
                </div>
            </div>
            <TabContent
                activeTab={active_tab ? active_tab : defaultTab}
            />
        </>
    )
}

export default Tabs;