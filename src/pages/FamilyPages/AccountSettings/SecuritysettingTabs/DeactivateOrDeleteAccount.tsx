import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import * as Dialog from "@radix-ui/react-dialog";
import { X, AlertTriangle } from "lucide-react";
import { useState } from "react";

export const DeactivateOrDeleteAccount = (): JSX.Element => {
    const [isDeactivateDialogOpen, setIsDeactivateDialogOpen] = useState(false);
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);

    const handleDeactivate = () => {
        // TODO: Implement account deactivation logic
        console.log("Account deactivation initiated");
        setIsDeactivateDialogOpen(false);
    };

    const handleDelete = () => {
        // TODO: Implement account deletion logic
        console.log("Account deletion initiated");
        setIsDeleteDialogOpen(false);
    };

    return (
        <div className="w-full">
            <h3 className="text-lg pb-3 text-heading font-semibold [font-family:'Poppins',Helvetica]">
                Deactivate Or Delete Account
            </h3>
            <div className="flex flex-col gap-4 p-4">
                <div className="flex flex-col gap-10">
                    <div className="flex items-start gap-3 flex-wrap">
                        <div className="flex flex-col gap-2 flex-1 w-full sm:w-5/6">
                            <h4 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base">
                                Deactivate Account (Temporary)
                            </h4>
                            <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm">
                                Pause your profile and jobs without losing data.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/6">
                            <Button
                                onClick={() => setIsDeactivateDialogOpen(true)}
                                variant="outline"
                                className="[font-family:'Poppins',Helvetica] w-full self-start rounded-full border border-black text-black"
                            >
                                Deactivate
                            </Button>
                        </div>
                    </div>
                    <div className="flex items-start gap-3 flex-wrap">
                        <div className="flex flex-col gap-2 flex-1 w-full sm:w-5/6">
                            <h4 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base">
                                Delete Account (Permanent)
                            </h4>
                            <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm">
                                Permanently remove your profile, messages, and subscription details.
                            </p>
                        </div>
                        <div className="w-full sm:w-1/6">
                            <Button
                                onClick={() => setIsDeleteDialogOpen(true)}
                                variant="outline"
                                className="[font-family:'Poppins',Helvetica] w-full self-start rounded-full border border-black text-black"
                            >
                                Delete
                            </Button>
                        </div>

                    </div>

                </div>
            </div>

            {/* Deactivate Account Dialog */}
            <Dialog.Root open={isDeactivateDialogOpen} onOpenChange={setIsDeactivateDialogOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />
                    <Dialog.Content
                        className="
                            fixed top-1/2 left-1/2
                            -translate-x-1/2 -translate-y-1/2
                            w-[95%] sm:w-[90%] max-w-md
                            bg-white rounded-xl shadow-xl p-4 sm:p-6 z-[9999]
                            max-h-[90vh] overflow-y-auto
                        "
                    >
                        <div className="flex items-center justify-between mb-4">
                            <Dialog.Title className="text-lg sm:text-xl font-semibold [font-family:'Poppins',Helvetica] text-[#050505]">
                                Deactivate Account
                            </Dialog.Title>
                            <Dialog.Close asChild>
                                <button className="bg-gray-100 rounded-full p-1 hover:bg-gray-200 transition-colors">
                                    <X className="w-4 h-4 sm:w-5 sm:h-5 text-[#050505]" />
                                </button>
                            </Dialog.Close>
                        </div>

                        <Dialog.Description className="text-sm text-[#050505] [font-family:'Poppins',Helvetica] mb-6">
                            Are you sure you want to deactivate your account? You can reactivate it anytime by logging back in.
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
                                onClick={handleDeactivate}
                                variant="outline"
                                className="[font-family:'Poppins',Helvetica] w-full sm:w-auto"
                            >
                                Deactivate Account
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>

            {/* Delete Account Dialog */}
            <Dialog.Root open={isDeleteDialogOpen} onOpenChange={setIsDeleteDialogOpen}>
                <Dialog.Portal>
                    <Dialog.Overlay className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9998]" />
                    <Dialog.Content
                        className="
                            fixed top-1/2 left-1/2
                            -translate-x-1/2 -translate-y-1/2
                            w-[95%] sm:w-[90%] max-w-md
                            bg-white rounded-xl shadow-xl p-4 sm:p-6 z-[9999]
                            max-h-[90vh] overflow-y-auto
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
                            Are you sure you want to delete your account? This action cannot be undone. All your data will be permanently removed.
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
                                onClick={handleDelete}
                                variant="destructive"
                                className="[font-family:'Poppins',Helvetica] bg-red-600 text-white hover:bg-red-700 w-full sm:w-auto"
                            >
                                Delete Account
                            </Button>
                        </div>
                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    );
};

