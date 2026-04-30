"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export interface Frame {
  id: number;
  video: string;
  defaultPos: { x: number; y: number; w: number; h: number };
  corner: string;
  edgeHorizontal: string;
  edgeVertical: string;
  mediaSize: number;
  borderThickness: number;
  borderSize: number;
  isHovered: boolean;
}

interface FrameComponentProps {
  video: string;
  width: number | string;
  height: number | string;
  className?: string;
  corner: string;
  edgeHorizontal: string;
  edgeVertical: string;
  mediaSize: number;
  borderThickness: number;
  borderSize: number;
  showFrame: boolean;
  isHovered: boolean;
}

function FrameComponent({
  video,
  width,
  height,
  className = "",
  corner,
  edgeHorizontal,
  edgeVertical,
  mediaSize,
  borderThickness,
  borderSize,
  showFrame,
  isHovered,
}: FrameComponentProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (isHovered) {
      v.muted = false;
      v.volume = 1;
      v.currentTime = 0;
      v.play().catch(() => {
        v.muted = true;
        v.play().catch(() => {});
      });
    } else {
      v.pause();
      v.muted = true;
      v.currentTime = 0;
    }
  }, [isHovered]);

  return (
    <div
      className={`relative ${className}`}
      style={{
        width,
        height,
        transition: "width 0.3s ease-in-out, height 0.3s ease-in-out",
      }}
    >
      <div className="relative h-full w-full overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            zIndex: 1,
            transition: "all 0.3s ease-in-out",
            padding: showFrame ? `${borderThickness}px` : "0",
            width: showFrame ? `${borderSize}%` : "100%",
            height: showFrame ? `${borderSize}%` : "100%",
            left: showFrame ? `${(100 - borderSize) / 2}%` : "0",
            top: showFrame ? `${(100 - borderSize) / 2}%` : "0",
          }}
        >
          <div
            className="h-full w-full overflow-hidden"
            style={{
              transform: `scale(${mediaSize})`,
              transformOrigin: "center",
              transition: "transform 0.3s ease-in-out",
            }}
          >
            <video
              className="h-full w-full object-cover"
              src={video}
              loop
              muted
              playsInline
              preload="metadata"
              ref={videoRef}
            />
          </div>
        </div>

        {showFrame && (
          <div className="absolute inset-0" style={{ zIndex: 2 }}>
            <div
              className="absolute left-0 top-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{ backgroundImage: `url(${corner})` }}
            />
            <div
              className="absolute right-0 top-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${corner})`,
                transform: "scaleX(-1)",
              }}
            />
            <div
              className="absolute bottom-0 left-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${corner})`,
                transform: "scaleY(-1)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 h-16 w-16 bg-contain bg-no-repeat"
              style={{
                backgroundImage: `url(${corner})`,
                transform: "scale(-1, -1)",
              }}
            />

            <div
              className="absolute left-16 right-16 top-0 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
              }}
            />
            <div
              className="absolute bottom-0 left-16 right-16 h-16"
              style={{
                backgroundImage: `url(${edgeHorizontal})`,
                backgroundSize: "auto 64px",
                backgroundRepeat: "repeat-x",
                transform: "rotate(180deg)",
              }}
            />
            <div
              className="absolute bottom-16 left-0 top-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
              }}
            />
            <div
              className="absolute bottom-16 right-0 top-16 w-16"
              style={{
                backgroundImage: `url(${edgeVertical})`,
                backgroundSize: "64px auto",
                backgroundRepeat: "repeat-y",
                transform: "scaleX(-1)",
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
}

interface DynamicFrameLayoutProps {
  frames: Frame[];
  className?: string;
  showFrames?: boolean;
  hoverSize?: number;
  gapSize?: number;
}

export function DynamicFrameLayout({
  frames: initialFrames,
  className,
  showFrames = false,
  hoverSize = 6,
  gapSize = 4,
}: DynamicFrameLayoutProps) {
  const [frames] = useState<Frame[]>(initialFrames);
  const [hovered, setHovered] = useState<{ row: number; col: number } | null>(
    null,
  );

  const cellSize = 4;
  const cols =
    Math.floor(
      Math.max(...frames.map((f) => f.defaultPos.x / cellSize)),
    ) + 1;
  const rows =
    Math.floor(
      Math.max(...frames.map((f) => f.defaultPos.y / cellSize)),
    ) + 1;

  const buildSizes = (count: number, hoveredIndex: number | null) => {
    const total = count * cellSize;
    if (hoveredIndex === null)
      return Array.from({ length: count }, () => `${cellSize}fr`).join(" ");
    const nonHoveredSize = (total - hoverSize) / Math.max(count - 1, 1);
    return Array.from({ length: count }, (_, i) =>
      i === hoveredIndex ? `${hoverSize}fr` : `${nonHoveredSize}fr`,
    ).join(" ");
  };

  const getRowSizes = () => buildSizes(rows, hovered?.row ?? null);
  const getColSizes = () => buildSizes(cols, hovered?.col ?? null);

  const getTransformOrigin = (x: number, y: number) => {
    const colIdx = Math.floor(x / cellSize);
    const rowIdx = Math.floor(y / cellSize);
    const vertical =
      rowIdx === 0 ? "top" : rowIdx === rows - 1 ? "bottom" : "center";
    const horizontal =
      colIdx === 0 ? "left" : colIdx === cols - 1 ? "right" : "center";
    return `${vertical} ${horizontal}`;
  };

  return (
    <div
      className={`relative h-full w-full ${className ?? ""}`}
      style={{
        display: "grid",
        gridTemplateRows: getRowSizes(),
        gridTemplateColumns: getColSizes(),
        gap: `${gapSize}px`,
        transition:
          "grid-template-rows 0.4s ease, grid-template-columns 0.4s ease",
      }}
    >
      {frames.map((frame) => {
        const row = Math.floor(frame.defaultPos.y / 4);
        const col = Math.floor(frame.defaultPos.x / 4);
        const transformOrigin = getTransformOrigin(
          frame.defaultPos.x,
          frame.defaultPos.y,
        );

        return (
          <motion.div
            key={frame.id}
            className="relative overflow-hidden rounded-2xl"
            style={{
              transformOrigin,
              transition: "transform 0.4s ease",
            }}
            onMouseEnter={() => setHovered({ row, col })}
            onMouseLeave={() => setHovered(null)}
          >
            <FrameComponent
              video={frame.video}
              width="100%"
              height="100%"
              className="absolute inset-0"
              corner={frame.corner}
              edgeHorizontal={frame.edgeHorizontal}
              edgeVertical={frame.edgeVertical}
              mediaSize={frame.mediaSize}
              borderThickness={frame.borderThickness}
              borderSize={frame.borderSize}
              showFrame={showFrames}
              isHovered={hovered?.row === row && hovered?.col === col}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
