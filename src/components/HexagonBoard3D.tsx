import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree, useLoader } from 'react-three-fiber';
import { TextureLoader, Vector2, Mesh, ShaderMaterial } from 'three';
import { RGBELoader } from 'three-stdlib';
import { 
    OrbitControls, 
    Html, 
    MeshDistortMaterial, 
    Text3D,
    MeshTransmissionMaterial
} from "@react-three/drei";

import { useAppSelector } from '../store';

interface HexagonProps {
    skip?: boolean;
    showAuth?: boolean;
    status?: boolean; 
}

interface CustomMaterial extends ShaderMaterial {
    metalness?: number;
    distort?: number;
}

interface TextProps {
    children?: React.ReactNode;
    config?: any; 
    font?: string;
    rotation?: [number, number, number];
    position?: [number, number, number];
}

interface Hexagon3DProps {
    showAuth?: boolean;
    skip?: boolean;
}

const Hexagon: React.FC<HexagonProps> = ({ status, showAuth, skip }) => {
    const image = useLoader(TextureLoader, "images/icons/prostitute2.png");
    const image2 = useLoader(TextureLoader, "images/icons/drugs2.png");
    const image3 = useLoader(TextureLoader, "images/icons/police2.png");
    const image4 = useLoader(TextureLoader, "images/icons/weapon2.png");
    const image5 = useLoader(TextureLoader, "images/icons/slaves2.png");
    const image6 = useLoader(TextureLoader, "images/icons/alcohol2.png");

    const [hoveredMesh, setHoveredMesh] = useState<any>(null);
    const [isDragging, setDragging] = useState<boolean>(false);
    const [initialX, setInitialX] = useState<number | null>(null);
    const [initialY, setInitialY] = useState<number | null>(null);

    const player = useAppSelector(state => state.auth);
  
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
        let mouseX = initialX !== null ? initialX : 0;
        let mouseY = initialY !== null ? initialY : 0;
        let mousePosition = new Vector2(mouseX, mouseY);

        raycaster.setFromCamera(mousePosition, camera);

        const intersects = raycaster.intersectObjects(scene.children, true);
        
        if (intersects.length > 0) {
            const firstIntersectedObject = intersects[0].object;
            
            setHoveredMesh(firstIntersectedObject);
        } else {
            setHoveredMesh(null);
        }

        if (groupRef.current && !status) {
            if (player.email || player.address) {
                if (isDragging) {
                    const deltaX = (initialX !== null) ? initialX : 0;
                    const deltaY = (initialY !== null) ? initialY : 0;
                
                    groupRef.current.position.x += deltaX / 10;
                    groupRef.current.position.y += deltaY / 10;
                }
            }

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

            if (showAuth) {
                let text = scene.children[3].children[0];

                if (text.position.y > 1.05 && groupRef.current.children[19].position.y > -30) {
                    text.position.y -= 0.1;
                }

                if (text.position.y < 1.5 && groupRef.current.children[19].position.y < -30) {
                    text.position.y += 0.05;

                    if (text.rotation.x < -0.2) text.rotation.x += 0.1;
                }

                if (text.position.y === 1.0000000000000187) {
                    if (groupRef.current.children[19].position.y > -30) {
                        groupRef.current.children[1].position.y -= 0.07;
                        groupRef.current.children[1].rotation.y -= 0.005;
                        groupRef.current.children[1].rotation.x += 0.02;

                        groupRef.current.children[8].position.y -= 0.02;
                        groupRef.current.children[8].rotation.y -= 0.01;
                        groupRef.current.children[8].rotation.z -= 0.05;

                        groupRef.current.children[13].position.y -= 0.04;
                        groupRef.current.children[13].rotation.y -= 0.01;
                        groupRef.current.children[13].rotation.z -= 0.05;

                        groupRef.current.children[18].position.y -= 0.07;
                        groupRef.current.children[18].rotation.y += 0.01;
                        groupRef.current.children[18].rotation.z -= 0.03;
                        
                        setTimeout(() => {
                            groupRef.current.children[10].position.y -= 0.1;
                            groupRef.current.children[10].rotation.y -= 0.04;
                            groupRef.current.children[10].rotation.z -= 0.05;

                            groupRef.current.children[15].position.y -= 0.05;
                            groupRef.current.children[15].rotation.y += 0.01;
                            groupRef.current.children[15].rotation.z -= 0.05;

                            groupRef.current.children[3].position.y -= 0.06;
                            groupRef.current.children[3].rotation.x -= 0.04;
                            groupRef.current.children[3].rotation.z -= 0.05;

                            groupRef.current.children[7].position.y -= 0.07;
                            groupRef.current.children[7].rotation.y -= 0.01;
                            groupRef.current.children[7].rotation.x += 0.05;

                            groupRef.current.children[11].position.y -= 0.06;
                            groupRef.current.children[11].rotation.y -= 0.03;
                            groupRef.current.children[11].rotation.z -= 0.05;
                        }, 300);

                        setTimeout(() => {
                            groupRef.current.children[2].position.y -= 0.2;
                            groupRef.current.children[2].rotation.y -= 0.01;
                            groupRef.current.children[2].rotation.z -= 0.05;

                            groupRef.current.children[9].position.y -= 0.1;
                            groupRef.current.children[9].rotation.y -= 0.05;
                            groupRef.current.children[9].rotation.x += 0.03;

                            groupRef.current.children[4].position.y -= 0.1;
                            groupRef.current.children[4].rotation.x += 0.02;
                            groupRef.current.children[4].rotation.z -= 0.05;

                            groupRef.current.children[14].position.y -= 0.1;
                            groupRef.current.children[14].rotation.y -= 0.05;
                            groupRef.current.children[14].rotation.x += 0.02;

                            groupRef.current.children[12].position.y -= 0.04;
                            groupRef.current.children[12].rotation.x += 0.02;
                            groupRef.current.children[12].rotation.z -= 0.05;

                            groupRef.current.children[6].position.y -= 0.08;
                            groupRef.current.children[6].rotation.y -= 0.015;
                            groupRef.current.children[6].rotation.z -= 0.05;
                        }, 700);

                        setTimeout(() => {
                            groupRef.current.children[17].position.y -= 0.07;
                            groupRef.current.children[17].rotation.y -= 0.03;
                            groupRef.current.children[17].rotation.z -= 0.05;

                            groupRef.current.children[5].position.y -= 0.1;
                            groupRef.current.children[5].rotation.y -= 0.05;
                            groupRef.current.children[5].rotation.z -= 0.05;

                            groupRef.current.children[16].position.y -= 0.05;
                            groupRef.current.children[16].rotation.y += 0.05;
                            groupRef.current.children[16].rotation.z += 0.05;

                            groupRef.current.children[19].position.y -= 0.07;
                            groupRef.current.children[19].rotation.y -= 0.01;
                            groupRef.current.children[19].rotation.z -= 0.05;
                        }, 1000);
                    }
                }
            }
        }
    });

    useEffect(() => {
        if (!skip) {
            const handleMouseMove = (event: any) => {
              const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
              const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        
              setInitialX(mouseX);
              setInitialY(mouseY);
            };
    
            const handleMouseDown = () => {
                setDragging(true);
            };
    
            const handleMouseUp = () => {
                setDragging(false);
            };
        
            // Add mouse move event listener
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mousedown', handleMouseDown);
            window.addEventListener('mouseup', handleMouseUp);
    
            // Clean up the event listener on component unmount
            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mousedown', handleMouseDown);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, []);

    useEffect(() => {
        if (!skip) {
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
        if (!skip) {
            if (groupRef.current) {
                if (camera.position.y === 1 && status) {
                    camera.position.y = 3;
                    camera.position.z = 2;
                    groupRef.current.position.y = -10;
                } else {
                    if (status) {
                        camera.position.y = 1;
                        camera.position.z = 3;
                        groupRef.current.position.y = -.8;
                    }
                }
            }
        }
    }, [status, groupRef]);

    useEffect(() => {
        if (!skip) {
            let children = scene.children[3].children;
    
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
            groupRef.current.children.forEach((hexagon: any) => {
                if (hexagon.material) {
                    hexagon.material.dispose();
                }

                if (hexagon.geometry) {
                    hexagon.geometry.dispose();
                }
            });
        };
    }, [hoveredMesh]);

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

const Text: React.FC<TextProps> = ({ config, font = '/assets/three_fonts/Torwelten_Mono.json', ...props }) => {
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

const HexagonBoard3D = ({ showAuth, skip }: Hexagon3DProps) => {
    const [status, setStatus] = useState<boolean>(false);

    const player = useAppSelector(state => state.auth);

    const handleCameraChange = (to: string) => {
        if (to === "down") setStatus(true);
        if (to === "up") setStatus(false);
    };

    return (
        <>
            <Canvas
                camera={{ position: [0, 1, 3], near: 0.1, far: 100 }}
                style={{ height: '100vh' }}
            >
                <Html>
                    {(player.email || player.address) && <div
                        onMouseDown={() => handleCameraChange('down')}
                        onMouseUp={() => handleCameraChange('up')}
                        style={{
                            width: '200px',
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'fixed',
                            top: '-300px',
                            left: '-450px',
                            cursor: 'pointer',
                            padding: '10px 5px',
                            border: '1px solid white'
                        }}
                    >Change camera</div>}
                </Html>
                <ambientLight intensity={0.5} />
                <pointLight position={[5, 5, 5]} intensity={2} />
                <Hexagon status={status} showAuth={showAuth} skip={skip} />
                {(player.email || player.address) && <OrbitControls 
                    enableRotate={false} 
                    enableZoom={true} 
                    enablePan={true}
                />}
            </Canvas>
        </>
    );
};

export default HexagonBoard3D;