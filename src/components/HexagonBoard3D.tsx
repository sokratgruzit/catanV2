import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree, useLoader } from 'react-three-fiber';
import { TextureLoader, Mesh, ShaderMaterial } from 'three';
import { RGBELoader } from 'three-stdlib';
import { 
    OrbitControls, 
    MeshDistortMaterial, 
    Text3D,
    MeshTransmissionMaterial
} from "@react-three/drei";

import { Hexagon3DProps, HexagonProps, HexagonTextProps } from '../types/interfaces';

interface CustomMaterial extends ShaderMaterial {
    metalness?: number;
    distort?: number;
}

const Hexagon: React.FC<HexagonProps> = ({ status, showAuth }) => {
    const image = useLoader(TextureLoader, "images/icons/prostitute2.png");
    const image2 = useLoader(TextureLoader, "images/icons/drugs2.png");
    const image3 = useLoader(TextureLoader, "images/icons/police2.png");
    const image4 = useLoader(TextureLoader, "images/icons/weapon2.png");
    const image5 = useLoader(TextureLoader, "images/icons/slaves2.png");
    const image6 = useLoader(TextureLoader, "images/icons/alcohol2.png");

    const [hoveredMesh, setHoveredMesh] = useState<any>(null);
    // const [isDragging, setDragging] = useState<boolean>(false);
    // const [initialX, setInitialX] = useState<number | null>(null);
    // const [initialY, setInitialY] = useState<number | null>(null);
  
    const groupRef = useRef<any>(null);
    const hexagonRef = useRef<any>(null);
    const hexagonRef2 = useRef<any>(null);
    const hexagonRef3 = useRef<any>(null);
    const hexagonRef4 = useRef<any>(null);
    const hexagonRef5 = useRef<any>(null);
    const hexagonRef6 = useRef<any>(null);
    const hexagonRef7 = useRef<any>(null);
    const hexagonRef8 = useRef<any>(null);
    const hexagonRef9 = useRef<any>(null);
    const hexagonRef10 = useRef<any>(null);
    const hexagonRef11 = useRef<any>(null);
    const hexagonRef12 = useRef<any>(null);
    const hexagonRef13 = useRef<any>(null);
    const hexagonRef14 = useRef<any>(null);
    const hexagonRef15 = useRef<any>(null);
    const hexagonRef16 = useRef<any>(null);
    const hexagonRef17 = useRef<any>(null);
    const hexagonRef18 = useRef<any>(null);
    const hexagonRef19 = useRef<any>(null);
    let { camera, scene } = useThree();
    
    useFrame(({ raycaster }) => {
        let step = 0.5;
        let stepDelta = 0;
        // let mouseX = initialX !== null ? initialX : 0;
        // let mouseY = initialY !== null ? initialY : 0;
        // let mousePosition = new Vector2(mouseX, mouseY);

        // raycaster.setFromCamera(mousePosition, camera);

        const intersects = raycaster.intersectObjects(scene.children, true);
        
        if (intersects.length > 0) {
            const firstIntersectedObject = intersects[0].object;
            
            setHoveredMesh(firstIntersectedObject);
        } else {
            setHoveredMesh(null);
        }

        if (groupRef.current && !status) {
            // if (isDragging) {
            //     const deltaX = (initialX !== null) ? initialX : 0;
            //     const deltaY = (initialY !== null) ? initialY : 0;
            
            //     groupRef.current.position.x += deltaX / 10;
            //     groupRef.current.position.y += deltaY / 10;
            // }

            groupRef.current.children.forEach((hexagon: any, index: number) => {
                if (hexagon.position.z < 0 && hexagon.name.includes('slot')) {
                    setTimeout(() => {
                        if (index > 3) stepDelta = 1;
                        if (index > 7) stepDelta = 2;
                        if (index > 12) stepDelta = 3;
                        if (index > 16) stepDelta = 4;

                        if (hexagon.position.z === -stepDelta * 1.5) {
                            hexagon.position.z = -stepDelta * 1.5;
                        } else {
                            hexagon.position.z += step;
                        }
                    }, index * 200);
                }
            });

            if (showAuth && scene?.children[2]?.children?.length > 0) {
                let text = scene.children[2].children[0];

                if (text.position.y > 1.05 && groupRef.current.children[19].position.y > -30) {
                    text.position.y -= 0.1;
                }

                if (text.position.y === 1.0000000000000187) {
                    setTimeout(() => {
                        if (text.rotation.x < -0.2) {
                            text.rotation.x += 0.02;
                        }
                    }, 1000)

                    let gr = groupRef?.current;
                    let c19 = gr?.children[19];

                    if (c19 && c19?.position?.y > -30) {
                        let c1 = gr?.children[1];
                        let c8 = gr?.children[8];
                        let c13 = gr?.children[13];
                        let c18 = gr?.children[18];

                        if (c1 && c8 && c13 && c18) {
                            c1.position.y -= 0.07;
                            c1.rotation.y -= 0.005;
                            c1.rotation.x += 0.02;
    
                            c8.position.y -= 0.02;
                            c8.rotation.y -= 0.01;
                            c8.rotation.z -= 0.05;
    
                            c13.position.y -= 0.04;
                            c13.rotation.y -= 0.01;
                            c13.rotation.z -= 0.05;
    
                            c18.position.y -= 0.07;
                            c18.rotation.y += 0.01;
                            c18.rotation.z -= 0.03;
                        }
                        
                        setTimeout(() => {
                            let c10 = gr?.children[10];
                            let c15 = gr?.children[15];
                            let c3 = gr?.children[3];
                            let c7 = gr?.children[7];
                            let c11 = gr?.children[11];

                            if (c10 && c15 && c3 && c7 && c11) {
                                c10.position.y -= 0.1;
                                c10.rotation.y -= 0.04;
                                c10.rotation.z -= 0.05;
    
                                c15.position.y -= 0.05;
                                c15.rotation.y += 0.01;
                                c15.rotation.z -= 0.05;
    
                                c3.position.y -= 0.06;
                                c3.rotation.x -= 0.04;
                                c3.rotation.z -= 0.05;
    
                                c7.position.y -= 0.07;
                                c7.rotation.y -= 0.01;
                                c7.rotation.x += 0.05;
    
                                c11.position.y -= 0.06;
                                c11.rotation.y -= 0.03;
                                c11.rotation.z -= 0.05;
                            }
                        }, 300);

                        setTimeout(() => {
                            let c2 = gr?.children[2];
                            let c9 = gr?.children[9];
                            let c4 = gr?.children[4];
                            let c14 = gr?.children[14];
                            let c12 = gr?.children[12];
                            let c6 = gr?.children[6];

                            if (c2 && c9 && c4 && c14 && c12 && c6) {
                                c2.position.y -= 0.2;
                                c2.rotation.y -= 0.01;
                                c2.rotation.z -= 0.05;
    
                                c9.position.y -= 0.1;
                                c9.rotation.y -= 0.05;
                                c9.rotation.x += 0.03;
    
                                c4.position.y -= 0.1;
                                c4.rotation.x += 0.02;
                                c4.rotation.z -= 0.05;
    
                                c14.position.y -= 0.1;
                                c14.rotation.y -= 0.05;
                                c14.rotation.x += 0.02;
    
                                c12.position.y -= 0.04;
                                c12.rotation.x += 0.02;
                                c12.rotation.z -= 0.05;
    
                                c6.position.y -= 0.08;
                                c6.rotation.y -= 0.015;
                                c6.rotation.z -= 0.05;
                            }
                        }, 700);

                        setTimeout(() => {
                            let c17 = gr?.children[17];
                            let c5 = gr?.children[5];
                            let c16 = gr?.children[16];

                            if (c17 && c5 && c16) {
                                c17.position.y -= 0.07;
                                c17.rotation.y -= 0.03;
                                c17.rotation.z -= 0.05;
    
                                c5.position.y -= 0.1;
                                c5.rotation.y -= 0.05;
                                c5.rotation.z -= 0.05;
    
                                c16.position.y -= 0.05;
                                c16.rotation.y += 0.05;
                                c16.rotation.z += 0.05;
    
                                c19.position.y -= 0.07;
                                c19.rotation.y -= 0.01;
                                c19.rotation.z -= 0.05;
                            }
                        }, 1000);
                    }
                }
            }
        }
    });

    // useEffect(() => {
    //     const handleMouseMove = (event: any) => {
    //         const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
    //         const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    
    //         setInitialX(mouseX);
    //         setInitialY(mouseY);
    //     };

    //     const handleMouseDown = () => {
    //         setDragging(true);
    //     };

    //     const handleMouseUp = () => {
    //         setDragging(false);
    //     };
    
    //     // Add mouse move event listener
    //     window.addEventListener('mousemove', handleMouseMove);
    //     window.addEventListener('mousedown', handleMouseDown);
    //     window.addEventListener('mouseup', handleMouseUp);

    //     // Clean up the event listener on component unmount
    //     return () => {
    //         window.removeEventListener('mousemove', handleMouseMove);
    //         window.removeEventListener('mousedown', handleMouseDown);
    //         window.removeEventListener('mouseup', handleMouseUp);
    //     };
    // }, []);

    useEffect(() => {
        if (!showAuth) {
            if (hexagonRef.current) {
                hexagonRef.current.rotation.x = 0.5;
            }
        
            if (hexagonRef2.current) {
                hexagonRef2.current.rotation.x = 0.5;
            }
    
            if (hexagonRef3.current) {
                hexagonRef3.current.rotation.x = 0.5;
            }
    
            if (hexagonRef4.current) {
                hexagonRef4.current.rotation.x = 0.5;
            }
    
            if (hexagonRef5.current) {
                hexagonRef5.current.rotation.x = 0.5;
            }
    
            if (hexagonRef6.current) {
                hexagonRef6.current.rotation.x = 0.5;
            }
    
            if (hexagonRef7.current) {
                hexagonRef7.current.rotation.x = 0.5;
            }
    
            if (hexagonRef8.current) {
                hexagonRef8.current.rotation.x = 0.5;
            }
    
            if (hexagonRef9.current) {
                hexagonRef9.current.rotation.x = 0.5;
            }
    
            if (hexagonRef10.current) {
                hexagonRef10.current.rotation.x = 0.5;
            }
    
            if (hexagonRef11.current) {
                hexagonRef11.current.rotation.x = 0.5;
            }
    
            if (hexagonRef12.current) {
                hexagonRef12.current.rotation.x = 0.5;
            }
    
            if (hexagonRef13.current) {
                hexagonRef13.current.rotation.x = 0.5;
            }
    
            if (hexagonRef14.current) {
                hexagonRef14.current.rotation.x = 0.5;
            }
    
            if (hexagonRef15.current) {
                hexagonRef15.current.rotation.x = 0.5;
            }
    
            if (hexagonRef16.current) {
                hexagonRef16.current.rotation.x = 0.5;
            }
    
            if (hexagonRef17.current) {
                hexagonRef17.current.rotation.x = 0.5;
            }
    
            if (hexagonRef18.current) {
                hexagonRef18.current.rotation.x = 0.5;
            }
    
            if (hexagonRef19.current) {
                hexagonRef19.current.rotation.x = 0.5;
            }
        }
    }, []);

    useEffect(() => {
        if (!showAuth) {
            if (groupRef.current) {
                if (status) {
                    camera.position.y = 3;
                    camera.position.z = 2;
                    groupRef.current.position.y = -10;
                } else {
                    camera.position.y = 1;
                    camera.position.z = 3;
                    groupRef.current.position.y = -.8;
                }
            }
        }
    }, [status, groupRef, showAuth]);

    useEffect(() => {
        if (!showAuth && scene?.children[2]?.children?.length > 0) {
            let children = scene?.children[2]?.children;
    
            for (let i = 0; i < children.length; i++) {
                const child = children[i] as Mesh;
                const customMaterial = child.material as CustomMaterial; 
    
                if (customMaterial) {
                    if ('distort' in customMaterial && 'metalness' in customMaterial) {
                        customMaterial.metalness = 0;
                        customMaterial.distort = 0;
                    }
                }
            }
    
            if (hoveredMesh) {
                if (hoveredMesh instanceof Mesh) {
                    hoveredMesh.material.metalness = 4;
                    hoveredMesh.material.distort = 0.3;
                } 
            }
        }

        return () => {
            groupRef?.current?.children?.forEach((hexagon: any) => {
                if (hexagon.material) {
                    hexagon.material.dispose();
                }

                if (hexagon.geometry) {
                    hexagon.geometry.dispose();
                }
            });
        };
    }, [hoveredMesh, scene?.children[2]?.children]);

    const config = {
        text: 'Dirty Catan',
        backside: true,
        backsideThickness: 0.3,
        samples: 16,
        resolution: 1024,
        transmission: 1,
        clearcoat: 0,
        clearcoatRoughness: 0.0,
        thickness: 0.3,
        chromaticAberration: 5,
        anisotropy: 0.3,
        roughness: 0.2,
        distortion: 1,
        distortionScale: 0.1,
        temporalDistortion: 0.1,
        ior: 3,
        color: '#ff9cf5',
        gColor: '#ff7eb3',
        shadow: '#750d57',
        autoRotate: false
    };
    
    return (
        <group
            position={[0, -.8, 0]}
            ref={groupRef}
        >
            <Text config={config} rotation={[-Math.PI / 2.75, 0, 0]} position={[-4.75, 10/*1.05*/, -2]} />
            <mesh name='slot1' ref={hexagonRef} position={[0, 0, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image} distort={0} speed={2} />
            </mesh>
            <mesh name='slot2' ref={hexagonRef2} position={[1.9, 0, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image2} distort={0} speed={2} />
            </mesh>
            <mesh name='slot3' ref={hexagonRef3} position={[-1.9, 0, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image3} distort={0} speed={2} />
            </mesh>
            <mesh name='slot4' ref={hexagonRef4} position={[-2.85, .8, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image4} distort={0} speed={2} />
            </mesh>
            <mesh name='slot5' ref={hexagonRef5} position={[-.95, .8, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image5} distort={0} speed={2} />
            </mesh>
            <mesh name='slot6' ref={hexagonRef6} position={[.95, .8, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image4} distort={0} speed={2} />
            </mesh>
            <mesh name='slot7' ref={hexagonRef7} position={[2.85, .8, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image2} distort={0} speed={2} />
            </mesh>
            <mesh name='slot8' ref={hexagonRef8} position={[3.8, 1.6, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image} distort={0} speed={2} />
            </mesh>
            <mesh name='slot9' ref={hexagonRef9} position={[1.9, 1.6, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image5} distort={0} speed={2} />
            </mesh>
            <mesh name='slot10' ref={hexagonRef10} position={[0, 1.6, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image4} distort={0} speed={2} />
            </mesh>
            <mesh name='slot11' ref={hexagonRef11} position={[-1.9, 1.6, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image6} distort={0} speed={2} />
            </mesh>
            <mesh name='slot12' ref={hexagonRef12} position={[-3.8, 1.6, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image2} distort={0} speed={2} />
            </mesh>
            <mesh name='slot13' ref={hexagonRef13} position={[-2.85, 2.4, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image} distort={0} speed={2} />
            </mesh>
            <mesh name='slot14' ref={hexagonRef14} position={[-.95, 2.4, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image5} distort={0} speed={2} />
            </mesh>
            <mesh name='slot15' ref={hexagonRef15} position={[.95, 2.4, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image4} distort={0} speed={2} />
            </mesh>
            <mesh name='slot16' ref={hexagonRef16} position={[2.85, 2.4, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image} distort={0} speed={2} />
            </mesh>
            <mesh name='slot17' ref={hexagonRef17} position={[1.9, 3.2, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image6} distort={0} speed={2} />
            </mesh>
            <mesh name='slot18' ref={hexagonRef18} position={[0, 3.2, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image6} distort={0} speed={2} />
            </mesh>
            <mesh name='slot19' ref={hexagonRef19} position={[-1.9, 3.2, -50]} castShadow>
                <cylinderGeometry attach="geometry" args={[1, 1, .01, 6]} />
                <MeshDistortMaterial map={image2} distort={0} speed={2} />
            </mesh>
        </group>
    );
};

const Text: React.FC<HexagonTextProps> = ({ config, font = '/assets/three_fonts/Torwelten_Mono.json', ...props }) => {
    const texture = useLoader(RGBELoader, 'https://dl.polyhaven.org/file/ph-assets/HDRIs/hdr/1k/aerodynamics_workshop_1k.hdr');

    return (
        <Text3D
            castShadow
            bevelEnabled
            font={font}
            scale={.45}
            letterSpacing={-0.03}
            height={0.25}
            bevelSize={0.01}
            bevelSegments={10}
            curveSegments={128}
            bevelThickness={0.01}
            {...props}
        >
            {config.text}
            <MeshTransmissionMaterial {...config} background={texture} />
        </Text3D>
    );
};

const HexagonBoard3D = ({ showAuth, skip, status }: Hexagon3DProps) => {
    return (
        <>
            <Canvas
                camera={{ position: [0, 1, 3], near: 0.1, far: 100 }}
                style={{ height: '100vh' }}
            >
                <ambientLight intensity={2} />
                <pointLight position={[5, 5, 5]} intensity={5} />
                <Hexagon status={status} showAuth={showAuth} skip={skip} />
                <OrbitControls 
                    enableRotate={false} 
                    enableZoom={true} 
                    enablePan={true}
                />
            </Canvas>
        </>
    );
};

export default HexagonBoard3D;