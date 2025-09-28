"use client";

import RoadmapBox from "../components/RoadmapBox";
import { roadmapLinks } from "./roadmapLinks";
import Xarrow from "react-xarrows";

export default function Roadmap() {
  return (
    <div className="bg-[#fdf0d5] flex flex-col min-h-full">
      <main className="relative w-full bg-[#fdf0d5] h-[450px] mb-8 flex-1">
        <RoadmapBox
          id="arrays"
          title="Arrays & Hashing"
          urls={roadmapLinks["Arrays & Hashing"]}
          style={{ top: "20px", left: "50%", transform: "translateX(-50%)" }}
        />

        <RoadmapBox
          id="two-pointers"
          title="Two Pointers"
          urls={roadmapLinks["Two Pointers"]}
          style={{ top: "140px", left: "35%" }}
        />

        <RoadmapBox
          id="stack"
          title="Stack"
          urls={roadmapLinks["Stack"]}
          style={{ top: "140px", left: "65%" }}
        />

        <RoadmapBox
          id="binary"
          title="Binary Search"
          urls={roadmapLinks["Binary Search"]}
          style={{ top: "260px", left: "25%" }}
        />

        <RoadmapBox
          id="sliding"
          title="Sliding Window"
          urls={roadmapLinks["Sliding Window"]}
          style={{ top: "260px", left: "50%", transform: "translateX(-50%)" }}
        />

        <RoadmapBox
          id="linked"
          title="Linked List"
          urls={roadmapLinks["Linked List"]}
          style={{ top: "260px", left: "75%" }}
        />

        <RoadmapBox
          id="trees"
          title="Trees"
          urls={roadmapLinks["Trees"]}
          style={{ top: "380px", left: "50%", transform: "translateX(-50%)" }}
        />

        <Xarrow start="arrays" end="two-pointers" color="#003049" />
        <Xarrow start="arrays" end="stack" color="#003049" />
        <Xarrow start="two-pointers" end="binary" color="#003049" />
        <Xarrow start="two-pointers" end="sliding" color="#003049" />
        <Xarrow start="stack" end="linked" color="#003049" />
        <Xarrow start="binary" end="trees" color="#003049" />
        <Xarrow start="sliding" end="trees" color="#003049" />
        <Xarrow start="linked" end="trees" color="#003049" />
      </main>
    </div>
  );
}
