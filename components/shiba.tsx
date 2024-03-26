"use client";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas, extend, useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from 'three'; // Create a DRACOLoader instance and set the decoder path
import { DRACOLoader, GLTFLoader } from "three/examples/jsm/Addons.js";

const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderConfig({ type: 'js' });
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/v1/decoders/'); // Set the path to the Draco decoder.

// Extend useLoader to use GLTFLoader and DRACOLoader
extend({ GLTFLoader, DRACOLoader });

function MeshComponent() {
    const gltf = useGLTF('./dog.glb');
    const mesh = useRef<THREE.Mesh>(null!);
    const { camera, scene } = useThree();
    const frame = useRef(0);
    const initialCameraPosition = new THREE.Vector3(
        20 * Math.sin(0.2 * Math.PI),
        10,
        20 * Math.cos(0.2 * Math.PI)
    );

    useFrame(() => {
        frame.current = frame.current <= 100 ? frame.current + 1 : frame.current;

        if (frame.current <= 100) {
            const p = initialCameraPosition;
            const rotSpeed = -Math.sqrt(1 - Math.pow(frame.current / 120 - 1, 4)) * Math.PI * 20;

            camera.position.y = 10;
            camera.position.x = p.x * Math.cos(rotSpeed) + p.z * Math.sin(rotSpeed);
            camera.position.z = p.z * Math.cos(rotSpeed) - p.x * Math.sin(rotSpeed);
            camera.lookAt(new THREE.Vector3(-0.5, 1.2, 0));
        }
    });

    return (
        <mesh ref={mesh} position={[0, 1, 0]}>
            <primitive object={gltf.scene} />
        </mesh>
    );
}

export function Shiba() {
    return (
        <Canvas className='w-full h-full' camera={{ type: 'orthographic', zoom: 2, near: 0.01, far: 50000 }}>
            <OrbitControls autoRotate target={[-0.5, 1.2, 0]} />
            <ambientLight intensity={Math.PI} color={0xcccccc} />
            <MeshComponent />
        </Canvas>
    );
} 