import { useState } from "react";
import { Container, Header } from "~/components/container";
import { RoadmapItem } from "~/components/roadmap-item";
import { RoadmapVersionNav } from "~/components/roadmap-version-nav";
import { RoadmapConnectionLine } from "~/components/roadmap-connection-line";
import { roadmapData, type RoadmapData, type RoadmapCategory, type RoadmapItem as RoadmapItemType } from "../lib/data-roadmap";
import { ChevronDown, ChevronUp } from "lucide-react";

// Mobile Roadmap Item Component (Accordion)
interface MobileRoadmapItemProps {
    id: string;
    title: string;
    description: string;
    content: string;
    version: string;
    isEnabled: boolean;
    isMultipleItems?: boolean;
}

function MobileRoadmapItem({
    id,
    title,
    description,
    content,
    version,
    isEnabled,
    isMultipleItems = false,
}: MobileRoadmapItemProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleClick = () => {
        if (isEnabled) {
            setIsExpanded(!isExpanded);
        }
    };

    return (
        <div className="border !border-black/5 rounded-lg overflow-hidden">
            {/* Clickable Header */}
            <button
                onClick={handleClick}
                disabled={!isEnabled}
                className={`
          w-full p-4 text-left transition-all duration-200 
          ${isEnabled
                        ? 'cursor-pointer text-foreground hover:bg-muted/30'
                        : 'opacity-40 cursor-not-allowed text-muted-foreground'
                    }
          focus:outline-none focus:ring-2 focus:ring-primary/20
          ${isMultipleItems ? 'text-left' : 'text-center'}
        `}
                aria-label={`${title} - ${description}`}
            >
                <div className="flex items-center justify-between">
                    <div className="flex items-start gap-2">
                        {isMultipleItems && (
                            <div className="w-2 h-2 mt-1 bg-dark-gray flex-shrink-0"></div>
                        )}
                        <h3 className="font-normal text-xs uppercase tracking-wider">
                            {title}
                        </h3>
                    </div>
                    {isEnabled && (
                        <div className="ml-2">
                            {isExpanded ? (
                                <ChevronUp className="w-4 h-4 text-muted-foreground" />
                            ) : (
                                <ChevronDown className="w-4 h-4 text-muted-foreground" />
                            )}
                        </div>
                    )}
                </div>
            </button>

            {/* Expandable Content */}
            {isExpanded && (
                <div className="px-4 pb-4 border-t !border-black/5 bg-muted/10">
                    <div className="pt-4">
                        <div className="text-xs text-muted-foreground mb-2">
                            {version} • {description}
                        </div>
                        <p className="text-sm text-foreground leading-relaxed">{content}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export function PageRoadmap() {
    const [currentVersion, setCurrentVersion] = useState("v0.11");
    const [activeGrid, setActiveGrid] = useState<number | null>(null);
    const [activeItem, setActiveItem] = useState<string | null>(null);
    const [modalPosition, setModalPosition] = useState<{ x: number; y: number } | undefined>();
    const [clickedItemPosition, setClickedItemPosition] = useState<{ x: number; y: number } | null>(null);

    const versions = Object.keys(roadmapData.versions);
    const currentVersionData = roadmapData.versions[currentVersion];

    // Check if current version has any content
    const hasContent = currentVersionData.categories.some((category: RoadmapCategory) => category.items.length > 0);

    // Helper function to check if specific grid cell contains active item
    const isGridCellActive = (gridNumber: number, categoryTitle: string) => {
        if (!activeItem) return false;

        const gridItems = itemsByGrid[gridNumber]?.filter(({ category: itemCategory }) => itemCategory === categoryTitle) || [];
        return gridItems.some(({ item }) => item.id === activeItem);
    };

    // Helper function to get grid cell classes
    const getGridCellClasses = (gridNumber: number, categoryTitle: string) => {
        const baseClasses = "col-span-1 p-4 flex items-center justify-center min-h-88";

        if (isGridCellActive(gridNumber, categoryTitle)) {
            return `${baseClasses} bg-white border !border-black/10 z-50`;
        }

        // Only show borders when no popup is active
        if (activeItem) {
            return `${baseClasses}`;
        }

        return `${baseClasses} border-r !border-black/10`;
    };

    // Group items by grid number for the current version
    const itemsByGrid: Record<number, Array<{ item: RoadmapItemType; category: string }>> = {};
    currentVersionData.categories.forEach((category: RoadmapCategory) => {
        category.items.forEach((item: RoadmapItemType) => {
            if (!itemsByGrid[item.grid]) {
                itemsByGrid[item.grid] = [];
            }
            itemsByGrid[item.grid].push({ item, category: category.title });
        });
    });

    // Handle grid item click
    const handleGridItemClick = (gridNumber: number, itemId: string, event: React.MouseEvent) => {
        // For mobile, we don't need modal positioning - just toggle the active item
        if (window.innerWidth < 1024) {
            setActiveGrid(gridNumber);
            setActiveItem(activeItem === itemId ? null : itemId); // Toggle if same item clicked
            return;
        }

        // Desktop modal positioning
        const rect = event.currentTarget.getBoundingClientRect();
        const clickedX = rect.left + rect.width / 2;
        const clickedY = rect.top + rect.height / 2;

        // Calculate modal position (directly above the clicked item)
        const modalX = clickedX; // Same horizontal position as clicked item
        const modalY = clickedY - 150; // Offset above the clicked item

        setActiveGrid(gridNumber);
        setActiveItem(itemId);
        setModalPosition({ x: modalX, y: modalY });
        setClickedItemPosition({ x: clickedX, y: clickedY });
    };

    // Handle modal close
    const handleModalClose = () => {
        setActiveGrid(null);
        setActiveItem(null);
        setModalPosition(undefined);
        setClickedItemPosition(null);
    };


    return (
        <div className={`min-h-screen bg-background ${activeItem ? 'bg-light-gray-md' : ''}`}>
            {/* Connection Line */}
            {clickedItemPosition && modalPosition && (
                <RoadmapConnectionLine
                    fromPosition={clickedItemPosition}
                    toPosition={modalPosition}
                    isVisible={!!activeItem}
                />
            )}

            <Container className="max-w-[1440px]">
                {/* Mobile Heading */}
                <div className="lg:hidden text-center mb-4">
                    <h1 className="text-4xl font-bold">ROADMAP</h1>
                </div>

                {/* Mobile Version Navigation - Top */}
                <div className="lg:hidden flex items-center justify-between mb-6 pt-6 border-t !border-black/10">
                    <button
                        onClick={() => {
                            const currentIndex = versions.indexOf(currentVersion);
                            if (currentIndex > 0) {
                                setCurrentVersion(versions[currentIndex - 1]);
                            }
                        }}
                        disabled={versions.indexOf(currentVersion) === 0}
                        className={`p-2 rounded-full transition-colors ${versions.indexOf(currentVersion) === 0
                                ? 'text-muted-foreground/50 cursor-not-allowed'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                        aria-label="Previous version"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                    <div className="flex items-center gap-2 px-4 py-2 ">
                        <span className="font-medium text-base text-primary">{currentVersion}</span>
                    </div>

                    <button
                        onClick={() => {
                            const currentIndex = versions.indexOf(currentVersion);
                            if (currentIndex < versions.length - 1) {
                                setCurrentVersion(versions[currentIndex + 1]);
                            }
                        }}
                        disabled={versions.indexOf(currentVersion) === versions.length - 1}
                        className={`p-2 rounded-full transition-colors ${versions.indexOf(currentVersion) === versions.length - 1
                                ? 'text-muted-foreground/50 cursor-not-allowed'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                            }`}
                        aria-label="Next version"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Layout - Grouped by Category with Inline Content */}
                <div className="lg:hidden">
                    {hasContent ? (
                        <div className="space-y-6">
                            {currentVersionData.categories.map((category: RoadmapCategory) => {
                                if (category.items.length === 0) return null;

                                return (
                                    <div key={category.id} className="space-y-3">
                                        {/* Category Title - Only main category has border */}
                                        <div className="flex justify-center">
                                            <div className={`w-full p-3  border !border-black/10`}>
                                                <h2 className="text-sm font-medium text-primary uppercase tracking-wider text-center">
                                                    {category.title}
                                                </h2>
                                            </div>
                                        </div>

                                        {/* Category Items - No borders */}
                                        <div className="space-y-2">
                                            {category.items.map((item: RoadmapItemType) => (
                                                <div key={item.id} className="flex justify-center mb-0">
                                                    <div className="w-full space-y-2">
                                                        <button
                                                            onClick={(e) => handleGridItemClick(item.grid, item.id, e)}
                                                            className="w-full p-2 transition-all duration-200"
                                                        >
                                                            <div className="flex items-center justify-center gap-2">
                                                                <div className={`w-1 h-1 rounded-full flex-shrink-0 ${
                                                                    activeItem === item.id ? 'bg-primary' : 'bg-foreground'
                                                                }`}></div>
                                                                <h3 className={`
                                                                    font-normal text-sm uppercase tracking-wider text-center
                                                                    ${activeItem === item.id ? 'text-primary' : 'text-foreground'}
                                                                `}>
                                                                    {item.title}
                                                                </h3>
                                                            </div>
                                                        </button>

                                                        {/* Inline Content - Shows below the item when active */}
                                                        {activeItem === item.id && (
                                                            <div className="relative pt-2">
                                                                {/* Connection line pointing up to the item */}
                                                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-black/20"></div>
                                                                
                                                                {/* Content box */}
                                                                <div className="w-full p-4 border-t border-l border-r border-b !border-black/10 bg-white">
                                                                    <p className="text-sm text-foreground text-center">
                                                                        {item.content}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <div className="flex items-center justify-center py-16 min-h-96">
                            <div className="text-center">
                                <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                                    {currentVersion} Not Available
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    This version is currently not available.
                                </p>
                            </div>
                        </div>
                    )}
                </div>

                {/* Desktop Layout - Grid System */}
                <div className="hidden lg:block">
                    <div className="w-full">
                        {hasContent ? (
                            <div className={`space-y-0 ${activeItem ? '' : 'border !border-black/5'}`}>
                                {currentVersionData.categories.map((category: RoadmapCategory, categoryIndex: number) => {
                                    // Check if this category has the active item
                                    const categoryHasActiveItem = category.items.some((item: RoadmapItemType) => item.id === activeItem);

                                    // Only show the category that contains the active item
                                    const shouldShowCategory = categoryHasActiveItem;

                                    return (
                                        <div key={category.id} className={`grid grid-cols-5 gap-0 ${activeItem ? '' : 'border-b !border-black/5'} transition-opacity duration-300 ${activeItem !== null && !shouldShowCategory ? 'opacity-0' : 'opacity-100'
                                            }`}>
                                            <div className={`col-span-1 p-4 flex items-center justify-center min-h-88 ${activeItem ? '' : 'border-r !border-black/5'}`}>
                                                <h3 className="font-medium text-sm uppercase tracking-wider text-primary text-center">
                                                    {category.title}
                                                </h3>
                                            </div>

                                            <div className={getGridCellClasses(2, category.title)}>
                                                <div className="space-y-2">
                                                    {(() => {
                                                        const grid2Items = itemsByGrid[2]?.filter(({ category: itemCategory }) => itemCategory === category.title) || [];
                                                        return grid2Items.map(({ item }) => {
                                                            // Show all items in the active grid, or all items if no active item
                                                            const shouldShowItem = activeItem === null || (activeGrid === 2 && categoryHasActiveItem);
                                                            return (
                                                                <div key={item.id} className={`group transition-opacity duration-300 ${shouldShowItem ? 'opacity-100' : 'opacity-0'}`}>
                                                                    <div className="flex items-start gap-2">
                                                                        {grid2Items.length > 1 && (
                                                                            <div className="w-2 h-2 mt-1 bg-dark-gray flex-shrink-0"></div>
                                                                        )}
                                                                        <RoadmapItem
                                                                            id={item.id}
                                                                            title={item.title}
                                                                            description={item.title}
                                                                            content={item.content}
                                                                            version="v0.11"
                                                                            isEnabled={true}
                                                                            isMultipleItems={grid2Items.length > 1}
                                                                            isActive={activeItem === item.id}
                                                                            onModalClose={handleModalClose}
                                                                            modalPosition={modalPosition}
                                                                            onGridItemClick={(e) => handleGridItemClick(2, item.id, e)}
                                                                            category={category.title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            );
                                                        });
                                                    })()}
                                                </div>
                                            </div>

                                            <div className={getGridCellClasses(3, category.title)}>
                                                <div className="space-y-2">
                                                    {(() => {
                                                        const grid3Items = itemsByGrid[3]?.filter(({ category: itemCategory }) => itemCategory === category.title) || [];
                                                        return grid3Items.map(({ item }) => {
                                                            // Show all items in the active grid, or all items if no active item
                                                            const shouldShowItem = activeItem === null || (activeGrid === 3 && categoryHasActiveItem);
                                                            return (
                                                                <div key={item.id} className={`group transition-opacity duration-300 ${shouldShowItem ? 'opacity-100' : 'opacity-0'}`}>
                                                                    <div className="flex items-start gap-2">
                                                                        {grid3Items.length > 1 && (
                                                                            <div className="w-2 h-2 mt-1 bg-dark-gray flex-shrink-0"></div>
                                                                        )}
                                                                        <RoadmapItem
                                                                            id={item.id}
                                                                            title={item.title}
                                                                            description={item.title}
                                                                            content={item.content}
                                                                            version="v0.11"
                                                                            isEnabled={true}
                                                                            isMultipleItems={grid3Items.length > 1}
                                                                            isActive={activeItem === item.id}
                                                                            onModalClose={handleModalClose}
                                                                            modalPosition={modalPosition}
                                                                            onGridItemClick={(e) => handleGridItemClick(3, item.id, e)}
                                                                            category={category.title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            );
                                                        });
                                                    })()}
                                                </div>
                                            </div>

                                            <div className={getGridCellClasses(4, category.title)}>
                                                <div className="space-y-2">
                                                    {(() => {
                                                        const grid4Items = itemsByGrid[4]?.filter(({ category: itemCategory }) => itemCategory === category.title) || [];
                                                        return grid4Items.map(({ item }) => {
                                                            // Show all items in the active grid, or all items if no active item
                                                            const shouldShowItem = activeItem === null || (activeGrid === 4 && categoryHasActiveItem);
                                                            return (
                                                                <div key={item.id} className={`group transition-opacity duration-300 ${shouldShowItem ? 'opacity-100' : 'opacity-0'}`}>
                                                                    <div className="flex items-start gap-2">
                                                                        {grid4Items.length > 1 && (
                                                                            <div className="w-2 h-2 mt-1 bg-dark-gray flex-shrink-0"></div>
                                                                        )}
                                                                        <RoadmapItem
                                                                            id={item.id}
                                                                            title={item.title}
                                                                            description={item.title}
                                                                            content={item.content}
                                                                            version="v0.11"
                                                                            isEnabled={true}
                                                                            isMultipleItems={grid4Items.length > 1}
                                                                            isActive={activeItem === item.id}
                                                                            onModalClose={handleModalClose}
                                                                            modalPosition={modalPosition}
                                                                            onGridItemClick={(e) => handleGridItemClick(4, item.id, e)}
                                                                            category={category.title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            );
                                                        });
                                                    })()}
                                                </div>
                                            </div>

                                            <div className={getGridCellClasses(5, category.title)}>
                                                <div className="space-y-2">
                                                    {(() => {
                                                        const grid5Items = itemsByGrid[5]?.filter(({ category: itemCategory }) => itemCategory === category.title) || [];
                                                        return grid5Items.map(({ item }) => {
                                                            // Show all items in the active grid, or all items if no active item
                                                            const shouldShowItem = activeItem === null || (activeGrid === 5 && categoryHasActiveItem);
                                                            return (
                                                                <div key={item.id} className={`group transition-opacity duration-300 ${shouldShowItem ? 'opacity-100' : 'opacity-0'}`}>
                                                                    <div className="flex items-start gap-2">
                                                                        {grid5Items.length > 1 && (
                                                                            <div className="w-2 h-2 mt-1 bg-dark-gray flex-shrink-0"></div>
                                                                        )}
                                                                        <RoadmapItem
                                                                            id={item.id}
                                                                            title={item.title}
                                                                            description={item.title}
                                                                            content={item.content}
                                                                            version="v0.11"
                                                                            isEnabled={true}
                                                                            isMultipleItems={grid5Items.length > 1}
                                                                            isActive={activeItem === item.id}
                                                                            onModalClose={handleModalClose}
                                                                            modalPosition={modalPosition}
                                                                            onGridItemClick={(e) => handleGridItemClick(5, item.id, e)}
                                                                            category={category.title}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            );
                                                        });
                                                    })()}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        ) : (
                            <div className="flex items-center justify-center py-16 min-h-96">
                                <div className="text-center">

                                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">
                                        {currentVersion} Not Available
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        This version is currently not available.
                                    </p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>



                {/* Desktop Version Navigation - Bottom */}
                <div className="hidden lg:block">
                    <RoadmapVersionNav
                        versions={versions}
                        currentVersion={currentVersion}
                        onVersionChange={setCurrentVersion}
                        roadmapData={roadmapData}
                        activeItem={activeItem}
                    />
                </div>
            </Container>

        </div>
    );
}