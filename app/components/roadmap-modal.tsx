// TEMPORARILY COMMENTED OUT - ROADMAP REMOVAL
// import type { SVGProps } from "react";
// import { Link } from "react-router";
// import type { RoadmapItem } from "~/lib/data-roadmap";

// interface RoadmapModalProps {
//     item: RoadmapItem | null;
//     isOpen: boolean;
//     onClose: () => void;
// }

// function GithubIcon(props: SVGProps<SVGSVGElement>) {
//     return (
//         <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//             <title>Github</title>
//             <path d="M7.99992 1.33337C7.12444 1.33337 6.25753 1.50581 5.4487 1.84084C4.63986 2.17588 3.90493 2.66694 3.28587 3.286C2.03563 4.53624 1.33325 6.23193 1.33325 8.00004C1.33325 10.9467 3.24659 13.4467 5.89325 14.3334C6.22659 14.3867 6.33325 14.18 6.33325 14V12.8734C4.48659 13.2734 4.09325 11.98 4.09325 11.98C3.78659 11.2067 3.35325 11 3.35325 11C2.74659 10.5867 3.39992 10.6 3.39992 10.6C4.06659 10.6467 4.41992 11.2867 4.41992 11.2867C4.99992 12.3 5.97992 12 6.35992 11.84C6.41992 11.4067 6.59325 11.1134 6.77992 10.9467C5.29992 10.78 3.74659 10.2067 3.74659 7.66671C3.74659 6.92671 3.99992 6.33337 4.43325 5.86004C4.36659 5.69337 4.13325 5.00004 4.49992 4.10004C4.49992 4.10004 5.05992 3.92004 6.33325 4.78004C6.85992 4.63337 7.43325 4.56004 7.99992 4.56004C8.56659 4.56004 9.13992 4.63337 9.66659 4.78004C10.9399 3.92004 11.4999 4.10004 11.4999 4.10004C11.8666 5.00004 11.6333 5.69337 11.5666 5.86004C11.9999 6.33337 12.2533 6.92671 12.2533 7.66671C12.2533 10.2134 10.6933 10.7734 9.20659 10.94C9.44659 11.1467 9.66659 11.5534 9.66659 12.1734V14C9.66659 14.18 9.77325 14.3934 10.1133 14.3334C12.7599 13.44 14.6666 10.9467 14.6666 8.00004C14.6666 7.12456 14.4941 6.25766 14.1591 5.44882C13.8241 4.63998 13.333 3.90505 12.714 3.286C12.0949 2.66694 11.36 2.17588 10.5511 1.84084C9.7423 1.50581 8.8754 1.33337 7.99992 1.33337Z" fill="black" />
//         </svg>
//     )
// }

// export function RoadmapModal({ item, isOpen, onClose }: RoadmapModalProps) {
//     if (!isOpen || !item) return null;

//     const handleBackdropClick = (e: React.MouseEvent) => {
//         if (e.target === e.currentTarget) {
//             onClose();
//         }
//     };

//     return (
//         <div
//             className="fixed inset-0 backdrop-blur-md bg-[#D9D9D9A8] flex items-center justify-center z-50 p-4"
//             onClick={handleBackdropClick}
//         >
//             <div className="bg-white rounded max-w-xl w-full max-h-[90vh] overflow-y-auto border !border-black/20">
//                 <div className="flex items-center justify-between flex-wrap gap-2 py-3 md:py-4 px-3 md:px-6 border-b !border-black/20">
//                     <div className="flex items-center gap-2">
//                         <span className="text-lg font-mono text-black">{'<>'}</span>
//                         <h3 className="text-lg md:text-xl font-semibold text-black">{item.title}</h3>
//                     </div>
//                     <div className="flex items-center gap-3">
//                         <span className={`px-2 rounded-[2px] text-10 border  text-black  ${item.status === 'complete'
//                             ? 'bg-[#BDE7C7] !border-transparent'
//                             : item.status === 'in-progress'
//                                 ? 'bg-[#F0FD06] !border-transparent'
//                                 : 'bg-white !border-black/20'
//                             }`}>
//                             {item.status === 'complete' ? 'Complete' :
//                                 item.status === 'in-progress' ? 'In Progress' : 'Not Begun'}
//                         </span>
//                     </div>
//                 </div>

//                 {/* Modal Content */}
//                 <div className="py-3 md:py-4 px-3 md:px-6">
//                     <div className="mb-4">
//                         <h4 className="text-xs font-semibold text-[#8C8C8C] mb-2">DESCRIPTION</h4>
//                         <p className="text-xs text-black ">{item.description}</p>
//                     </div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
//                         <div className="p-2.5 border !border-black/20 rounded bg-light-gray">
//                             <h4 className="text-xs !font-normal text-black mb-2">Category</h4>
//                             <p className="text-xs text-black font-semibold">{item.category}</p>
//                         </div>
//                         <div className="p-2.5 border !border-black/20 rounded bg-light-gray">
//                             <h4 className="text-xs !font-normal text-black mb-2">Timeline Phase</h4>
//                             <p className="text-xs text-black font-semibold">
//                                 {item.phase === 'pre-mainnet' ? 'Pre-Mainnet' :
//                                     item.phase === 'post-mainnet' ? 'Post-Mainnet' : ''}
//                             </p>
//                         </div>
//                     </div>


//                     {/* Development Status */}
//                     {item.developmentStatus && (
//                         <div className="p-2.5 border !border-black/20 rounded bg-light-gray mt-2 md:mt-4">
//                             <h4 className="text-xs !font-semibold text-black mb-1">
//                                 {item.developmentStatus}
//                             </h4>
//                             {item.developmentNote && (
//                                 <p className="text-10 text-black">{item.developmentNote}</p>
//                             )}
//                         </div>
//                     )}

//                 </div>
//                 {/* GitHub Repository */}
//                 {item.githubRepo && (
//                     <Link to={item.githubRepo} target="_blank" className="flex items-center justify-between py-3 px-3 md:px-6 border-t !border-black/20">
//                         <div className="flex items-center gap-1">
//                             <GithubIcon className="w-5 h-5" />
//                             <span className="text-xs text-black font-semibold">Github Repo: <span className="font-normal">View repository</span></span>
//                         </div>
//                         <div className="flex items-center gap-2">
//                             <span className="px-2 text-xs font-medium bg-[#FF5500] text-white rounded-[2px]">
//                                 LIVE
//                             </span>
//                         </div>
//                     </Link>
//                 )}
//             </div>
//         </div>
//     );
// }
