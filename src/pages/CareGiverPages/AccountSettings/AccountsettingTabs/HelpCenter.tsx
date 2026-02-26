import { Card, CardContent, CardHeader, CardTitle } from "../../../../components/ui/card";

export const HelpCenter = (): JSX.Element => {
    return (
        <Card className="w-full shadow-[0px_0px_4px_#00000040]">
            <CardHeader>
                <CardTitle className="text-xl font-semibold [font-family:'Poppins',Helvetica]">
                    Help Center
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex flex-col gap-5">
                    <p className="text-sm text-[#050505] [font-family:'Poppins',Helvetica]">
                        Help articles, FAQs, and support resources will be displayed here.
                    </p>
                </div>
            </CardContent>
        </Card>
    );
};

