import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SidebarNavigation, NavigationItem } from "../../../sections/Common/SidebarNavigation";
import { ChangePassword } from "./SecuritysettingTabs/ChangePassword";
import { TwoFactorAuthentication } from "./SecuritysettingTabs/TwoFactorAuthentication";
import { LoginActivity } from "./SecuritysettingTabs/LoginActivity";
import { AccountRecovery } from "./SecuritysettingTabs/AccountRecovery";
import { DeactivateOrDeleteAccount } from "./SecuritysettingTabs/DeactivateOrDeleteAccount";

const navigationItems: NavigationItem[] = [
    { label: "Change Password", id: "change-password" },
    { label: "Two-factor Authentication (2FA)", id: "two-factor-authentication" },
    { label: "Login Activity", id: "login-activity" },
    { label: "Account Recovery", id: "account-recovery" },
    { label: "Deactivate Or Delete Account", id: "deactivate-or-delete-account" },
];

const tabComponents: Record<string, () => JSX.Element> = {
    "change-password": () => <ChangePassword />,
    "two-factor-authentication": () => <TwoFactorAuthentication />,
    "login-activity": () => <LoginActivity />,
    "account-recovery": () => <AccountRecovery />,
    "deactivate-or-delete-account": () => <DeactivateOrDeleteAccount />,
};

const validTabIds = Object.keys(tabComponents);

export const SecuritySettings = (): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const tabFromUrl = searchParams.get("tab");
    const initialTab = tabFromUrl && validTabIds.includes(tabFromUrl) ? tabFromUrl : "change-password";
    const [activeTab, setActiveTab] = useState<string>(initialTab);

    useEffect(() => {
        const tabFromUrl = searchParams.get("tab");
        if (tabFromUrl && validTabIds.includes(tabFromUrl)) {
            setActiveTab(tabFromUrl);
        }
    }, [searchParams]);

    const handleTabChange = (id: string) => {
        setActiveTab(id);
        setSearchParams({ tab: id });
    };

    const renderActiveTab = () => {
        const TabComponent = tabComponents[activeTab];
        return TabComponent ? <TabComponent /> : <ChangePassword />;
    };

    return (
        <div className="flex flex-col lg:flex-row items-start justify-center gap-5 lg:gap-10 w-full max-w-[1280px] mx-auto px-4 sm:px-5 py-5 lg:py-0 mb-[60px]">
            <SidebarNavigation
                items={navigationItems}
                activeId={activeTab}
                onItemClick={handleTabChange}
            />

            <main className="flex flex-col gap-5 flex-1 w-full lg:w-auto">
                {renderActiveTab()}
            </main>
        </div>
    );
};

