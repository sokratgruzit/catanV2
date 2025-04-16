/// <reference types="vite/client" />

declare namespace JSX {
    interface IntrinsicElements {
        waveShaderMaterial: ReactThreeFiber.MaterialNode; // Add this line
    }
}

declare module '@react-three/postprocessing' {
    export const EffectComposer: any;
    export const Bloom: any;
    export const Noise: any;
    export const DepthOfField: any;
    export const Vignette: any;
}