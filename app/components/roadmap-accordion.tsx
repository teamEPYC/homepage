// TEMPORARILY COMMENTED OUT - ROADMAP REMOVAL
// import { useState } from "react";
// import { ChevronDown, ChevronUp } from "lucide-react";
// import type { RoadmapCategory, RoadmapItem } from "~/lib/data-roadmap";

// interface RoadmapAccordionProps {
//     category: RoadmapCategory;
//     onItemClick: (item: RoadmapItem) => void;
//     searchTerm: string;
//     phaseFilter: string;
//     isFirstCategory?: boolean;
// }

// export function RoadmapAccordion({
//     category,
//     onItemClick,
//     searchTerm,
//     phaseFilter,
//     isFirstCategory
// }: RoadmapAccordionProps) {

//     const [isExpanded, setIsExpanded] = useState(true);

//     const totalMilestones = category.items.length;
//     const completedMilestones = category.items.filter(item => item.status === 'complete').length;
//     const progressPercentage = Math.round((completedMilestones / totalMilestones) * 100);
//     const filteredItems = category.items;

//     return (
//         <div className="border !border-black/20 rounded mb-8">
//             {/* Accordion Header */}
//             <button
//                 onClick={() => setIsExpanded(!isExpanded)}
//                 className="w-full py-3 px-3 md:py-4 md:px-6 text-left transition-colors cursor-pointer bg-white"
//             >
//                 <div className="flex items-center justify-between mb-5">
//                     <div className="flex md:items-center gap-1">
//                         <span className="text-lg font-mono text-gray-600">{'<>'}</span>
//                         <div>
//                             <h3 className="text-lg md:text-xl text-black !font-normal">{category.title}</h3>
//                         </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                         {isExpanded ? (
//                             <ChevronDown className="w-4 h-4 text-gray-600" />
//                         ) : (
//                             <ChevronUp className="w-4 h-4 text-gray-600" />
//                         )}
//                     </div>
//                 </div>

//                 <div className="flex items-center justify-between">
//                     <p className="text-sm text-black">
//                         {completedMilestones} of {totalMilestones} milestones complete
//                     </p>
//                     <span className="text-xs text-black">{progressPercentage}%</span>
//                 </div>

//                 <div className="mt-2">
//                     <div className="w-full bg-dark-gray rounded h-2">
//                         <div
//                             className="bg-primary h-2 rounded transition-all duration-300"
//                             style={{ width: `${progressPercentage}%` }}
//                         />
//                     </div>
//                 </div>
//             </button>

//             {/* Accordion Content */}
//             {isExpanded && (
//                 <div className="px-3 md:px-6 py-3 md:py-4 bg-dark-gray-2">
//                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
//                         {filteredItems.map((item) => (
//                             <div
//                                 key={item.id}
//                                 onClick={() => onItemClick(item)}
//                                 className="border !border-black/20 rounded overflow-hidden p-3 md:p-4 cursor-pointer transition-colors bg-white"
//                             >
//                                 <div className="mb-0">
//                                     <h4 className="text-sm text-black mb-3 md:mb-4 !font-normal">{item.title}</h4>
//                                     <div className="flex gap-2">
//                                         <span
//                                             className={`px-6 py-0.5 rounded-full text-10 text-black border !border-black/20  ${item.status === 'complete'
//                                                 ? 'bg-[#BDE7C7] '
//                                                 : item.status === 'in-progress'
//                                                     ? 'bg-[#F0FD06] '
//                                                     : 'bg-white '
//                                                 }`}
//                                         >
//                                             {item.status === 'complete' ? 'Complete' :
//                                                 item.status === 'in-progress' ? 'In Progress' : 'Not Begun'}
//                                         </span>
//                                         <span className="px-6 py-0.5 rounded-full text-10 text-black bg-white border !border-black/20">
//                                             {item.phase === 'pre-mainnet' ? 'Pre-mainnet' :
//                                                 item.phase === 'post-mainnet' ? 'Post-mainnet' : ''}
//                                         </span>
//                                     </div>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// }
