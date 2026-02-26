import { Outlet } from "react-router-dom";
import { FooterSection } from "../FooterSection";
import { HeaderCareGiver } from "../HeaderCareGover/HeaderCareGiver";


export const CaregiverLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <HeaderCareGiver />
            <main className="flex-grow">
                <Outlet />
            </main>
            <FooterSection/>
        </div>
    );
};
