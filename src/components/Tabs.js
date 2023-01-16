import { React, useState } from 'react';
import { IconContext } from 'react-icons';
import { HiOutlinePresentationChartLine, HiOutlinePencilAlt, HiOutlineViewGrid } from 'react-icons/hi';
import TabContent from './TabContent';

const Tabs = () => {

    const [activeTab, setActiveTab] = useState('projectManagement');
    
    const toggleTab = (tab) => {
        if (activeTab !== tab) setActiveTab(tab);
    }

    return (
        <>
            <div className="tab-cont">
                <div className={activeTab === "projectManagement" ? "tab tab-active" : "tab"} id="serv-tab-1" data-tab="projectManagement" onClick={() => toggleTab("projectManagement")}>
                    <IconContext.Provider value={{ className: "tab-icon" }}>
                        <HiOutlinePresentationChartLine />
                    </IconContext.Provider>
                </div>
                <div className={activeTab === "content" ? "tab tab-active" : "tab"} id="serv-tab-2" data-tab="content" onClick={() => toggleTab("content")}>
                    <IconContext.Provider value={{ className: "tab-icon" }}>
                        <HiOutlineViewGrid />
                    </IconContext.Provider>
                </div>
                <div className={activeTab === "copywriting" ? "tab tab-active" : "tab"} id="serv-tab-3" data-tab="copywriting" onClick={() => toggleTab("copywriting")}>
                    <IconContext.Provider value={{ className: "tab-icon" }}>
                        <HiOutlinePencilAlt />
                    </IconContext.Provider>
                </div>
            </div>
            <TabContent
                activeTab={activeTab}
            />
        </>
    )
}

export default Tabs;