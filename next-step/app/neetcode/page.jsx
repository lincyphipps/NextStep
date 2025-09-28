"use client";

import RoadmapBox from "../components/RoadmapBox";
import { roadmapLinks } from "./roadmapLinks";
import Xarrow from "react-xarrows";

export default function Roadmap() {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <main className="relative w-full bg-gray-900 h-[450px]">
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

        <Xarrow start="arrays" end="two-pointers" color="white" />
        <Xarrow start="arrays" end="stack" color="white" />
        <Xarrow start="two-pointers" end="binary" color="white" />
        <Xarrow start="two-pointers" end="sliding" color="white" />
        <Xarrow start="stack" end="linked" color="white" />
        <Xarrow start="binary" end="trees" color="white" />
        <Xarrow start="sliding" end="trees" color="white" />
        <Xarrow start="linked" end="trees" color="white" />
      </main>
    </div>
  );
}
