import { useState } from "react";
import { Container } from "~/components/container";
import { RoadmapItem } from "~/components/roadmap-item";
import { RoadmapVersionNav } from "~/components/roadmap-version-nav";
import { RoadmapConnectionLine } from "~/components/roadmap-connection-line";
import { roadmapData, type RoadmapData, type RoadmapCategory, type RoadmapItem as RoadmapItemType } from "../lib/data-roadmap";

// Reusable Grid Cell Component
interface GridCellProps {
    gridNumber: number;
    categoryTitle: string;
    itemsByGrid: Record<number, Array<{ item: RoadmapItemType; category: string }>>;
    activeItem: string | null;
    activeGrid: number | null;
    categoryHasActiveItem: boolean;
    getGridCellClasses: (gridNumber: number, categoryTitle: string) => string;
    handleGridItemClick: (gridNumber: number, itemId: string, event: React.MouseEvent) => void;
    handleModalClose: () => void;
    modalPosition: { x: number; y: number } | undefined;
}

function GridCell({
    gridNumber,
    categoryTitle,
    itemsByGrid,
    activeItem,
    activeGrid,
    categoryHasActiveItem,
    getGridCellClasses,
    handleGridItemClick,
    handleModalClose,
    modalPosition,
}: GridCellProps) {
    const gridItems = itemsByGrid[gridNumber]?.filter(({ category: itemCategory }) => itemCategory === categoryTitle) || [];

    return (
        <div className={getGridCellClasses(gridNumber, categoryTitle)}>
            <div className="space-y-2">
                {gridItems.map(({ item }) => {
                    const shouldShowItem = activeItem === null || (activeGrid === gridNumber && categoryHasActiveItem);
                    return (
                        <div key={item.id} className={`group transition-opacity duration-300 ${shouldShowItem ? 'opacity-100' : 'opacity-0'}`}>
                            <div className="flex items-start gap-2">
                                {gridItems.length > 1 && (
                                    <div className="w-2 h-2 mt-1 bg-dark-gray flex-shrink-0"></div>
                                )}
                                <RoadmapItem
                                    id={item.id}
                                    title={item.title}
                                    description={item.title}
                                    content={item.content}
                                    version="v0.11"
                                    isEnabled={true}
                                    isMultipleItems={gridItems.length > 1}
                                    isActive={activeItem === item.id}
                                    onModalClose={handleModalClose}
                                    modalPosition={modalPosition}
                                    onGridItemClick={(e) => handleGridItemClick(gridNumber, item.id, e)}
                                    category={categoryTitle}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
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

        // When popup is active, make borders transparent instead of removing them
        if (activeItem) {
            return `${baseClasses} border-r !border-transparent`;
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
        if (window.innerWidth < 1024) {
            setActiveGrid(gridNumber);
            setActiveItem(activeItem === itemId ? null : itemId);
            return;
        }

        const rect = event.currentTarget.getBoundingClientRect();
        const clickedX = rect.left + rect.width / 2;
        const clickedY = rect.top + rect.height / 2;

        const viewportHeight = window.innerHeight;
        const isTopHalf = clickedY < viewportHeight / 2;
        const modalHeight = 300;

        let modalX = clickedX;
        let modalY;

        if (isTopHalf) {
            modalY = rect.bottom + 150;
        } else {
            modalY = rect.top - modalHeight - 5;
        }

        setActiveGrid(gridNumber);
        setActiveItem(itemId);
        setModalPosition({ x: modalX, y: modalY });
        setClickedItemPosition({ x: clickedX, y: clickedY });
    };

    const handleModalClose = () => {
        setActiveGrid(null);
        setActiveItem(null);
        setModalPosition(undefined);
        setClickedItemPosition(null);
    };


    return (
        <div className={`min-h-screen bg-background ${activeItem ? 'bg-light-gray-md' : ''}`}>
            {clickedItemPosition && modalPosition && (
                <RoadmapConnectionLine
                    fromPosition={clickedItemPosition}
                    toPosition={modalPosition}
                    isVisible={!!activeItem}
                />
            )}

            <Container className="max-w-[1440px]">
                <div className="lg:hidden text-center mb-4">
                    <h1 className="text-4xl font-bold">ROADMAP</h1>
                </div>
                <div className="lg:hidden">
                    <RoadmapVersionNav
                        versions={versions}
                        currentVersion={currentVersion}
                        onVersionChange={setCurrentVersion}
                        roadmapData={roadmapData}
                        activeItem={activeItem}
                        mobileVariant="roadmap"
                    />
                </div>

                <div className="lg:hidden">
                    {hasContent ? (
                        <div className="space-y-6">
                            {currentVersionData.categories.map((category: RoadmapCategory) => {
                                if (category.items.length === 0) return null;

                                return (
                                    <div key={category.id} className="space-y-3">
                                        <div className="flex justify-center">
                                            <div className={`w-full p-3  border !border-black/10`}>
                                                <h2 className="text-sm font-medium text-primary uppercase tracking-wider text-center">
                                                    {category.title}
                                                </h2>
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            {category.items.map((item: RoadmapItemType) => (
                                                <div key={item.id} className="flex justify-center mb-0">
                                                    <div className="w-full space-y-2">
                                                        <button
                                                            onClick={(e) => handleGridItemClick(item.grid, item.id, e)}
                                                            className="w-full p-2 transition-all duration-200"
                                                        >
                                                            <div className="flex items-center justify-center gap-2">
                                                                <div className={`w-1 h-1 rounded-full flex-shrink-0 ${activeItem === item.id ? 'bg-primary' : 'bg-foreground'
                                                                    }`}></div>
                                                                <h3 className={`
                                                                    font-normal text-sm uppercase tracking-wider text-center
                                                                    ${activeItem === item.id ? 'text-primary' : 'text-foreground'}
                                                                `}>
                                                                    {item.title}
                                                                </h3>
                                                            </div>
                                                        </button>

                                                        {activeItem === item.id && (
                                                            <div className="relative pt-2">
                                                                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-px h-4 bg-black/20"></div>
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

                <div className="hidden lg:block">
                    <div className="w-full">
                        {hasContent ? (
                            <div className={`space-y-0 ${activeItem ? 'border !border-transparent' : 'border !border-black/5'}`}>
                                {currentVersionData.categories.map((category: RoadmapCategory) => {
                                    const categoryHasActiveItem = category.items.some((item: RoadmapItemType) => item.id === activeItem);
                                    const shouldShowCategory = categoryHasActiveItem;

                                    return (
                                        <div key={category.id} className={`grid grid-cols-5 gap-0 ${activeItem ? 'border-b !border-transparent' : 'border-b !border-black/5'} transition-opacity duration-300 ${activeItem !== null && !shouldShowCategory ? 'opacity-0' : 'opacity-100'
                                            }`}>
                                            <div className={`col-span-1 p-4 flex items-center justify-center min-h-88 ${activeItem ? 'border-r !border-transparent' : 'border-r !border-black/5'}`}>
                                                <h3 className="font-medium text-sm uppercase tracking-wider text-primary text-center">
                                                    {category.title}
                                                </h3>
                                            </div>

                                            <GridCell
                                                gridNumber={2}
                                                categoryTitle={category.title}
                                                itemsByGrid={itemsByGrid}
                                                activeItem={activeItem}
                                                activeGrid={activeGrid}
                                                categoryHasActiveItem={categoryHasActiveItem}
                                                getGridCellClasses={getGridCellClasses}
                                                handleGridItemClick={handleGridItemClick}
                                                handleModalClose={handleModalClose}
                                                modalPosition={modalPosition}
                                            />

                                            <GridCell
                                                gridNumber={3}
                                                categoryTitle={category.title}
                                                itemsByGrid={itemsByGrid}
                                                activeItem={activeItem}
                                                activeGrid={activeGrid}
                                                categoryHasActiveItem={categoryHasActiveItem}
                                                getGridCellClasses={getGridCellClasses}
                                                handleGridItemClick={handleGridItemClick}
                                                handleModalClose={handleModalClose}
                                                modalPosition={modalPosition}
                                            />

                                            <GridCell
                                                gridNumber={4}
                                                categoryTitle={category.title}
                                                itemsByGrid={itemsByGrid}
                                                activeItem={activeItem}
                                                activeGrid={activeGrid}
                                                categoryHasActiveItem={categoryHasActiveItem}
                                                getGridCellClasses={getGridCellClasses}
                                                handleGridItemClick={handleGridItemClick}
                                                handleModalClose={handleModalClose}
                                                modalPosition={modalPosition}
                                            />

                                            <GridCell
                                                gridNumber={5}
                                                categoryTitle={category.title}
                                                itemsByGrid={itemsByGrid}
                                                activeItem={activeItem}
                                                activeGrid={activeGrid}
                                                categoryHasActiveItem={categoryHasActiveItem}
                                                getGridCellClasses={getGridCellClasses}
                                                handleGridItemClick={handleGridItemClick}
                                                handleModalClose={handleModalClose}
                                                modalPosition={modalPosition}
                                            />
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



                <div className="hidden lg:block">
                    <RoadmapVersionNav
                        versions={versions}
                        currentVersion={currentVersion}
                        onVersionChange={setCurrentVersion}
                        roadmapData={roadmapData}
                        activeItem={activeItem}
                        mobileVariant="default"
                    />
                </div>
            </Container>

        </div>
    );
}