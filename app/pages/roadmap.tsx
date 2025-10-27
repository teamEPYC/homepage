// TEMPORARILY COMMENTED OUT - ROADMAP REMOVAL
// import { useState } from "react";
// import { Container } from "~/components/container";
// import { RoadmapFilters } from "~/components/roadmap-filters";
// import { RoadmapAccordion } from "~/components/roadmap-accordion";
// import { RoadmapModal } from "~/components/roadmap-modal";
// import { roadmapData } from "~/lib/data-roadmap";
// import type { RoadmapItem } from "~/lib/data-roadmap";

// export function PageRoadmap() {
//     const [searchTerm, setSearchTerm] = useState("");
//     const [phaseFilter, setPhaseFilter] = useState("all");
//     const [selectedItem, setSelectedItem] = useState<RoadmapItem | null>(null);
//     const [isModalOpen, setIsModalOpen] = useState(false);


//     const allItems = Object.values(roadmapData.items).flatMap(category => category.items);
//     const totalMilestones = allItems.length;
//     const completedMilestones = allItems.filter(item => item.status === 'complete').length;

//     const filteredCategories = Object.values(roadmapData.items).map(category => {
//         const filteredItems = category.items.filter(item => {
//             const matchesSearch = searchTerm === '' ||
//                 item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//                 category.title.toLowerCase().includes(searchTerm.toLowerCase());

//             const matchesPhase = phaseFilter === 'all' ||
//                 (phaseFilter === 'pre-mainnet' && item.phase === 'pre-mainnet') ||
//                 (phaseFilter === 'post-mainnet' && item.phase === 'post-mainnet');

//             return matchesSearch && matchesPhase;
//         });

//         return {
//             ...category,
//             items: filteredItems
//         };
//     }).filter(category => category.items.length > 0);

//     const handleItemClick = (item: RoadmapItem) => {
//         setSelectedItem(item);
//         setIsModalOpen(true);
//     };

//     const handleCloseModal = () => {
//         setIsModalOpen(false);
//         setSelectedItem(null);
//     };

//     return (
//         <div className="flex-1">
//             <Container className="max-w-[1248px]">
//                 <div className="">
//                     {/* Filters and Search */}
//                     <RoadmapFilters
//                         searchTerm={searchTerm}
//                         onSearchChange={setSearchTerm}
//                         phaseFilter={phaseFilter}
//                         onPhaseFilterChange={setPhaseFilter}
//                         totalMilestones={totalMilestones}
//                         completedMilestones={completedMilestones}
//                     />

//                     {/* Roadmap Categories */}
//                     <div className="space-y-4">
//                         {filteredCategories.map((category, index) => (
//                             <RoadmapAccordion
//                                 key={`${category.id}-${searchTerm}-${phaseFilter}`}
//                                 category={category}
//                                 onItemClick={handleItemClick}
//                                 searchTerm={searchTerm}
//                                 phaseFilter={phaseFilter}
//                                 isFirstCategory={index === 0}
//                             />
//                         ))}
//                     </div>

//                     {/* No Results */}
//                     {filteredCategories.length === 0 && (
//                         <div className="text-center py-12">
//                             <p className="text-gray-500">No milestones found matching your criteria.</p>
//                         </div>
//                     )}
//                 </div>
//             </Container>

//             {/* Modal */}
//             <RoadmapModal
//                 item={selectedItem}
//                 isOpen={isModalOpen}
//                 onClose={handleCloseModal}
//             />
//         </div>
//     );
// }