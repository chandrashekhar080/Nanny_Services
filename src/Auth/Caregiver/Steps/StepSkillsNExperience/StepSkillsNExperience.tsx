import React, { useState, useRef, useEffect } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { Label } from "../../../../components/ui/label";
import { Badge } from "../../../../components/ui/badge";
import { ProgressBar } from "../../../../components/ui/progressbar";

interface Props {
    onNext: () => void;
    onBack: () => void;
    progressSteps: {
        id: number;
        label: string;
        active: boolean;
        completed: boolean;
    }[];
}

const ageGroupOptions = [
    "Infants (0–1 year)",
    "Toddlers (1–3 years)",
    "Preschoolers (3–5 years)",
    "School-aged (6–12 years)",
    "Teens (13+ years)",
];

const skillSuggestions = [
    "First Aid & CPR",
    "Meal Preparation",
    "Behavior Management",
    "Educational Play",
    "Special Needs Care",
    "Household Organization",
];

export const StepSkillsNExperience: React.FC<Props> = ({
    onNext,
    onBack,
    progressSteps,
}) => {
    const [yearsExperience, setYearsExperience] = useState("");
    const [ageGroupQuery, setAgeGroupQuery] = useState("");
    const [ageGroups, setAgeGroups] = useState<string[]>([]);
    const [showAgeDropdown, setShowAgeDropdown] = useState(false);

    const [skillQuery, setSkillQuery] = useState("");
    const [skills, setSkills] = useState<string[]>([]);
    const [showSkillDropdown, setShowSkillDropdown] = useState(false);

    const [skillsSummary, setSkillsSummary] = useState("");

    const ageDropdownRef = useRef<HTMLDivElement>(null);
    const skillDropdownRef = useRef<HTMLDivElement>(null);

    const filteredAgeGroups = ageGroupOptions.filter(
        (option) =>
            option.toLowerCase().includes(ageGroupQuery.toLowerCase()) &&
            !ageGroups.includes(option)
    );

    const filteredSkills = skillSuggestions.filter(
        (option) =>
            option.toLowerCase().includes(skillQuery.toLowerCase()) &&
            !skills.includes(option)
    );

    const handleAddAgeGroup = (option: string) => {
        if (!ageGroups.includes(option)) {
            setAgeGroups([...ageGroups, option]);
            setAgeGroupQuery("");
            setShowAgeDropdown(false);
        }
    };

    const handleRemoveAgeGroup = (option: string) => {
        setAgeGroups(ageGroups.filter((item) => item !== option));
    };

    const handleAddSkill = (option: string) => {
        if (!skills.includes(option)) {
            setSkills([...skills, option]);
            setSkillQuery("");
            setShowSkillDropdown(false);
        }
    };

    const handleRemoveSkill = (option: string) => {
        setSkills(skills.filter((item) => item !== option));
    };

    const handleKeyDownAge = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && ageGroupQuery.trim() !== "") {
            e.preventDefault();
            handleAddAgeGroup(ageGroupQuery.trim());
        }
    };

    const handleKeyDownSkill = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter" && skillQuery.trim() !== "") {
            e.preventDefault();
            handleAddSkill(skillQuery.trim());
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onNext();
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                ageDropdownRef.current &&
                !ageDropdownRef.current.contains(event.target as Node)
            ) {
                setShowAgeDropdown(false);
            }
            if (
                skillDropdownRef.current &&
                !skillDropdownRef.current.contains(event.target as Node)
            ) {
                setShowSkillDropdown(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="inline-flex flex-col items-center gap-[33px] w-full max-w-[790px]">
            <Card className="w-full rounded-xl overflow-hidden shadow-[0px_0px_5px_-1px_#00000040]">
                <CardContent className="flex flex-col items-center gap-[30px] p-5 sm:p-10">

                    {/* Progress Bar */}
                    <ProgressBar progressSteps={progressSteps} />

                    {/* Header */}
                    <div className="flex flex-col w-full max-w-[710px] items-center gap-1.5">
                        <h1 className="font-bold text-lg text-center">
                            Skills & Experience
                        </h1>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-8 w-full">

                        {/* Experience & Age Groups */}
                        <div className="grid grid-cols-1 sm:grid-cols-1 gap-5 w-full">
                            {/* Years of Experience */}
                            <div className="flex flex-col gap-2">
                                <Label htmlFor="experience">Years of Experience</Label>
                                <Input
                                    id="experience"
                                    type="number"
                                    min="0"
                                    value={yearsExperience}
                                    onChange={(e) => setYearsExperience(e.target.value)}
                                    placeholder="Enter number of years"
                                    className="w-full focus-visible:ring-0 focus-visible:outline-none"
                                />
                            </div>

                            {/* Age Groups Worked With */}
                            <div
                                ref={ageDropdownRef}
                                className="relative flex flex-col gap-2.5 w-full"
                            >
                                <Label htmlFor="ageGroups">Age Groups Worked With</Label>
                                <Input
                                    id="ageGroups"
                                    value={ageGroupQuery}
                                    onChange={(e) => {
                                        setAgeGroupQuery(e.target.value);
                                        setShowAgeDropdown(true);
                                    }}
                                    onFocus={() => setShowAgeDropdown(true)}
                                    onKeyDown={handleKeyDownAge}
                                    placeholder="Type to add or select from suggestions"
                                    className="w-full focus-visible:ring-0 focus-visible:outline-none"
                                />

                                {/* Dropdown */}
                                {showAgeDropdown && filteredAgeGroups.length > 0 && (
                                    <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-48 overflow-y-auto z-10">
                                        {filteredAgeGroups.map((option) => (
                                            <li
                                                key={option}
                                                onClick={() => handleAddAgeGroup(option)}
                                                className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary-1 hover:text-white transition-colors"
                                            >
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                )}

                                {/* Selected Age Group Badges */}
                                {ageGroups.length > 0 && (
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {ageGroups.map((opt) => (
                                            <Badge
                                                key={opt}
                                                onClick={() => handleRemoveAgeGroup(opt)}
                                                className="bg-primary-1 text-white border border-primary-1 px-3 py-2 rounded-xl cursor-pointer hover:bg-primary-1"
                                            >
                                                {opt} ✕
                                            </Badge>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Skills Section */}
                        <div
                            ref={skillDropdownRef}
                            className="relative flex flex-col gap-2.5 w-full"
                        >
                            <Label htmlFor="skills">Enter or Choose Skills</Label>
                            <Input
                                id="skills"
                                value={skillQuery}
                                onChange={(e) => {
                                    setSkillQuery(e.target.value);
                                    setShowSkillDropdown(true);
                                }}
                                onFocus={() => setShowSkillDropdown(true)}
                                onKeyDown={handleKeyDownSkill}
                                placeholder="Type to add or select from suggestions"
                                className="w-full focus-visible:ring-0 focus-visible:outline-none"
                            />

                            {/* Dropdown */}
                            {showSkillDropdown && filteredSkills.length > 0 && (
                                <ul className="absolute top-full left-0 mt-2 w-full bg-white border border-gray-200 rounded-lg shadow-md max-h-48 overflow-y-auto z-10">
                                    {filteredSkills.map((option) => (
                                        <li
                                            key={option}
                                            onClick={() => handleAddSkill(option)}
                                            className="px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-primary-1 hover:text-white transition-colors"
                                        >
                                            {option}
                                        </li>
                                    ))}
                                </ul>
                            )}

                            {/* Selected Badges */}
                            {skills.length > 0 && (
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {skills.map((opt) => (
                                        <Badge
                                            key={opt}
                                            onClick={() => handleRemoveSkill(opt)}
                                            className="bg-primary-1 text-white border border-primary-1 px-3 py-2 rounded-xl cursor-pointer hover:bg-primary-1"
                                        >
                                            {opt} ✕
                                        </Badge>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Suggested Skills */}
                        <div className="flex flex-col gap-3 w-full">
                            <Label className="text-sm">Suggested</Label>
                            <div className="flex flex-wrap gap-3">
                                {skillSuggestions.slice(0, 5).map((option) => {
                                    const isActive = skills.includes(option);
                                    return (
                                        <Badge
                                            key={option}
                                            onClick={() => handleAddSkill(option)}
                                            tabIndex={-1}
                                            className={`cursor-pointer rounded-xl px-4 py-2 text-sm border select-none transition-all ${isActive
                                                ? "bg-primary-1 text-white border-primary-1 hover:bg-primary-1"
                                                : "bg-primary-50 text-primary-1 border-[#ff999a] hover:bg-primary-1 hover:text-white hover:border-primary-1"
                                                }`}
                                        >
                                            {option}
                                        </Badge>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Skills Summary */}
                        <div className="flex flex-col gap-2 w-full">
                            <Label htmlFor="summary">Skills Summary</Label>
                            <textarea
                                id="summary"
                                value={skillsSummary}
                                onChange={(e) => setSkillsSummary(e.target.value)}
                                placeholder='Short paragraph about strengths (e.g., "CPR certified, excellent at creating fun learning activities, strong multitasker.")'
                                className="w-full min-h-[100px] border border-gray-300 rounded-lg p-3 text-sm focus-visible:ring-0 focus-visible:outline-none"
                            />
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-between gap-5 w-full">
                            <Button
                                type="button"
                                variant="ghost"
                                onClick={onBack}
                                className="w-full sm:w-1/2 bg-gray-100 hover:bg-gray-200 text-black border-none"
                            >
                                Previous
                            </Button>

                            <Button
                                type="submit"
                                className="w-full sm:w-1/2 bg-primary-1 hover:bg-primary-100 text-white"
                            >
                                Next
                            </Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
};
