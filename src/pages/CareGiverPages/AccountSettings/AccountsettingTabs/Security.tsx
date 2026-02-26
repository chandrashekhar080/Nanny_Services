import { ChevronRightIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../../../components/ui/button";

  const securitySettings = [
    { label: "Change Password", tabId: "change-password" },
    { label: "Two-factor Authentication (2fa)", tabId: "two-factor-authentication" },
    { label: "Login Activity", tabId: "login-activity" },
    { label: "Account Recovery", tabId: "account-recovery" },
    { label: "Deactivate Or Delete Account", tabId: "deactivate-or-delete-account" },
  ];
export const Security = (): JSX.Element => {
    const navigate = useNavigate();
    
    const handleSecurityClick = (tabId: string) => {
        navigate(`/family/security?tab=${tabId}`);
    };

    return (
        <div className="w-full">
        <h3 className="text-lg pb-3 text-heading font-semibold [font-family:'Poppins',Helvetica]">
           Security
       </h3>
       <div className="flex flex-col gap-2.5 w-full">
          {securitySettings.map((setting, index) => (
            <Button 
            key={index}
            variant="ghost"
            className="w-full h-auto py-3 px-0 justify-between hover:bg-transparent"
            onClick={() => handleSecurityClick(setting.tabId)}
          >
            <span className="[font-family:'Poppins',Helvetica] font-medium text-heading text-sm tracking-[0] leading-[normal]">
              {setting.label}
            </span>
            <ChevronRightIcon className="w-[13px] h-[13px]" />
          </Button>
          ))}
        </div>
      
   </div>
    );
};

