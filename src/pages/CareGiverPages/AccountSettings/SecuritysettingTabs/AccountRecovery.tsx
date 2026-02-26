import { Button } from "../../../../components/ui/button";
import { useState } from "react";

export const AccountRecovery = (): JSX.Element => {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const recoveryMethods = [
        {
            type: "Email",
            label: "Email Address",
            value: email,
            onChange: setEmail,
        },
        {
            type: "Phone",
            label: "Phone Number",
            value: phone,
            onChange: setPhone,
        },
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // TODO: Implement save recovery methods logic
        console.log("Recovery methods saved", { email, phone });
    };

    return (
        <div className="lg:w-1/2 w-full">
            <h3 className="text-lg pb-1 text-heading font-semibold [font-family:'Poppins',Helvetica]">
                Account Recovery
            </h3>
            <p className="[font-family:'Poppins',Helvetica] font-normal text-description-b text-sm mb-4">
                Add or update recovery methods to help secure your account and recover it if you lose access.
            </p>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {recoveryMethods.map((method, index) => {
                        return (
                            <div key={index} className="flex flex-col gap-3">
                                <label className="[font-family:'Poppins',Helvetica] font-medium text-heading text-sm">
                                    {method.label}
                                </label>
                                <div className="relative">
                                    <input
                                        type={method.type === "Email" ? "email" : "tel"}
                                        value={method.value}
                                        onChange={(e) => method.onChange(e.target.value)}
                                        className="w-full pl-4 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none [font-family:'Poppins',Helvetica]"
                                        placeholder={method.type === "Email" ? "Enter email address" : "Enter phone number"}
                                    />
                                </div>
                            </div>
                        );
                    })}

                    <div className="flex w-full gap-3 mt-2">
                        <Button
                            type="submit"
                            className="[font-family:'Poppins',Helvetica] bg-primary-1 text-white hover:bg-primary-11 rounded-full w-full"
                        >
                            Update Recovery options
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    );
};

