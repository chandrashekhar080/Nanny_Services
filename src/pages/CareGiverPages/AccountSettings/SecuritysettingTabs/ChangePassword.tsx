import { Button } from "../../../../components/ui/button";
import { useState } from "react";

export const ChangePassword = (): JSX.Element => {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement password change logic
        console.log("Password change submitted");
    };

    return (
        <div className="lg:w-1/2 w-full">
            <h3 className="text-lg pb-1 text-heading font-semibold [font-family:'Poppins',Helvetica]">
                Change Password
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-description-b text-sm mb-4">
                Enter different password with previous one
            </p>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="flex flex-col gap-3">

                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none [font-family:'Poppins',Helvetica]"
                            placeholder="Current Password"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">

                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none [font-family:'Poppins',Helvetica]"
                            placeholder="Enter New Password"
                            required
                        />
                    </div>

                    <div className="flex flex-col gap-3">

                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none [font-family:'Poppins',Helvetica]"
                            placeholder="Confirm New Password"
                            required
                        />
                    </div>

                    <div className="flex w-full gap-3 mt-2">
                        <Button
                            type="submit"
                            className="[font-family:'Poppins',Helvetica] bg-primary-1 text-white hover:bg-primary-11 rounded-full w-full"
                        >
                            Update Password
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

