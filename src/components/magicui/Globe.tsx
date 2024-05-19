"use client";

import {cn} from "@/lib/utils";
import createGlobe, {COBEOptions} from "cobe";
import {useCallback, useEffect, useRef} from "react";
import {useSpring} from "react-spring";

const GLOBE_CONFIG: COBEOptions = {
    width: 800,
    height: 800,
    onRender: () => {
    },
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0,
    diffuse: 0.4,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1],
    markerColor: [251 / 255, 100 / 255, 21 / 255],
    glowColor: [1, 1, 1],
    markers: [
        {location: [47.82414513119753, 12.092263260807691], size: 0.1}, // Rosenheim
        {location: [48.20400139411734, 16.342720082844572], size: 0.08}, // Wien
        {location: [38.89712455956906, -77.05613789510257], size: 0.1},  // Washington
        {location: [37.78823049034404, -122.46660152529051], size: 0.05},  // San Francisco
        {location: [-33.862856030265014, 151.22224119362332], size: 0.08},  // Sydney
    ],
};

export default function Globe({
                                  className,
                                  config = GLOBE_CONFIG,
                              }: {
    className?: string;
    config?: COBEOptions;
}) {
    const phi = useRef(0);
    const width = useRef(0);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const pointerInteracting = useRef(null);
    const pointerInteractionMovement = useRef(0);
    const [{r}, api] = useSpring(() => ({
        r: 0,
        config: {
            mass: 1,
            tension: 280,
            friction: 40,
            precision: 0.001,
        },
    }));

    const updatePointerInteraction = (value: any) => {
        pointerInteracting.current = value;
        canvasRef.current!.style.cursor = value ? "grabbing" : "grab";
    };

    const updateMovement = (clientX: any) => {
        if (pointerInteracting.current !== null) {
            const delta = clientX - pointerInteracting.current;
            pointerInteractionMovement.current = delta;
            api.start({r: delta / 200});
        }
    };

    const onRender = useCallback(
        (state: Record<string, any>) => {
            if (!pointerInteracting.current) phi.current += 0.005;
            state.phi = phi.current + r.get();
            state.width = width.current * 2;
            state.height = width.current * 2;
        },
        [r],
    );

    const onResize = useCallback(() => {
        if (canvasRef.current) {
            width.current = canvasRef.current.offsetWidth;
        }
    }, [canvasRef]);

    useEffect(() => {
        window.addEventListener("resize", onResize);
        onResize();

        const globe = createGlobe(canvasRef.current!, {
            ...config,
            width: width.current * 2,
            height: width.current * 2,
            onRender,
        });

        setTimeout(() => (canvasRef.current!.style.opacity = "1"));
        return () => globe.destroy();
    }, [config, onRender, onResize]);

    return (
        <div
            className={cn(
                "absolute inset-0 mx-auto aspect-[1/1] w-full max-w-[600px]",
                className,
            )}
        >
            <canvas
                className={cn(
                    "h-full w-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]",
                )}
                ref={canvasRef}
                onPointerDown={(e) =>
                    updatePointerInteraction(
                        e.clientX - pointerInteractionMovement.current,
                    )
                }
                onPointerUp={() => updatePointerInteraction(null)}
                onPointerOut={() => updatePointerInteraction(null)}
                onMouseMove={(e) => updateMovement(e.clientX)}
                onTouchMove={(e) =>
                    e.touches[0] && updateMovement(e.touches[0].clientX)
                }
            />
        </div>
    );
}
