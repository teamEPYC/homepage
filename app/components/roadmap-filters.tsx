import { Header } from "./container";

interface RoadmapFiltersProps {
    searchTerm: string;
    onSearchChange: (term: string) => void;
    phaseFilter: string;
    onPhaseFilterChange: (phase: string) => void;
    totalMilestones: number;
    completedMilestones: number;
}

export function RoadmapFilters({
    searchTerm,
    onSearchChange,
    phaseFilter,
    onPhaseFilterChange,
    totalMilestones,
    completedMilestones
}: RoadmapFiltersProps) {
    const phases = [
        { id: 'all', label: 'All Phases' },
        { id: 'pre-mainnet', label: 'Pre-Mainnet' },
        { id: 'post-mainnet', label: 'Post-Mainnet' }
    ];

    return (
        <div className="mb-8">
            <div className="flex flex-col">
                <h2 className="!text-4xl !font-sans !font-semibold text-left">Miden development roadmap</h2>
                <div className="text-xs font-semibold text-black mt-1">
                    {completedMilestones}/{totalMilestones} milestones completed
                </div>
            </div>

            <div className="flex flex-wrap gap-2.5 my-8">
                {phases.map((phase) => (
                    <button
                        key={phase.id}
                        onClick={() => onPhaseFilterChange(phase.id)}
                        className={`px-2 py-2 rounded text-xs transition-colors text-black border !border-black/20 cursor-pointer ${phaseFilter === phase.id
                            ? ' text-primary'
                            : ''
                            }`}
                    >
                        {phase.label}
                    </button>
                ))}
            </div>

            <div>
                <input
                    type="text"
                    placeholder="Search (Using technology name and it correlates to what is. Words contained in any of the boxes | CLI = Midenup)"
                    value={searchTerm}
                    onChange={(e) => onSearchChange(e.target.value)}
                    className="w-full p-4 rounded outline-none focus:outline-none border !border-black/20 text-xs text-black text-center"
                />
            </div>
        </div>
    );
}
