import { Card, CardContent } from "../../../../components/ui/card";
import { Switch } from "../../../../components/ui/switch";
import { useState } from "react";
import { Lock } from "lucide-react";

export const TwoFactorAuthentication = (): JSX.Element => {
    const [isEnabled, setIsEnabled] = useState(false);

    const handleToggle = (checked: boolean) => {
        setIsEnabled(checked);
        // TODO: Implement 2FA toggle logic
        console.log("2FA toggled:", checked);
    };

    return (
        <div className="w-full">
            <h3 className="text-lg pb-3 text-heading font-semibold [font-family:'Poppins',Helvetica]">
                Two-factor Authentication (2FA)
            </h3>
            <Card className="bg-white rounded-[20px] shadow-[0px_0px_6px_#0000001a] border-0">
                <CardContent className="p-4 sm:p-6">
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row items-center justify-between gap-3">
                            <div className="flex gap-3 sm:gap-5 items-center">
                                <Lock className="text-primary-1 sm:w-8 sm:h-8 w-6 h-6 flex-shrink-0" />
                                <div className="flex flex-col gap-2">
                                    <h4 className="[font-family:'Poppins',Helvetica] font-medium text-heading text-base">
                                        Enable Two-factor Authentication
                                    </h4>
                                    <p className="[font-family:'Poppins',Helvetica] font-normal text-description text-sm">
                                        Add an extra layer of security to your account by requiring a verification code in addition to your password.
                                    </p>
                                </div>
                            </div>
                            <Switch
                                checked={isEnabled}
                                onCheckedChange={handleToggle}
                                className="data-[state=checked]:bg-primary-1"
                            />
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

