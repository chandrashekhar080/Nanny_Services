import React, { useState, useCallback } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { ProgressBar } from "../../../../components/ui/progressbar";
import { UploadIcon, CheckIcon } from "lucide-react";

interface StepCertificationsProps {
    onNext: () => void;
    onBack: () => void;
    progressSteps: {
        id: number;
        label: string;
        active: boolean;
        completed: boolean;
    }[];
    finalStep?: boolean; // ✅ added optional prop
}

export const StepCertifications: React.FC<StepCertificationsProps> = ({
    onNext,
    onBack,
    progressSteps,
    finalStep,
}) => {
    const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
    const [isDragging, setIsDragging] = useState(false);

    // ✅ Handle file select
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = Array.from(e.target.files || []);
        setSelectedFiles((prev) => [...prev, ...files]);
    };

    // ✅ Drag & Drop functionality
    const handleDragOver = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback(() => {
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        setSelectedFiles((prev) => [...prev, ...files]);
    }, []);

    const removeFile = (fileName: string) => {
        setSelectedFiles((prev) => prev.filter((f) => f.name !== fileName));
    };

    return (
        <div className="inline-flex flex-col items-center gap-[33px] relative w-full max-w-[790px] px-4 sm:px-6">
            <Card className="flex flex-col items-center gap-[30px] p-5 sm:p-10 relative w-full bg-white rounded-xl shadow-[0px_0px_5px_-1px_#00000040]">
                <CardContent className="flex flex-col items-center gap-10 sm:gap-16 relative w-full p-0">
                    {/* Progress Bar */}
                    <ProgressBar progressSteps={progressSteps} />

                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5 relative">
                        <h1 className="font-bold text-lg text-center">
                            Certifications (Optional)
                        </h1>
                    </div>

                    {/* Upload Section */}
                    <div className="flex flex-col items-start gap-8 w-full">
                        <div
                            className={`flex flex-col items-center justify-center gap-5 px-4 py-16 w-full bg-white rounded-xl border border-dashed ${isDragging
                                ? "border-primary-1 bg-primary-50"
                                : "border-[#dedede]"
                                } transition-all duration-200`}
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                        >
                            {selectedFiles.length === 0 ? (
                                <>
                                    <div className="inline-flex flex-col items-center gap-5 text-center">
                                        <img
                                            src="/assets/img/upload-icon.png"
                                            alt="Upload Icon"
                                            className="w-[70px] h-auto object-contain"
                                        />
                                        <p className="text-xs text-[#3e3e3e] font-medium">
                                            Drag & Drop files here or click below to upload
                                            <br />
                                            (GIF, JPG or PNG up to 20 MB each)
                                        </p>
                                    </div>

                                    <label
                                        htmlFor="cert-upload"
                                        className="relative flex items-center justify-center cursor-pointer font-semibold text-primary-1 text-base"
                                    >
                                        Upload Images
                                        <input
                                            id="cert-upload"
                                            type="file"
                                            accept="image/png, image/jpeg, image/jpg, image/gif"
                                            multiple
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </>
                            ) : (
                                <div className="flex flex-col items-center gap-6 w-full">
                                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 w-full place-items-center">
                                        {selectedFiles.map((file) => (
                                            <div
                                                key={file.name}
                                                className="flex flex-col items-center gap-3"
                                            >
                                                <img
                                                    src={URL.createObjectURL(file)}
                                                    alt={file.name}
                                                    className="w-[100px] h-[100px] object-cover rounded-md border border-gray-300"
                                                />
                                                <p className="text-sm text-gray-600 text-center truncate max-w-[120px]">
                                                    {file.name}
                                                </p>
                                                <button
                                                    type="button"
                                                    onClick={() => removeFile(file.name)}
                                                    className="text-red-500 text-xs font-medium hover:underline"
                                                >
                                                    Remove
                                                </button>
                                            </div>
                                        ))}
                                    </div>

                                    <label
                                        htmlFor="cert-upload"
                                        className="relative flex items-center justify-center cursor-pointer font-semibold text-primary-1 text-base"
                                    >
                                        Add More Files
                                        <input
                                            id="cert-upload"
                                            type="file"
                                            multiple
                                            accept="image/png, image/jpeg, image/jpg, image/gif"
                                            className="hidden"
                                            onChange={handleFileChange}
                                        />
                                    </label>
                                </div>
                            )}
                        </div>

                        {/* Navigation Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={onBack}
                                className="w-full sm:w-1/2 bg-gray-100 hover:bg-gray-200 text-black"
                            >
                                Previous
                            </Button>

                            <Button
                                onClick={onNext}
                                className="w-full sm:w-1/2 bg-primary-1 hover:bg-primary-100 text-white"
                            >
                                {finalStep ? "Finish" : "Next"}
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};
