import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export const SubscriptionBilling = (): JSX.Element => {
    return (
        <Card className="w-full shadow-[0px_0px_4px_#00000040]">
            <CardHeader>
                <CardTitle className="text-xl font-semibold [font-family:'Poppins',Helvetica]">
                    Subscription & Billing
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-5">
                    <p className="text-sm text-[#050505] [font-family:'Poppins',Helvetica]">
                        Subscription plans and billing information will be displayed here.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

