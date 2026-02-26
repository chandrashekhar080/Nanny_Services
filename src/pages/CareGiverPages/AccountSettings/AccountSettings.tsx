import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as Dialog from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { SidebarNavigation, NavigationItem } from "../../../sections/Common/SidebarNavigation";
import { MyProfile } from "./AccountsettingTabs/MyProfile";
import { EditProfilecaregiver } from "./AccountsettingTabs/EditProfile";
import { Security } from "./AccountsettingTabs/Security";
import { Button } from "../../../components/ui/button";

const navigationItems: NavigationItem[] = [
    { label: "My Profile", id: "my-profile" },
    { label: "Security", id: "security" },
    { label: "Subscription & Billing", id: "subscription-billing" },
    { label: "Help Center", id: "help-center" },
    { label: "Delete Account", id: "delete-account", isDelete: true },
];

const tabComponents: Record<string, () => JSX.Element> = {
    "my-profile": () => <MyProfile />,
    "security": () => <Security />,
};

export const AccountSettingss = (): JSX.Element => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [activeTab, setActiveTab] = useState<string>("my-profile");
    const editParam = searchParams.get("edit");
    const [isEditMode, setIsEditMode] = useState<boolean>(editParam === "true");
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const userType = localStorage.getItem('UserType');

    useEffect(() => {
        // Check if edit query parameter is present
        const editParam = searchParams.get("edit");
        if (editParam === "true") {
            setIsEditMode(true);
            setActiveTab("my-profile");
        }
    }, [searchParams]);

    const handleTabChange = (id: string) => {
        if (id === "delete-account") {
            setIsDeleteDialogOpen(true);
        } else if (id === "subscription-billing") {
            navigate("/care-giver/subscription");
        } else if (id === "help-center") {
            navigate("/care-giver/help-center");
        } else {
            setActiveTab(id);
            setIsEditMode(false); // Reset edit mode when switching tabs
        }
    };

    const handleDeleteAccount = () => {
        // TODO: Implement actual account deletion logic here
        console.log("Account deletion initiated");
        // After deletion, you might want to redirect to login or home page
        // Example: navigate("/login");
        setIsDeleteDialogOpen(false);
    };

    const handleEditCancel = () => {
        setIsEditMode(false);
        // Remove edit query parameter from URL
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("edit");
        setSearchParams(newSearchParams, { replace: true });
    };

    const handleEditSave = () => {
        setIsEditMode(false);
        // Remove edit query parameter from URL
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.delete("edit");
        setSearchParams(newSearchParams, { replace: true });
    };

    const handleEditClick = () => {
        setIsEditMode(true);
        // Add edit query parameter to URL
        setSearchParams({ edit: "true" }, { replace: true });
    };

    const renderActiveTab = () => {
        // Show EditProfile when in edit mode and on my-profile tab
        if (activeTab === "my-profile" && isEditMode) {
            return <EditProfilecaregiver onCancel={handleEditCancel} onSave={handleEditSave} />;
        }
        
        const TabComponent = tabComponents[activeTab];
        if (activeTab === "my-profile") {
            return <MyProfile onEditClick={handleEditClick} />;
        }
        return TabComponent ? <TabComponent /> : <MyProfile onEditClick={handleEditClick} />;
    };

    return (
        <>
            <div className="flex flex-col  [font-family:'Poppins',Helvetica] lg:flex-row items-start justify-center gap-5 lg:gap-10 w-full max-w-[1280px] mx-auto px-4 sm:px-5 py-5 lg:py-0 mb-[60px]">
                <SidebarNavigation
                    items={navigationItems}
                    activeId={activeTab}
                    onItemClick={handleTabChange}
                />

                <main className="flex flex-col gap-5 flex-1 w-full lg:w-auto">
                    {renderActiveTab()}
                </main>
            </div>

            {/* Delete Account Confirmation Dialog */}
            <Dialog.Root open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />
                    <Dialog.Content
                        className="
                            fixed top-1/2 left-1/2
                            -translate-x-1/2 -translate-y-1/2
                            w-[95%] sm:w-[90%] max-w-md
                            bg-white rounded-xl shadow-xl p-4 sm:p-6 z-[9999]
                            max-h-[90vh] overflow-y-auto  [font-family:'Poppins',Helvetica]
                        "
                    >
                        <div className="flex items-center justify-between mb-4">
                            <Dialog.Title className="text-lg sm:text-xl font-semibold [font-family:'Poppins',Helvetica] text-[#050505]">
                                Delete Account
                            </Dialog.Title>
                            <Dialog.Close asChild>
                                <button className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors">
                                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#050505]" />
                                </button>
                            </Dialog.Close>
                        </div>

                        <Dialog.Description className="text-sm text-[#050505] [font-family:'Poppins',Helvetica] mb-6">
                            Are you sure you want to delete your account? This action cannot be undone.
                        </Dialog.Description>

                        <div className="flex flex-col sm:flex-row gap-3 justify-end">
                            <Dialog.Close asChild>
                                <Button
                                    variant="outline"
                                    className="[font-family:'Poppins',Helvetica] w-full sm:w-auto"
                                >
                                    Cancel
                                </Button>
                            </Dialog.Close>
                            <Button
                                variant="destructive"
                                onClick={handleDeleteAccount}
                                className="[font-family:'Poppins',Helvetica] bg-primary-11 text-white hover:bg-primary-1 w-full sm:w-auto"
                            >
                                Delete Account
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </>
    );
};
