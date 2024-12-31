type ProblemProps = {
    problem: string;
};

const Truncate = ({ problem }: ProblemProps) => {
    const truncateText = (text: string, wordLimit: number): string => {
        const words = text.split(" ");
        return words.slice(0, wordLimit).join(" ") + (words.length > wordLimit ? "..." : "");
    };

    return (
        <p className="text-[14px] text-gray-600">
            {truncateText(problem, 15)}
        </p>
    );
}

export default Truncate